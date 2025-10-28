import { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  // =================================================================
  // Bahagian A: 20 Soalan (Soalan Asas & Dialog)
  // =================================================================
  {
    id: 1,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'مَا اسْمُكَ؟',
    options: ['اسْمِي أَحْمَدُ', 'أَنَا بِخَيْرٍ', 'مِنْ أَيْنَ أَنْتَ؟', 'إِلَى اللِّقَاءِ'],
    answer: 'اسْمِي أَحْمَدُ',
    explanation: 'Jawapan yang betul ialah "Nama saya Ahmad" sebagai respons kepada soalan "Siapakah nama awak (lelaki)?".'
  },
  {
    id: 2,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'كَيْفَ حَالُكِ؟',
    options: ['صَبَاحُ الخَيْرِ', 'أَنَا بِخَيْرٍ، شُكْرًا', 'مَسَاءُ الخَيْرِ', 'عَفْوًا'],
    answer: 'أَنَا بِخَيْرٍ، شُكْرًا',
    explanation: '"أَنَا بِخَيْرٍ، شُكْرًا" bermaksud "Saya khabar baik, terima kasih," yang merupakan jawapan yang sesuai untuk "Apa khabar (perempuan)?".'
  },
  {
    id: 3,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'أَهْلًا وَسَهْلًا',
    options: ['أَهْلًا بِكَ', 'وَعَلَيْكُمُ السَّلَامُ', 'مَعَ السَّلَامَةِ', 'صَبَاحُ النُّورِ'],
    answer: 'أَهْلًا بِكَ',
    explanation: 'Apabila seseorang mengucapkan "Selamat Datang" (أَهْلًا وَسَهْلًا), jawapan balas yang sesuai ialah "Selamat Datang Juga" (أَهْلًا بِكَ).'
  },
  {
    id: 4,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'مَنْ أَنْتَ؟',
    options: ['أَنَا أُسْتَاذٌ', 'هُوَ طَبِيْبٌ', 'هِيَ مُهَنْدِسَةٌ', 'هُمْ أَصْدِقَاءُ'],
    answer: 'أَنَا أُسْتَاذٌ',
    explanation: 'Soalan "Siapakah awak (lelaki)?" dijawab dengan "Saya seorang guru (lelaki)" (أَنَا أُسْتَاذٌ).'
  },
  {
    id: 5,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Ini ialah Fi\'il (kata kerja).',
    options: ['يَكْتُبُ', 'مَكْتَبٌ', 'كِتَابٌ', 'كَاتِبٌ'],
    answer: 'يَكْتُبُ',
    explanation: '"يَكْتُبُ" bermaksud "dia sedang menulis", yang merupakan kata kerja. Pilihan lain adalah kata nama.'
  },
  {
    id: 6,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Ini ialah Isim (kata nama).',
    options: ['يَجْلِسُ', 'جَلَسَ', 'كُرْسِيٌّ', 'جَالِسٌ'],
    answer: 'كُرْسِيٌّ',
    explanation: '"كُرْسِيٌّ" bermaksud "kerusi", yang merupakan kata nama. Pilihan lain adalah kata kerja atau kata sifat.'
  },
  {
    id: 7,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'شُكْرًا جَزِيْلًا',
    options: ['أَسِفٌ', 'عَفْوًا', 'لَا بَأْسَ', 'حَسَنًا'],
    answer: 'عَفْوًا',
    explanation: 'Jawapan balas untuk "Terima kasih banyak" (شُكْرًا جَزِيْلًا) ialah "Sama-sama" (عَفْوًا).'
  },
  {
    id: 8,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'إِلَى اللِّقَاءِ',
    options: ['تَفَضَّلْ', 'مَعَ السَّلَامَةِ', 'لَوْ سَمَحْتَ', 'لَيْلَةٌ سَعِيْدَةٌ'],
    answer: 'مَعَ السَّلَامَةِ',
    explanation: 'Apabila seseorang berkata "Selamat tinggal" (إِلَى اللِّقَاءِ), kita menjawab dengan "Semoga selamat" (مَعَ السَّلَامَةِ).'
  },
  {
    id: 9,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Pilih perkataan yang bermaksud "membaca".',
    options: ['يَأْكُلُ', 'يَشْرَبُ', 'يَقْرَأُ', 'يَنَامُ'],
    answer: 'يَقْرَأُ',
    explanation: '"يَقْرَأُ" adalah kata kerja bagi "membaca".'
  },
  {
    id: 10,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Pilih perkataan yang bermaksud "sekolah".',
    options: ['مَسْجِدٌ', 'مَدْرَسَةٌ', 'مُسْتَشْفَى', 'بَيْتٌ'],
    answer: 'مَدْرَسَةٌ',
    explanation: '"مَدْرَسَةٌ" adalah kata nama bagi "sekolah".'
  },
  {
    id: 11,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'صَبَاحُ الخَيْرِ',
    options: ['صَبَاحُ النُّورِ', 'مَسَاءُ الخَيْرِ', 'مَسَاءُ النُّورِ', 'أَهْلًا بِكَ'],
    answer: 'صَبَاحُ النُّورِ',
    explanation: 'Jawapan balas yang betul untuk "Selamat pagi" (صَبَاحُ الخَيْرِ) ialah "Selamat pagi juga" (صَبَاحُ النُّورِ).'
  },
  {
    id: 12,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Apakah maksud "طَبِيْبٌ"?',
    options: ['Guru', 'Doktor', 'Jurutera', 'Pelajar'],
    answer: 'Doktor'
  },
  {
    id: 13,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Pilih kata kerja (Fi\'il) yang sesuai untuk "Ahmad bola sepak".',
    options: ['تَلْعَبُ', 'يَلْعَبُ', 'لَاعِبٌ', 'مَلْعَبٌ'],
    answer: 'يَلْعَبُ',
    explanation: '"يَلْعَبُ" (dia sedang bermain) adalah kata kerja yang betul untuk subjek lelaki (Ahmad).'
  },
  {
    id: 14,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'مَاذَا تَعْمَلُ؟ (Apakah kerja awak?)',
    options: ['أَنَا أَسْكُنُ فِي القَرْيَةِ', 'أَنَا مُهَنْدِسٌ', 'عُمْرِي عَشْرُ سَنَوَاتٍ', 'أَنَا مِن مَالِيْزِيَا'],
    answer: 'أَنَا مُهَنْدِسٌ',
    explanation: 'Soalan ini bertanya tentang pekerjaan. Jawapan yang betul ialah "Saya seorang jurutera" (أَنَا مُهَنْدِسٌ).'
  },
  {
    id: 15,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Pilih Isim (kata nama) di antara berikut:',
    options: ['ذَهَبَ', 'جَمِيْلٌ', 'سَيَّارَةٌ', 'يَأْكُلُ'],
    answer: 'سَيَّارَةٌ',
    explanation: '"سَيَّارَةٌ" (kereta) adalah kata nama. Pilihan lain adalah kata kerja dan kata sifat.'
  },
  {
    id: 16,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'هَلْ هَذَا كِتَابُكَ؟ (Adakah ini buku awak?)',
    options: ['لَا، هَذَا قَلَمِي', 'نَعَمْ، هَذَا كِتَابِي', 'شُكْرًا لَكَ', 'أَنَا طَالِبٌ'],
    answer: 'نَعَمْ، هَذَا كِتَابِي',
    explanation: 'Jawapan yang paling logik untuk soalan "Adakah ini buku awak?" ialah "Ya, ini buku saya".'
  },
  {
    id: 17,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Apakah maksud "يَشْرَبُ"؟',
    options: ['Makan', 'Minum', 'Tidur', 'Duduk'],
    answer: 'Minum'
  },
  {
    id: 18,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Pilih Fi\'il (kata kerja) yang telah lepas (Madhi).',
    options: ['يَذْهَبُ', 'ذَهَبَ', 'اِذْهَبْ', 'ذَاهِبٌ'],
    answer: 'ذَهَبَ',
    explanation: '"ذَهَبَ" bermaksud "dia telah pergi", iaitu bentuk kata kerja lampau (Fi\'il Madhi).'
  },
  {
    id: 19,
    section: 'A',
    topic: 'Dialog & Ucapan',
    question: 'مَسَاءُ الخَيْرِ',
    options: ['صَبَاحُ النُّورِ', 'مَسَاءُ النُّورِ', 'تُصْبِحُ عَلَى خَيْرٍ', 'أَرَاكَ لَاحِقًا'],
    answer: 'مَسَاءُ النُّورِ',
    explanation: 'Jawapan balas yang betul untuk "Selamat petang" (مَسَاءُ الخَيْرِ) ialah "Selamat petang juga" (مَسَاءُ النُّورِ).'
  },
  {
    id: 20,
    section: 'A',
    topic: 'Kosa Kata',
    question: 'Manakah antara berikut adalah kata nama untuk tempat?',
    options: ['يُصَلِّي', 'مَسْجِدٌ', 'صَلَاةٌ', 'مُصَلٍّ'],
    answer: 'مَسْجِدٌ',
    explanation: '"مَسْجِدٌ" (masjid) adalah kata nama yang merujuk kepada sebuah tempat.'
  },

  // =================================================================
  // Bahagian B: 20 Soalan (Kosa Kata, Nombor, Waktu, Hari & Dhomir)
  // =================================================================
  {
    id: 21,
    section: 'B',
    topic: 'Kosa Kata',
    question: 'Apakah perkataan Arab untuk "epal"?',
    options: ['بُرْتُقَالٌ', 'تُفَّاحٌ', 'مَوْزٌ', 'عِنَبٌ'],
    answer: 'تُفَّاحٌ'
  },
  {
    id: 22,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'Pilih nombor ٢٠ (dua puluh) dalam perkataan.',
    options: ['عَشَرَةٌ', 'عِشْرُونَ', 'ثَلَاثُونَ', 'مِائَةٌ'],
    answer: 'عِشْرُونَ'
  },
  {
    id: 23,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'السَّاعَةُ الوَاحِدَةُ',
    options: ['Pukul 1', 'Pukul 2', 'Pukul 3', 'Pukul 12'],
    answer: 'Pukul 1'
  },
  {
    id: 24,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'Hari selepas hari Isnin ialah...',
    options: ['يَوْمُ الأَحَدِ', 'يَوْمُ الثُّلَاثَاءِ', 'يَوْمُ الأَرْبِعَاءِ', 'يَوْمُ السَّْبْتِ'],
    answer: 'يَوْمُ الثُّلَاثَاءِ'
  },
  {
    id: 25,
    section: 'B',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih dhomir (kata ganti nama) yang betul untuk "seorang guru perempuan".',
    options: ['هُوَ', 'هِيَ', 'أَنْتَ', 'أَنَا'],
    answer: 'هِيَ',
    explanation: '"هِيَ" bermaksud "dia" untuk perempuan.'
  },
  {
    id: 26,
    section: 'B',
    topic: 'Kosa Kata',
    question: 'Pilih haiwan yang hidup di dalam air.',
    options: ['أَسَدٌ', 'قِطٌّ', 'سَمَكَةٌ', 'عُصْفُورٌ'],
    answer: 'سَمَكَةٌ',
    explanation: '"سَمَكَةٌ" bermaksud "ikan".'
  },
  {
    id: 27,
    section: 'B',
    topic: 'Kosa Kata',
    question: 'Pakaian untuk menutup kepala wanita.',
    options: ['قَمِيْصٌ', 'سِرْوَالٌ', 'خِمَارٌ', 'فُسْتَانٌ'],
    answer: 'خِمَارٌ',
    explanation: '"خِمَارٌ" ialah tudung.'
  },
  {
    id: 28,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'Bulan Ramadhan adalah bulan ke-___ dalam kalendar Hijrah.',
    options: ['1', '9', '10', '12'],
    answer: '9'
  },
  {
    id: 29,
    section: 'B',
    topic: 'Tatabahasa Lanjutan',
    question: 'Lengkapkan ayat: "____ طُلَّابٌ مُجْتَهِدُونَ"',
    options: ['أَنْتُمْ', 'أَنْتُنَّ', 'هُمَا', 'نَحْنُ'],
    answer: 'أَنْتُمْ',
    explanation: '"أَنْتُمْ" (kamu semua lelaki) sesuai dengan "طُلَّابٌ" (pelajar-pelajar lelaki).'
  },
  {
    id: 30,
    section: 'B',
    topic: 'Kosa Kata',
    question: 'Apakah maksud "مِقَصٌّ"?',
    options: ['Pembaris', 'Gunting', 'Gam', 'Pensel'],
    answer: 'Gunting'
  },
  {
    id: 31,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'Pilih perkataan untuk ٧.',
    options: ['خَمْسَةٌ', 'سِتَّةٌ', 'سَبْعَةٌ', 'ثَمَانِيَةٌ'],
    answer: 'سَبْعَةٌ'
  },
  {
    id: 32,
    section: 'B',
    topic: 'Kosa Kata',
    question: 'Di manakah terletaknya "الْقَلْبُ"?',
    options: ['Di kepala', 'Di tangan', 'Di dada', 'Di kaki'],
    answer: 'Di dada',
    explanation: '"الْقَلْبُ" bermaksud jantung.'
  },
  {
    id: 33,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: '"السَّاعَةُ الثَّانِيَةُ وَالنِّصْفُ" ialah pukul...',
    options: ['2:00', '2:15', '2:30', '3:00'],
    answer: '2:30',
    explanation: '"النِّصْفُ" bermaksud setengah atau 30 minit.'
  },
  {
    id: 34,
    section: 'B',
    topic: 'Tatabahasa Lanjutan',
    question: 'Lengkapkan ayat: "____ نُحِبُّ المَدْرَسَةَ"',
    options: ['أَنَا', 'نَحْنُ', 'هُمْ', 'هُنَّ'],
    answer: 'نَحْنُ',
    explanation: 'Kata kerja "نُحِبُّ" (kami suka) bermula dengan huruf "ن", jadi ia sepadan dengan dhomir "نَحْنُ" (kami).'
  },
  {
    id: 35,
    section: 'B',
    topic: 'Kosa Kata',
    question: 'Pilih sayuran.',
    options: ['جَزَرٌ', 'مَانْجو', 'بِطِّيْخٌ', 'رُمَّانٌ'],
    answer: 'جَزَرٌ',
    explanation: '"جَزَرٌ" bermaksud lobak merah, iaitu sejenis sayuran.'
  },
  {
    id: 36,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'Hari terakhir dalam seminggu mengikut kalendar Islam.',
    options: ['الجُمُعَةُ', 'السَّبْتُ', 'الأَحَدُ', 'الاِثْنَيْنِ'],
    answer: 'السَّبْتُ'
  },
  {
    id: 37,
    section: 'B',
    topic: 'Tatabahasa Lanjutan',
    question: 'Ahmad dan Ali. Dhomir yang sesuai untuk mereka ialah...',
    options: ['هُمَا', 'هُمْ', 'هُنَّ', 'أَنْتُمَا'],
    answer: 'هُمَا',
    explanation: '"هُمَا" digunakan untuk merujuk kepada dua orang (lelaki atau perempuan).'
  },
  {
    id: 38,
    section: 'B',
    topic: 'Kosa Kata',
    question: '"غُرْفَةُ النَّوْمِ" ialah...',
    options: ['Ruang tamu', 'Bilik tidur', 'Dapur', 'Bilik air'],
    answer: 'Bilik tidur'
  },
  {
    id: 39,
    section: 'B',
    topic: 'Nombor & Waktu',
    question: 'Apakah bulan Masihi yang pertama?',
    options: ['فِبْرَايِر', 'يَنَايِر', 'مَارِس', 'أَبْرِيل'],
    answer: 'يَنَايِر'
  },
  {
    id: 40,
    section: 'B',
    topic: 'Tatabahasa Lanjutan',
    question: 'Lengkapkan ayat: "يَا فَاطِمَةُ، ____ طَالِبَةٌ مُؤَدَّبَةٌ"',
    options: ['أَنْتَ', 'أَنْتِ', 'هُوَ', 'هِيَ'],
    answer: 'أَنْتِ',
    explanation: 'Oleh kerana merujuk kepada Fatimah (perempuan), dhomir yang betul ialah "أَنْتِ" (awak perempuan).'
  },
  // =================================================================
  // Bahagian C: 25 Soalan (Tatabahasa Lanjutan)
  // =================================================================
  {
    id: 41,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih Isim (kata nama) dalam ayat ini: "ذَهَبَ الوَلَدُ إِلَى المَدْرَسَةِ"',
    options: ['ذَهَبَ', 'الوَلَدُ', 'إِلَى', 'كُلُّهُمْ أَسْمَاءٌ'],
    answer: 'الوَلَدُ',
    explanation: '"الولد" (budak lelaki) adalah kata nama. "المدرسة" juga kata nama tetapi tiada dalam pilihan. "إِلَى" ialah kata sendi.'
  },
  {
    id: 42,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Lengkapkan ayat: "هَذِهِ ______ جَمِيْلَةٌ"',
    options: ['بَيْتٌ', 'سَيَّارَةٌ', 'قَلَمٌ', 'كِتَابٌ'],
    answer: 'سَيَّارَةٌ',
    explanation: '"هذه" digunakan untuk kata nama muannath (berakhir dengan ة). "سيارة" adalah muannath, manakala pilihan lain adalah muzakkar.'
  },
  {
    id: 43,
    section: 'C',
    topic: 'Nombor & Waktu',
    question: 'Padanan yang betul untuk nombor 150.',
    options: ['مِائَةٌ وَخَمْسَةٌ', 'خَمْسُونَ وَمِائَةٌ', 'مِائَةٌ وَخَمْسُونَ', 'خَمْسَةٌ وَعِشْرُونَ'],
    answer: 'مِائَةٌ وَخَمْسُونَ'
  },
  {
    id: 44,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih ayat yang merupakan Jumlah Fi\'liyyah (ayat bermula dengan kata kerja).',
    options: ['الطَّالِبُ يَقْرَأُ القُرْآنَ', 'يَقْرَأُ الطَّالِبُ القُرْآنَ', 'القُرْآنُ كَلَامُ اللهِ', 'المَدْرَسَةُ جَمِيْلَةٌ'],
    answer: 'يَقْرَأُ الطَّالِبُ القُرْآنَ',
    explanation: 'Jumlah Fi\'liyyah ialah ayat yang dimulakan dengan Fi\'il (kata kerja). "يَقْرَأُ" ialah kata kerja.'
  },
  {
    id: 45,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih Harf Jar (kata sendi nama) yang betul: "الكِتَابُ ___ المَكْتَبِ"',
    options: ['عَلَى', 'فِي', 'مِنْ', 'إِلَى'],
    answer: 'عَلَى',
    explanation: '"عَلَى" bermaksud "di atas", sesuai dengan konteks ayat "Buku itu di atas meja".'
  },
  {
    id: 46,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih ayat yang merupakan Jumlah Ismiyyah (ayat bermula dengan kata nama).',
    options: ['تَكْتُبُ فَاطِمَةُ الوَاجِبَ', 'الفَصْلُ نَظِيْفٌ', 'ذَهَبَ أَحْمَدُ', 'صَلَّى المُسْلِمُونَ'],
    answer: 'الفَصْلُ نَظِيْفٌ',
    explanation: 'Jumlah Ismiyyah ialah ayat yang dimulakan dengan Isim (kata nama). "الفَصْلُ" (kelas) ialah kata nama.'
  },
  {
    id: 47,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih Zorf (kata keterangan tempat) yang betul: "القِطُّ ___ الطَّاوِلَةِ"',
    options: ['تَحْتَ', 'أَمَامَ', 'وَرَاءَ', 'كُلُّ مَا سَبَقَ'],
    answer: 'تَحْتَ',
    explanation: '"تَحْتَ" (di bawah), "أَمَامَ" (di hadapan), dan "وَرَاءَ" (di belakang) semuanya betul, tetapi "di bawah" adalah yang paling lazim untuk kucing.'
  },
  {
    id: 48,
    section: 'C',
    topic: 'Nombor & Waktu',
    question: 'Ayat yang betul untuk 9:45.',
    options: ['السَّاعَةُ التَّاسِعَةُ وَالرُّبْعُ', 'السَّاعَةُ العَاشِرَةُ إِلَّا الرُّبْعَ', 'السَّاعَةُ التَّاسِعَةُ وَالنِّصْفُ', 'السَّاعَةُ العَاشِرَةُ وَالرُّبْعُ'],
    answer: 'السَّاعَةُ العَاشِرَةُ إِلَّا الرُّبْعَ',
    explanation: '9:45 juga disebut sebagai "Pukul 10 kurang suku". "إِلَّا الرُّبْعَ" bermaksud "kurang suku".'
  },
  {
    id: 49,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Susun perkataan menjadi ayat yang betul: "الطَّالِبُ - الفَصْلِ - فِي - يَجْلِسُ"',
    options: ['الطَّالِبُ يَجْلِسُ فِي الفَصْلِ', 'يَجْلِسُ فِي الفَصْلِ الطَّالِبُ', 'الفَصْلِ فِي يَجْلِسُ الطَّالِبُ', 'فِي يَجْلِسُ الطَّالِبُ الفَصْلِ'],
    answer: 'الطَّالِبُ يَجْلِسُ فِي الفَصْلِ'
  },
  {
    id: 50,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih kata nama Muannath (perempuan).',
    options: ['مُعَلِّمٌ', 'طَبِيْبٌ', 'مُهَنْدِسَةٌ', 'وَلَدٌ'],
    answer: 'مُهَنْدِسَةٌ',
    explanation: 'Kata nama muannath biasanya berakhir dengan huruf "ة" (ta marbutah).'
  },
  {
    id: 51,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Apakah bentuk jamak (plural) bagi "طَالِبٌ"?',
    options: ['طَالِبَانِ', 'طَالِبَاتٌ', 'طُلَّابٌ', 'طَالِبَتَانِ'],
    answer: 'طُلَّابٌ'
  },
  {
    id: 52,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih kata sifat yang sesuai untuk "البَيْتُ ___"',
    options: ['كَبِيْرٌ', 'كَبِيْرَةٌ', 'صَغِيْرَةٌ', 'جَمِيْلَةٌ'],
    answer: 'كَبِيْرٌ',
    explanation: '"البَيْتُ" adalah kata nama muzakkar (lelaki), jadi ia memerlukan kata sifat muzakkar seperti "كَبِيْرٌ".'
  },
  {
    id: 53,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Kata tanya yang digunakan untuk menanyakan harga ialah...',
    options: ['كَيْفَ', 'مَتَى', 'أَيْنَ', 'كَمْ'],
    answer: 'كَمْ',
    explanation: '"كَمْ" bermaksud "berapa".'
  },
  {
    id: 54,
    section: 'C',
    topic: 'Nombor & Waktu',
    question: '25 dalam perkataan Arab ialah...',
    options: ['خَمْسَةٌ وَعِشْرُونَ', 'خَمْسَةٌ وَثَلَاثُونَ', 'اِثْنَانِ وَخَمْسُونَ', 'خَمْسَةَ عَشَرَ'],
    answer: 'خَمْسَةٌ وَعِشْرُونَ'
  },
  {
    id: 55,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih kata kerja perintah (Fi\'il Amr).',
    options: ['يَكْتُبُ', 'كَتَبَ', 'اُكْتُبْ', 'كَاتِبٌ'],
    answer: 'اُكْتُبْ',
    explanation: '"اُكْتُبْ" bermaksud "Tulislah!".'
  },
  {
    id: 56,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Ayat manakah yang mempunyai kata sendi nama (Harf Jar)?',
    options: ['الشَّمْسُ مُشْرِقَةٌ', 'القَمَرُ مُنِيْرٌ', 'أَنَا مِن مَالِيْزِيَا', 'الكِتَابُ جَدِيْدٌ'],
    answer: 'أَنَا مِن مَالِيْزِيَا',
    explanation: '"مِنْ" (dari) adalah salah satu contoh Harf Jar.'
  },
  {
    id: 57,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih bentuk Mufrad (tunggal) bagi "أَقْلَامٌ".',
    options: ['قَلَمَانِ', 'قَلَمٌ', 'قَلَمَةٌ', 'مِقْلَمَةٌ'],
    answer: 'قَلَمٌ'
  },
  {
    id: 58,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih ayat yang betul dari segi tatabahasa.',
    options: ['يَذْهَبُ فَاطِمَةُ', 'تَذْهَبُ أَحْمَدُ', 'تَذْهَبُ فَاطِمَةُ', 'يَذْهَبُونَ فَاطِمَةُ'],
    answer: 'تَذْهَبُ فَاطِمَةُ',
    explanation: 'Kata kerja untuk subjek perempuan (Fatimah) mestilah dalam bentuk muannath, iaitu "تَذْهَبُ".'
  },
  {
    id: 59,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Huruf-huruf (م، س، ج، د) boleh membentuk perkataan...',
    options: ['مَدْرَسَةٌ', 'مَسْجِدٌ', 'مَدِيْنَةٌ', 'مُدَرِّسٌ'],
    answer: 'مَسْجِدٌ'
  },
  {
    id: 60,
    section: 'C',
    topic: 'Nombor & Waktu',
    question: 'Pukul 6:20. Pilih jawapan yang paling tepat.',
    options: ['السَّادِسَةُ وَالثُّلُثُ', 'السَّادِسَةُ وَالرُّبْعُ', 'السَّادِسَةُ وَعِشْرُونَ دَقِيْقَةً', 'السَّابِعَةُ إِلَّا الثُّلُثَ'],
    answer: 'السَّادِسَةُ وَالثُّلُثُ',
    explanation: '20 minit adalah bersamaan dengan satu pertiga (الثُّلُثُ) jam.'
  },
  {
    id: 61,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Lengkapkan ayat: "المُعَلِّمُونَ ____ فِي الفَصْلِ."',
    options: ['جَالِسٌ', 'جَالِسَةٌ', 'جَالِسُونَ', 'جَالِسَاتٌ'],
    answer: 'جَالِسُونَ',
    explanation: '"المُعَلِّمُونَ" adalah jamak muzakkar salim (guru-guru lelaki), jadi ia memerlukan kata sifat jamak muzakkar salim juga.'
  },
  {
    id: 62,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: '"____ الطَّائِرُ فَوْقَ الشَّجَرَةِ". Perkataan yang sesuai untuk diisi ialah:',
    options: ['تَطِيْرُ', 'يَطِيْرُ', 'طَائِرَةٌ', 'مَطَارٌ'],
    answer: 'يَطِيْرُ',
    explanation: '"الطَّائِرُ" (burung) adalah muzakkar, jadi kata kerja yang sesuai ialah "يَطِيْرُ" (terbang).'
  },
  {
    id: 63,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Ayat manakah yang menggunakan Isim Isyarah (kata tunjuk) dengan betul?',
    options: ['هَذَا سَيَّارَةٌ', 'هَذِهِ بَيْتٌ', 'ذَلِكَ قَمَرٌ', 'تِلْكَ كِتَابٌ'],
    answer: 'ذَلِكَ قَمَرٌ',
    explanation: '"ذَلِكَ" digunakan untuk objek muzakkar yang jauh. "قَمَرٌ" (bulan) adalah muzakkar.'
  },
  {
    id: 64,
    section: 'C',
    topic: 'Tatabahasa Lanjutan',
    question: 'Apakah bentuk Muthanna (dua) bagi "مُعَلِّمَةٌ"?',
    options: ['مُعَلِّمَتَانِ', 'مُعَلِّمَاتٌ', 'مُعَلِّمُونَ', 'مُعَلِّمَانِ'],
    answer: 'مُعَلِّمَتَانِ'
  },
  {
    id: 65,
    section: 'C',
    topic: 'Nombor & Waktu',
    question: 'Tahun 2024. Manakah antara berikut BUKAN bulan dalam tahun Hijrah?',
    options: ['مُحَرَّمٌ', 'رَجَبٌ', 'أُغُسْطُسُ', 'ذُو الحِجَّةِ'],
    answer: 'أُغُسْطُسُ',
    explanation: '"أُغُسْطُسُ" (Ogos) ialah bulan Masihi.'
  },

  // =================================================================
  // Bahagian D: 20 Soalan (Pemahaman Teks & Kemahiran Tinggi)
  // =================================================================
  {
    id: 66,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'اسْمِي حَسَنٌ. أَنَا طَبِيْبٌ. زَوْجَتِي مُدَرِّسَةٌ، اِسْمُهَا عَائِشَةُ. لَدَيْنَا وَلَدٌ وَاحِدٌ، اِسْمُهُ عَقِيْلٌ. نَسْكُنُ فِي مَدِيْنَةِ كُوَالَا لُمْبُور.',
    question: 'مَنْ هُوَ حَسَنٌ؟',
    options: ['مُدَرِّسٌ', 'طَبِيْبٌ', 'مُهَنْدِسٌ', 'طَالِبٌ'],
    answer: 'طَبِيْبٌ'
  },
  {
    id: 67,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'اسْمِي حَسَنٌ. أَنَا طَبِيْبٌ. زَوْجَتِي مُدَرِّسَةٌ، اِسْمُهَا عَائِشَةُ. لَدَيْنَا وَلَدٌ وَاحِدٌ، اِسْمُهُ عَقِيْلٌ. نَسْكُنُ فِي مَدِيْنَةِ كُوَالَا لُمْبُور.',
    question: 'مَا اسْمُ زَوْجَةِ حَسَنٍ؟',
    options: ['فَاطِمَةُ', 'خَدِيْجَةُ', 'عَائِشَةُ', 'زَيْنَبُ'],
    answer: 'عَائِشَةُ'
  },
  {
    id: 68,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'اسْمِي حَسَنٌ. أَنَا طَبِيْبٌ. زَوْجَتِي مُدَرِّسَةٌ، اِسْمُهَا عَائِشَةُ. لَدَيْنَا وَلَدٌ وَاحِدٌ، اِسْمُهُ عَقِيْلٌ. نَسْكُنُ فِي مَدِيْنَةِ كُوَالَا لُمْبُور.',
    question: 'أَيْنَ تَسْكُنُ عَائِلَةُ حَسَنٍ؟',
    options: ['فِي القَرْيَةِ', 'فِي المَدْرَسَةِ', 'فِي المُسْتَشْفَى', 'فِي مَدِيْنَةِ كُوَالَا لُمْبُور'],
    answer: 'فِي مَدِيْنَةِ كُوَالَا لُمْبُور'
  },
  {
    id: 69,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'اسْمِي حَسَنٌ. أَنَا طَبِيْبٌ. زَوْجَتِي مُدَرِّسَةٌ، اِسْمُهَا عَائِشَةُ. لَدَيْنَا وَلَدٌ وَاحِدٌ، اِسْمُهُ عَقِيْلٌ. نَسْكُنُ فِي مَدِيْنَةِ كُوَالَا لُمْبُور.',
    question: 'كَمْ وَلَدًا لَدَى حَسَنٍ؟',
    options: ['وَلَدَانِ', 'ثَلَاثَةُ أَوْلَادٍ', 'وَلَدٌ وَاحِدٌ', 'لَا يُوْجَدُ أَوْلَادٌ'],
    answer: 'وَلَدٌ وَاحِدٌ'
  },
  {
    id: 70,
    section: 'D',
    topic: 'Tatabahasa Lanjutan',
    question: 'Bina ayat yang sempurna menggunakan "المُسْلِمُ - إِلَى - يَذْهَبُ - المَسْجِدِ".',
    options: ['يَذْهَبُ المُسْلِمُ إِلَى المَسْجِدِ', 'المُسْلِمُ إِلَى المَسْجِدِ يَذْهَبُ', 'إِلَى المَسْجِدِ يَذْهَبُ المُسْلِمُ', 'المَسْجِدِ يَذْهَبُ إِلَى المُسْلِمُ'],
    answer: 'يَذْهَبُ المُسْلِمُ إِلَى المَسْجِدِ'
  },
  {
    id: 71,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'فِي يَوْمِ العُطْلَةِ، تَذْهَبُ فَاطِمَةُ مَعَ أُسْرَتِهَا إِلَى حَدِيْقَةِ الحَيَوَانَاتِ. تَرَى فَاطِمَةُ حَيَوَانَاتٍ كَثِيْرَةً مِثْلَ الفِيْلِ وَالأَسَدِ وَالزَّرَافَةِ. هِيَ سَعِيْدَةٌ جِدًّا.',
    question: 'إِلَى أَيْنَ تَذْهَبُ فَاطِمَةُ فِي يَوْمِ العُطْلَةِ؟',
    options: ['إِلَى الشَّاطِئِ', 'إِلَى المَدْرَسَةِ', 'إِلَى السُّوقِ', 'إِلَى حَدِيْقَةِ الحَيَوَانَاتِ'],
    answer: 'إِلَى حَدِيْقَةِ الحَيَوَانَاتِ'
  },
  {
    id: 72,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'فِي يَوْمِ العُطْلَةِ، تَذْهَبُ فَاطِمَةُ مَعَ أُسْرَتِهَا إِلَى حَدِيْقَةِ الحَيَوَانَاتِ. تَرَى فَاطِمَةُ حَيَوَانَاتٍ كَثِيْرَةً مِثْلَ الفِيْلِ وَالأَسَدِ وَالزَّرَافَةِ. هِيَ سَعِيْدَةٌ جِدًّا.',
    question: 'مَعَ مَنْ تَذْهَبُ فَاطِمَةُ؟',
    options: ['مَعَ أَصْدِقَائِهَا', 'مَعَ المُعَلِّمَةِ', 'مَعَ أُسْرَتِهَا', 'بِمُفْرَدِهَا'],
    answer: 'مَعَ أُسْرَتِهَا'
  },
  {
    id: 73,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'فِي يَوْمِ العُطْلَةِ، تَذْهَبُ فَاطِمَةُ مَعَ أُسْرَتِهَا إِلَى حَدِيْقَةِ الحَيَوَانَاتِ. تَرَى فَاطِمَةُ حَيَوَانَاتٍ كَثِيْرَةً مِثْلَ الفِيْلِ وَالأَسَدِ وَالزَّرَافَةِ. هِيَ سَعِيْدَةٌ جِدًّا.',
    question: 'مَاذَا تَرَى فَاطِمَةُ فِي الحَدِيْقَةِ؟',
    options: ['أَزْهَارًا جَمِيْلَةً', 'أَشْجَارًا عَالِيَةً', 'حَيَوَانَاتٍ كَثِيْرَةً', 'أَلْعَابًا مُسَلِّيَةً'],
    answer: 'حَيَوَانَاتٍ كَثِيْرَةً'
  },
  {
    id: 74,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'فِي يَوْمِ العُطْلَةِ، تَذْهَبُ فَاطِمَةُ مَعَ أُسْرَتِهَا إِلَى حَدِيْقَةِ الحَيَوَانَاتِ. تَرَى فَاطِمَةُ حَيَوَانَاتٍ كَثِيْرَةً مِثْلَ الفِيْلِ وَالأَسَدِ وَالزَّرَافَةِ. هِيَ سَعِيْدَةٌ جِدًّا.',
    question: 'كَيْفَ شُعُورُ فَاطِمَةَ؟',
    options: ['حَزِيْنَةٌ', 'غَاضِبَةٌ', 'سَعِيْدَةٌ', 'خَائِفَةٌ'],
    answer: 'سَعِيْدَةٌ'
  },
  {
    id: 75,
    section: 'D',
    topic: 'Tatabahasa Lanjutan',
    question: 'Ayat manakah yang paling sesuai untuk menggambarkan "Seorang pelajar perempuan sedang membaca buku"?',
    options: ['يَقْرَأُ الطَّالِبُ كِتَابًا', 'تَقْرَأُ الطَّالِبَةُ كِتَابًا', 'يَقْرَأُونَ الطُّلَّابُ كُتُبًا', 'تَقْرَأْنَ الطَّالِبَاتُ كُتُبًا'],
    answer: 'تَقْرَأُ الطَّالِبَةُ كِتَابًا'
  },
  {
    id: 76,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'أَحْمَدُ تِلْمِيْذٌ نَشِيْطٌ. يَسْتَيْقِظُ مِنَ النَّوْمِ فِي السَّاعَةِ الخَامِسَةِ صَبَاحًا. ثُمَّ يُصَلِّي الصُّبْحَ وَيَقْرَأُ القُرْآنَ. بَعْدَ ذَلِكَ، يَتَنَاوَلُ الفُطُورَ وَيَذْهَبُ إِلَى المَدْرَسَةِ.',
    question: 'مَتَى يَسْتَيْقِظُ أَحْمَدُ؟',
    options: ['فِي السَّاعَةِ السَّادِسَةِ', 'فِي السَّاعَةِ الخَامِسَةِ', 'فِي السَّاعَةِ السَّابِعَةِ', 'قَبْلَ الفَجْرِ'],
    answer: 'فِي السَّاعَةِ الخَامِسَةِ'
  },
  {
    id: 77,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'أَحْمَدُ تِلْمِيْذٌ نَشِيْطٌ. يَسْتَيْقِظُ مِنَ النَّوْمِ فِي السَّاعَةِ الخَامِسَةِ صَبَاحًا. ثُمَّ يُصَلِّي الصُّبْحَ وَيَقْرَأُ القُرْآنَ. بَعْدَ ذَلِكَ، يَتَنَاوَلُ الفُطُورَ وَيَذْهَبُ إِلَى المَدْرَسَةِ.',
    question: 'مَاذَا يَفْعَلُ أَحْمَدُ بَعْدَ صَلَاةِ الصُّبْحِ؟',
    options: ['يَنَامُ مَرَّةً أُخْرَى', 'يَذْهَبُ إِلَى المَدْرَسَةِ', 'يَقْرَأُ القُرْآنَ', 'يَلْعَبُ مَعَ أَصْدِقَائِهِ'],
    answer: 'يَقْرَأُ القُرْآنَ'
  },
  {
    id: 78,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'أَحْمَدُ تِلْمِيْذٌ نَشِيْطٌ. يَسْتَيْقِظُ مِنَ النَّوْمِ فِي السَّاعَةِ الخَامِسَةِ صَبَاحًا. ثُمَّ يُصَلِّي الصُّبْحَ وَيَقْرَأُ القُرْآنَ. بَعْدَ ذَلِكَ، يَتَنَاوَلُ الفُطُورَ وَيَذْهَبُ إِلَى المَدْرَسَةِ.',
    question: 'مَا هِيَ صِفَةُ أَحْمَدَ؟',
    options: ['كَسُولٌ', 'نَشِيْطٌ', 'حَزِيْنٌ', 'مَرِيْضٌ'],
    answer: 'نَشِيْطٌ'
  },
  {
    id: 79,
    section: 'D',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih jawapan yang menafikan ayat "الطَّقْسُ حَارٌّ".',
    options: ['لَيْسَ الطَّقْسُ حَارًّا', 'كَانَ الطَّقْسُ حَارًّا', 'إِنَّ الطَّقْسَ حَارٌّ', 'هَلِ الطَّقْسُ حَارٌّ؟'],
    answer: 'لَيْسَ الطَّقْسُ حَارًّا',
    explanation: '"لَيْسَ" digunakan untuk menafikan (negate) ayat Ismiyyah.'
  },
  {
    id: 80,
    section: 'D',
    topic: 'Tatabahasa Lanjutan',
    question: 'Tukar ayat ini kepada bentuk Muannath (perempuan): "جَلَسَ الطَّالِبُ عَلَى الكُرْسِيِّ"',
    options: ['جَلَسَتِ الطَّالِبَةُ عَلَى الكُرْسِيِّ', 'جَلَسْنَ الطَّالِبَاتُ عَلَى الكُرْسِيِّ', 'تَجْلِسُ الطَّالِبَةُ عَلَى الكُرْسِيِّ', 'اِجْلِسِي عَلَى الكُرْسِيِّ'],
    answer: 'جَلَسَتِ الطَّالِبَةُ عَلَى الكُرْسِيِّ'
  },
  {
    id: 81,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'قِصَّةُ أَصْحَابِ الفِيْلِ: أَبْرَهَةُ هُوَ مَلِكُ الحَبَشَةِ. أَرَادَ أَنْ يَهْدِمَ الكَعْبَةَ. فَأَرْسَلَ اللهُ طَيْرًا أَبَابِيْلَ تَرْمِيْهِمْ بِحِجَارَةٍ مِنْ سِجِّيْلٍ.',
    question: 'مَنْ هُوَ أَبْرَهَةُ؟',
    options: ['نَبِيٌّ', 'مَلِكُ الحَبَشَةِ', 'صَحَابِيٌّ', 'شَاعِرٌ'],
    answer: 'مَلِكُ الحَبَشَةِ'
  },
  {
    id: 82,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'قِصَّةُ أَصْحَابِ الفِيْلِ: أَبْرَهَةُ هُوَ مَلِكُ الحَبَشَةِ. أَرَادَ أَنْ يَهْدِمَ الكَعْبَةَ. فَأَرْسَلَ اللهُ طَيْرًا أَبَابِيْلَ تَرْمِيْهِمْ بِحِجَارَةٍ مِنْ سِجِّيْلٍ.',
    question: 'مَاذَا أَرَادَ أَبْرَهَةُ أَنْ يَفْعَلَ؟',
    options: ['أَنْ يَبْنِيَ الكَعْبَةَ', 'أَنْ يَزُوْرَ الكَعْبَةَ', 'أَنْ يَهْدِمَ الكَعْبَةَ', 'أَنْ يُصَلِّيَ فِي الكَعْبَةِ'],
    answer: 'أَنْ يَهْدِمَ الكَعْبَةَ'
  },
  {
    id: 83,
    section: 'D',
    topic: 'Pemahaman Teks',
    passage: 'قِصَّةُ أَصْحَابِ الفِيْلِ: أَبْرَهَةُ هُوَ مَلِكُ الحَبَشَةِ. أَرَادَ أَنْ يَهْدِمَ الكَعْبَةَ. فَأَرْSَلَ اللهُ طَيْرًا أَبَابِيْلَ تَرْمِيْهِمْ بِحِجَارَةٍ مِنْ سِجِّيْلٍ.',
    question: 'بِمَاذَا رَمَتِ الطُّيُورُ جَيْشَ أَبْرَهَةَ؟',
    options: ['بِالمَاءِ', 'بِالنَّارِ', 'بِحِجَارَةٍ مِنْ سِجِّيْلٍ', 'بِالسِّهَامِ'],
    answer: 'بِحِجَارَةٍ مِنْ سِجِّيْلٍ'
  },
  {
    id: 84,
    section: 'D',
    topic: 'Tatabahasa Lanjutan',
    question: '"لَمْ" adalah huruf yang masuk pada Fi\'il Mudhari\' dan menjadikannya...',
    options: ['مَنْصُوبٌ (baris atas)', 'مَجْرُورٌ (baris bawah)', 'مَرْفُوعٌ (baris depan)', 'مَجْزُومٌ (baris mati/sukun)'],
    answer: 'مَجْزُومٌ (baris mati/sukun)',
    explanation: 'Contoh: "يَذْهَبُ" menjadi "لَمْ يَذْهَبْ". Ini adalah topik tatabahasa lanjutan.'
  },
  {
    id: 85,
    section: 'D',
    topic: 'Tatabahasa Lanjutan',
    question: 'Pilih ayat yang mempunyai Maf\'ul Bih (objek).',
    options: ['نَامَ الوَلَدُ', 'جَاءَ الرَّجُلُ', 'أَكَلَ أَحْمَدُ التُّفَّاحَةَ', 'ذَهَبَتْ فَاطِمَةُ'],
    answer: 'أَكَلَ أَحْمَدُ التُّفَّاحَةَ',
    explanation: 'Dalam ayat ini, "أَحْمَدُ" ialah subjek, "أَكَلَ" ialah kata kerja, dan "التُّفَّاحَةَ" (epal itu) ialah objek (Maf\'ul Bih) yang dikenakan perbuatan.'
  }
];
