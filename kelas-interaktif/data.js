/* Kelas Interaktif SD — materi untuk papan interaktif digital.
   Jenis slide: judul, poin (muncul satu per satu), kartu (balik), kelompok (sortir), kuis (cek pemahaman),
   pecahan (lingkaran interaktif), nilaitempat (tabel nilai tempat), gambar (ilustrasi SVG bawaan). */
window.KELAS_INTERAKTIF = {
mapel: {
  bindo: {nama:'Bahasa Indonesia', ikon:'📖', warna:'#c23b4a', muda:'#fbe9eb'},
  mtk:   {nama:'Matematika',       ikon:'🔢', warna:'#2f6fd6', muda:'#e6effc'},
  ipas:  {nama:'IPAS',             ikon:'🔬', warna:'#13795b', muda:'#e3f3ec'},
  ppkn:  {nama:'Pendidikan Pancasila', ikon:'🦅', warna:'#b5851f', muda:'#f6ecd2'}
},
materi: [
/* ================= IPAS ================= */
{mapel:'ipas', kelas:4, semester:1, id:'ipas4-tumbuhan', judul:'Tumbuhan, Sumber Kehidupan di Bumi', slide:[
 {t:'judul', judul:'Tumbuhan, Sumber Kehidupan di Bumi', sub:'Hari ini kita mengenal bagian tumbuhan, fungsinya, dan cara tumbuhan membuat makanan.'},
 {t:'gambar', judul:'Bagian-bagian tumbuhan', svg:'tumbuhan', ket:'Sentuh setiap label untuk melihat fungsinya.'},
 {t:'kartu', judul:'Apa fungsinya?', kartu:[['🌱 Akar','Menyerap air dan mineral dari tanah, serta menopang tumbuhan agar tidak roboh.'],['🪵 Batang','Mengangkut air dan makanan ke seluruh tubuh tumbuhan.'],['🍃 Daun','Tempat membuat makanan (fotosintesis) dan penguapan.'],['🌸 Bunga','Alat perkembangbiakan; tempat terjadinya penyerbukan.']]},
 {t:'poin', judul:'Fotosintesis: tumbuhan memasak makanannya sendiri', poin:['☀️ Cahaya matahari memberi energi.','💧 Air diserap oleh akar.','💨 Karbon dioksida diserap daun lewat stomata.','🟢 Klorofil (zat hijau daun) mengolah semuanya.','🍬 Hasilnya: glukosa (makanan) dan 🫧 oksigen yang kita hirup.']},
 {t:'kuis', tanya:'Mengapa tumbuhan disebut produsen?', opsi:['Karena dapat membuat makanannya sendiri','Karena memakan hewan lain','Karena hidup di dalam tanah'], benar:0, bahas:'Tumbuhan membuat makanan sendiri melalui fotosintesis.'},
 {t:'kelompok', judul:'Di mana tumbuhan menyimpan makanan?', petunjuk:'Sentuh nama tumbuhan, lalu sentuh kotak yang tepat.', wadah:['Umbi akar','Batang','Buah / biji'], item:[['Singkong',0],['Wortel',0],['Tebu',1],['Kentang',1],['Padi',2],['Mangga',2]]},
 {t:'kuis', tanya:'Rina meletakkan tanaman di ruangan gelap selama dua minggu. Apa yang terjadi?', opsi:['Daunnya pucat karena tidak dapat berfotosintesis','Tanaman tumbuh lebih subur','Bunganya bertambah banyak'], benar:0, bahas:'Tanpa cahaya, fotosintesis terganggu.'},
 {t:'poin', judul:'Rangkuman', poin:['Akar, batang, daun, dan bunga memiliki fungsi masing-masing.','Fotosintesis terjadi di daun dengan bantuan cahaya matahari.','Tumbuhan menghasilkan oksigen dan makanan bagi makhluk hidup.','Mari jaga tumbuhan: menanam, menyiram, dan tidak merusaknya. 🌳']}
]},
{mapel:'ipas', kelas:4, semester:1, id:'ipas4-zat', judul:'Wujud Zat dan Perubahannya', slide:[
 {t:'judul', judul:'Wujud Zat dan Perubahannya', sub:'Padat, cair, dan gas ada di sekitar kita. Bagaimana mereka bisa berubah?'},
 {t:'kartu', judul:'Tiga wujud zat', kartu:[['🧊 Padat','Bentuk dan volumenya tetap. Contoh: batu, es batu, buku.'],['💧 Cair','Bentuknya mengikuti wadah, volumenya tetap. Contoh: air, minyak, susu.'],['💨 Gas','Bentuk dan volumenya mengikuti ruang. Contoh: udara, asap, uap air.']]},
 {t:'kelompok', judul:'Kelompokkan benda berikut!', petunjuk:'Sentuh benda, lalu sentuh wujudnya.', wadah:['Padat','Cair','Gas'], item:[['Kursi',0],['Kelereng',0],['Air teh',1],['Kecap',1],['Udara di balon',2],['Asap',2]]},
 {t:'gambar', judul:'Perubahan wujud zat', svg:'zat', ket:'Panah merah = memerlukan panas. Panah biru = melepaskan panas.'},
 {t:'kartu', judul:'Contoh sehari-hari', kartu:[['Es batu meleleh','Mencair (padat → cair)'],['Membuat es lilin','Membeku (cair → padat)'],['Jemuran kering','Menguap (cair → gas)'],['Embun di gelas es','Mengembun (gas → cair)'],['Kapur barus habis','Menyublim (padat → gas)']]},
 {t:'kuis', tanya:'Lilin dibakar meleleh, lalu mengeras lagi. Perubahan wujudnya adalah ...', opsi:['Mencair lalu membeku','Menguap lalu mengembun','Menyublim lalu mengkristal'], benar:0, bahas:'Lilin mencair saat panas dan membeku saat dingin.'},
 {t:'poin', judul:'Rangkuman', poin:['Zat memiliki tiga wujud: padat, cair, dan gas.','Wujud zat berubah karena pemanasan atau pendinginan.','Mencair, menguap, dan menyublim memerlukan panas.','Membeku, mengembun, dan mengkristal melepaskan panas.']}
]},
{mapel:'ipas', kelas:4, semester:1, id:'ipas4-gaya', judul:'Gaya di Sekitar Kita', slide:[
 {t:'judul', judul:'Gaya di Sekitar Kita', sub:'Dorong, tarik, jatuh, dan menempel: semuanya karena gaya!'},
 {t:'poin', judul:'Apa itu gaya?', poin:['Gaya adalah tarikan atau dorongan. 💪','Mendorong: menendang bola, menutup pintu.','Menarik: membuka laci, menimba air.','Gaya diukur dengan satuan newton (N).']},
 {t:'kelompok', judul:'Tarikan atau dorongan?', petunjuk:'Sentuh kegiatan, lalu pilih jenis gayanya.', wadah:['Dorongan','Tarikan'], item:[['Menendang bola',0],['Mendorong gerobak',0],['Menutup laci',0],['Membuka laci',1],['Menarik tali layangan',1],['Menimba air',1]]},
 {t:'kartu', judul:'Macam-macam gaya', kartu:[['💪 Gaya otot','Berasal dari kekuatan otot. Contoh: mengangkat tas.'],['🍎 Gaya gravitasi','Tarikan bumi. Contoh: buah jatuh dari pohon.'],['🧲 Gaya magnet','Tarikan magnet pada benda besi. Contoh: kompas.'],['🛞 Gaya gesek','Muncul saat permukaan bersentuhan. Contoh: rem sepeda.'],['🎯 Gaya pegas','Dari benda lentur. Contoh: ketapel, trampolin.']]},
 {t:'poin', judul:'Pengaruh gaya pada benda', poin:['Benda diam menjadi bergerak.','Benda bergerak menjadi diam.','Arah gerak benda berubah.','Bentuk benda berubah (plastisin ditekan).']},
 {t:'kuis', tanya:'Lantai kamar mandi dibuat kasar. Tujuannya ...', opsi:['Memperbesar gaya gesek agar tidak licin','Agar air cepat menguap','Agar lantai tampak indah'], benar:0, bahas:'Permukaan kasar memperbesar gesekan sehingga kita tidak mudah tergelincir.'},
 {t:'kelompok', judul:'Ditarik magnet atau tidak?', petunjuk:'Sentuh benda, lalu pilih kotaknya.', wadah:['Magnetis','Nonmagnetis'], item:[['Paku',0],['Peniti',0],['Jarum',0],['Karet',1],['Kertas',1],['Kayu',1]]},
 {t:'poin', judul:'Rangkuman', poin:['Gaya adalah tarikan atau dorongan.','Ada gaya otot, gravitasi, magnet, gesek, dan pegas.','Gaya dapat mengubah gerak, arah, dan bentuk benda.']}
]},
/* ================= MATEMATIKA ================= */
{mapel:'mtk', kelas:4, semester:1, id:'mtk4-cacah', judul:'Bilangan Cacah sampai 10.000', slide:[
 {t:'judul', judul:'Bilangan Cacah sampai 10.000', sub:'Membaca, menulis, nilai tempat, membandingkan, dan membulatkan.'},
 {t:'nilaitempat', judul:'Nilai tempat', angka:'4623', ket:'Sentuh tombol + dan − untuk mengubah angka. Perhatikan nilai setiap angkanya.'},
 {t:'poin', judul:'Membandingkan bilangan', poin:['Bandingkan angka dari tempat paling kiri (ribuan).','Jika sama, bandingkan ratusan, lalu puluhan, lalu satuan.','4.598 < 4.985 karena ratusan 5 < 9.','Tanda: < kurang dari, > lebih dari, = sama dengan.']},
 {t:'kuis', tanya:'Bilangan terbesar adalah ...', opsi:['3.210','3.201','3.120','3.021'], benar:0, bahas:'Ribuan sama (3), ratusan 2 terbesar, puluhan 1 > 0.'},
 {t:'poin', judul:'Membulatkan ke ratusan terdekat', poin:['Lihat angka puluhan.','Jika 5 atau lebih → bulatkan ke atas.','Jika kurang dari 5 → bulatkan ke bawah.','Contoh: 2.376 → 2.400   •   2.329 → 2.300']},
 {t:'kuis', tanya:'6.528 dibulatkan ke ratusan terdekat menjadi ...', opsi:['6.500','6.600','7.000'], benar:0, bahas:'Puluhan 2 < 5, maka dibulatkan ke bawah.'},
 {t:'kuis', tanya:'Perpustakaan punya 2.485 buku cerita dan 1.760 buku pelajaran. Jumlahnya ...', opsi:['4.245','4.145','3.245'], benar:0, bahas:'2.485 + 1.760 = 4.245.'},
 {t:'poin', judul:'Rangkuman', poin:['Setiap angka memiliki nilai tempat: ribuan, ratusan, puluhan, satuan.','Bandingkan bilangan mulai dari tempat paling kiri.','Pembulatan memudahkan kita menaksir.']}
]},
{mapel:'mtk', kelas:4, semester:1, id:'mtk4-pecahan', judul:'Pecahan', slide:[
 {t:'judul', judul:'Pecahan', sub:'Membagi sesuatu menjadi bagian yang sama besar.'},
 {t:'pecahan', judul:'Ayo membuat pecahan!', n:4, ket:'Pilih banyak potongan, lalu sentuh potongan untuk mewarnainya.'},
 {t:'kartu', judul:'Bagian pecahan', kartu:[['3/4: angka 3','Pembilang: banyak bagian yang diambil.'],['3/4: angka 4','Penyebut: banyak seluruh bagian yang sama besar.'],['1/2 = 2/4 = 4/8','Pecahan senilai: nilainya sama walaupun angkanya berbeda.']]},
 {t:'poin', judul:'Membandingkan pecahan', poin:['Penyebut sama → bandingkan pembilang. 3/7 < 5/7','Pembilang sama → penyebut lebih kecil, nilainya lebih besar. 1/3 > 1/5','Ingat pizza: dibagi 3 potongannya lebih besar daripada dibagi 5! 🍕']},
 {t:'kuis', tanya:'Pecahan yang senilai dengan 3/4 adalah ...', opsi:['6/8','3/8','4/6'], benar:0, bahas:'3/4 × 2/2 = 6/8.'},
 {t:'kuis', tanya:'Andi makan 2/8 roti, Budi makan 1/4 roti yang sama besar. Siapa yang makan lebih banyak?', opsi:['Sama banyak','Andi','Budi'], benar:0, bahas:'2/8 senilai dengan 1/4.'},
 {t:'poin', judul:'Rangkuman', poin:['Pecahan = pembilang / penyebut.','Pecahan senilai didapat dengan mengalikan/membagi pembilang dan penyebut dengan bilangan yang sama.','Bandingkan pecahan dengan melihat pembilang atau penyebutnya.']}
]},
{mapel:'mtk', kelas:4, semester:1, id:'mtk4-faktor', judul:'Faktor dan Kelipatan', slide:[
 {t:'judul', judul:'Faktor dan Kelipatan', sub:'Mengenal faktor, kelipatan, dan bilangan prima.'},
 {t:'poin', judul:'Faktor', poin:['Faktor adalah bilangan yang membagi habis suatu bilangan.','Cari pasangan perkalian: 12 = 1×12 = 2×6 = 3×4','Faktor 12: 1, 2, 3, 4, 6, 12']},
 {t:'poin', judul:'Kelipatan', poin:['Kelipatan adalah hasil perkalian bilangan dengan 1, 2, 3, ...','Kelipatan 4: 4, 8, 12, 16, 20, ...','Kelipatan persekutuan terkecil (KPK) 3 dan 4 adalah 12.']},
 {t:'kelompok', judul:'Prima atau bukan prima?', petunjuk:'Bilangan prima hanya punya 2 faktor: 1 dan dirinya sendiri.', wadah:['Prima','Bukan prima'], item:[['2',0],['7',0],['11',0],['13',0],['9',1],['15',1],['21',1],['1',1]]},
 {t:'kuis', tanya:'Ani berenang setiap 2 hari, Rina setiap 3 hari. Hari ini mereka berenang bersama. Kapan bersama lagi?', opsi:['6 hari lagi','5 hari lagi','3 hari lagi'], benar:0, bahas:'KPK dari 2 dan 3 adalah 6.'},
 {t:'kuis', tanya:'12 apel dan 16 jeruk dibagi sama banyak ke beberapa keranjang. Paling banyak berapa keranjang?', opsi:['4','2','8'], benar:0, bahas:'FPB dari 12 dan 16 adalah 4.'},
 {t:'poin', judul:'Rangkuman', poin:['Faktor membagi habis suatu bilangan.','Kelipatan didapat dari perkalian berulang.','Bilangan prima tepat memiliki dua faktor.','KPK untuk mencari waktu bersamaan; FPB untuk membagi sama banyak.']}
]},
/* ================= BAHASA INDONESIA ================= */
{mapel:'bindo', kelas:4, semester:1, id:'bindo4-cerita', judul:'Membaca Teks Narasi (Unsur Cerita)', slide:[
 {t:'judul', judul:'Membaca Teks Narasi', sub:'Menemukan tokoh, watak, latar, alur, dan amanat cerita.'},
 {t:'poin', judul:'Bacalah cerita berikut!', poin:['Pagi itu Dimas berangkat ke sekolah lebih awal.','Di jalan ia melihat seorang nenek kesulitan menyeberang.','Dimas segera menuntun nenek itu menyeberang dengan hati-hati.','Nenek tersenyum dan mengucapkan terima kasih.','Dimas tiba di sekolah tepat waktu dengan hati gembira.']},
 {t:'kartu', judul:'Unsur cerita', kartu:[['👤 Tokoh','Pelaku cerita: Dimas dan nenek.'],['💛 Watak','Sifat tokoh: Dimas suka menolong.'],['📍 Latar','Tempat: di jalan. Waktu: pagi hari.'],['➡️ Alur','Berangkat → melihat nenek → menolong → tiba di sekolah.'],['💡 Amanat','Tolonglah orang yang membutuhkan.']]},
 {t:'kuis', tanya:'Watak Dimas dalam cerita adalah ...', opsi:['Suka menolong','Pemalas','Sombong'], benar:0, bahas:'Dimas menolong nenek menyeberang.'},
 {t:'kelompok', judul:'Tokoh protagonis atau antagonis?', petunjuk:'Sentuh tokoh, lalu pilih kelompoknya.', wadah:['Protagonis (baik)','Antagonis (jahat)'], item:[['Bawang Putih',0],['Lutung Kasarung',0],['Timun Mas',0],['Bawang Merah',1],['Buto Ijo',1],['Ibu tiri yang kejam',1]]},
 {t:'kuis', tanya:'"Suasana kelas sangat ramai saat guru belum datang." Kalimat ini menunjukkan latar ...', opsi:['Suasana','Tempat','Waktu'], benar:0, bahas:'Kata "ramai" menggambarkan suasana.'},
 {t:'poin', judul:'Rangkuman', poin:['Unsur cerita: tema, tokoh, watak, latar, alur, amanat.','Latar meliputi tempat, waktu, dan suasana.','Amanat adalah pesan baik yang dapat kita teladani.']}
]},
{mapel:'bindo', kelas:4, semester:1, id:'bindo4-gagasan', judul:'Gagasan Pokok dan Gagasan Pendukung', slide:[
 {t:'judul', judul:'Gagasan Pokok dan Gagasan Pendukung', sub:'Menemukan inti sebuah paragraf.'},
 {t:'poin', judul:'Bacalah paragraf berikut!', poin:['Sampah plastik sangat berbahaya bagi lingkungan.','Plastik sulit terurai di dalam tanah hingga ratusan tahun.','Sampah plastik di sungai dapat menyumbat aliran air dan menyebabkan banjir.','Hewan laut dapat mati karena menelan plastik.']},
 {t:'kartu', judul:'Coba tebak!', kartu:[['Gagasan pokok','Sampah plastik berbahaya bagi lingkungan (kalimat pertama).'],['Gagasan pendukung','Sulit terurai, menyebabkan banjir, membahayakan hewan laut.'],['Jenis paragraf','Deduktif, karena kalimat utama ada di awal.']]},
 {t:'kartu', judul:'Jenis paragraf', kartu:[['Deduktif','Kalimat utama di awal paragraf.'],['Induktif','Kalimat utama di akhir paragraf.'],['Campuran','Kalimat utama di awal dan di akhir paragraf.']]},
 {t:'kuis', tanya:'"Ayam berkokok. Burung berkicau. Matahari bersinar. Suasana pagi di desa sangat menyenangkan." Gagasan pokoknya ...', opsi:['Suasana pagi di desa sangat menyenangkan','Ayam berkokok','Matahari bersinar'], benar:0, bahas:'Kalimat utama di akhir (paragraf induktif).'},
 {t:'kuis', tanya:'Kalimat yang TIDAK cocok untuk gagasan pokok "Manfaat membaca buku" adalah ...', opsi:['Buku bekas dapat dijual kiloan.','Membaca menambah pengetahuan.','Membaca memperkaya kosakata.'], benar:0, bahas:'Kalimat itu tidak membahas manfaat membaca.'},
 {t:'poin', judul:'Rangkuman', poin:['Satu paragraf memiliki satu gagasan pokok.','Gagasan pokok ada di kalimat utama.','Kalimat penjelas berisi gagasan pendukung.']}
]},
{mapel:'bindo', kelas:4, semester:1, id:'bindo4-ejaan', judul:'Huruf Kapital dan Tanda Baca', slide:[
 {t:'judul', judul:'Huruf Kapital dan Tanda Baca', sub:'Menulis kalimat dengan benar dan rapi.'},
 {t:'poin', judul:'Huruf kapital dipakai pada ...', poin:['Awal kalimat: Saya suka membaca.','Nama orang: Budi Santoso','Nama tempat: Bandung, Pasar Minggu','Nama hari dan bulan: Senin, Agustus','Nama agama, kitab suci, Tuhan: Islam, Al-Qur\'an, Allah']},
 {t:'kartu', judul:'Tanda baca di akhir kalimat', kartu:[['.  Titik','Kalimat berita: Ayah membaca koran.'],['?  Tanda tanya','Kalimat tanya: Siapa nama ibumu?'],['!  Tanda seru','Kalimat perintah/seruan: Ayo, buang sampah pada tempatnya!'],[',  Koma','Perincian: apel, jeruk, dan mangga.']]},
 {t:'kelompok', judul:'Tanda baca apa yang tepat?', petunjuk:'Sentuh kalimat, lalu pilih tanda bacanya.', wadah:['.','?','!'], item:[['Ibu memasak di dapur',0],['Adik tidur siang',0],['Kapan kamu datang',1],['Di mana rumahmu',1],['Tolong tutup pintunya',2],['Wah, indah sekali',2]]},
 {t:'kuis', tanya:'Penulisan yang benar adalah ...', opsi:['Pada hari Minggu, Rina pergi ke Bogor.','pada hari minggu, Rina pergi ke bogor.','Pada Hari minggu, rina pergi ke Bogor.'], benar:0, bahas:'Awal kalimat, nama hari, nama orang, dan nama kota diawali kapital.'},
 {t:'kuis', tanya:'Kalimat langsung yang benar adalah ...', opsi:['Ibu berkata, "Jangan lupa sarapan."','Ibu berkata "jangan lupa sarapan".','Ibu berkata, jangan lupa sarapan.'], benar:0, bahas:'Petikan langsung diapit tanda petik dan diawali kapital.'},
 {t:'poin', judul:'Rangkuman', poin:['Gunakan huruf kapital di awal kalimat dan pada nama diri.','Titik untuk berita, tanda tanya untuk pertanyaan, tanda seru untuk perintah/seruan.','Koma untuk perincian dan setelah kata seru.']}
]},
/* ================= PENDIDIKAN PANCASILA ================= */
{mapel:'ppkn', kelas:4, semester:1, id:'ppkn4-pancasila', judul:'Sejarah Lahirnya Pancasila', slide:[
 {t:'judul', judul:'Sejarah Lahirnya Pancasila', sub:'Mengenal perjuangan para pendiri bangsa merumuskan dasar negara.'},
 {t:'poin', judul:'Garis waktu', poin:['29 Mei – 1 Juni 1945: Sidang pertama BPUPK membahas dasar negara.','1 Juni 1945: Ir. Soekarno mengusulkan nama "Pancasila".','22 Juni 1945: Panitia Sembilan menyusun Piagam Jakarta.','18 Agustus 1945: PPKI mengesahkan Pancasila dan UUD 1945.']},
 {t:'kartu', judul:'Sila dan lambangnya', kartu:[['⭐ Bintang','Sila 1: Ketuhanan Yang Maha Esa'],['⛓️ Rantai','Sila 2: Kemanusiaan yang adil dan beradab'],['🌳 Pohon beringin','Sila 3: Persatuan Indonesia'],['🐃 Kepala banteng','Sila 4: Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan'],['🌾 Padi dan kapas','Sila 5: Keadilan sosial bagi seluruh rakyat Indonesia']]},
 {t:'kelompok', judul:'Pengamalan sila ke berapa?', petunjuk:'Sentuh perilaku, lalu pilih silanya.', wadah:['Sila 1','Sila 2','Sila 3','Sila 4','Sila 5'], item:[['Beribadah tepat waktu',0],['Menjenguk teman sakit',1],['Berteman dengan semua suku',2],['Memilih ketua kelas dengan musyawarah',3],['Membagi tugas piket secara adil',4]]},
 {t:'kuis', tanya:'Hari Lahir Pancasila diperingati setiap tanggal ...', opsi:['1 Juni','17 Agustus','1 Oktober'], benar:0, bahas:'1 Juni ditetapkan sebagai Hari Lahir Pancasila.'},
 {t:'poin', judul:'Teladan para pendiri bangsa', poin:['Rela berkorban demi persatuan.','Menghargai pendapat orang lain.','Bermusyawarah untuk mencapai mufakat.','Cinta tanah air. 🇮🇩']}
]},
{mapel:'ppkn', kelas:4, semester:1, id:'ppkn4-norma', judul:'Hak, Kewajiban, dan Aturan', slide:[
 {t:'judul', judul:'Hak, Kewajiban, dan Aturan', sub:'Di rumah dan di sekolah.'},
 {t:'kartu', judul:'Kenali istilahnya', kartu:[['Hak','Sesuatu yang patut kita terima. Contoh: mendapat pelajaran.'],['Kewajiban','Sesuatu yang harus kita lakukan. Contoh: menaati tata tertib.'],['Aturan','Pedoman agar hidup tertib, aman, dan nyaman.'],['Sanksi','Akibat yang diterima jika melanggar aturan.']]},
 {t:'kelompok', judul:'Hak atau kewajiban?', petunjuk:'Sentuh kalimat, lalu pilih kotaknya.', wadah:['Hak','Kewajiban'], item:[['Mendapat kasih sayang orang tua',0],['Mendapat pelajaran dari guru',0],['Bermain dan beristirahat',0],['Menaati tata tertib sekolah',1],['Membantu orang tua',1],['Menjaga kebersihan kelas',1]]},
 {t:'kuis', tanya:'Sinta ingin menonton TV, tetapi belum mengerjakan PR. Sebaiknya ...', opsi:['Mengerjakan PR terlebih dahulu','Menonton TV sampai malam','Meminta kakak mengerjakan PR'], benar:0, bahas:'Dahulukan kewajiban sebelum menuntut hak.'},
 {t:'poin', judul:'Mari membuat kesepakatan kelas!', poin:['Datang tepat waktu. ⏰','Menjaga kebersihan kelas. 🧹','Mengangkat tangan sebelum berbicara. ✋','Saling menghormati dan menolong. 🤝']},
 {t:'poin', judul:'Rangkuman', poin:['Hak dan kewajiban harus seimbang.','Dahulukan kewajiban sebelum menuntut hak.','Aturan dibuat agar kehidupan tertib dan nyaman.']}
]},
{mapel:'ppkn', kelas:4, semester:1, id:'ppkn4-keragaman', judul:'Keberagaman Budaya di Indonesia', slide:[
 {t:'judul', judul:'Keberagaman Budaya di Indonesia', sub:'Bhinneka Tunggal Ika: berbeda-beda tetapi tetap satu.'},
 {t:'poin', judul:'Indonesia kaya akan ...', poin:['Suku bangsa: Jawa, Sunda, Batak, Minang, Bugis, Dayak, dan lainnya.','Bahasa daerah yang beragam, dipersatukan bahasa Indonesia.','Agama dan kepercayaan.','Rumah adat, tarian, pakaian adat, alat musik, dan makanan khas.']},
 {t:'kelompok', judul:'Pasangkan budaya dengan daerahnya!', petunjuk:'Sentuh budaya, lalu pilih daerahnya.', wadah:['Aceh','Sumatra Barat','Jawa Barat','Bali','Papua'], item:[['Tari Saman',0],['Rumah Gadang',1],['Angklung',2],['Tari Kecak',3],['Honai',4]]},
 {t:'kartu', judul:'Bhinneka Tunggal Ika', kartu:[['Artinya?','Berbeda-beda tetapi tetap satu jua.'],['Dari mana?','Kitab Sutasoma karya Mpu Tantular.'],['Di mana tertulis?','Pada pita yang dicengkeram burung Garuda Pancasila.']]},
 {t:'kuis', tanya:'Saat kerja kelompok, Andi, Butet, dan Made berbeda pendapat. Sikap terbaik adalah ...', opsi:['Bermusyawarah dan menghargai pendapat','Memaksakan pendapat sendiri','Bubar kelompok'], benar:0, bahas:'Musyawarah menjaga persatuan.'},
 {t:'poin', judul:'Rangkuman', poin:['Keberagaman adalah kekayaan bangsa Indonesia.','Hargai teman yang berbeda suku, bahasa, dan agama (toleransi).','Lestarikan budaya daerah dengan mempelajari dan menampilkannya.']}
]},
/* ================= KELAS 5 ================= */
{mapel:'ipas', kelas:5, semester:1, id:'ipas5-cahaya', judul:'Cahaya dan Sifat-sifatnya', slide:[
 {t:'judul', judul:'Cahaya dan Sifat-sifatnya', sub:'Mengapa kita bisa melihat? Bagaimana pelangi terbentuk?'},
 {t:'poin', judul:'Bagaimana kita melihat?', poin:['💡 Sumber cahaya memancarkan cahaya.','📕 Cahaya mengenai benda lalu dipantulkan.','👁️ Cahaya masuk ke mata melalui kornea dan pupil.','🔍 Lensa mata membentuk bayangan di retina.','🧠 Saraf mata mengirim pesan ke otak, kita pun melihat!']},
 {t:'kartu', judul:'Sifat-sifat cahaya', kartu:[['➡️ Merambat lurus','Berkas sinar dari celah genting tampak lurus.'],['🪟 Menembus benda bening','Cahaya masuk melalui kaca jendela.'],['🪞 Dipantulkan','Bayangan wajah terlihat di cermin.'],['🥢 Dibiaskan','Pensil di dalam gelas air tampak patah.'],['🌈 Diuraikan','Pelangi muncul setelah hujan.']]},
 {t:'kelompok', judul:'Benda apa ini?', petunjuk:'Sentuh benda, lalu pilih jenisnya.', wadah:['Benda bening','Benda gelap'], item:[['Kaca jendela',0],['Air jernih',0],['Plastik bening',0],['Kayu',1],['Karton',1],['Tembok',1]]},
 {t:'kuis', tanya:'Dasar kolam jernih tampak lebih dangkal dari sebenarnya karena cahaya ...', opsi:['Dibiaskan','Dipantulkan','Merambat lurus'], benar:0, bahas:'Cahaya dibelokkan saat berpindah dari air ke udara.'},
 {t:'kuis', tanya:'Kaca spion kendaraan memakai cermin cembung agar ...', opsi:['Daerah pandang lebih luas','Benda tampak lebih besar','Bayangan terbalik'], benar:0, bahas:'Cermin cembung memperluas pandangan ke belakang.'},
 {t:'poin', judul:'Rangkuman', poin:['Kita melihat karena cahaya yang dipantulkan benda masuk ke mata.','Cahaya merambat lurus, menembus benda bening, dapat dipantulkan, dibiaskan, dan diuraikan.','Jaga mata: membaca di tempat terang dan batasi menatap layar.']}
]},
{mapel:'ipas', kelas:5, semester:1, id:'ipas5-ekosistem', judul:'Harmoni dalam Ekosistem', slide:[
 {t:'judul', judul:'Harmoni dalam Ekosistem', sub:'Makhluk hidup saling bergantung satu sama lain.'},
 {t:'kelompok', judul:'Biotik atau abiotik?', petunjuk:'Sentuh komponen, lalu pilih kelompoknya.', wadah:['Biotik (hidup)','Abiotik (tak hidup)'], item:[['Padi',0],['Belalang',0],['Jamur',0],['Air',1],['Tanah',1],['Cahaya matahari',1]]},
 {t:'gambar', judul:'Rantai makanan di sawah', svg:'rantai', ket:'Sentuh setiap makhluk hidup untuk melihat perannya.'},
 {t:'kartu', judul:'Peran dalam ekosistem', kartu:[['🌱 Produsen','Membuat makanan sendiri. Contoh: tumbuhan hijau.'],['🐄 Herbivora','Pemakan tumbuhan. Contoh: sapi, belalang.'],['🦁 Karnivora','Pemakan daging. Contoh: harimau, elang.'],['🐔 Omnivora','Pemakan segala. Contoh: ayam, tikus.'],['🍄 Pengurai','Menguraikan sisa makhluk hidup. Contoh: jamur, bakteri.']]},
 {t:'kuis', tanya:'Jika ular di sawah diburu hingga habis, apa yang terjadi?', opsi:['Tikus bertambah banyak dan padi rusak','Tikus berkurang','Padi tumbuh lebih subur'], benar:0, bahas:'Tanpa pemangsa, populasi tikus meningkat.'},
 {t:'poin', judul:'Menjaga keseimbangan ekosistem', poin:['🌳 Menanam pohon dan tidak menebang sembarangan.','🐦 Tidak memburu hewan liar.','🚯 Tidak membuang sampah ke sungai dan laut.','🧪 Menggunakan pestisida secukupnya.']}
]},
{mapel:'ipas', kelas:5, semester:1, id:'ipas5-magnet', judul:'Magnet, Listrik, dan Teknologi', slide:[
 {t:'judul', judul:'Magnet, Listrik, dan Teknologi', sub:'Mengenal magnet, rangkaian listrik, dan cara menghemat energi.'},
 {t:'kartu', judul:'Sifat magnet', kartu:[['🧲 Kutub magnet','Setiap magnet memiliki kutub utara (U) dan selatan (S).'],['U ↔ U','Kutub sejenis tolak-menolak.'],['U → ← S','Kutub berbeda tarik-menarik.'],['Membuat magnet','Digosok, induksi, atau elektromagnetik (dialiri listrik).']]},
 {t:'kelompok', judul:'Konduktor atau isolator?', petunjuk:'Sentuh benda, lalu pilih kelompoknya.', wadah:['Konduktor','Isolator'], item:[['Kawat tembaga',0],['Paku besi',0],['Sendok aluminium',0],['Karet',1],['Plastik',1],['Kayu kering',1]]},
 {t:'gambar', judul:'Rangkaian seri dan paralel', svg:'rangkaian', ket:'Sentuh setiap rangkaian untuk melihat penjelasannya.'},
 {t:'kuis', tanya:'Lampu di rumah dipasang paralel karena ...', opsi:['Jika satu lampu mati, lampu lain tetap menyala','Lebih hemat kabel','Lampu menjadi redup'], benar:0, bahas:'Setiap cabang dialiri arus sendiri.'},
 {t:'poin', judul:'Ayo hemat listrik!', poin:['💡 Matikan lampu saat tidak digunakan.','📺 Matikan TV jika tidak ditonton.','🔌 Cabut charger setelah baterai penuh.','❄️ Jangan membuka kulkas terlalu lama.']}
]},
{mapel:'mtk', kelas:5, semester:1, id:'mtk5-cacah', judul:'Bilangan Cacah sampai 1.000.000', slide:[
 {t:'judul', judul:'Bilangan Cacah sampai 1.000.000', sub:'Membaca, menulis, nilai tempat, pembulatan, dan operasi hitung.'},
 {t:'kartu', judul:'Nilai tempat 438.215', kartu:[['4','Ratus ribuan → 400.000'],['3','Puluh ribuan → 30.000'],['8','Ribuan → 8.000'],['2','Ratusan → 200'],['1','Puluhan → 10'],['5','Satuan → 5']]},
 {t:'poin', judul:'Membulatkan ke ribuan terdekat', poin:['Lihat angka ratusan.','Ratusan 5 atau lebih → bulatkan ke atas.','Ratusan kurang dari 5 → bulatkan ke bawah.','486.512 → 487.000   •   486.312 → 486.000']},
 {t:'kuis', tanya:'Nilai angka 6 pada 865.104 adalah ...', opsi:['60.000','6.000','600.000'], benar:0, bahas:'Angka 6 di tempat puluh ribuan.'},
 {t:'kuis', tanya:'Pabrik membuat 12.500 botol setiap hari. Selama 30 hari dibuat ...', opsi:['375.000 botol','37.500 botol','360.000 botol'], benar:0, bahas:'12.500 × 30 = 375.000.'},
 {t:'kuis', tanya:'Urutan terbesar: 745.000; 754.000; 745.500 adalah ...', opsi:['754.000; 745.500; 745.000','745.000; 745.500; 754.000','745.500; 754.000; 745.000'], benar:0, bahas:'Bandingkan dari puluh ribuan, lalu ratusan.'},
 {t:'poin', judul:'Rangkuman', poin:['Bilangan enam angka: ratus ribuan, puluh ribuan, ribuan, ratusan, puluhan, satuan.','Bandingkan bilangan dari tempat paling kiri.','Taksir dengan pembulatan sebelum menghitung.']}
]},
{mapel:'mtk', kelas:5, semester:1, id:'mtk5-pecahan', judul:'Penjumlahan dan Pengurangan Pecahan', slide:[
 {t:'judul', judul:'Penjumlahan dan Pengurangan Pecahan', sub:'Samakan penyebutnya dulu!'},
 {t:'poin', judul:'Penyebut sama', poin:['Cukup jumlahkan atau kurangkan pembilangnya.','2/7 + 3/7 = 5/7','5/8 − 1/8 = 4/8 = 1/2']},
 {t:'poin', judul:'Penyebut berbeda', poin:['Cari KPK penyebutnya.','1/2 + 1/3 → KPK 2 dan 3 = 6','3/6 + 2/6 = 5/6','3/4 − 1/6 → 9/12 − 2/12 = 7/12']},
 {t:'kartu', judul:'Pecahan campuran', kartu:[['2 1/3 → ?','7/3  (2 × 3 + 1 = 7)'],['11/4 → ?','2 3/4  (11 : 4 = 2 sisa 3)'],['1 1/2 + 2 1/4','3 3/4'],['3 − 1 2/5','1 3/5']]},
 {t:'kuis', tanya:'Rina berkata 1/2 + 1/3 = 2/5. Benarkah?', opsi:['Salah, seharusnya 5/6','Benar','Salah, seharusnya 2/6'], benar:0, bahas:'Penyebut harus disamakan: 3/6 + 2/6 = 5/6.'},
 {t:'kuis', tanya:'Pita 2 1/2 m dipakai 1 3/4 m. Sisanya ...', opsi:['3/4 m','1 1/4 m','1/2 m'], benar:0, bahas:'10/4 − 7/4 = 3/4.'},
 {t:'poin', judul:'Rangkuman', poin:['Penyebut sama → operasikan pembilang.','Penyebut berbeda → samakan dengan KPK.','Sederhanakan hasilnya dan ubah ke pecahan campuran jika perlu.']}
]},
{mapel:'mtk', kelas:5, semester:1, id:'mtk5-desimal', judul:'Pecahan Desimal dan Persen', slide:[
 {t:'judul', judul:'Pecahan Desimal dan Persen', sub:'Satu nilai, tiga bentuk: pecahan, desimal, persen.'},
 {t:'pecahan', judul:'Pecahan → desimal → persen', n:4, persen:true, ket:'Warnai potongan dan lihat bentuk desimal serta persennya.'},
 {t:'kartu', judul:'Pasangan yang sama nilainya', kartu:[['1/2','0,5 = 50%'],['1/4','0,25 = 25%'],['3/4','0,75 = 75%'],['1/5','0,2 = 20%'],['1/10','0,1 = 10%']]},
 {t:'kuis', tanya:'Urutan terkecil: 0,5; 1/4; 60%; 0,35 adalah ...', opsi:['1/4; 0,35; 0,5; 60%','0,35; 1/4; 0,5; 60%','60%; 0,5; 0,35; 1/4'], benar:0, bahas:'Ubah semua ke desimal: 0,25 < 0,35 < 0,5 < 0,6.'},
 {t:'kuis', tanya:'Sepatu Rp200.000 diskon 10%. Potongan harganya ...', opsi:['Rp20.000','Rp10.000','Rp2.000'], benar:0, bahas:'10% × 200.000 = 20.000.'},
 {t:'poin', judul:'Rangkuman', poin:['Persen artinya per seratus.','Ubah pecahan ke desimal dengan penyebut 10, 100, atau dengan pembagian.','Bandingkan bilangan dengan mengubahnya ke bentuk yang sama.']}
]},
{mapel:'bindo', kelas:5, semester:1, id:'bindo5-puisi', judul:'Puisi: Rima, Majas, dan Makna', slide:[
 {t:'judul', judul:'Puisi: Rima, Majas, dan Makna', sub:'Menikmati dan membacakan puisi dengan penuh penghayatan.'},
 {t:'poin', judul:'Guruku', poin:['Engkau bagai pelita di malam gelap','Menerangi jalanku yang senyap','Tanpa lelah engkau mengajar','Agar aku menjadi pintar']},
 {t:'kartu', judul:'Unsur puisi "Guruku"', kartu:[['Tema','Jasa guru.'],['Rima','aabb: gelap–senyap, mengajar–pintar.'],['Majas','"bagai pelita": majas perumpamaan.'],['Amanat','Hormati guru yang telah berjasa.']]},
 {t:'kelompok', judul:'Majas apa ini?', petunjuk:'Sentuh larik, lalu pilih majasnya.', wadah:['Perumpamaan','Personifikasi','Hiperbola'], item:[['Wajahnya bagai bulan purnama',0],['Matanya laksana bintang',0],['Angin berbisik di telingaku',1],['Daun melambai memanggilku',1],['Tangisnya membanjiri kota',2],['Suaranya membelah langit',2]]},
 {t:'poin', judul:'Membacakan puisi', poin:['🗣️ Lafal: ucapkan kata dengan jelas.','🎵 Intonasi: atur tinggi rendah suara.','😊 Ekspresi: hayati isi puisi.','⏸️ Jeda: berhenti sejenak di tempat yang tepat.']},
 {t:'kuis', tanya:'"Angin berbisik lembut di telingaku" menggunakan majas ...', opsi:['Personifikasi','Hiperbola','Perumpamaan'], benar:0, bahas:'Angin digambarkan berbisik seperti manusia.'}
]},
{mapel:'bindo', kelas:5, semester:1, id:'bindo5-eksplanasi', judul:'Teks Eksplanasi', slide:[
 {t:'judul', judul:'Teks Eksplanasi', sub:'Menjelaskan bagaimana dan mengapa suatu peristiwa terjadi.'},
 {t:'kartu', judul:'Struktur teks eksplanasi', kartu:[['1. Pernyataan umum','Gambaran umum fenomena.'],['2. Deretan penjelas','Urutan proses dan sebab-akibat.'],['3. Interpretasi','Kesimpulan atau pendapat penulis.']]},
 {t:'poin', judul:'Bagaimana hujan terjadi?', poin:['☀️ Panas matahari menguapkan air laut dan sungai (penguapan).','☁️ Uap air naik, mendingin, dan membentuk awan (pengembunan).','🌧️ Awan semakin berat lalu turun sebagai hujan (presipitasi).','🔁 Air kembali ke laut dan prosesnya berulang.']},
 {t:'kelompok', judul:'Sebab atau akibat banjir?', petunjuk:'Sentuh kalimat, lalu pilih kelompoknya.', wadah:['Sebab','Akibat'], item:[['Hujan deras terus-menerus',0],['Sampah menyumbat saluran',0],['Pohon ditebang',0],['Rumah warga terendam',1],['Muncul penyakit diare',1],['Sekolah diliburkan',1]]},
 {t:'kuis', tanya:'Kata hubung yang menunjukkan sebab-akibat adalah ...', opsi:['karena, sehingga, akibatnya','dan, atau, serta','tetapi, namun'], benar:0, bahas:'Konjungsi kausalitas.'},
 {t:'poin', judul:'Rangkuman', poin:['Teks eksplanasi menjelaskan proses fenomena alam atau sosial.','Strukturnya: pernyataan umum, deretan penjelas, interpretasi.','Banyak menggunakan kata hubung sebab-akibat dan urutan waktu.']}
]},
{mapel:'bindo', kelas:5, semester:1, id:'bindo5-baku', judul:'Kata Baku dan Kalimat Efektif', slide:[
 {t:'judul', judul:'Kata Baku dan Kalimat Efektif', sub:'Menulis dengan tepat sesuai kaidah bahasa Indonesia.'},
 {t:'kelompok', judul:'Baku atau tidak baku?', petunjuk:'Sentuh kata, lalu pilih kelompoknya.', wadah:['Baku','Tidak baku'], item:[['apotek',0],['nasihat',0],['risiko',0],['izin',0],['apotik',1],['nasehat',1],['resiko',1],['ijin',1]]},
 {t:'kartu', judul:'Tebak bentuk bakunya!', kartu:[['praktek','praktik'],['silahkan','silakan'],['aktifitas','aktivitas'],['propinsi','provinsi'],['kwitansi','kuitansi']]},
 {t:'poin', judul:'Ciri kalimat efektif', poin:['Memiliki subjek dan predikat yang jelas.','Tidak boros kata: "para siswa" bukan "para siswa-siswa".','Menggunakan kata baku dan ejaan yang benar.','Logis dan mudah dipahami.']},
 {t:'kuis', tanya:'Kalimat yang efektif adalah ...', opsi:['Para siswa berbaris di lapangan.','Para siswa-siswa berbaris di lapangan.','Siswa-siswa para berbaris di lapangan.'], benar:0, bahas:'"Para" sudah bermakna jamak.'},
 {t:'kuis', tanya:'Perbaikan "Agar supaya kamu pintar, maka rajinlah belajar" yang tepat adalah ...', opsi:['Agar pintar, rajinlah belajar.','Agar supaya pintar, rajinlah belajar.','Supaya agar pintar, maka rajinlah belajar.'], benar:0, bahas:'Agar dan supaya bermakna sama; "maka" tidak perlu.'}
]},
{mapel:'ppkn', kelas:5, semester:1, id:'ppkn5-pancasila', judul:'Pancasila sebagai Dasar Negara dan Pandangan Hidup', slide:[
 {t:'judul', judul:'Pancasila sebagai Dasar Negara dan Pandangan Hidup', sub:'Pancasila menjadi pedoman bernegara dan bertingkah laku.'},
 {t:'kartu', judul:'Kedudukan Pancasila', kartu:[['🏛️ Dasar negara','Landasan mengatur pemerintahan; sumber dari segala sumber hukum.'],['🧭 Pandangan hidup','Pedoman bersikap dan bertingkah laku sehari-hari.'],['🔓 Ideologi terbuka','Nilai dasarnya tetap, penerapannya menyesuaikan zaman.']]},
 {t:'kelompok', judul:'Penerapan sila ke berapa?', petunjuk:'Sentuh perilaku, lalu pilih silanya.', wadah:['Sila 1','Sila 2','Sila 3','Sila 4','Sila 5'], item:[['Menghormati teman yang beribadah',0],['Menggalang dana korban bencana',1],['Menggunakan produk dalam negeri',2],['Menerima hasil musyawarah',3],['Hidup hemat dan bekerja keras',4]]},
 {t:'kuis', tanya:'Hari Kesaktian Pancasila diperingati setiap tanggal ...', opsi:['1 Oktober','1 Juni','18 Agustus'], benar:0, bahas:'1 Oktober.'},
 {t:'poin', judul:'Rangkuman', poin:['Pancasila adalah dasar negara dan pandangan hidup bangsa.','Nilai Pancasila digali dari budaya bangsa Indonesia sendiri.','Menerapkan Pancasila membuat kehidupan rukun, adil, dan damai.']}
]},
{mapel:'ppkn', kelas:5, semester:1, id:'ppkn5-norma', judul:'Norma dalam Kehidupan Bermasyarakat', slide:[
 {t:'judul', judul:'Norma dalam Kehidupan Bermasyarakat', sub:'Aturan yang membuat hidup tertib dan damai.'},
 {t:'kartu', judul:'Empat jenis norma', kartu:[['🕌 Norma agama','Sumber: Tuhan. Sanksi: dosa.'],['💗 Norma kesusilaan','Sumber: hati nurani. Sanksi: rasa bersalah.'],['🙏 Norma kesopanan','Sumber: kebiasaan masyarakat. Sanksi: dicemooh, dikucilkan.'],['⚖️ Norma hukum','Sumber: lembaga negara. Sanksi: denda, penjara.']]},
 {t:'kelompok', judul:'Termasuk norma apa?', petunjuk:'Sentuh contoh, lalu pilih jenis normanya.', wadah:['Agama','Kesusilaan','Kesopanan','Hukum'], item:[['Salat lima waktu',0],['Tidak berbohong',1],['Berbicara sopan kepada orang tua',2],['Memakai helm saat berkendara',3],['Berdoa sebelum makan',0],['Mengucapkan salam saat bertamu',2]]},
 {t:'kuis', tanya:'Perbedaan utama norma hukum dengan norma lain adalah ...', opsi:['Sanksinya tegas dan dapat dipaksakan negara','Tidak memiliki sanksi','Berasal dari hati nurani'], benar:0, bahas:'Norma hukum ditegakkan aparat negara.'},
 {t:'poin', judul:'Rangkuman', poin:['Norma adalah aturan perilaku dalam masyarakat.','Ada norma agama, kesusilaan, kesopanan, dan hukum.','Menaati norma menciptakan ketertiban dan kedamaian.']}
]},
{mapel:'ppkn', kelas:5, semester:1, id:'ppkn5-nkri', judul:'Wilayah Negara Kesatuan Republik Indonesia', slide:[
 {t:'judul', judul:'Wilayah NKRI', sub:'Indonesia, negara kepulauan yang luas dan strategis.'},
 {t:'poin', judul:'Letak Indonesia', poin:['🌏 Di antara Benua Asia dan Benua Australia.','🌊 Di antara Samudra Hindia dan Samudra Pasifik.','☀️ Dilalui garis khatulistiwa sehingga beriklim tropis.','🏝️ Terdiri atas lebih dari 17.000 pulau.']},
 {t:'kelompok', judul:'Berbatasan darat di pulau mana?', petunjuk:'Sentuh negara, lalu pilih pulaunya.', wadah:['Kalimantan','Papua','Timor'], item:[['Malaysia',0],['Papua Nugini',1],['Timor Leste',2]]},
 {t:'kartu', judul:'Penting diketahui', kartu:[['Deklarasi Djuanda (1957)','Laut di antara pulau-pulau Indonesia adalah wilayah Indonesia.'],['Wawasan Nusantara','Cara pandang bangsa Indonesia sebagai satu kesatuan.'],['Wilayah NKRI','Meliputi darat, laut, dan udara.']]},
 {t:'kuis', tanya:'Pulau-pulau terluar perlu dijaga karena ...', opsi:['Menjadi penentu batas wilayah negara','Tidak berpenghuni','Hanya untuk wisata'], benar:0, bahas:'Pulau terluar menentukan batas wilayah laut Indonesia.'},
 {t:'poin', judul:'Cinta tanah air', poin:['Rajin belajar untuk memajukan bangsa.','Menggunakan produk dalam negeri.','Melestarikan budaya dan menjaga lingkungan. 🇮🇩']}
]}
]};
