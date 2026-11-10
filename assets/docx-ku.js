/* DocxKu — mengubah HTML dokumen (soal, kunci, kisi-kisi) menjadi file .docx asli di peramban.
   Pemakaian: DocxKu.unduh('nama-file', [{html, css, landscape}], ...) → Promise.
   HTML dirender sementara di luar layar, lalu gaya terhitung (tebal, rata tengah, garis tabel,
   ukuran huruf) dipakai untuk menyusun XML Word. Butuh JSZip (dimuat otomatis dari cdnjs). */
(function () {
  const JSZIP = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
  const AR = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/;
  const xe = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const muatZip = () => window.JSZip ? Promise.resolve(window.JSZip) : new Promise((ok, no) => {
    const s = document.createElement('script'); s.src = JSZIP; s.onload = () => ok(window.JSZip); s.onerror = () => no(new Error('JSZip gagal dimuat')); document.head.appendChild(s);
  });
  const TW = px => Math.round(px * 15);            // px → twip (1px = 0.75pt = 15 twip)
  const EMU = px => Math.round(px * 9525);

  function buat(sections, gambar) {
    let idGb = 0, idDr = 1;
    const sz = cs => Math.max(8, Math.round(parseFloat(cs.fontSize) * 0.75 * 2)); // half-points
    function runProps(cs, ar) {
      let p = '';
      const fw = parseInt(cs.fontWeight, 10) >= 600, it = cs.fontStyle === 'italic', ul = (cs.textDecorationLine || cs.textDecoration || '').includes('underline');
      if (ar) p += '<w:rFonts w:ascii="Traditional Arabic" w:hAnsi="Traditional Arabic" w:cs="Traditional Arabic"/>';
      if (fw) p += '<w:b/><w:bCs/>'; if (it) p += '<w:i/><w:iCs/>'; if (ul) p += '<w:u w:val="single"/>';
      const s = ar ? Math.max(sz(cs), 32) : sz(cs);
      p += `<w:sz w:val="${s}"/><w:szCs w:val="${s}"/>`;
      if (ar) p += '<w:rtl/>';
      return p ? `<w:rPr>${p}</w:rPr>` : '';
    }
    const ARSEG = /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF][\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s.,]*[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]|[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF])/;
    function teksRun(t, cs) {
      // pecah teks menjadi bagian Arab dan Latin agar arah tulisan benar
      return t.split(ARSEG).map((seg, i) => seg ? `<w:r>${runProps(cs, i % 2 === 1)}<w:t xml:space="preserve">${xe(seg)}</w:t></w:r>` : '').join('');
    }
    async function imgRun(img) {
      const w = img.getBoundingClientRect().width || img.naturalWidth || 300, h = img.getBoundingClientRect().height || img.naturalHeight || 200;
      let buf, ext = 'png';
      try { const r = await fetch(img.src); buf = await r.arrayBuffer(); const ct = r.headers.get('content-type') || ''; ext = ct.includes('jpeg') || /\.jpe?g/i.test(img.src) ? 'jpeg' : ct.includes('svg') ? 'svg' : 'png'; } catch (e) { return ''; }
      if (ext === 'svg') { // Word lama tidak mendukung SVG: ubah ke PNG lewat kanvas
        try { const c = document.createElement('canvas'); c.width = img.naturalWidth * 2 || w * 2; c.height = img.naturalHeight * 2 || h * 2; c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); buf = await (await fetch(c.toDataURL('image/png'))).arrayBuffer(); ext = 'png'; } catch (e) { return ''; }
      }
      const n = ++idGb, rid = 'rIdImg' + n, name = 'gambar' + n + '.' + (ext === 'jpeg' ? 'jpg' : ext);
      gambar.push({ rid, name, buf, ext }); const cx = EMU(w), cy = EMU(h), d = idDr++;
      return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${d}" name="Gambar ${d}"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${d}" name="${name}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`;
    }
    const isBlock = el => { const d = getComputedStyle(el).display; return el.tagName === 'TABLE' || el.tagName === 'IMG' && false || ['block', 'list-item', 'table', 'flex', 'grid'].includes(d) || ['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'OL', 'UL', 'LI', 'TABLE'].includes(el.tagName); };
    async function inline(node, acc) {
      for (const ch of node.childNodes) {
        if (ch.nodeType === 3) { const t = ch.textContent.replace(/\s+/g, ' '); if (t.trim() || acc.length) acc.push(teksRun(t, getComputedStyle(ch.parentElement))); }
        else if (ch.nodeType === 1) {
          if (ch.tagName === 'BR') acc.push('<w:r><w:br/></w:r>');
          else if (ch.tagName === 'IMG') acc.push(await imgRun(ch));
          else if (!isBlock(ch)) await inline(ch, acc);
        }
      }
      return acc;
    }
    function pPr(el, extra = {}) {
      const cs = getComputedStyle(el); let p = '';
      const al = cs.textAlign; if (al === 'center') p += '<w:jc w:val="center"/>'; else if (al === 'right' || al === 'end') p += '<w:jc w:val="right"/>';
      const mt = TW(parseFloat(cs.marginTop) || 0), mb = TW(parseFloat(cs.marginBottom) || 0);
      p += `<w:spacing w:before="${extra.before ?? Math.min(mt, 400)}" w:after="${extra.after ?? Math.min(mb, 400)}" w:line="${extra.line || 264}" w:lineRule="auto"/>`;
      if (extra.left || extra.hanging) p += `<w:ind w:left="${extra.left || 0}"${extra.hanging ? ` w:hanging="${extra.hanging}"` : ''}/>`;
      if (extra.pb) p += '<w:pageBreakBefore/>';
      if (extra.keep) p += '<w:keepNext/>';
      const bt = parseFloat(cs.borderTopWidth), bb = parseFloat(cs.borderBottomWidth);
      if (el.tagName !== 'TD' && el.tagName !== 'TH' && (bt > 0 || bb > 0)) {
        const b = s => `<w:${s} w:val="single" w:sz="8" w:space="2" w:color="000000"/>`;
        p += '<w:pBdr>' + (bt > 0 ? b('top') + b('left') : '') + (bb > 0 ? b('bottom') : '') + (bt > 0 ? b('right') : '') + '</w:pBdr>';
      }
      return p;
    }
    const para = (runs, props) => `<w:p><w:pPr>${props}</w:pPr>${runs}</w:p>`;
    function label(li) {
      const ol = li.parentElement; if (!ol || ol.tagName !== 'OL') return ol && ol.tagName === 'UL' ? '•' : '';
      const idx = [...ol.children].filter(x => x.tagName === 'LI').indexOf(li) + (parseInt(ol.getAttribute('start') || '1', 10));
      const tp = ol.getAttribute('type'); return (tp === 'A' ? String.fromCharCode(64 + idx) : tp === 'a' ? String.fromCharCode(96 + idx) : idx) + '.';
    }
    async function blocks(node, ctx = { indent: 0 }) {
      const out = [];
      let inl = [];
      const flushInl = async () => { if (inl.length) { const tmp = document.createElement('span'); /* inline siblings */ const runs = []; for (const n of inl) { if (n.nodeType === 3) { const t = n.textContent.replace(/\s+/g, ' '); if (t.trim()) runs.push(teksRun(t, getComputedStyle(n.parentElement))); } else if (n.tagName === 'BR') runs.push('<w:r><w:br/></w:r>'); else if (n.tagName === 'IMG') runs.push(await imgRun(n)); else runs.push(...await inline(n, [])); } if (runs.join('').trim()) out.push(para(runs.join(''), node instanceof Element ? pPr(node, { left: ctx.indent, before: 0, after: 60 }) : `<w:ind w:left="${ctx.indent}"/>`)); inl = []; } };
      for (const ch of node.childNodes) {
        if (ch.nodeType === 1 && isBlock(ch)) {
          await flushInl();
          const tag = ch.tagName, cs = getComputedStyle(ch);
          if (cs.display === 'none') continue;
          const pb = cs.pageBreakBefore === 'always' || cs.breakBefore === 'page';
          if (pb && !ch.textContent.trim() && !ch.querySelector('img,table')) { out.push('<w:p><w:r><w:br w:type="page"/></w:r></w:p>'); continue; }
          if (tag === 'TABLE') { out.push(await tabel(ch, ctx)); out.push('<w:p><w:pPr><w:spacing w:before="0" w:after="60"/></w:pPr></w:p>'); continue; }
          if (tag === 'OL' || tag === 'UL') { out.push(...await blocks(ch, ctx)); continue; }
          if (tag === 'LI') {
            const lab = label(ch); const nest = ctx.indent + 420;
            // isi inline pertama bersama label, blok di dalamnya menyusul dengan indentasi
            const kids = [...ch.childNodes]; const first = [], rest = [];
            let blk = false; for (const k of kids) { if (!blk && !(k.nodeType === 1 && isBlock(k))) first.push(k); else { blk = true; rest.push(k); } }
            const runs = [`<w:r>${runProps(cs, false)}<w:t xml:space="preserve">${xe(lab)}</w:t></w:r><w:r><w:tab/></w:r>`];
            for (const n of first) { if (n.nodeType === 3) { const t = n.textContent.replace(/\s+/g, ' '); if (t.trim()) runs.push(teksRun(t, getComputedStyle(n.parentElement))); } else if (n.tagName === 'BR') runs.push('<w:r><w:br/></w:r>'); else if (n.tagName === 'IMG') runs.push(await imgRun(n)); else runs.push(...await inline(n, [])); }
            out.push(para(runs.join(''), pPr(ch, { left: nest, hanging: 420, before: 40, after: 40 }) + `<w:tabs><w:tab w:val="left" w:pos="${nest}"/></w:tabs>`));
            const wrap = document.createElement('div'); // proses sisa blok dengan indentasi
            for (const r of rest) { if (r.nodeType === 1 && isBlock(r)) out.push(...await blocks({ childNodes: [r], nodeType: 1, tagName: 'DIV' }, { indent: nest })); else if (r.nodeType === 1 || r.textContent.trim()) { const rr = await inline({ childNodes: [r] }, []); if (rr.join('').trim()) out.push(para(rr.join(''), `<w:ind w:left="${nest}"/>`)); } }
            continue;
          }
          // blok biasa: bila berisi blok lain, telusuri; bila tidak, jadikan satu paragraf
          const adaBlok = [...ch.children].some(isBlock);
          if (adaBlok) {
            const sub = await blocks(ch, ctx);
            if (pb && sub.length) sub[0] = sub[0].replace('<w:pPr>', '<w:pPr><w:pageBreakBefore/>');
            out.push(...sub);
          } else {
            const runs = (await inline(ch, [])).join('');
            out.push(para(runs, pPr(ch, { left: ctx.indent, pb, keep: /^H/.test(tag) })));
          }
        } else if (ch.nodeType === 1 || (ch.nodeType === 3 && ch.textContent.trim())) inl.push(ch);
      }
      await flushInl();
      return out;
    }
    async function tabel(t, ctx) {
      const rows = [...t.rows]; if (!rows.length) return '';
      const ber = [...t.querySelectorAll('td,th')].some(c => parseFloat(getComputedStyle(c).borderTopWidth) > 0);
      const lebar = t.getBoundingClientRect().width || 600;
      const ncol = Math.max(...rows.map(r => [...r.cells].reduce((a, c) => a + (c.colSpan || 1), 0)));
      const kol = [...rows[0].cells].map(c => c.getBoundingClientRect().width);
      const b = v => `<w:${v} w:val="${ber ? 'single' : 'nil'}" w:sz="6" w:space="0" w:color="000000"/>`;
      let x = `<w:tbl><w:tblPr><w:tblW w:w="${TW(lebar)}" w:type="dxa"/>${ctx.indent ? `<w:tblInd w:w="${ctx.indent}" w:type="dxa"/>` : ''}<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(b).join('')}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="70" w:type="dxa"/><w:right w:w="70" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>`;
      x += (kol.length === ncol ? kol : Array(ncol).fill(lebar / ncol)).map(w => `<w:gridCol w:w="${TW(w)}"/>`).join('') + '</w:tblGrid>';
      for (const r of rows) {
        x += '<w:tr><w:trPr><w:cantSplit/></w:trPr>';
        for (const c of r.cells) {
          const cs = getComputedStyle(c); const bg = cs.backgroundColor; const m = bg.match(/\d+/g);
          const shade = m && !(m[3] === '0') && !(m[0] === '255' && m[1] === '255' && m[2] === '255') ? `<w:shd w:val="clear" w:color="auto" w:fill="${(+m[0]).toString(16).padStart(2, '0')}${(+m[1]).toString(16).padStart(2, '0')}${(+m[2]).toString(16).padStart(2, '0')}"/>` : '';
          let isi = (await blocks(c, { indent: 0 })).join('');
          if (!isi.includes('<w:p>') && !isi.includes('<w:p ')) isi += '<w:p/>';
          if (!/<\/w:p>\s*$|<w:p\/>\s*$/.test(isi)) isi += '<w:p/>';
          x += `<w:tc><w:tcPr><w:tcW w:w="${TW(c.getBoundingClientRect().width)}" w:type="dxa"/>${c.colSpan > 1 ? `<w:gridSpan w:val="${c.colSpan}"/>` : ''}${shade}<w:vAlign w:val="${cs.verticalAlign === 'middle' ? 'center' : 'top'}"/></w:tcPr>${isi}</w:tc>`;
        }
        x += '</w:tr>';
      }
      return x + '</w:tbl>';
    }
    return { blocks };
  }

  async function unduh(nama, sections) {
    const JSZip = await muatZip();
    const gambar = [];
    const host = document.createElement('div');
    host.style.cssText = 'position:absolute;left:-20000px;top:0;visibility:hidden;';
    document.body.appendChild(host);
    const { blocks } = buat(sections, gambar);
    let body = '';
    try {
      for (let i = 0; i < sections.length; i++) {
        const s = sections[i], land = !!s.landscape;
        const W = land ? 16838 : 11906, H = land ? 11906 : 16838, M = s.margin || (land ? 720 : 1000);
        const box = document.createElement('div');
        box.style.width = Math.round((W - 2 * M) / 15) + 'px';
        box.innerHTML = (s.css ? `<style>${s.css}</style>` : '') + s.html;
        host.appendChild(box);
        await Promise.all([...box.querySelectorAll('img')].map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })));
        const isi = (await blocks(box)).join('');
        const sect = `<w:sectPr><w:pgSz w:w="${W}" w:h="${H}"${land ? ' w:orient="landscape"' : ''}/><w:pgMar w:top="${M}" w:right="${M}" w:bottom="${M}" w:left="${M}" w:header="400" w:footer="400" w:gutter="0"/></w:sectPr>`;
        body += isi + (i < sections.length - 1 ? `<w:p><w:pPr>${sect}</w:pPr></w:p>` : sect);
        host.removeChild(box);
      }
    } finally { host.remove(); }
    const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
    const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ${NS}><w:body>${body}</w:body></w:document>`;
    const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Traditional Arabic"/><w:sz w:val="24"/><w:szCs w:val="32"/><w:lang w:val="id-ID" w:bidi="ar-SA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="60" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:tblPr><w:tblCellMar><w:left w:w="70" w:type="dxa"/><w:right w:w="70" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>`;
    const exts = [...new Set(gambar.map(g => g.ext))];
    const ct = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${exts.map(e => `<Default Extension="${e === 'jpeg' ? 'jpg' : e}" ContentType="image/${e}"/>`).join('')}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`;
    const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`;
    const drels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdSt" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>${gambar.map(g => `<Relationship Id="${g.rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${g.name}"/>`).join('')}</Relationships>`;
    const now = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
    const core = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xe(nama)}</dc:title><dc:creator>rudihartono.net</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created></cp:coreProperties>`;
    const zip = new JSZip();
    zip.file('[Content_Types].xml', ct); zip.file('_rels/.rels', rels); zip.file('word/document.xml', doc); zip.file('word/styles.xml', styles); zip.file('word/_rels/document.xml.rels', drels); zip.file('docProps/core.xml', core);
    for (const g of gambar) zip.file('word/media/' + g.name, g.buf);
    const blob = await zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nama.replace(/\.docx?$/i, '') + '.docx';
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    return blob;
  }
  window.DocxKu = { unduh };
})();
