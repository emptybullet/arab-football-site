// ═══════════════════════════════════════════════
// ARAB FOOTBALL LIBRARY — domestic.js
// All 24 Arab League nations + their competitions
// ═══════════════════════════════════════════════

const DOMESTIC = {

  countries: [

    // ── GULF ──────────────────────────────────
    {
      id: "sa", flag: "🇸🇦", nameAr: "السعودية", nameEn: "Saudi Arabia",
      conf: "AFC", sub: "WAFF", founded: 1956,
      comps: [
        { id:"sa-league", name:"دوري روشن للمحترفين", type:"league", since:1976, current_champion:"الهلال", note:"أقوى دوري في آسيا بحسب تصنيف AFC" },
        { id:"sa-cup",    name:"كأس خادم الحرمين الشريفين", type:"cup", since:1957, current_champion:"الاتحاد" },
        { id:"sa-super",  name:"كأس السوبر السعودي", type:"super", since:1991, current_champion:"الهلال" },
      ]
    },
    {
      id: "uae", flag: "🇦🇪", nameAr: "الإمارات", nameEn: "UAE",
      conf: "AFC", sub: "WAFF", founded: 1971,
      comps: [
        { id:"uae-league", name:"دوري ADNOC للمحترفين", type:"league", since:1973, current_champion:"الشارقة" },
        { id:"uae-cup",    name:"كأس رئيس الدولة", type:"cup", since:1975, current_champion:"الجزيرة" },
        { id:"uae-super",  name:"كأس السوبر الإماراتي", type:"super", since:2008, current_champion:"الشارقة" },
      ]
    },
    {
      id: "qa", flag: "🇶🇦", nameAr: "قطر", nameEn: "Qatar",
      conf: "AFC", sub: "WAFF", founded: 1960,
      comps: [
        { id:"qa-league", name:"دوري نجوم قطر", type:"league", since:1972, current_champion:"الدحيل" },
        { id:"qa-cup",    name:"كأس أمير قطر", type:"cup", since:1974, current_champion:"السد" },
        { id:"qa-super",  name:"كأس السوبر القطري", type:"super", since:2003, current_champion:"الدحيل" },
      ]
    },
    {
      id: "kw", flag: "🇰🇼", nameAr: "الكويت", nameEn: "Kuwait",
      conf: "AFC", sub: "WAFF", founded: 1952,
      comps: [
        { id:"kw-league", name:"دوري الكويت للمحترفين", type:"league", since:1961, current_champion:"الكويت" },
        { id:"kw-cup",    name:"كأس أمير الكويت", type:"cup", since:1952, current_champion:"القادسية" },
        { id:"kw-super",  name:"كأس السوبر الكويتي", type:"super", since:1986, current_champion:"الكويت" },
      ]
    },
    {
      id: "bh", flag: "🇧🇭", nameAr: "البحرين", nameEn: "Bahrain",
      conf: "AFC", sub: "WAFF", founded: 1957,
      comps: [
        { id:"bh-league", name:"دوري المنامة للمحترفين", type:"league", since:1957, current_champion:"الرفاع" },
        { id:"bh-cup",    name:"كأس الملك", type:"cup", since:1953, current_champion:"المحرق" },
        { id:"bh-super",  name:"سوبر البحرين", type:"super", since:2007, current_champion:"الرفاع" },
      ]
    },
    {
      id: "om", flag: "🇴🇲", nameAr: "عُمان", nameEn: "Oman",
      conf: "AFC", sub: "WAFF", founded: 1978,
      comps: [
        { id:"om-league", name:"دوري عُمان للمحترفين", type:"league", since:1978, current_champion:"مسقط" },
        { id:"om-cup",    name:"كأس جلالة السلطان", type:"cup", since:1981, current_champion:"الصلالة" },
        { id:"om-super",  name:"سوبر عُمان", type:"super", since:2010, current_champion:"مسقط" },
      ]
    },

    // ── LEVANT ────────────────────────────────
    {
      id: "jo", flag: "🇯🇴", nameAr: "الأردن", nameEn: "Jordan",
      conf: "AFC", sub: "WAFF", founded: 1949,
      comps: [
        { id:"jo-league", name:"دوري المحترفين الأردني", type:"league", since:1944, current_champion:"الفيصلي" },
        { id:"jo-cup",    name:"كأس الملك عبدالله الثاني", type:"cup", since:1971, current_champion:"الوحدات" },
        { id:"jo-super",  name:"سوبر الأردن", type:"super", since:2010, current_champion:"الفيصلي" },
      ]
    },
    {
      id: "sy", flag: "🇸🇾", nameAr: "سوريا", nameEn: "Syria",
      conf: "AFC", sub: "WAFF", founded: 1936,
      comps: [
        { id:"sy-league", name:"دوري كرة القدم السوري الممتاز", type:"league", since:1966, current_champion:"الجيش" },
        { id:"sy-cup",    name:"كأس سوريا", type:"cup", since:1959, current_champion:"تشرين" },
        { id:"sy-super",  name:"سوبر سوريا", type:"super", since:2005, current_champion:"الجيش" },
      ]
    },
    {
      id: "lb", flag: "🇱🇧", nameAr: "لبنان", nameEn: "Lebanon",
      conf: "AFC", sub: "WAFF", founded: 1933,
      comps: [
        { id:"lb-league", name:"الدوري اللبناني الممتاز", type:"league", since:1934, current_champion:"الأنصار" },
        { id:"lb-cup",    name:"كأس لبنان", type:"cup", since:1964, current_champion:"النجمة" },
        { id:"lb-super",  name:"سوبر لبنان", type:"super", since:2004, current_champion:"الأنصار" },
      ]
    },
    {
      id: "ps", flag: "🇵🇸", nameAr: "فلسطين", nameEn: "Palestine",
      conf: "AFC", sub: "WAFF", founded: 1928,
      comps: [
        { id:"ps-league", name:"دوري الضفة الغربية الممتاز", type:"league", since:1978, current_champion:"هلال القدس" },
        { id:"ps-cup",    name:"كأس فلسطين", type:"cup", since:2005, current_champion:"جبل المكبر" },
      ]
    },
    {
      id: "iq", flag: "🇮🇶", nameAr: "العراق", nameEn: "Iraq",
      conf: "AFC", sub: "WAFF", founded: 1948,
      comps: [
        { id:"iq-league", name:"دوري نجوم العراق", type:"league", since:1974, current_champion:"الزوراء" },
        { id:"iq-cup",    name:"كأس العراق", type:"cup", since:1964, current_champion:"الزوراء" },
        { id:"iq-super",  name:"سوبر العراق", type:"super", since:2013, current_champion:"الزوراء" },
      ]
    },
    {
      id: "ye", flag: "🇾🇪", nameAr: "اليمن", nameEn: "Yemen",
      conf: "AFC", sub: "WAFF", founded: 1962,
      comps: [
        { id:"ye-league", name:"الدوري اليمني للمحترفين", type:"league", since:1972, current_champion:"الاتحاد السكندري (موقوف)" },
        { id:"ye-cup",    name:"كأس الجمهورية اليمني", type:"cup", since:1970, current_champion:"—", note:"متوقف بسبب الأزمة" },
      ]
    },

    // ── NORTH AFRICA ──────────────────────────
    {
      id: "eg", flag: "🇪🇬", nameAr: "مصر", nameEn: "Egypt",
      conf: "CAF", sub: "UNAF", founded: 1921,
      comps: [
        { id:"eg-league", name:"الدوري المصري الممتاز", type:"league", since:1948, current_champion:"الأهلي", note:"الأهلي أكثر الأندية حصداً للدوري (42+ لقب)" },
        { id:"eg-cup",    name:"كأس مصر", type:"cup", since:1921, current_champion:"الأهلي" },
        { id:"eg-super",  name:"كأس السوبر المصري", type:"super", since:2001, current_champion:"الأهلي" },
      ]
    },
    {
      id: "dz", flag: "🇩🇿", nameAr: "الجزائر", nameEn: "Algeria",
      conf: "CAF", sub: "UNAF", founded: 1962,
      comps: [
        { id:"dz-league", name:"الرابطة المحترفة الأولى — Mobilis", type:"league", since:1963, current_champion:"مولودية الجزائر" },
        { id:"dz-cup",    name:"كأس الجزائر", type:"cup", since:1963, current_champion:"اتحاد الجزائر" },
        { id:"dz-super",  name:"سوبر الجزائر", type:"super", since:2001, current_champion:"اتحاد الجزائر" },
      ]
    },
    {
      id: "ma", flag: "🇲🇦", nameAr: "المغرب", nameEn: "Morocco",
      conf: "CAF", sub: "UNAF", founded: 1955,
      comps: [
        { id:"ma-league", name:"Botola Pro — الدوري المغربي", type:"league", since:1956, current_champion:"الرجاء" },
        { id:"ma-cup",    name:"كأس العرش", type:"cup", since:1956, current_champion:"الوداد" },
        { id:"ma-super",  name:"سوبر المغرب", type:"super", since:2005, current_champion:"الرجاء" },
      ]
    },
    {
      id: "tn", flag: "🇹🇳", nameAr: "تونس", nameEn: "Tunisia",
      conf: "CAF", sub: "UNAF", founded: 1956,
      comps: [
        { id:"tn-league", name:"الرابطة المحترفة الأولى التونسية", type:"league", since:1956, current_champion:"الترجي" },
        { id:"tn-cup",    name:"كأس تونس", type:"cup", since:1956, current_champion:"الإفريقي" },
        { id:"tn-super",  name:"كأس السوبر التونسي", type:"super", since:1994, current_champion:"الترجي" },
      ]
    },
    {
      id: "ly", flag: "🇱🇾", nameAr: "ليبيا", nameEn: "Libya",
      conf: "CAF", sub: "UNAF", founded: 1962,
      comps: [
        { id:"ly-league", name:"الدوري الليبي الممتاز", type:"league", since:1963, current_champion:"الأهلي طرابلس", note:"تأثر بعدم الاستقرار السياسي" },
        { id:"ly-cup",    name:"كأس ليبيا", type:"cup", since:1954, current_champion:"الاتحاد" },
      ]
    },
    {
      id: "sd", flag: "🇸🇩", nameAr: "السودان", nameEn: "Sudan",
      conf: "CAF", sub: "CECAFA", founded: 1936,
      comps: [
        { id:"sd-league", name:"الدوري السوداني الممتاز", type:"league", since:1960, current_champion:"الهلال السوداني" },
        { id:"sd-cup",    name:"كأس السودان", type:"cup", since:1949, current_champion:"المريخ" },
        { id:"sd-super",  name:"سوبر السودان", type:"super", since:2006, current_champion:"الهلال السوداني" },
      ]
    },
    {
      id: "mr", flag: "🇲🇷", nameAr: "موريتانيا", nameEn: "Mauritania",
      conf: "CAF", sub: "UNAF", founded: 1961,
      comps: [
        { id:"mr-league", name:"الرابطة الوطنية الأولى — نواكشوط", type:"league", since:1964, current_champion:"أصفان" },
        { id:"mr-cup",    name:"كأس موريتانيا", type:"cup", since:1968, current_champion:"نواذيبو" },
      ]
    },

    // ── HORN / EAST AFRICA ────────────────────
    {
      id: "so", flag: "🇸🇴", nameAr: "الصومال", nameEn: "Somalia",
      conf: "CAF", sub: "CECAFA", founded: 1951,
      comps: [
        { id:"so-league", name:"الدوري الصومالي الممتاز", type:"league", since:1967, current_champion:"هورسيد", note:"توقف فترات طويلة بسبب الحرب الأهلية" },
        { id:"so-cup",    name:"كأس الصومال", type:"cup", since:2015, current_champion:"—" },
      ]
    },
    {
      id: "dj", flag: "🇩🇯", nameAr: "جيبوتي", nameEn: "Djibouti",
      conf: "CAF", sub: "CECAFA", founded: 1979,
      comps: [
        { id:"dj-league", name:"الدوري الجيبوتي للمحترفين", type:"league", since:1986, current_champion:"سبينر إيليت" },
        { id:"dj-cup",    name:"كأس جيبوتي", type:"cup", since:2000, current_champion:"—" },
      ]
    },
    {
      id: "km", flag: "🇰🇲", nameAr: "جزر القمر", nameEn: "Comoros",
      conf: "CAF", sub: "COSAFA", founded: 1979,
      comps: [
        { id:"km-league", name:"الدوري القمري الوطني", type:"league", since:2013, current_champion:"كوتيفيني" },
        { id:"km-cup",    name:"كأس جزر القمر", type:"cup", since:2014, current_champion:"—" },
      ]
    },

    // ── OTHER ─────────────────────────────────
    {
      id: "ss", flag: "🇸🇸", nameAr: "جنوب السودان", nameEn: "South Sudan",
      conf: "CAF", sub: "CECAFA", founded: 2011,
      comps: [
        { id:"ss-league", name:"الدوري الوطني لجنوب السودان", type:"league", since:2011, current_champion:"—", note:"عضو جامعة الدول العربية منذ 2011" },
      ]
    },

  ],

  // Competition type labels
  typeLabels: {
    league: "الدوري",
    cup:    "الكأس",
    super:  "السوبر",
  }

};
