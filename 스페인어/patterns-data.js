/* 실생활 스페인어 패턴 데이터
 * 각 상황(situation) → 패턴(pattern) 그룹 → 예문(examples: en=스페인어 / ko=한글)
 * tip: 발음·문법 사용 요령 한 줄
 * 발음 메모: j/ge/gi=목에서 'ㅎ', ll/y='ㅈ~이', ñ='니', h=묵음, rr=굴리는 ㄹ, 강세 주의
 */
window.PATTERN_DATA = [
  {
    id: "abc",
    icon: "🔤",
    title: "기초 · 알파벳 & 발음",
    subtitle: "El Alfabeto",
    blurb: "스페인어는 '쓰인 대로 읽는' 언어예요. 모음과 까다로운 자음 몇 개만 익히면 끝.",
    groups: [
      {
        pattern: "모음 5개 (a · e · i · o · u)",
        meaning: "스페인어 모음은 항상 짧고 또렷하게",
        tip: "영어처럼 변하지 않아요. a는 언제나 '아', e는 언제나 '에'.",
        examples: [
          { en: "a", ko: "[아] casa 까사 (집)" },
          { en: "e", ko: "[에] mesa 메사 (탁자)" },
          { en: "i", ko: "[이] sí 씨 (응/네)" },
          { en: "o", ko: "[오] hola 올라 (안녕)" },
          { en: "u", ko: "[우] uno 우노 (하나)" }
        ]
      },
      {
        pattern: "주의해야 할 자음",
        meaning: "발음이 한국어와 다른 글자들",
        tip: "이 8개만 알면 거의 다 읽을 수 있어요. 단어를 눌러 발음을 들어보세요.",
        examples: [
          { en: "jamón", ko: "하몬 (햄) — j는 목에서 'ㅎ'" },
          { en: "gente", ko: "헨떼 (사람들) — ge·gi는 'ㅎ'" },
          { en: "hola", ko: "올라 (안녕) — h는 묵음" },
          { en: "llave", ko: "야베/쟈베 (열쇠) — ll는 'ㅈ~이'" },
          { en: "niño", ko: "니뇨 (아이) — ñ는 '니'" },
          { en: "perro", ko: "뻬ㄹㄹㅗ (개) — rr는 혀 굴리는 ㄹ" },
          { en: "queso", ko: "께소 (치즈) — que·qui는 '께·끼' (u 묵음)" },
          { en: "zapato", ko: "사빠또 (신발) — z는 'ㅅ'(중남미)" }
        ]
      },
      {
        pattern: "강세 (Acento)",
        meaning: "악센트(´)가 붙은 모음을 세게 발음",
        tip: "악센트 표시가 있으면 무조건 그 자리를 강하게! 없으면 일반 규칙을 따라요.",
        examples: [
          { en: "café", ko: "카페 — 뒤를 세게 (까페)" },
          { en: "fácil", ko: "파실 — 앞을 세게 (쉬운)" },
          { en: "música", ko: "무시카 — 앞을 세게 (음악)" },
          { en: "teléfono", ko: "뗄레포노 — 가운데를 세게 (전화)" },
          { en: "corazón", ko: "꼬라손 — 뒤를 세게 (마음/심장)" }
        ]
      }
    ]
  },
  {
    id: "numeros",
    icon: "🔢",
    title: "기초 · 숫자",
    subtitle: "Los Números",
    blurb: "가격, 나이, 시간, 전화번호의 기본. 0부터 차근차근.",
    groups: [
      {
        pattern: "0 ~ 10",
        meaning: "가장 먼저 외울 기본 숫자",
        tip: "uno는 남성 명사 앞에서 un으로 줄어요 (un libro = 책 한 권).",
        examples: [
          { en: "cero", ko: "0 · 세로" },
          { en: "uno, dos, tres", ko: "1, 2, 3 · 우노, 도스, 뜨레스" },
          { en: "cuatro, cinco, seis", ko: "4, 5, 6 · 꾸아뜨로, 싱꼬, 세이스" },
          { en: "siete, ocho, nueve", ko: "7, 8, 9 · 시에떼, 오초, 누에베" },
          { en: "diez", ko: "10 · 디에스" }
        ]
      },
      {
        pattern: "11 ~ 20",
        meaning: "11~15는 따로 외우고, 16~19는 규칙적",
        tip: "16~19는 dieci + 숫자 (dieciséis = diez y seis).",
        examples: [
          { en: "once, doce, trece", ko: "11, 12, 13 · 온세, 도세, 뜨레세" },
          { en: "catorce, quince", ko: "14, 15 · 까또르세, 낀세" },
          { en: "dieciséis, diecisiete", ko: "16, 17 · 디에시세이스, 디에시시에떼" },
          { en: "dieciocho, diecinueve", ko: "18, 19 · 디에시오초, 디에시누에베" },
          { en: "veinte", ko: "20 · 베인떼" }
        ]
      },
      {
        pattern: "십·백·천 단위",
        meaning: "큰 수 만들기",
        tip: "21~29는 한 단어(veintiuno…), 31부터는 'treinta y uno'처럼 y로 연결.",
        examples: [
          { en: "treinta, cuarenta, cincuenta", ko: "30, 40, 50" },
          { en: "sesenta, setenta, ochenta, noventa", ko: "60, 70, 80, 90" },
          { en: "cien", ko: "100 · 시엔" },
          { en: "doscientos, quinientos", ko: "200, 500" },
          { en: "mil", ko: "1000 · 밀" }
        ]
      },
      {
        pattern: "숫자 활용",
        meaning: "가격·나이·전화번호 말하기",
        tip: "나이는 tener(가지다) 동사로: Tengo 20 años (직역: 20살을 가지고 있다).",
        examples: [
          { en: "¿Cuánto cuesta?", ko: "얼마예요?" },
          { en: "Son diez euros.", ko: "10유로예요." },
          { en: "Tengo veinticinco años.", ko: "저는 25살이에요." },
          { en: "Mi número es seis, dos, tres...", ko: "제 번호는 6, 2, 3…이에요." },
          { en: "el dos por ciento", ko: "2 퍼센트" }
        ]
      }
    ]
  },
  {
    id: "calendario",
    icon: "📅",
    title: "기초 · 요일·월·계절",
    subtitle: "Días, Meses y Estaciones",
    blurb: "요일과 월은 모두 소문자로 써요. 영어와 다르니 주의!",
    groups: [
      {
        pattern: "요일 (los días)",
        meaning: "월요일부터 일요일까지",
        tip: "'~요일에'는 el을 붙여요: el lunes (월요일에), los lunes (매주 월요일).",
        examples: [
          { en: "lunes, martes", ko: "월요일, 화요일" },
          { en: "miércoles, jueves", ko: "수요일, 목요일" },
          { en: "viernes", ko: "금요일" },
          { en: "sábado, domingo", ko: "토요일, 일요일" },
          { en: "el fin de semana", ko: "주말" }
        ]
      },
      {
        pattern: "월 (los meses)",
        meaning: "1월부터 12월까지",
        tip: "'~월에'는 en을 써요: en enero (1월에).",
        examples: [
          { en: "enero, febrero, marzo", ko: "1월, 2월, 3월" },
          { en: "abril, mayo, junio", ko: "4월, 5월, 6월" },
          { en: "julio, agosto, septiembre", ko: "7월, 8월, 9월" },
          { en: "octubre, noviembre, diciembre", ko: "10월, 11월, 12월" }
        ]
      },
      {
        pattern: "계절 (las estaciones)",
        meaning: "봄·여름·가을·겨울",
        tip: "'~에는'은 en: en verano (여름에는).",
        examples: [
          { en: "primavera", ko: "봄 · 쁘리마베라" },
          { en: "verano", ko: "여름 · 베라노" },
          { en: "otoño", ko: "가을 · 오또뇨" },
          { en: "invierno", ko: "겨울 · 인비에르노" }
        ]
      }
    ]
  },
  {
    id: "hora",
    icon: "🕐",
    title: "기초 · 시간 & 날짜",
    subtitle: "La Hora y la Fecha",
    blurb: "1시만 단수(la una), 나머지는 복수(las dos…). 규칙만 알면 쉬워요.",
    groups: [
      {
        pattern: "시간 묻고 답하기",
        meaning: "¿Qué hora es? (몇 시예요?)",
        tip: "1시는 Es la una, 2시 이상은 Son las~. y media=30분, y cuarto=15분, menos cuarto=15분 전.",
        examples: [
          { en: "¿Qué hora es?", ko: "몇 시예요?" },
          { en: "Es la una.", ko: "1시예요." },
          { en: "Son las dos y media.", ko: "2시 반이에요." },
          { en: "Son las tres y cuarto.", ko: "3시 15분이에요." },
          { en: "Son las cinco menos cuarto.", ko: "5시 15분 전(4시 45분)이에요." }
        ]
      },
      {
        pattern: "하루 때 표현",
        meaning: "오전·오후·밤",
        tip: "시간 뒤에 de la mañana/tarde/noche를 붙여요.",
        examples: [
          { en: "a las ocho de la mañana", ko: "오전 8시에" },
          { en: "a las tres de la tarde", ko: "오후 3시에" },
          { en: "a las diez de la noche", ko: "밤 10시에" },
          { en: "al mediodía", ko: "정오에" },
          { en: "a medianoche", ko: "자정에" }
        ]
      },
      {
        pattern: "날짜 (la fecha)",
        meaning: "오늘 며칠/무슨 요일",
        tip: "날짜는 '숫자 + de + 월': el 6 de junio (6월 6일).",
        examples: [
          { en: "¿Qué día es hoy?", ko: "오늘 무슨 요일이에요?" },
          { en: "Hoy es lunes.", ko: "오늘은 월요일이에요." },
          { en: "¿Cuál es la fecha de hoy?", ko: "오늘 며칠이에요?" },
          { en: "Hoy es seis de junio.", ko: "오늘은 6월 6일이에요." },
          { en: "Mi cumpleaños es en mayo.", ko: "제 생일은 5월이에요." }
        ]
      }
    ]
  },
  {
    id: "colores",
    icon: "🎨",
    title: "기초 · 색깔 & 형용사",
    subtitle: "Colores y Adjetivos",
    blurb: "형용사는 꾸미는 명사의 성·수에 맞춰 변해요 (gato negro / casa negra).",
    groups: [
      {
        pattern: "색깔 (los colores)",
        meaning: "기본 색 이름",
        tip: "보통 명사 뒤에 와요: un coche rojo (빨간 차). -o로 끝나면 여성형은 -a.",
        examples: [
          { en: "rojo, azul, verde", ko: "빨강, 파랑, 초록" },
          { en: "amarillo, naranja", ko: "노랑, 주황" },
          { en: "negro, blanco, gris", ko: "검정, 하양, 회색" },
          { en: "rosa, morado, marrón", ko: "분홍, 보라, 갈색" },
          { en: "Me gusta el color azul.", ko: "저는 파란색을 좋아해요." }
        ]
      },
      {
        pattern: "반대되는 형용사",
        meaning: "자주 쓰는 기본 형용사 짝",
        tip: "짝으로 외우면 두 배로 기억돼요.",
        examples: [
          { en: "grande / pequeño", ko: "큰 / 작은" },
          { en: "bueno / malo", ko: "좋은 / 나쁜" },
          { en: "nuevo / viejo", ko: "새로운 / 오래된" },
          { en: "caro / barato", ko: "비싼 / 싼" },
          { en: "fácil / difícil", ko: "쉬운 / 어려운" }
        ]
      },
      {
        pattern: "성·수 일치",
        meaning: "형용사가 명사에 맞춰 변하는 규칙",
        tip: "남성단수-o, 여성단수-a, 복수엔 -s. el chico alto / la chica alta / los chicos altos.",
        examples: [
          { en: "el libro rojo", ko: "그 빨간 책 (남성단수)" },
          { en: "la casa roja", ko: "그 빨간 집 (여성단수)" },
          { en: "los libros rojos", ko: "그 빨간 책들 (남성복수)" },
          { en: "las casas rojas", ko: "그 빨간 집들 (여성복수)" },
          { en: "La comida está buena.", ko: "음식이 맛있어요." }
        ]
      }
    ]
  },
  {
    id: "pronombres",
    icon: "👤",
    title: "기초 · 대명사 & 관사",
    subtitle: "Pronombres y Artículos",
    blurb: "스페인어 명사엔 성별이 있어요. 관사 el/la를 단어와 함께 외우는 게 핵심.",
    groups: [
      {
        pattern: "인칭대명사 (los pronombres)",
        meaning: "나·너·그… 주어 대명사",
        tip: "tú는 친근한 '너', usted는 정중한 '당신'. 동사 변화로 주어를 알 수 있어 종종 생략해요.",
        examples: [
          { en: "yo / tú", ko: "나 / 너" },
          { en: "él / ella / usted", ko: "그 / 그녀 / 당신(존칭)" },
          { en: "nosotros / nosotras", ko: "우리 (남성·혼성 / 여성)" },
          { en: "vosotros / vosotras", ko: "너희 (스페인에서 사용)" },
          { en: "ellos / ellas / ustedes", ko: "그들 / 그녀들 / 당신들" }
        ]
      },
      {
        pattern: "정관사·부정관사",
        meaning: "el/la (그) · un/una (어떤)",
        tip: "성·수에 맞춰 4가지: el·la·los·las / un·una·unos·unas.",
        examples: [
          { en: "el libro / la mesa", ko: "그 책(남) / 그 탁자(여)" },
          { en: "los libros / las mesas", ko: "그 책들 / 그 탁자들" },
          { en: "un libro / una mesa", ko: "책 한 권 / 탁자 하나" },
          { en: "unos libros / unas mesas", ko: "책 몇 권 / 탁자 몇 개" }
        ]
      },
      {
        pattern: "명사의 성별 힌트",
        meaning: "남성/여성 구별 요령",
        tip: "보통 -o 끝나면 남성, -a 끝나면 여성. 예외도 있으니 관사째 외우기!",
        examples: [
          { en: "el gato (남) / la gata (여)", ko: "고양이 (수/암)" },
          { en: "el día", ko: "날 (예외! -a지만 남성)" },
          { en: "la mano", ko: "손 (예외! -o지만 여성)" },
          { en: "el problema", ko: "문제 (예외! -ma는 남성)" },
          { en: "la foto", ko: "사진 (foto는 여성)" }
        ]
      }
    ]
  },
  {
    id: "preguntas",
    icon: "❓",
    title: "기초 · 의문사",
    subtitle: "Palabras Interrogativas",
    blurb: "스페인어 의문문은 ¿…?로 앞뒤를 모두 감싸요. 의문사엔 악센트가 붙어요.",
    groups: [
      {
        pattern: "기본 의문사",
        meaning: "무엇·누구·어디·언제…",
        tip: "의문사일 때 악센트 필수: qué, quién, dónde, cuándo, cómo, cuánto, cuál.",
        examples: [
          { en: "¿Qué? / ¿Quién?", ko: "무엇? / 누구?" },
          { en: "¿Dónde? / ¿Cuándo?", ko: "어디? / 언제?" },
          { en: "¿Cómo? / ¿Por qué?", ko: "어떻게? / 왜?" },
          { en: "¿Cuánto? / ¿Cuál?", ko: "얼마? / 어느 것?" }
        ]
      },
      {
        pattern: "의문사 활용 예문",
        meaning: "실제 문장으로 익히기",
        tip: "por qué(왜)에 대한 답은 porque(왜냐하면) — 띄어쓰기와 악센트 차이!",
        examples: [
          { en: "¿Qué es esto?", ko: "이게 뭐예요?" },
          { en: "¿Dónde está el baño?", ko: "화장실이 어디예요?" },
          { en: "¿Cuándo llegas?", ko: "언제 도착해?" },
          { en: "¿Cómo te llamas?", ko: "이름이 뭐예요?" },
          { en: "¿Por qué no vienes?", ko: "왜 안 와?" }
        ]
      }
    ]
  },
  {
    id: "verbos",
    icon: "🔑",
    title: "기초 · 핵심 동사",
    subtitle: "Verbos Esenciales",
    blurb: "ser·estar·tener·ir 4개만 익혀도 문장의 절반이 만들어져요. 현재형부터.",
    groups: [
      {
        pattern: "ser (이다 — 본질·성질)",
        meaning: "이름·직업·국적·성격처럼 변하지 않는 것",
        tip: "Soy coreano(나는 한국인이야)처럼 정체성에 ser를 써요.",
        examples: [
          { en: "yo soy, tú eres", ko: "나는 ~이다, 너는 ~이다" },
          { en: "él/ella es", ko: "그/그녀는 ~이다" },
          { en: "nosotros somos", ko: "우리는 ~이다" },
          { en: "ellos son", ko: "그들은 ~이다" },
          { en: "Soy estudiante.", ko: "저는 학생이에요." }
        ]
      },
      {
        pattern: "estar (있다/이다 — 상태·위치)",
        meaning: "기분·위치처럼 변하는 것",
        tip: "ser(본질) vs estar(상태): Soy feliz(천성이 행복) / Estoy feliz(지금 기분이 좋다).",
        examples: [
          { en: "yo estoy, tú estás", ko: "나는 (상태/위치)에 있다" },
          { en: "él/ella está", ko: "그/그녀는 ~한 상태다" },
          { en: "nosotros estamos", ko: "우리는 ~에 있다" },
          { en: "Estoy cansado.", ko: "저 피곤해요." },
          { en: "¿Dónde estás?", ko: "너 어디야?" }
        ]
      },
      {
        pattern: "tener (가지다)",
        meaning: "소유, 그리고 나이·배고픔 등에도",
        tip: "tener로 나이/배고픔/추위 표현: tengo hambre(배고파), tengo frío(추워).",
        examples: [
          { en: "yo tengo, tú tienes", ko: "나는 가지고 있다, 너는~" },
          { en: "él/ella tiene", ko: "그/그녀는 가지고 있다" },
          { en: "Tengo hambre.", ko: "배고파요." },
          { en: "Tengo treinta años.", ko: "저는 30살이에요." },
          { en: "¿Tienes tiempo?", ko: "시간 있어?" }
        ]
      },
      {
        pattern: "ir (가다)",
        meaning: "이동, 그리고 미래 표현에도",
        tip: "ir a + 동사원형 = ~할 거야 (가까운 미래): Voy a comer(먹을 거야).",
        examples: [
          { en: "yo voy, tú vas", ko: "나는 간다, 너는 간다" },
          { en: "él/ella va", ko: "그/그녀는 간다" },
          { en: "Voy a casa.", ko: "집에 가요." },
          { en: "Vamos a comer.", ko: "먹으러 가자 / 먹을 거예요." },
          { en: "¿Adónde vas?", ko: "어디 가?" }
        ]
      }
    ]
  },
  {
    id: "supervivencia",
    icon: "🆘",
    title: "기초 · 생존 표현",
    subtitle: "Frases de Supervivencia",
    blurb: "딱 이것만 알아도 여행과 대화가 됩니다. 가장 자주 쓰는 한마디들.",
    groups: [
      {
        pattern: "꼭 필요한 한마디",
        meaning: "예/아니오·부탁·감사",
        tip: "스페인어권은 por favor와 gracias를 정말 자주 써요. 아끼지 마세요!",
        examples: [
          { en: "Sí. / No.", ko: "네. / 아니요." },
          { en: "Por favor.", ko: "부탁해요 / 제발." },
          { en: "Gracias. / Muchas gracias.", ko: "고마워요. / 정말 고마워요." },
          { en: "De nada.", ko: "천만에요." },
          { en: "Perdón. / Disculpe.", ko: "죄송해요. / 실례합니다." }
        ]
      },
      {
        pattern: "말이 막힐 때",
        meaning: "못 알아들을 때 쓰는 구조 표현",
        tip: "이 표현들을 외워두면 어떤 상황에서도 대화를 이어갈 수 있어요.",
        examples: [
          { en: "No entiendo.", ko: "이해 못 했어요." },
          { en: "¿Puede repetir, por favor?", ko: "다시 말해 주시겠어요?" },
          { en: "Más despacio, por favor.", ko: "조금 천천히 말해 주세요." },
          { en: "No hablo español muy bien.", ko: "스페인어를 잘 못해요." },
          { en: "¿Habla inglés?", ko: "영어 하세요?" }
        ]
      },
      {
        pattern: "단어를 물어볼 때",
        meaning: "모르는 표현을 배우는 마법의 질문",
        tip: "¿Cómo se dice ___? 하나면 현지에서 무한히 배울 수 있어요.",
        examples: [
          { en: "¿Cómo se dice esto en español?", ko: "이거 스페인어로 어떻게 말해요?" },
          { en: "¿Qué significa esto?", ko: "이게 무슨 뜻이에요?" },
          { en: "¿Cómo se escribe?", ko: "어떻게 쓰나요(철자)?" },
          { en: "¿Está bien así?", ko: "이렇게 하면 맞나요?" },
          { en: "Una pregunta, por favor.", ko: "질문 하나 있어요." }
        ]
      }
    ]
  },
  {
    id: "saludos",
    icon: "👋",
    title: "인사 & 스몰토크",
    subtitle: "Saludos y Charla",
    blurb: "처음 만나거나 가볍게 안부를 주고받을 때. 스페인어권은 인사가 따뜻하고 길어요.",
    groups: [
      {
        pattern: "¿Qué tal? / ¿Cómo estás?",
        meaning: "어떻게 지내? (가장 흔한 안부)",
        tip: "tú(친근)는 ¿Cómo estás?, usted(존댓말)는 ¿Cómo está?. ¿Qué tal?은 둘 다 OK.",
        examples: [
          { en: "¡Hola! ¿Qué tal?", ko: "안녕! 어떻게 지내?" },
          { en: "¿Cómo estás hoy?", ko: "오늘 어떻게 지내?" },
          { en: "Muy bien, gracias. ¿Y tú?", ko: "아주 좋아, 고마워. 너는?" },
          { en: "Aquí, todo tranquilo.", ko: "뭐, 다 잘 지내(평온해)." },
          { en: "Más o menos.", ko: "그럭저럭이야." }
        ]
      },
      {
        pattern: "Buenos días / Buenas tardes / Buenas noches",
        meaning: "좋은 아침/오후/저녁이에요 (시간대 인사)",
        tip: "정오까지 días, 해질 때까지 tardes, 그 후 noches. 줄여서 ¡Buenas!도 흔해요.",
        examples: [
          { en: "Buenos días, ¿cómo amaneció?", ko: "좋은 아침이에요, 잘 주무셨어요?" },
          { en: "Buenas tardes a todos.", ko: "모두 좋은 오후예요." },
          { en: "Buenas noches, que descanses.", ko: "잘 자, 푹 쉬어." },
          { en: "¡Buenas! ¿Qué cuentas?", ko: "안녕! 뭐 새로운 거 있어?" },
          { en: "Igualmente, gracias.", ko: "당신도요, 감사합니다." }
        ]
      },
      {
        pattern: "¿Cuánto tiempo!",
        meaning: "오랜만이야!",
        tip: "직역은 '얼마나 오랜만이야!'. 반가움을 담아 외치듯 말해요.",
        examples: [
          { en: "¡Cuánto tiempo sin verte!", ko: "정말 오랜만이다!" },
          { en: "¡Qué alegría verte!", ko: "보니까 너무 반갑다!" },
          { en: "¿Cómo te ha ido?", ko: "그동안 어떻게 지냈어?" },
          { en: "Tenemos que vernos pronto.", ko: "우리 조만간 만나야 해." },
          { en: "A ver si quedamos un día.", ko: "언제 한번 보자." }
        ]
      },
      {
        pattern: "¡Qué calor / frío hace!",
        meaning: "날씨 정말 덥다/춥다! (날씨 스몰토크)",
        tip: "날씨엔 동사 hacer를 써요: hace calor(덥다), hace frío(춥다), hace sol(맑다).",
        examples: [
          { en: "¡Qué calor hace hoy!", ko: "오늘 진짜 덥다!" },
          { en: "Hace mucho frío, ¿verdad?", ko: "엄청 춥지, 그치?" },
          { en: "Parece que va a llover.", ko: "비 올 것 같아." },
          { en: "Hace un día precioso.", ko: "날씨 정말 좋다." },
          { en: "Espero que mejore el tiempo.", ko: "날씨가 좋아지면 좋겠어." }
        ]
      },
      {
        pattern: "¡Hasta luego! / ¡Nos vemos!",
        meaning: "잘 가! / 또 봐! (헤어질 때)",
        tip: "Adiós보다 가벼운 작별 인사. ¡Chao!도 중남미에서 아주 흔해요.",
        examples: [
          { en: "¡Hasta luego!", ko: "이따 봐!" },
          { en: "¡Nos vemos pronto!", ko: "곧 또 봐!" },
          { en: "¡Cuídate mucho!", ko: "몸조심해!" },
          { en: "¡Que tengas un buen día!", ko: "좋은 하루 보내!" },
          { en: "Me alegro de verte.", ko: "만나서 반가웠어." }
        ]
      }
    ]
  },
  {
    id: "presentarse",
    icon: "🤝",
    title: "자기소개 & 친해지기",
    subtitle: "Presentarse",
    blurb: "이름, 직업, 출신을 묻고 답하며 처음 관계를 트는 표현들.",
    groups: [
      {
        pattern: "Me llamo ___. Mucho gusto.",
        meaning: "저는 ___예요. 만나서 반가워요.",
        tip: "Me llamo(직역: 나를 ~라 부른다)가 가장 자연스러워요. Mucho gusto=반가워요.",
        examples: [
          { en: "Hola, me llamo Jun. Mucho gusto.", ko: "안녕하세요, 저는 준이에요. 반가워요." },
          { en: "Encantado de conocerte.", ko: "만나서 반가워요. (남성 화자)" },
          { en: "Encantada, soy Sara.", ko: "반가워요, 저는 사라예요. (여성 화자)" },
          { en: "El gusto es mío.", ko: "저야말로 반가워요." },
          { en: "¿Cómo te llamas?", ko: "이름이 뭐예요?" }
        ]
      },
      {
        pattern: "¿A qué te dedicas?",
        meaning: "무슨 일 하세요? (직업 묻기)",
        tip: "직업은 관사 없이: Soy profesor(나는 교사야). ¿En qué trabajas?도 같은 뜻.",
        examples: [
          { en: "¿A qué te dedicas?", ko: "무슨 일 하세요?" },
          { en: "Trabajo en marketing.", ko: "마케팅 일을 해요." },
          { en: "Soy desarrollador de software.", ko: "저는 소프트웨어 개발자예요." },
          { en: "Trabajo en una empresa pequeña.", ko: "작은 회사에서 일해요." },
          { en: "Ahora estoy buscando trabajo.", ko: "지금은 일자리를 찾고 있어요." }
        ]
      },
      {
        pattern: "¿De dónde eres?",
        meaning: "어디 출신이세요?",
        tip: "출신엔 ser(eres), 현재 사는 곳엔 vivir(vives)를 써요.",
        examples: [
          { en: "¿De dónde eres?", ko: "어디서 왔어요?" },
          { en: "Soy de Seúl, Corea del Sur.", ko: "저는 한국 서울에서 왔어요." },
          { en: "Soy coreano, pero vivo aquí.", ko: "저는 한국인인데 여기 살아요." },
          { en: "¿Has estado en Corea?", ko: "한국에 가본 적 있어요?" },
          { en: "¿Cuánto tiempo llevas aquí?", ko: "여기 산 지 얼마나 됐어요?" }
        ]
      },
      {
        pattern: "¿Qué te gusta hacer?",
        meaning: "뭐 하는 거 좋아해요? (취미)",
        tip: "Me gusta + 동사원형: Me gusta leer(읽는 걸 좋아해). 복수면 Me gustan.",
        examples: [
          { en: "¿Qué te gusta hacer en tu tiempo libre?", ko: "여가 시간에 뭐 하는 거 좋아해요?" },
          { en: "Me encanta el senderismo.", ko: "등산을 정말 좋아해요." },
          { en: "Me gusta probar restaurantes nuevos.", ko: "새 식당 가보는 걸 좋아해요." },
          { en: "Los fines de semana descanso en casa.", ko: "주말엔 집에서 쉬어요." },
          { en: "¡Tenemos mucho en común!", ko: "우리 통하는 게 많네요!" }
        ]
      },
      {
        pattern: "Mantengámonos en contacto.",
        meaning: "연락하고 지내요.",
        tip: "número=전화번호, móvil/celular=휴대폰. 헤어질 때 자연스러운 마무리.",
        examples: [
          { en: "Mantengámonos en contacto.", ko: "연락하고 지내요." },
          { en: "¿Me das tu número?", ko: "전화번호 받을 수 있을까요?" },
          { en: "¿Tienes Instagram?", ko: "인스타 하세요?" },
          { en: "Te escribo luego.", ko: "나중에 연락할게요." },
          { en: "Me encantó hablar contigo.", ko: "얘기 나눠서 정말 좋았어요." }
        ]
      }
    ]
  },
  {
    id: "restaurante",
    icon: "🍽️",
    title: "식당 & 카페",
    subtitle: "Restaurante y Café",
    blurb: "주문, 추천 요청, 계산까지. 외식할 때 꼭 필요한 표현 모음.",
    groups: [
      {
        pattern: "¿Me pone ___, por favor?",
        meaning: "___ 주시겠어요? (주문)",
        tip: "스페인은 ¿Me pone~?, 중남미는 ¿Me da~?가 자연스러워요. Para mí~도 흔해요.",
        examples: [
          { en: "¿Me pone un café con leche, por favor?", ko: "카페라떼 한 잔 주시겠어요?" },
          { en: "Para mí, la paella.", ko: "저는 빠에야로 할게요." },
          { en: "¿Para llevar, por favor?", ko: "포장되나요?" },
          { en: "Yo quiero lo mismo.", ko: "저도 같은 걸로요." },
          { en: "¿Nos trae agua, por favor?", ko: "물 좀 주시겠어요?" }
        ]
      },
      {
        pattern: "¿Qué me recomienda?",
        meaning: "뭐가 맛있어요? / 추천해 주실래요?",
        tip: "메뉴 고민될 때. picante=매운, especialidad=대표 메뉴.",
        examples: [
          { en: "¿Qué me recomienda?", ko: "뭘 추천하시나요?" },
          { en: "¿Cuál es la especialidad de la casa?", ko: "이 집 대표 메뉴가 뭐예요?" },
          { en: "¿La pasta está buena aquí?", ko: "여기 파스타 맛있어요?" },
          { en: "¿Qué lleva este plato?", ko: "이 음식엔 뭐가 들어가요?" },
          { en: "¿Es muy picante?", ko: "많이 매워요?" }
        ]
      },
      {
        pattern: "¿Tienen mesa para ___?",
        meaning: "___명 자리 있나요? (입장)",
        tip: "reserva=예약. mesa para dos=2인석.",
        examples: [
          { en: "¿Tienen mesa para dos?", ko: "두 명 자리 있나요?" },
          { en: "Tengo una reserva a nombre de Kim.", ko: "Kim 이름으로 예약했어요." },
          { en: "¿Cuánto hay que esperar?", ko: "얼마나 기다려야 하나요?" },
          { en: "¿Podemos sentarnos junto a la ventana?", ko: "창가에 앉을 수 있을까요?" },
          { en: "¿Se puede comer en la terraza?", ko: "테라스에서 먹을 수 있나요?" }
        ]
      },
      {
        pattern: "Perdone, ¿podría traerme ___?",
        meaning: "저기요, ___ 좀 가져다주실래요?",
        tip: "직원을 부를 땐 ¡Perdone! 또는 ¡Disculpe!. 손짓+눈맞춤.",
        examples: [
          { en: "Perdone, ¿nos trae la carta otra vez?", ko: "저기요, 메뉴 다시 주시겠어요?" },
          { en: "¿Me trae unas servilletas?", ko: "냅킨 좀 주시겠어요?" },
          { en: "Creo que esto no es lo que pedí.", ko: "이건 제가 주문한 게 아닌 것 같아요." },
          { en: "Esto está un poco frío.", ko: "이거 좀 식었어요." },
          { en: "¿Me lo puede calentar un poco?", ko: "이거 좀 데워주실 수 있나요?" }
        ]
      },
      {
        pattern: "La cuenta, por favor.",
        meaning: "계산서 주세요. (계산)",
        tip: "propina=팁. 스페인은 팁 의무 아님, 중남미는 흔히 10%.",
        examples: [
          { en: "La cuenta, por favor.", ko: "계산서 주세요." },
          { en: "¿Aceptan tarjeta?", ko: "카드 되나요?" },
          { en: "¿Podemos pagar por separado?", ko: "따로 계산할 수 있나요?" },
          { en: "Esta vez invito yo.", ko: "이번엔 내가 낼게." },
          { en: "Quédese con el cambio.", ko: "잔돈은 가지세요." }
        ]
      }
    ]
  },
  {
    id: "compras",
    icon: "🛍️",
    title: "쇼핑 & 결제",
    subtitle: "De Compras",
    blurb: "옷 사이즈, 가격, 교환·환불까지. 매장에서 쓰는 표현.",
    groups: [
      {
        pattern: "¿Tiene esto en ___?",
        meaning: "이거 ___(사이즈/색)로 있나요?",
        tip: "talla=옷 사이즈, número=신발 사이즈, color=색.",
        examples: [
          { en: "¿Tiene esto en talla mediana?", ko: "이거 M 사이즈로 있나요?" },
          { en: "¿Lo tiene en negro?", ko: "이거 검정색으로 있나요?" },
          { en: "¿Tiene una talla más pequeña?", ko: "더 작은 사이즈 있나요?" },
          { en: "¿Este es el único color?", ko: "색상은 이거뿐인가요?" },
          { en: "¿Me lo puedo probar?", ko: "입어봐도 될까요?" }
        ]
      },
      {
        pattern: "Solo estoy mirando, gracias.",
        meaning: "그냥 둘러보는 거예요, 감사합니다.",
        tip: "점원이 ¿Le ayudo?(도와드릴까요?)라 물을 때 부담 없이 거절.",
        examples: [
          { en: "Solo estoy mirando, gracias.", ko: "그냥 구경하는 거예요, 감사해요." },
          { en: "Estoy echando un vistazo.", ko: "그냥 둘러보고 있어요." },
          { en: "Si necesito ayuda, le aviso.", ko: "도움 필요하면 말씀드릴게요." },
          { en: "¿Me puede ayudar a buscar algo?", ko: "뭐 좀 찾는 거 도와주실래요?" },
          { en: "Busco un regalo para mi madre.", ko: "엄마 선물을 찾고 있어요." }
        ]
      },
      {
        pattern: "¿Cuánto cuesta?",
        meaning: "이거 얼마예요? (가격)",
        tip: "rebajas=세일, descuento=할인, caro=비싼, barato=싼.",
        examples: [
          { en: "¿Cuánto cuesta esto?", ko: "이거 얼마예요?" },
          { en: "¿Está en rebajas?", ko: "이거 세일 중인가요?" },
          { en: "Es un poco caro para mí.", ko: "저한텐 좀 비싸네요." },
          { en: "¿Me puede hacer un descuento?", ko: "좀 깎아주실 수 있나요?" },
          { en: "¿Hay algo más barato?", ko: "더 싼 거 있나요?" }
        ]
      },
      {
        pattern: "Quería devolver esto.",
        meaning: "이거 환불(반품)하고 싶어요.",
        tip: "devolver=반품, cambiar=교환, recibo/ticket=영수증.",
        examples: [
          { en: "Quería devolver esto, por favor.", ko: "이거 반품하고 싶어요." },
          { en: "¿Puedo cambiarlo por otra talla?", ko: "다른 사이즈로 교환할 수 있나요?" },
          { en: "Aquí está el ticket.", ko: "여기 영수증이요." },
          { en: "No me queda bien.", ko: "사이즈가 안 맞아요." },
          { en: "¿Cuál es su política de devoluciones?", ko: "환불 규정이 어떻게 되나요?" }
        ]
      },
      {
        pattern: "Pagar (결제)",
        meaning: "결제할 때 쓰는 표현들",
        tip: "efectivo=현금, tarjeta=카드, bolsa=봉투.",
        examples: [
          { en: "Pago con tarjeta.", ko: "카드로 결제할게요." },
          { en: "¿Puedo pagar en efectivo?", ko: "현금으로 내도 되나요?" },
          { en: "¿Me da una bolsa, por favor?", ko: "봉투 하나 주시겠어요?" },
          { en: "¿Me da el recibo?", ko: "영수증 주시겠어요?" },
          { en: "¿Cobran por la bolsa?", ko: "봉투 값 받나요?" }
        ]
      }
    ]
  },
  {
    id: "direcciones",
    icon: "🧭",
    title: "길찾기 & 교통",
    subtitle: "Direcciones y Transporte",
    blurb: "길 묻기, 버스·지하철·택시 이용 시 필요한 핵심 표현.",
    groups: [
      {
        pattern: "¿Cómo llego a ___?",
        meaning: "___에 어떻게 가나요? (길 묻기)",
        tip: "낯선 사람에겐 먼저 Perdone로 시작. lejos=먼, cerca=가까운.",
        examples: [
          { en: "Perdone, ¿cómo llego a la estación?", ko: "실례합니다, 역에 어떻게 가나요?" },
          { en: "¿Es por aquí el museo?", ko: "박물관이 이쪽인가요?" },
          { en: "¿Está lejos de aquí?", ko: "여기서 멀어요?" },
          { en: "¿Se puede ir andando?", ko: "걸어갈 수 있어요?" },
          { en: "¿Me lo puede mostrar en el mapa?", ko: "지도에서 보여주실 수 있나요?" }
        ]
      },
      {
        pattern: "Entender direcciones",
        meaning: "방향 안내 알아듣기",
        tip: "izquierda=왼쪽, derecha=오른쪽, recto/derecho=직진, esquina=모퉁이.",
        examples: [
          { en: "Siga todo recto dos calles.", ko: "두 블록 직진하세요." },
          { en: "Gire a la izquierda en la esquina.", ko: "모퉁이에서 왼쪽으로 도세요." },
          { en: "Está a la derecha.", ko: "오른쪽에 있어요." },
          { en: "Está a la vuelta de la esquina.", ko: "바로 모퉁이 돌면 있어요." },
          { en: "No tiene pérdida.", ko: "(눈에 띄어서) 못 찾을 수 없어요." }
        ]
      },
      {
        pattern: "El autobús / el metro",
        meaning: "버스·지하철 이용하기",
        tip: "línea=호선, parada=정거장, hacer transbordo=환승하다.",
        examples: [
          { en: "¿Qué línea va al centro?", ko: "시내로 가는 노선이 뭐예요?" },
          { en: "¿Tengo que hacer transbordo?", ko: "환승해야 하나요?" },
          { en: "¿Cuántas paradas faltan?", ko: "몇 정거장 남았어요?" },
          { en: "¿Este autobús va al aeropuerto?", ko: "이 버스 공항 가나요?" },
          { en: "¿Me avisa cuándo bajar?", ko: "내릴 때 알려주실 수 있나요?" }
        ]
      },
      {
        pattern: "En el taxi",
        meaning: "택시 타기",
        tip: "llévame/lléveme a~ = ~로 가주세요. taxímetro=미터기.",
        examples: [
          { en: "¿Me lleva a esta dirección?", ko: "이 주소로 가주시겠어요?" },
          { en: "¿Cuánto costará más o menos?", ko: "대략 얼마나 나올까요?" },
          { en: "¿Puede poner el taxímetro?", ko: "미터기 켜주시겠어요?" },
          { en: "Tengo un poco de prisa.", ko: "제가 좀 급해요." },
          { en: "Aquí está bien, gracias.", ko: "여기서 내려주시면 돼요." }
        ]
      }
    ]
  },
  {
    id: "viajes",
    icon: "✈️",
    title: "공항 & 여행",
    subtitle: "Aeropuerto y Viajes",
    blurb: "체크인, 입국심사, 관광까지 여행 전반의 표현.",
    groups: [
      {
        pattern: "En el mostrador (체크인)",
        meaning: "공항 체크인 카운터에서",
        tip: "ventanilla=창가, pasillo=복도, maleta/equipaje=수하물.",
        examples: [
          { en: "Quería facturar para mi vuelo.", ko: "탑승 수속 하려고요." },
          { en: "¿Me da un asiento de ventanilla?", ko: "창가 자리로 받을 수 있을까요?" },
          { en: "Tengo una maleta para facturar.", ko: "부칠 가방이 하나 있어요." },
          { en: "¿El vuelo sale a tiempo?", ko: "비행기 정시 출발하나요?" },
          { en: "¿De qué puerta sale?", ko: "몇 번 게이트에서 출발하나요?" }
        ]
      },
      {
        pattern: "En el control (입국 심사)",
        meaning: "입국 심사대에서",
        tip: "목적과 기간은 거의 항상 물어봐요. pasaporte=여권.",
        examples: [
          { en: "Estoy de vacaciones.", ko: "휴가차 왔어요." },
          { en: "Vengo por negocios.", ko: "출장 왔어요." },
          { en: "Me quedo dos semanas.", ko: "2주 동안 머물러요." },
          { en: "Me hospedo en un hotel del centro.", ko: "시내 호텔에 머물러요." },
          { en: "Aquí tiene mi pasaporte.", ko: "여기 여권이요." }
        ]
      },
      {
        pattern: "Pedir ayuda de viaje",
        meaning: "여행 중 도움 요청하기",
        tip: "관광지 사진 부탁은 흔해요. baño/servicio=화장실.",
        examples: [
          { en: "¿Nos puede hacer una foto?", ko: "저희 사진 좀 찍어주실 수 있나요?" },
          { en: "¿Dónde está el baño más cercano?", ko: "가장 가까운 화장실이 어디예요?" },
          { en: "¿Hay wifi gratis aquí?", ko: "여기 무료 와이파이 있나요?" },
          { en: "¿A qué hora abren?", ko: "몇 시에 문 열어요?" },
          { en: "¿Conoce un buen sitio para comer cerca?", ko: "근처에 맛집 아세요?" }
        ]
      },
      {
        pattern: "Cuando algo sale mal",
        meaning: "문제가 생겼을 때 (분실·지연)",
        tip: "perder=잃다/놓치다, retraso=지연.",
        examples: [
          { en: "Creo que he perdido el pasaporte.", ko: "여권을 잃어버린 것 같아요." },
          { en: "No ha llegado mi maleta.", ko: "제 짐이 안 나왔어요." },
          { en: "He perdido el vuelo de conexión.", ko: "환승 비행기를 놓쳤어요." },
          { en: "Mi vuelo lleva retraso.", ko: "제 비행기가 지연됐어요." },
          { en: "¿Con quién puedo hablar sobre esto?", ko: "이건 누구한테 말해야 하나요?" }
        ]
      }
    ]
  },
  {
    id: "hotel",
    icon: "🏨",
    title: "호텔 & 숙소",
    subtitle: "Hotel y Alojamiento",
    blurb: "체크인·체크아웃, 요청사항, 문제 해결까지 숙소 표현.",
    groups: [
      {
        pattern: "Entrada / salida",
        meaning: "체크인·체크아웃",
        tip: "reserva=예약, la salida=체크아웃, la entrada=체크인.",
        examples: [
          { en: "Tengo una reserva a nombre de Lee.", ko: "Lee 이름으로 예약했어요." },
          { en: "¿A qué hora es la salida?", ko: "체크아웃은 몇 시예요?" },
          { en: "¿Puedo entrar antes?", ko: "일찍 체크인할 수 있을까요?" },
          { en: "¿Puedo hacer la salida más tarde?", ko: "체크아웃을 늦게 할 수 있을까요?" },
          { en: "¿Puedo dejar las maletas aquí?", ko: "짐 좀 맡길 수 있나요?" }
        ]
      },
      {
        pattern: "Peticiones en el hotel",
        meaning: "호텔에 요청하기",
        tip: "toallas=수건, desayuno=조식, llave=열쇠.",
        examples: [
          { en: "¿Me puede dar más toallas?", ko: "수건 좀 더 받을 수 있을까요?" },
          { en: "¿El desayuno está incluido?", ko: "조식 포함인가요?" },
          { en: "¿Cuál es la contraseña del wifi?", ko: "와이파이 비밀번호가 뭐예요?" },
          { en: "¿Me puede pedir un taxi?", ko: "택시 좀 불러주시겠어요?" },
          { en: "¿Tiene una habitación con mejores vistas?", ko: "전망 더 좋은 방 있나요?" }
        ]
      },
      {
        pattern: "Reportar un problema",
        meaning: "숙소 문제 알리기",
        tip: "no funciona=고장났다 패턴이면 거의 다 해결돼요.",
        examples: [
          { en: "El aire acondicionado no funciona.", ko: "에어컨이 안 돼요." },
          { en: "La habitación de al lado hace mucho ruido.", ko: "옆방이 너무 시끄러워요." },
          { en: "No hay agua caliente.", ko: "온수가 안 나와요." },
          { en: "¿Puede venir alguien a revisarlo?", ko: "누가 와서 봐줄 수 있을까요?" },
          { en: "¿Me puede cambiar de habitación?", ko: "다른 방으로 바꿀 수 있을까요?" }
        ]
      }
    ]
  },
  {
    id: "telefono",
    icon: "📞",
    title: "전화 & 메시지",
    subtitle: "Teléfono y Mensajes",
    blurb: "전화 걸고 받기, 메시지 남기기 표현.",
    groups: [
      {
        pattern: "Hacer una llamada",
        meaning: "전화 걸 때",
        tip: "전화상 '저는'은 Soy~. ¿Está~?는 '~ 계세요?'.",
        examples: [
          { en: "Hola, soy Jun, de la empresa ABC.", ko: "안녕하세요, ABC사의 준입니다." },
          { en: "¿Está el señor Smith?", ko: "스미스 씨 계세요?" },
          { en: "Llamo por la cita.", ko: "예약 건으로 전화드렸어요." },
          { en: "¿Le pillo en buen momento?", ko: "지금 통화 괜찮으세요?" },
          { en: "¿Me puede pasar con el gerente?", ko: "매니저에게 연결해 주시겠어요?" }
        ]
      },
      {
        pattern: "Contestar / mensajes",
        meaning: "전화 받기 · 메시지",
        tip: "Un momento=잠시만요, dejar un mensaje=메시지를 남기다.",
        examples: [
          { en: "¿Dígame?", ko: "여보세요? (스페인식 전화 응답)" },
          { en: "Un momento, por favor.", ko: "잠시만 기다려 주세요." },
          { en: "Ahora mismo no está.", ko: "지금 자리에 없어요." },
          { en: "¿Quiere dejar un mensaje?", ko: "메시지 남겨드릴까요?" },
          { en: "¿Le puede decir que me llame?", ko: "저한테 전화해 달라고 전해주실래요?" }
        ]
      },
      {
        pattern: "Problemas en la línea",
        meaning: "통화가 안 들릴 때",
        tip: "se corta=끊긴다, no se oye bien=잘 안 들린다.",
        examples: [
          { en: "Perdona, se corta.", ko: "미안, 소리가 끊겨." },
          { en: "¿Puede hablar más alto?", ko: "조금 더 크게 말씀해 주시겠어요?" },
          { en: "No te oigo bien.", ko: "잘 안 들려요." },
          { en: "Te llamo en un momento.", ko: "조금 있다 다시 걸게요." },
          { en: "¿Me lo puede repetir?", ko: "다시 한번 말씀해 주시겠어요?" }
        ]
      }
    ]
  },
  {
    id: "trabajo",
    icon: "💼",
    title: "직장 & 회의",
    subtitle: "Trabajo y Reuniones",
    blurb: "회의, 동료와의 대화 등 비즈니스 스페인어 핵심 패턴.",
    groups: [
      {
        pattern: "En una reunión",
        meaning: "회의 중에",
        tip: "끼어들 땐 Perdón que interrumpa. 의견엔 Creo que~.",
        examples: [
          { en: "¿Empezamos?", ko: "시작할까요?" },
          { en: "Para aclarar, ¿quieres decir que...?", ko: "확실히 하자면, ~라는 말씀이신가요?" },
          { en: "Perdón que interrumpa, tengo una pregunta.", ko: "끼어들어 죄송한데, 질문이 있어요." },
          { en: "¿Lo puede explicar otra vez?", ko: "그거 다시 설명해 주시겠어요?" },
          { en: "Lo vemos más tarde.", ko: "그건 나중에 다루죠." }
        ]
      },
      {
        pattern: "Dar tu opinión en el trabajo",
        meaning: "업무 의견 말하기",
        tip: "단정보다 Yo propondría~/Quizá podríamos~로 부드럽게.",
        examples: [
          { en: "Yo propondría la primera opción.", ko: "첫 번째 안을 제안하고 싶어요." },
          { en: "Eso tiene sentido.", ko: "그거 말 되네요." },
          { en: "Entiendo tu punto, pero...", ko: "무슨 말인지 알겠는데, 다만…" },
          { en: "¿Podemos ver primero los números?", ko: "먼저 수치부터 볼 수 있을까요?" },
          { en: "Dejémoslo por ahora.", ko: "이건 일단 보류하죠." }
        ]
      },
      {
        pattern: "Pedir y ofrecer ayuda",
        meaning: "도움 요청·제안",
        tip: "echar una mano=손을 보태다(돕다).",
        examples: [
          { en: "¿Me puedes echar una mano con esto?", ko: "이것 좀 도와줄 수 있어요?" },
          { en: "¿Tienes un minuto?", ko: "잠깐 시간 있어요?" },
          { en: "Avísame si necesitas algo.", ko: "필요한 거 있으면 말해줘요." },
          { en: "Yo me encargo.", ko: "제가 처리할게요." },
          { en: "¿Me lo puedes explicar paso a paso?", ko: "차근차근 설명해 줄 수 있어요?" }
        ]
      },
      {
        pattern: "Plazos y horario",
        meaning: "마감·일정 관련",
        tip: "fecha límite/plazo=마감, cuanto antes=가능한 빨리.",
        examples: [
          { en: "¿Cuál es la fecha límite?", ko: "마감이 언제예요?" },
          { en: "¿Podemos aplazar el plazo?", ko: "마감을 좀 미룰 수 있을까요?" },
          { en: "Te lo envío el viernes.", ko: "금요일까지 보낼게요." },
          { en: "Voy un poco retrasado con esto.", ko: "이거 조금 밀렸어요." },
          { en: "¿Me lo puede mandar cuanto antes?", ko: "가능한 빨리 보내주실 수 있나요?" }
        ]
      }
    ]
  },
  {
    id: "peticiones",
    icon: "🙏",
    title: "부탁 & 제안",
    subtitle: "Peticiones y Sugerencias",
    blurb: "정중하게 부탁하고, 제안하고, 허락을 구하는 표현.",
    groups: [
      {
        pattern: "¿Podrías ___? / ¿Te importaría ___?",
        meaning: "___해 주시겠어요? (정중한 부탁)",
        tip: "조건법 podrías가 정중해요. ¿Te importaría~?엔 '괜찮다'는 No로 답해요(부정이 긍정!).",
        examples: [
          { en: "¿Podrías ayudarme un momento?", ko: "잠깐만 도와줄 수 있어요?" },
          { en: "¿Te importaría abrir la ventana?", ko: "창문 좀 열어주시겠어요?" },
          { en: "¿Me harías un favor?", ko: "부탁 하나 들어줄 수 있어요?" },
          { en: "¿Sería posible cambiar la reunión?", ko: "회의를 옮기는 게 가능할까요?" },
          { en: "Si no es molestia, ¿podrías...?", ko: "번거롭지 않으면, ~해 줄 수 있어요?" }
        ]
      },
      {
        pattern: "Pedir permiso",
        meaning: "허락 구하기",
        tip: "¿Puedo~?(친근), ¿Le importa si~?(아주 정중).",
        examples: [
          { en: "¿Puedo usar esto un momento?", ko: "이거 잠깐 써도 돼요?" },
          { en: "¿Está bien si me siento aquí?", ko: "여기 앉아도 될까요?" },
          { en: "¿Te importa si me uno?", ko: "같이 껴도 될까요?" },
          { en: "¿Le importa si me voy antes?", ko: "일찍 가도 될까요?" },
          { en: "¿Puedo usar el baño?", ko: "화장실 좀 써도 될까요?" }
        ]
      },
      {
        pattern: "Hacer sugerencias",
        meaning: "제안하기",
        tip: "¿Por qué no~?/¿Qué tal si~?/Vamos a~로 가볍게 권유.",
        examples: [
          { en: "¿Por qué no tomamos un café?", ko: "커피 한잔 하는 거 어때요?" },
          { en: "¿Qué tal si quedamos a las siete?", ko: "7시에 만나는 거 어때요?" },
          { en: "Vamos a descansar un poco.", ko: "잠깐 쉬어요." },
          { en: "Podríamos probar el sitio nuevo.", ko: "새로 생긴 데 가봐도 되고요." },
          { en: "¿Y si salimos ya?", ko: "지금 출발하는 거 어때요?" }
        ]
      },
      {
        pattern: "Decir sí / no con cortesía",
        meaning: "정중하게 수락·거절",
        tip: "거절은 Me encantaría, pero~로 쿠션을 깔아요.",
        examples: [
          { en: "Claro, sin problema.", ko: "그럼요, 문제없어요." },
          { en: "Con mucho gusto.", ko: "기꺼이 할게요." },
          { en: "Me encantaría, pero estoy ocupado.", ko: "그러고 싶은데, 제가 좀 바빠서요." },
          { en: "¿Quizá en otro momento?", ko: "다음 기회에 어때요?" },
          { en: "Déjame pensarlo.", ko: "좀 생각해 볼게요." }
        ]
      }
    ]
  },
  {
    id: "opiniones",
    icon: "💬",
    title: "의견 & 동의·반대",
    subtitle: "Opiniones",
    blurb: "내 생각을 말하고, 동의하거나 정중히 반대하는 표현.",
    groups: [
      {
        pattern: "Dar tu opinión",
        meaning: "의견 말하기",
        tip: "Para mí~/Creo que~/En mi opinión~으로 시작하면 자연스러워요.",
        examples: [
          { en: "Para mí, es una buena idea.", ko: "제 생각엔 좋은 생각이에요." },
          { en: "Creo que es demasiado caro.", ko: "너무 비싼 것 같아요." },
          { en: "Tal y como lo veo, hay dos opciones.", ko: "제가 보기엔 선택지가 둘이에요." },
          { en: "La verdad, no estoy seguro.", ko: "솔직히 잘 모르겠어요." },
          { en: "Depende, la verdad.", ko: "사실 경우에 따라 달라요." }
        ]
      },
      {
        pattern: "Estar de acuerdo",
        meaning: "동의하기",
        tip: "estar de acuerdo=동의하다. Exacto/Totalmente로 맞장구!",
        examples: [
          { en: "Estoy totalmente de acuerdo.", ko: "완전 동의해요." },
          { en: "Exacto, eso pensaba yo.", ko: "맞아요, 저도 그렇게 생각했어요." },
          { en: "Tienes razón.", ko: "네 말이 맞아." },
          { en: "No podría estar más de acuerdo.", ko: "전적으로 동의해요." },
          { en: "Es verdad.", ko: "그건 맞아요." }
        ]
      },
      {
        pattern: "No estar de acuerdo con cortesía",
        meaning: "정중하게 반대하기",
        tip: "Entiendo lo que dices, pero~로 먼저 인정하고 반대.",
        examples: [
          { en: "Entiendo lo que dices, pero no estoy seguro.", ko: "무슨 말인지 알겠는데, 좀 확신이 안 서요." },
          { en: "Me temo que no estoy de acuerdo.", ko: "죄송하지만 저는 생각이 달라요." },
          { en: "Es una forma de verlo, pero...", ko: "그렇게 볼 수도 있지만, 다만…" },
          { en: "Yo lo veo distinto.", ko: "저는 다르게 봐요." },
          { en: "¿Has pensado en la otra parte?", ko: "반대편 입장도 생각해 봤어요?" }
        ]
      }
    ]
  },
  {
    id: "emociones",
    icon: "😊",
    title: "감정 표현",
    subtitle: "Emociones",
    blurb: "기쁨, 놀람, 공감, 위로 등 감정을 자연스럽게 드러내는 표현.",
    groups: [
      {
        pattern: "Alegría y emoción",
        meaning: "기쁨·신남",
        tip: "¡Qué + 형용사!는 '정말 ~하다!' 감탄. ¡Qué bien!=잘됐다!",
        examples: [
          { en: "¡Estoy muy contento!", ko: "너무 기뻐요! (남성)" },
          { en: "¡No veo la hora del fin de semana!", ko: "주말이 너무 기다려져요!" },
          { en: "Esto me alegró el día.", ko: "덕분에 오늘 하루가 행복해요." },
          { en: "¡Qué buena noticia!", ko: "정말 좋은 소식이에요!" },
          { en: "¡Qué guay!", ko: "완전 멋지다! (스페인 구어)" }
        ]
      },
      {
        pattern: "Sorpresa",
        meaning: "놀람",
        tip: "¡No me digas!/¿En serio?는 '진짜?!' 같은 리액션.",
        examples: [
          { en: "¡No me digas! ¿En serio?", ko: "말도 안 돼! 진짜?" },
          { en: "¡No me lo puedo creer!", ko: "믿기지 않아요!" },
          { en: "¡Qué sorpresa!", ko: "정말 놀랍네요!" },
          { en: "No me lo esperaba.", ko: "전혀 예상 못 했어요." },
          { en: "Espera, ¿qué?", ko: "잠깐, 뭐라고?" }
        ]
      },
      {
        pattern: "Empatía y consuelo",
        meaning: "공감·위로",
        tip: "Lo siento mucho=정말 유감이에요(위로). cuánto lo siento도 흔해요.",
        examples: [
          { en: "Lo siento mucho.", ko: "정말 유감이에요." },
          { en: "Eso debe de ser muy difícil.", ko: "정말 힘들겠어요." },
          { en: "Si necesitas algo, aquí estoy.", ko: "필요한 거 있으면 언제든 말해요." },
          { en: "Tómate el tiempo que necesites.", ko: "천천히 시간 가지세요." },
          { en: "Todo va a salir bien.", ko: "다 잘될 거예요." }
        ]
      },
      {
        pattern: "Frustración y preocupación",
        meaning: "짜증·걱정",
        tip: "estar estresado=스트레스 받다, estar preocupado=걱정되다.",
        examples: [
          { en: "Estoy un poco estresado.", ko: "좀 스트레스 받았어요." },
          { en: "Esto es muy frustrante.", ko: "이거 진짜 답답하네요." },
          { en: "Estoy preocupado por eso.", ko: "그게 좀 걱정돼요." },
          { en: "No sé qué hacer.", ko: "어떻게 해야 할지 모르겠어요." },
          { en: "Ha sido una semana dura.", ko: "힘든 한 주였어요." }
        ]
      }
    ]
  },
  {
    id: "problemas",
    icon: "⚠️",
    title: "문제 & 불만 해결",
    subtitle: "Problemas y Quejas",
    blurb: "서비스 불만, 사과, 문제 해결 요청 표현. 감정보다 사실 위주로.",
    groups: [
      {
        pattern: "Poner una queja",
        meaning: "불만 제기하기",
        tip: "공격적이지 않게. Hay un problema con~으로 시작.",
        examples: [
          { en: "Hay un problema con mi pedido.", ko: "주문에 문제가 좀 있어요." },
          { en: "Esto no es lo que esperaba.", ko: "이건 제가 기대한 것과 달라요." },
          { en: "Quería hablar con el encargado.", ko: "책임자와 얘기하고 싶어요." },
          { en: "Llevo más de una hora esperando.", ko: "한 시간 넘게 기다리고 있어요." },
          { en: "¿Lo puede revisar, por favor?", ko: "이거 좀 알아봐 주실 수 있나요?" }
        ]
      },
      {
        pattern: "Pedir una solución",
        meaning: "해결 요청하기",
        tip: "reembolso=환불, cambiar=교체, arreglar=수리.",
        examples: [
          { en: "Quería un reembolso, por favor.", ko: "환불 부탁드려요." },
          { en: "¿Me lo puede cambiar?", ko: "교체해 주실 수 있나요?" },
          { en: "¿Cómo podemos solucionarlo?", ko: "이거 어떻게 해결할 수 있을까요?" },
          { en: "¿Qué puede hacer al respecto?", ko: "이 건에 대해 어떻게 해주실 수 있나요?" },
          { en: "¿Hay algo que pueda hacer?", ko: "해주실 수 있는 게 있을까요?" }
        ]
      },
      {
        pattern: "Disculparse",
        meaning: "사과하기",
        tip: "Perdón은 가벼운 사과, Lo siento는 더 진심 어린 사과.",
        examples: [
          { en: "Lo siento mucho.", ko: "정말 죄송해요." },
          { en: "Fue culpa mía.", ko: "그건 제 잘못이에요." },
          { en: "Perdón, no me di cuenta.", ko: "미안, 몰랐어요." },
          { en: "Disculpe la confusión.", ko: "혼선이 있었던 점 사과드려요." },
          { en: "No volverá a pasar.", ko: "다시는 이런 일 없을 거예요." }
        ]
      },
      {
        pattern: "Aceptar una disculpa",
        meaning: "사과 받아주기",
        tip: "No pasa nada=괜찮아요(직역: 아무 일도 안 일어나).",
        examples: [
          { en: "No pasa nada.", ko: "괜찮아요." },
          { en: "Tranquilo, no hay problema.", ko: "괜찮아요, 문제없어요." },
          { en: "No te preocupes.", ko: "신경 쓰지 마세요." },
          { en: "Son cosas que pasan.", ko: "그런 일도 있는 거죠." },
          { en: "Disculpa aceptada.", ko: "사과 받아들일게요." }
        ]
      }
    ]
  },
  {
    id: "salud",
    icon: "🏥",
    title: "병원 & 응급",
    subtitle: "Salud y Emergencias",
    blurb: "병원·약국에서 증상을 설명하고 도움을 요청하는 표현.",
    groups: [
      {
        pattern: "Describir síntomas",
        meaning: "증상 설명하기",
        tip: "Me duele + 단수, Me duelen + 복수. duele=아프다.",
        examples: [
          { en: "Me duele la cabeza.", ko: "머리가 아파요." },
          { en: "Tengo fiebre desde ayer.", ko: "어제부터 열이 나요." },
          { en: "Me duele el estómago.", ko: "배가 아파요." },
          { en: "Estoy mareado.", ko: "어지러워요." },
          { en: "Creo que estoy resfriado.", ko: "감기에 걸린 것 같아요." }
        ]
      },
      {
        pattern: "En el médico / la farmacia",
        meaning: "병원·약국에서",
        tip: "receta=처방전, analgésico=진통제, alérgico a~=~에 알레르기.",
        examples: [
          { en: "Quería ver a un médico.", ko: "진료를 받고 싶어요." },
          { en: "¿Necesito receta para esto?", ko: "이거 처방전이 필요한가요?" },
          { en: "¿Tiene algo para la tos?", ko: "기침에 먹는 약 있나요?" },
          { en: "Soy alérgico a la penicilina.", ko: "저는 페니실린 알레르기가 있어요." },
          { en: "¿Cada cuánto lo tomo?", ko: "이거 얼마나 자주 먹어야 하나요?" }
        ]
      },
      {
        pattern: "En una emergencia",
        meaning: "응급 상황에서",
        tip: "급할 땐 짧고 명확하게. ambulancia=구급차.",
        examples: [
          { en: "¡Ayuda! ¡Llamen una ambulancia!", ko: "도와주세요! 구급차 불러주세요!" },
          { en: "Es una emergencia.", ko: "응급 상황이에요." },
          { en: "Hay alguien herido.", ko: "누가 다쳤어요." },
          { en: "¿Dónde está el hospital más cercano?", ko: "가장 가까운 병원이 어디예요?" },
          { en: "Necesito ayuda ahora mismo.", ko: "지금 당장 도움이 필요해요." }
        ]
      }
    ]
  },
  {
    id: "dia-a-dia",
    icon: "☕",
    title: "일상 & 친구 대화",
    subtitle: "Día a Día",
    blurb: "친구와 편하게 주고받는 캐주얼한 일상 표현.",
    groups: [
      {
        pattern: "Hacer planes con amigos",
        meaning: "친구와 약속 잡기",
        tip: "quedar=만나기로 하다, ¿te apetece~?=~할 생각 있어?(스페인).",
        examples: [
          { en: "¿Estás libre este finde?", ko: "이번 주말에 시간 돼?" },
          { en: "¿Te apetece cenar algún día?", ko: "언제 저녁 같이 먹을래?" },
          { en: "A ver si quedamos pronto.", ko: "조만간 보자." },
          { en: "¿A qué hora te viene bien?", ko: "몇 시가 괜찮아?" },
          { en: "Por mí, lo que sea.", ko: "난 아무거나 다 좋아." }
        ]
      },
      {
        pattern: "Reacciones casuales",
        meaning: "캐주얼한 리액션",
        tip: "맞장구가 대화를 살려요. ¡Qué fuerte!=헐, 대박!",
        examples: [
          { en: "¿En serio?", ko: "진짜?" },
          { en: "¡Qué guay!", ko: "완전 멋지다!" },
          { en: "¡Qué pena!", ko: "에이, 아쉽다/안됐다!" },
          { en: "Yo igual.", ko: "나도 그래." },
          { en: "¡Y que lo digas!", ko: "내 말이!(완전 공감)" }
        ]
      },
      {
        pattern: "Ponerse al día",
        meaning: "근황 나누기",
        tip: "ponerse al día=근황을 나누다. ¿Qué tal todo?=다 어때?",
        examples: [
          { en: "¿Qué tal todo?", ko: "요즘 다 잘 돼가?" },
          { en: "¿Cómo está tu familia?", ko: "가족들은 잘 지내?" },
          { en: "¿Alguna novedad?", ko: "뭐 새로운 일 있어?" },
          { en: "Tenemos que hacer esto más a menudo.", ko: "우리 이거 더 자주 하자." },
          { en: "Cómo pasa el tiempo, ¿eh?", ko: "시간 진짜 빠르다, 그치?" }
        ]
      },
      {
        pattern: "Muletillas (추임새)",
        meaning: "자연스러운 추임새",
        tip: "말이 막힐 때 원어민도 쓰는 시간벌기 표현이에요.",
        examples: [
          { en: "¿Sabes lo que digo?", ko: "무슨 말인지 알지?" },
          { en: "A ver, déjame pensar...", ko: "음, 생각 좀 해보고…" },
          { en: "La verdad es que...", ko: "솔직히 말하면…" },
          { en: "O sea, está bien.", ko: "그러니까, 뭐 괜찮아." },
          { en: "Bueno, ¿por dónde íbamos?", ko: "아무튼, 우리 어디까지 얘기했지?" }
        ]
      }
    ]
  }
];
