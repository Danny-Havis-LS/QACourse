const PACKING_GUIDE_HE = {
  overview: {
    family: "2 מבוגרים (49, 48) + 3 בנים (16, 12, 10)",
    dates: "7–16 ביולי 2026 (10 ימים)",
    accommodation: [
      "7 לילות ב-Medemblik (7–13 ביולי, בוקר)",
      "3 לילות באמסטרדם (13–16 ביולי)",
    ],
    transport: [
      "רכב שכור מ-Schiphol לימי Medemblik והעברה דרך Walibi לאמסטרדם",
      "תחבורה ציבורית, הליכה ואופניים באמסטרדם",
    ],
    interests:
      "פעילויות בחוץ, פארקי שעשועים, כפרים, תעלות, סיור עירוני, מוזיאונים אינטראקטיביים. מעט אמנות והיסטוריה כבדה. בלי גן חיות.",
  },
  days: {
    1: { heading: "יום 1 – שלישי, 7 ביולי: הגעה ו-Medemblik", items: ["הגעה ל-Schiphol בצהריים", "איסוף רכב ונסיעה ל-Medemblik", "טיול בנמל וטירת Radboud", "שייט אופציונלי וארוחת ערב קלילה"] },
    2: { heading: "יום 2 – רביעי, 8 ביולי: Giethoorn ו-Dwarsgracht", items: ["יציאה מוקדמת ~07:30", "סיור ושייט בסירה חשמלית ב-Giethoorn", "אופציה א: עוד שייט ב-Dwarsgracht", "אופציה ב: הליכה ב-Dwarsgracht", "חזרה ל-Medemblik עד ~17:30"] },
    3: { heading: "יום 3 – חמישי, 9 ביולי: Efteling", items: ["יציאה ~07:30, יום מלא בפארק", "יער האגדות, Droomvlucht, מגלגלות", "ארוחת ערב ומופע Aquanura אופציונלי", "חזרה מאוחרת ל-Medemblik"] },
    4: { heading: "יום 4 – שישי, 10 ביולי: Edam, Volendam, Marken, Zaanse Schans", items: ["Edam — כפר גבינה", "Volendam — נמל וארוחת צהריים", "Marken — בתי עץ", "Zaanse Schans — טחנות וסדנאות"] },
    5: { heading: "יום 5 – שבת, 11 ביולי: יום מקומי ב-Medemblik", items: ["בלי נסיעות ארוכות", "טיול בנמל ואופציונלי שייט/אופניים", "מנוחה וארוחת ערב"] },
    6: { heading: "יום 6 – ראשון, 12 ביולי: הכנות", items: ["יום קל לפני אמסטרדם", "אריזת מזוודות", "ארוחת ערב מוקדמת"] },
    7: { heading: "יום 7 – שני, 13 ביולי: Walibi → אמסטרדם", items: ["צ'ק-אאוט מ-Medemblik", "Walibi — מתקנים ומים", "נסיעה לאמסטרדם, צ'ק-אין", "טיול ערב ב-Dam Square"] },
    8: { heading: "יום 8 – שלישי, 14 ביולי: NEMO, מוזיאון ימי", items: ["NEMO בבוקר — גג ומדע", "מוזיאון ימי אחר הצהריים", "שייט תעלות אופציונלי וארוחת ערב"] },
    9: { heading: "יום 9 – רביעי, 15 ביולי: Ripley's וקניות", items: ["Ripley's ב-Dam 21", "קניות: Damrak, Kalverstraat, Leidseplein", "אריזה לטיסה וארוחת ערב"] },
    10: { heading: "יום 10 – חמישי, 16 ביולי: יציאה", items: ["ארוחת בוקר וצ'ק-אאוט", "רכבת ל-Schiphol", "טיסה הביתה"] },
  },
};

function getPackingGuide(lang) {
  if (lang === "he") {
    return {
      overview: PACKING_GUIDE_HE.overview,
      days: PACKING_GUIDE.days.map((d) => {
        const tr = PACKING_GUIDE_HE.days[d.day];
        return { ...d, heading: tr.heading, items: tr.items };
      }),
    };
  }
  return PACKING_GUIDE;
}

const TRIP_HE = {
  title: "טיול משפחתי להולנד",
  subtitle: "CanalCompass",
  dates: "7–16 ביולי 2026",
  duration: "10 ימים",
  family: "2 מבוגרים (49, 48) + 3 בנים (16, 12, 10)",
  accommodation: [
    { place: "Medemblik", nights: "7 לילות", dates: "7–13 ביולי (בוקר)" },
    { place: "Amsterdam", nights: "3 לילות", dates: "13–16 ביולי" },
  ],
  transport: [
    "רכב שכור משדה התעופה Schiphol — ימי Medemblik והעברה דרך Walibi לאמסטרדם",
    "תחבורה ציבורית, הליכה ואופניים באמסטרדם",
  ],
  interests:
    "פעילויות בחוץ, פארקי שעשועים, כפרים, תעלות, סיור עירוני, מוזיאונים אינטראקטיביים. מעט אמנות והיסטוריה כבדה. בלי גן חיות.",
  skip: ["מוזיאוני אמנות כבדים", "סיורים היסטוריים ארוכים", "גן חיות"],
};

const BADGE_NAMES_HE = {
  "arrival-explorer": "חוקר ההגעה",
  "boat-captain": "רב חובל הסירה",
  "efteling-pro": "מומחה אפטלינג",
  "windmill-spotter": "צופה טחנות",
  "castle-scout": "סייר הטירה",
  "prep-champion": "אלוף ההכנות",
  "thrill-seeker": "מחפש הריגוש",
  "science-hero": "גיבור המדע",
  "oddity-hunter": "צייד המוזרויות",
  "trip-legend": "אגדת הטיול",
};

const PACKING_HE = {
  passport: "דרכונים / תעודות זהות",
  adapter: "מתאמי חשמל EU סוג C/F",
  rain: "מעילי גשם (מזג אוויר הולנדי!)",
  shoes: "נעלי הליכה נוחות",
  layers: "שכבות ליום חם וליום קר",
  ov: "כרטיס OV-chipkaart או כרטיס ללא מגע",
  sunscreen: "קרם הגנה וכובעים",
  charger: "סוללה ניידת",
  bottle: "בקבוקי מים רב-פעמיים",
  swim: "ציוד שחייה למתקני המים ב-Walibi",
  daypack: "תרמיל קטן לפארקים",
  motion: "תרופות לבחילת תנועה לשייט",
};

const DAY_HE = {
  1: {
    weekday: "שלישי", title: "הגעה ו-Medemblik", location: "Medemblik",
    destinations: [{ note: "הגעה ואיסוף רכב" }, { note: "בסיס הלינה" }, { note: "סיור חיצוני סביב הטירה" }],
    items: [
      "הגעה ל-Schiphol בצהריים, איסוף מזוודות",
      "איסוף רכב שכור ב-Schiphol",
      "נסיעה ל-Medemblik (~שעה וחצי)",
      "צ'ק-אין והתארגנות",
      "טיול בנמל ולאורך המים ב-Medemblik",
      "צפייה בטירת Kasteel Radboud מבחוץ",
      "שייט קצר אופציונלי באגם IJsselmeer",
      "ארוחת ערב קלילה ב-Medemblik — לילה מוקדם",
    ],
    kidZone: {
      mission: "ספרו כמה מטוסים נוחתים ב-5 דקות ב-Schiphol!",
      trivia: [
        { q: "שדה התעופה Schiphol מתחת לפני הים — נכון או לא?", a: "נכון! הרבה מהולנד מתחת לפני הים, והמסלולים כמו אמבטיה ענקית." },
        { q: "באיזו מדינה יש יותר אופניים מאנשים?", a: "הולנד! בערך 1.3 אופניים לכל אדם." },
      ],
      links: [{ label: "טיפים לצפייה במטוסים ב-Schiphol" }, { label: "מידע על Kasteel Radboud" }],
      scavenger: ["מצאו 3 לוגואים של חברות תעופה", "ראו את Kasteel Radboud מבחוץ", "מצאו את הנמל ב-Medemblik", "אמרו 'Dank je wel' למישהו"],
      teenTip: "עזרו בניווט לאיסוף הרכב — תפקיד הנווט מתחיל היום!",
    },
  },
  2: {
    weekday: "רביעי", title: "Giethoorn ו-Dwarsgracht", location: "Giethoorn → Dwarsgracht",
    destinations: [{ note: "חניה וסיור בכפר" }, { note: "השכרת סירה חשמלית" }, { note: "אופציה לצהריים" }],
    items: [
      "יציאה מוקדמת ~07:30 מ-Medemblik (~1.5–2 שעות נסיעה)",
      "הגעה ל-Giethoorn ~09:30–10:00, חניה בחניון הראשי",
      "סיור בכפר: תעלות, גגות קש, גשרים",
      "השכרת סירה חשמלית — שייט 60–90 דקות",
      "ארוחת צהריים ב-Giethoorn 12:30–13:30 על המים",
    ],
    options: [
      { name: "אופציה א — עוד זמן בסירה", items: ["נסיעה ל-Dwarsgracht (~5 דק')", "השכרת סירה", "שייט 60–90 דקות", "טיול קצר לאורך התעלה"] },
      { name: "אופציה ב — יותר הליכה וטבע", items: ["נסיעה ל-Dwarsgracht", "טיול תעלה 30–45 דק'", "מסלול הליכה קצר באזור ביצות"] },
    ],
    footer: "חזרה ל-Medemblik עד ~17:30. ארוחת ערב ומנוחה.",
    kidZone: {
      mission: "רב חובל ל-10 דקות — ילד אחד מנהל את הסירה החשמלית (עם מבוגר)!",
      trivia: [
        { q: "ל-Giethoorn קוראים 'ונציה של הצפון' — מה מיוחד בכבישים שם?", a: "כמעט אין כבישים! הדואר נמסר פעם בסירה." },
        { q: "כמה גשרים יש ב-Giethoorn?", a: "יותר מ-180 גשרים קטנים — נסו לספור!" },
      ],
      links: [{ label: "מדריך Giethoorn הרשמי" }, { label: "סיור בכפר Giethoorn (YouTube)" }],
      scavenger: ["מצאו בית עם גג קש", "ספרו 10 גשרים", "נהגו בסירה 5+ דקות", "צילום משפחתי על המים"],
      teenTip: "צלמו vlog של 30 שניות מהסירה.",
    },
  },
  3: {
    weekday: "חמישי", title: "Efteling — יום מלא בפארק", location: "Efteling",
    destinations: [{ note: "כניסה ראשית, Kaatsheuvel" }],
    items: [
      "יציאה מוקדמת ~07:30 (~2.5–3 שעות נסיעה)",
      "הגעה ~10:30–11:00, כניסה לפארק",
      "11:00–18:00 — מתקנים בחוץ לכל הגילאים",
      "יער האגדות, Droomvlucht, מגלגלות",
      "ארוחת ערב ב/ליד הפארק ~18:30–19:30",
      "מופע Aquanura אופציונלי בערב",
      "יציאה ~20:30, הגעה ל-Medemblik ~23:00–23:30",
    ],
    kidZone: {
      mission: "לפני הכניסה — כל ילד בוחר 3 מתקנים חובה! משווים בסוף היום.",
      trivia: [
        { q: "Efteling נפתח ב-1952 — ישן יותר או צעיר מ-Disneyland?", a: "ישן יותר! Disneyland נפתח ב-1955." },
        { q: "מה זה יער האגדות (Sprookjesbos)?", a: "יער קסום שבו אגדות מתעוררות לחיים!" },
      ],
      links: [{ label: "מתקני Efteling לפי גובה" }, { label: "מפת הפארק" }, { label: "מופע Aquanura" }],
      scavenger: ["Droomvlucht", "יער האגדות", "לפחות מגלגלת אחת", "חטיף הולנדי בפארק", "Aquanura (אם יש כוח!)"],
      teenTip: "אתגר: Baron 1898 או Python!",
    },
  },
  4: {
    weekday: "שישי", title: "Edam, Volendam, Marken ו-Zaanse Schans", location: "כפרים בצפון הולנד",
    destinations: [{ note: "כפר הגבינות" }, { note: "נמל וארוחת צהריים" }, { note: "בתים מעץ" }, { note: "טחנות וסדנאות" }],
    items: [
      "08:00 — יציאה מ-Medemblik",
      "09:30–10:30 Edam — כפר גבינה, סיור בעיר העתיקה",
      "11:00–13:00 Volendam — נמל, בתים מסורתיים",
      "13:00–14:00 ארוחת צהריים ב-Volendam",
      "14:30–16:00 Marken — בתי עץ, נוף הנמל",
      "16:30–18:30 Zaanse Schans — טחנות, sabots וגבינה",
      "ארוחת ערב מוקדמת ליד Zaanse Schans או בדרך",
      "חזרה ל-Medemblik ~20:00–20:30",
    ],
    kidZone: {
      mission: "טעימת גבינות — דירוג 1–10 וכתר למשפחה!",
      trivia: [
        { q: "טחנות Zaanse Schans רכשו פיגמנטים לצבע — לאיזה אמן?", a: "Rembrandt! הטחנות ייצרו אדום לציוריו." },
        { q: "למה לבתים ב-Marken יש גגות משולשים?", a: "הגג מפנה גשם ושלג — ונראה מגניב!" },
      ],
      links: [{ label: "Zaanse Schans" }, { label: "ייצור sabots הולנדי" }, { label: "Volendam" }],
      scavenger: ["טעמו גבינת Edam", "תלבושות מסורתיות ב-Volendam", "בית עץ ירוק ב-Marken", "5 טחנות ב-Zaanse Schans", "צפו בייצור sabots"],
      teenTip: "אתגר צילום: השתקפות בנמל Volendam.",
    },
  },
  5: {
    weekday: "שבת", title: "יום מקומי ב-Medemblik", location: "Medemblik",
    destinations: [{ note: "טיול ליד המים" }, { note: "חוץ הטירה" }],
    items: [
      "בלי נסיעות ארוכות — יום רגוע",
      "בוקר: נמל, חוץ הטירה",
      "שייט אופציונלי או אופניים",
      "מנוחה בצהריים",
      "סיור מקומי או בית קפה",
      "ארוחת ערב ומנוחה",
    ],
    kidZone: {
      mission: "ראשון שמזהה bakfiets (אופניים עם תיבת ילדים) מנצח!",
      trivia: [
        { q: "Kasteel Radboud בן יותר מ-700 שנה — מי בנה טירות כאלה?", a: "אבירים ואצילים! נבנתה סביב 1288." },
        { q: "אגם IJsselmeer היה פעם ים מלוח — מה קרה?", a: "ההולנדים בנו סכר ענק ב-1932 והפכו אותו לאגם מים מתוקים!" },
      ],
      links: [{ label: "תרבות האופניים בהולנד" }, { label: "היסטוריית הטירה" }],
      scavenger: ["bakfiets", "טיול לאורך הנמל", "סירה על IJsselmeer", "חטיף הולנדי"],
      teenTip: "הובילו את המשפחה באופניים — אתם הנווטים!",
    },
  },
  6: {
    weekday: "ראשון", title: "יום מקומי והכנות", location: "Medemblik",
    destinations: [{ note: "טיול וקפה" }],
    items: [
      "יום קל לפני המעבר לאמסטרדם",
      "בוקר — הליכה, אופניים או סיור קצר",
      "צהריים — אריזת מזוודות",
      "בית קפה אחרון ליד המים",
      "ארוחת ערב מוקדמת, מנוחה לפני check-out",
    ],
    kidZone: {
      mission: "ארוזו את התיק בעצמכם — מי מסיים ראשון (בסדר)?",
      trivia: [
        { q: "לאמסטרדם יותר תעלות מ-Venice — כמה בערך?", a: "כ-165 תעלות! ו-1,500 גשרים." },
        { q: "למה הבתים באמסטרדם צרים?", a: "המס היה לפי רוחב החזית — אז בנו גבוה וצר!" },
      ],
      links: [{ label: "בתי התעלות באמסטרדם" }, { label: "רשימת הציוד" }],
      scavenger: ["ארזו מזוודה", "צילום אחרון בנמל", "מילה הולנדית אחת", "עזרו לסחוב משהו מחר"],
      teenTip: "שמרו כתובת המלון באמסטרדם במפות.",
    },
  },
  7: {
    weekday: "שני", title: "Medemblik → Walibi → Amsterdam", location: "Walibi → Amsterdam",
    destinations: [{ note: "פארק שעשועים" }, { note: "טיול ערב" }, { note: "check-in" }],
    items: [
      "check-out מ-Medemblik ~08:00–09:00",
      "נסיעה ל-Walibi Holland (~1.5–2 שעות)",
      "הגעה ~11:00–11:30 — מתקנים ומים",
      "ארוחת צהריים בפארק",
      "יציאה ~16:00–16:30, נסיעה לאמסטרדם (~שעה)",
      "check-in במלון",
      "ערב: Damrak, Dam Square, תעלות, ארמון",
      "ארוחת ערב ליד המלון",
    ],
    kidZone: {
      mission: "אתגר המים ב-Walibi — מי הכי רטוב?",
      trivia: [
        { q: "Walibi יש מתקן מעל 130 קמ\"ש — Speed of Sound!", a: "אחד מגלגלות המהירים בהולנד!" },
        { q: "כמה זמן Dam Square מרכז העיר?", a: "כ-750 שנה! הארמון היה בית העירייה." },
      ],
      links: [{ label: "מתקני Walibi" }, { label: "מתקני מים" }, { label: "היסטוריית Dam Square" }],
      scavenger: ["3 מתקנים ב-Walibi", "רטובים במתקן מים", "ארמון ב-Dam Square בלילה", "טיול ליד תעלה", "patat met"],
      teenTip: "נווטו מ-Walibi למלון ב-Waze!",
    },
  },
  8: {
    weekday: "שלישי", title: "NEMO, מוזיאון ימי וסיור בעיר", location: "Amsterdam",
    destinations: [{ note: "ביקור בוקר" }, { note: "ביקור אחר הצהריים" }, { note: "תחנת רכבת" }],
    items: [
      "10:00–12:30 NEMO — גג, מדע מעשי",
      "ארוחת צהריים ליד NEMO או Central Station",
      "14:00–16:30 מוזיאון ימי — ספינות ותצוגות",
      "הליכה דרך Oosterdok ל-Dam Square",
      "שייט תעלה אופציונלי",
      "ארוחת ערב ב-De Pijp, Oud-West או Dam Square",
      "טיול ערב ליד התעלות",
    ],
    kidZone: {
      mission: "אתגר הגג ב-NEMO — כל הניסוי בחוץ!",
      trivia: [
        { q: "בניין NEMO נראה כמו חרטום ספינה — מי תכנן?", a: "Renzo Piano. הגג — מגרש מדע חינם!" },
        { q: "במוזיאון הימי יש עותק של ספינה — כמה גדול?", a: "גודל מלא — אפשר לעלות ולחקור!" },
      ],
      links: [{ label: "מוזיאון NEMO" }, { label: "מוזיאון ימי" }, { label: "שייט תעלות" }],
      scavenger: ["3 ניסויים על הגג", "עלו על הספינה", "מצאו עוגן או תותח", "שייט תעלה", "5 houseboats"],
      teenTip: "הסבירו תצוגה מדעית אחת למשפחה!",
    },
  },
  9: {
    weekday: "רביעי", title: "Ripley's וקניות", location: "Amsterdam",
    destinations: [{ note: "Dam 21" }, { note: "נקודת התחלה" }, { note: "כל הקלבו" }, { note: "בתי קפה" }],
    items: [
      "Ripley's Believe It or Not! — 1.5–2 שעות",
      "5 קומות מוזרויות, אשליות, שיאים",
      "ארוחת צהריים ב-Dam Square 11:30–12:30",
      "קניות 12:30–16:00: Damrak, Kalverstraat, Leidseplein, De Bijenkorf",
      "חזרה למלון, אריזה לטיסה",
      "ארוחת ערב מוקדמת, טיול תעלות אחרון",
    ],
    kidZone: {
      mission: "Ripley's — כל ילד מוצא את המוזר ביותר. הצבעה בארוחת ערב!",
      trivia: [
        { q: "ב-Ripley's יש מנהרה מסתחררת — החדר באמת מסתובב?", a: "לא! הגשר מסתובב — המוח מתבלבל!" },
        { q: "מה זה stroopwafel?", a: "שתי ופלים עם סирופ קרמל — הכי טעים מעל כוס קפה חמה!" },
      ],
      links: [{ label: "Ripley's Amsterdam" }, { label: "ייצור stroopwafel" }, { label: "Kalverstraat" }],
      scavenger: ["המוזר ביותר (הצבעה!)", "מנהרה מסתחררת", "מזכרת אחת", "stroopwafel טרי", "הבית הצר ביותר"],
      teenTip: "אתגר תקציב: מזכרת הכי טובה מתחת ל-€10.",
    },
  },
  10: {
    weekday: "חמישי", title: "יציאה", location: "Schiphol",
    destinations: [{ note: "המראה" }, { note: "הגעה ברכבת" }],
    items: [
      "ארוחת בוקר ובדיקת חדר אחרונה",
      "תחבורה ציבורית ל-Schiphol",
      "החזרת רכב אם לא הוחזר קודם",
      "check-in, ביטחון, שער",
      "טיסה הביתה",
    ],
    kidZone: {
      mission: "הצבעה: היום הכי טוב בטיול — ויכוח ברכבת ל-Schiphol!",
      trivia: [
        { q: "הולנד שעה אחת קדימה מבריטניה — למה?", a: "אזורי זמן! CET." },
        { q: "כמה מהולנד מתחת לפני הים?", a: "כ-26% — מומחים בהחזקת מים!" },
      ],
      links: [{ label: "מידע Schiphol" }, { label: "עובדות על הולנד" }],
      scavenger: ["הצביעו על היום הכי טוב", "מצאו את השער ראשונים", "חטיף הולנדי אחרון", "3 זכרונות אהובים"],
      teenTip: "אלבום 'Trip Highlights' לפני הטיסה.",
    },
  },
};

function mergeLocalizedDay(base, tr) {
  if (!tr) return base;
  const day = { ...base, items: [...base.items], destinations: base.destinations.map((d, i) => ({
    ...d, note: tr.destinations?.[i]?.note ?? d.note,
  })) };
  if (tr.weekday) day.weekday = tr.weekday;
  if (tr.title) day.title = tr.title;
  if (tr.location) day.location = tr.location;
  if (tr.items) day.items = tr.items;
  if (tr.footer) day.footer = tr.footer;
  if (tr.options) day.options = tr.options;
  if (tr.kidZone && base.kidZone) {
    day.kidZone = {
      ...base.kidZone,
      badge: { ...base.kidZone.badge, name: BADGE_NAMES_HE[base.kidZone.badge.id] || base.kidZone.badge.name },
      mission: tr.kidZone.mission ?? base.kidZone.mission,
      trivia: tr.kidZone.trivia ?? base.kidZone.trivia,
      scavenger: tr.kidZone.scavenger ?? base.kidZone.scavenger,
      teenTip: tr.kidZone.teenTip ?? base.kidZone.teenTip,
      links: base.kidZone.links.map((l, i) => ({
        ...l, label: tr.kidZone.links?.[i]?.label ?? l.label,
      })),
    };
  }
  return day;
}

function getLocaleData(lang) {
  if (lang === "he") {
    return {
      trip: TRIP_HE,
      days: DAYS.map((d) => mergeLocalizedDay(d, DAY_HE[d.day])),
      packing: PACKING.map((p) => ({ ...p, label: PACKING_HE[p.id] || p.label })),
      badges: BADGES.map((b) => ({ ...b, name: BADGE_NAMES_HE[b.id] || b.name })),
      packingGuide: getPackingGuide("he"),
    };
  }
  return { trip: TRIP, days: DAYS, packing: PACKING, badges: BADGES, packingGuide: getPackingGuide("en") };
}
