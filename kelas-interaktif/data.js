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
]}
]};
