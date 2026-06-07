/* 실생활 영어 패턴 데이터
 * 각 상황(situation) → 패턴(pattern) 그룹 → 예문(examples: en/ko)
 * tip: 패턴 사용 요령 한 줄
 */
window.PATTERN_DATA = [
  {
    id: "greetings",
    icon: "👋",
    title: "인사 & 스몰토크",
    subtitle: "Greetings & Small Talk",
    blurb: "처음 만나거나 가볍게 안부를 주고받을 때. 영어권에서 스몰토크는 예의입니다.",
    groups: [
      {
        pattern: "How's it going? / How are you doing?",
        meaning: "어떻게 지내? (가장 흔한 안부 인사)",
        tip: "직역하면 어색해요. 보통 'Good, you?' 처럼 가볍게 받아칩니다.",
        examples: [
          { en: "Hey, how's it going?", ko: "안녕, 어떻게 지내?" },
          { en: "How are you doing today?", ko: "오늘 어떻게 지내세요?" },
          { en: "Good to see you. How have you been?", ko: "반가워요. 그동안 어떻게 지냈어요?" },
          { en: "Pretty good, thanks. How about you?", ko: "꽤 좋아요, 고마워요. 당신은요?" },
          { en: "Can't complain. Same as always.", ko: "그럭저럭이요. 늘 똑같죠." }
        ]
      },
      {
        pattern: "What have you been up to?",
        meaning: "요즘 뭐 하고 지내? (근황 묻기)",
        tip: "오랜만에 만난 사람에게 자연스럽게 쓰는 표현이에요.",
        examples: [
          { en: "What have you been up to lately?", ko: "요즘 뭐 하고 지냈어요?" },
          { en: "Not much, just working a lot.", ko: "별거 없어요, 그냥 일만 많이 했어요." },
          { en: "I've been pretty busy with work.", ko: "일 때문에 꽤 바빴어요." },
          { en: "Just the usual, you know.", ko: "뭐 늘 똑같죠." },
          { en: "I started learning English again!", ko: "다시 영어 공부 시작했어요!" }
        ]
      },
      {
        pattern: "It's been a while.",
        meaning: "오랜만이야.",
        tip: "Long time no see보다 자연스럽고 부드러운 표현이에요.",
        examples: [
          { en: "Hey! It's been a while.", ko: "야! 오랜만이다." },
          { en: "Long time no see! How are things?", ko: "오랜만이야! 잘 지내?" },
          { en: "It feels like forever since we last met.", ko: "마지막으로 만난 지 정말 오래된 것 같아." },
          { en: "We should catch up sometime.", ko: "언제 한번 회포 풀자." },
          { en: "Let's not leave it so long next time.", ko: "다음엔 이렇게 오래 안 보지 말자." }
        ]
      },
      {
        pattern: "Nice weather, isn't it?",
        meaning: "날씨 좋네요. (날씨 스몰토크)",
        tip: "엘리베이터·줄서기 등 어색한 침묵을 깰 때 만능 주제예요.",
        examples: [
          { en: "Nice weather we're having, isn't it?", ko: "요즘 날씨 좋죠?" },
          { en: "It's freezing today, isn't it?", ko: "오늘 진짜 춥네요." },
          { en: "Looks like it's going to rain.", ko: "비 올 것 같아요." },
          { en: "I hope it clears up by the weekend.", ko: "주말까지는 날이 개면 좋겠어요." },
          { en: "Can you believe this heat?", ko: "이 더위 진짜 말도 안 되죠?" }
        ]
      },
      {
        pattern: "Take care! / See you around.",
        meaning: "잘 지내! / 또 봐요. (헤어질 때)",
        tip: "Goodbye보다 캐주얼하고 친근한 작별 인사예요.",
        examples: [
          { en: "Alright, take care!", ko: "그래, 잘 지내!" },
          { en: "See you around!", ko: "또 봐요!" },
          { en: "Have a good one!", ko: "좋은 하루 보내요!" },
          { en: "Catch you later.", ko: "나중에 봐." },
          { en: "It was great seeing you.", ko: "만나서 정말 반가웠어요." }
        ]
      }
    ]
  },
  {
    id: "intro",
    icon: "🤝",
    title: "자기소개 & 친해지기",
    subtitle: "Introductions & Getting to Know",
    blurb: "이름, 직업, 출신을 묻고 답하며 처음 관계를 트는 표현들.",
    groups: [
      {
        pattern: "I'm ___. Nice to meet you.",
        meaning: "저는 ___예요. 만나서 반가워요.",
        tip: "처음 만났을 때는 Nice to meet you, 다음부터는 Nice to see you.",
        examples: [
          { en: "Hi, I'm Jun. Nice to meet you.", ko: "안녕하세요, 저는 준이에요. 만나서 반가워요." },
          { en: "Nice to meet you too. I'm Sarah.", ko: "저도 반가워요. 저는 사라예요." },
          { en: "I've heard a lot about you.", ko: "말씀 많이 들었어요." },
          { en: "Please call me Jun.", ko: "그냥 준이라고 불러주세요." },
          { en: "How do you two know each other?", ko: "두 분은 어떻게 아는 사이예요?" }
        ]
      },
      {
        pattern: "What do you do?",
        meaning: "무슨 일 하세요? (직업 묻기)",
        tip: "What's your job?보다 What do you do?가 훨씬 자연스러워요.",
        examples: [
          { en: "So, what do you do?", ko: "그래서, 무슨 일 하세요?" },
          { en: "I work in marketing.", ko: "마케팅 일을 해요." },
          { en: "I'm a software developer.", ko: "저는 소프트웨어 개발자예요." },
          { en: "I work for a small startup.", ko: "작은 스타트업에서 일해요." },
          { en: "I'm between jobs right now.", ko: "지금은 잠깐 쉬는 중이에요(이직 중이에요)." }
        ]
      },
      {
        pattern: "Where are you from?",
        meaning: "어디 출신이세요?",
        tip: "Where are you from?은 나라/도시, Where do you live?는 현재 사는 곳.",
        examples: [
          { en: "Where are you from?", ko: "어디서 오셨어요?" },
          { en: "I'm from Seoul, South Korea.", ko: "저는 한국 서울에서 왔어요." },
          { en: "Originally I'm from Busan, but I live in Seoul now.", ko: "원래는 부산 출신인데, 지금은 서울에 살아요." },
          { en: "Have you ever been to Korea?", ko: "한국에 가본 적 있어요?" },
          { en: "How long have you lived here?", ko: "여기 산 지는 얼마나 됐어요?" }
        ]
      },
      {
        pattern: "What do you do for fun?",
        meaning: "취미가 뭐예요? / 재미로 뭐 해요?",
        tip: "What are your hobbies?는 다소 교과서적. for fun이 자연스러워요.",
        examples: [
          { en: "What do you do for fun?", ko: "재미로는 뭐 하세요?" },
          { en: "I'm really into hiking these days.", ko: "요즘 등산에 푹 빠졌어요." },
          { en: "I love trying new restaurants.", ko: "새로운 식당 가보는 걸 좋아해요." },
          { en: "On weekends I usually just relax at home.", ko: "주말엔 보통 집에서 쉬어요." },
          { en: "We have a lot in common!", ko: "우리 통하는 게 많네요!" }
        ]
      },
      {
        pattern: "Let's keep in touch.",
        meaning: "연락하고 지내요.",
        tip: "연락처 교환할 때 자연스러운 마무리 표현이에요.",
        examples: [
          { en: "Let's keep in touch.", ko: "연락하고 지내요." },
          { en: "Can I get your number?", ko: "연락처 받을 수 있을까요?" },
          { en: "Are you on Instagram?", ko: "인스타 하세요?" },
          { en: "I'll text you the details.", ko: "자세한 건 문자로 보낼게요." },
          { en: "It was really nice talking to you.", ko: "얘기 나눠서 정말 좋았어요." }
        ]
      }
    ]
  },
  {
    id: "restaurant",
    icon: "🍽️",
    title: "식당 & 카페",
    subtitle: "Restaurant & Cafe",
    blurb: "주문, 추천 요청, 계산까지. 외식할 때 꼭 필요한 표현 모음.",
    groups: [
      {
        pattern: "Could I get ___, please?",
        meaning: "___ 주시겠어요? (주문)",
        tip: "I want보다 Could I get / I'll have가 정중하고 자연스러워요.",
        examples: [
          { en: "Could I get a latte, please?", ko: "라떼 한 잔 주시겠어요?" },
          { en: "I'll have the steak, medium rare.", ko: "스테이크 미디엄 레어로 할게요." },
          { en: "Can I get this to go?", ko: "이거 포장되나요?" },
          { en: "I'll have the same.", ko: "저도 같은 걸로 할게요." },
          { en: "Could we get some water, please?", ko: "물 좀 주시겠어요?" }
        ]
      },
      {
        pattern: "What would you recommend?",
        meaning: "뭐가 맛있어요? / 추천해 주실래요?",
        tip: "메뉴가 고민될 때 점원에게 추천을 구하는 표현이에요.",
        examples: [
          { en: "What would you recommend?", ko: "뭘 추천하시나요?" },
          { en: "What's your most popular dish?", ko: "가장 인기 있는 메뉴가 뭐예요?" },
          { en: "Is the pasta good here?", ko: "여기 파스타 맛있어요?" },
          { en: "What's in this dish?", ko: "이 음식엔 뭐가 들어가나요?" },
          { en: "Is this spicy?", ko: "이거 매워요?" }
        ]
      },
      {
        pattern: "Do you have a table for ___?",
        meaning: "___명 자리 있나요? (입장)",
        tip: "예약은 reservation, 그냥 자리 여부는 table for two처럼.",
        examples: [
          { en: "Do you have a table for two?", ko: "두 명 자리 있나요?" },
          { en: "We have a reservation under Kim.", ko: "Kim 이름으로 예약했어요." },
          { en: "How long is the wait?", ko: "얼마나 기다려야 하나요?" },
          { en: "Could we sit by the window?", ko: "창가 자리에 앉을 수 있을까요?" },
          { en: "Is it okay if we sit outside?", ko: "밖에 앉아도 될까요?" }
        ]
      },
      {
        pattern: "Excuse me, could I ask for ___?",
        meaning: "저기요, ___ 좀 부탁드려도 될까요?",
        tip: "직원을 부를 땐 Excuse me. 손가락질 대신 가벼운 손짓+눈맞춤.",
        examples: [
          { en: "Excuse me, could we get the menu again?", ko: "저기요, 메뉴 다시 볼 수 있을까요?" },
          { en: "Could I have some more napkins?", ko: "냅킨 좀 더 주시겠어요?" },
          { en: "I think there's a mistake with my order.", ko: "주문이 잘못 나온 것 같아요." },
          { en: "This isn't what I ordered.", ko: "이건 제가 주문한 게 아니에요." },
          { en: "Could you heat this up a little?", ko: "이거 좀 데워주실 수 있나요?" }
        ]
      },
      {
        pattern: "Can we get the check?",
        meaning: "계산서 주세요. (계산)",
        tip: "미국은 check, 영국은 bill. 보통 자리에서 계산해요.",
        examples: [
          { en: "Can we get the check, please?", ko: "계산서 주시겠어요?" },
          { en: "Do you take cards?", ko: "카드 되나요?" },
          { en: "Let's split the bill.", ko: "각자 내자(더치페이 하자)." },
          { en: "It's on me this time.", ko: "이번엔 내가 살게." },
          { en: "Keep the change.", ko: "잔돈은 가지세요." }
        ]
      }
    ]
  },
  {
    id: "shopping",
    icon: "🛍️",
    title: "쇼핑 & 결제",
    subtitle: "Shopping & Payment",
    blurb: "옷 사이즈, 가격 흥정, 교환·환불까지. 매장에서 쓰는 표현.",
    groups: [
      {
        pattern: "Do you have this in ___?",
        meaning: "이거 ___(사이즈/색)로 있나요?",
        tip: "사이즈·색상·다른 종류를 물을 때 만능 패턴이에요.",
        examples: [
          { en: "Do you have this in a medium?", ko: "이거 M 사이즈로 있나요?" },
          { en: "Do you have this in black?", ko: "이거 검정색으로 있나요?" },
          { en: "Do you have this in a smaller size?", ko: "이거 더 작은 사이즈 있나요?" },
          { en: "Is this the only color you have?", ko: "색상은 이거 하나뿐인가요?" },
          { en: "Can I try this on?", ko: "이거 입어봐도 될까요?" }
        ]
      },
      {
        pattern: "I'm just looking, thanks.",
        meaning: "그냥 둘러보는 거예요, 감사합니다.",
        tip: "점원이 도움을 물을 때 부담 없이 거절하는 표현이에요.",
        examples: [
          { en: "I'm just looking, thanks.", ko: "그냥 구경하는 거예요, 감사해요." },
          { en: "I'm just browsing for now.", ko: "지금은 그냥 둘러보고 있어요." },
          { en: "I'll let you know if I need help.", ko: "도움 필요하면 말씀드릴게요." },
          { en: "Actually, could you help me find something?", ko: "사실, 뭐 좀 찾는 거 도와주실래요?" },
          { en: "I'm looking for a gift for my mom.", ko: "엄마 선물을 찾고 있어요." }
        ]
      },
      {
        pattern: "How much is this?",
        meaning: "이거 얼마예요? (가격)",
        tip: "가격표가 없을 때, 또는 할인 여부를 물을 때 써요.",
        examples: [
          { en: "How much is this?", ko: "이거 얼마예요?" },
          { en: "Is this on sale?", ko: "이거 할인 중인가요?" },
          { en: "That's a bit out of my budget.", ko: "이건 제 예산을 좀 넘네요." },
          { en: "Can you give me a discount?", ko: "좀 깎아주실 수 있나요?" },
          { en: "Is there any way to get it cheaper?", ko: "더 싸게 살 방법이 있을까요?" }
        ]
      },
      {
        pattern: "I'd like to return this.",
        meaning: "이거 환불(반품)하고 싶어요.",
        tip: "교환은 exchange, 환불은 return/refund. 영수증(receipt) 챙기기.",
        examples: [
          { en: "I'd like to return this, please.", ko: "이거 반품하고 싶어요." },
          { en: "Can I exchange this for a different size?", ko: "이거 다른 사이즈로 교환할 수 있나요?" },
          { en: "Here's the receipt.", ko: "여기 영수증이요." },
          { en: "It doesn't fit.", ko: "사이즈가 안 맞아요." },
          { en: "What's your return policy?", ko: "환불 규정이 어떻게 되나요?" }
        ]
      },
      {
        pattern: "Paying & checkout",
        meaning: "결제할 때 쓰는 표현들",
        tip: "현금 cash, 카드 card, 봉투 bag. Would you like a bag?에 대비!",
        examples: [
          { en: "I'll pay by card.", ko: "카드로 결제할게요." },
          { en: "Can I pay in cash?", ko: "현금으로 내도 되나요?" },
          { en: "Could I have a bag, please?", ko: "봉투 하나 주시겠어요?" },
          { en: "Do you have a points card?", ko: "(직원이) 포인트 카드 있으세요?" },
          { en: "Can I get a receipt?", ko: "영수증 받을 수 있을까요?" }
        ]
      }
    ]
  },
  {
    id: "directions",
    icon: "🧭",
    title: "길찾기 & 교통",
    subtitle: "Directions & Transportation",
    blurb: "길 묻기, 버스·지하철·택시 이용 시 필요한 핵심 표현.",
    groups: [
      {
        pattern: "How do I get to ___?",
        meaning: "___에 어떻게 가나요? (길 묻기)",
        tip: "낯선 사람에게는 먼저 Excuse me로 시작하세요.",
        examples: [
          { en: "Excuse me, how do I get to the station?", ko: "실례합니다, 역에 어떻게 가나요?" },
          { en: "Is this the right way to the museum?", ko: "박물관 가는 길이 이쪽이 맞나요?" },
          { en: "How far is it from here?", ko: "여기서 얼마나 머나요?" },
          { en: "Is it within walking distance?", ko: "걸어갈 수 있는 거리예요?" },
          { en: "Could you show me on the map?", ko: "지도에서 좀 보여주실 수 있나요?" }
        ]
      },
      {
        pattern: "Understanding directions",
        meaning: "방향 안내를 알아듣는 표현",
        tip: "left/right, straight, block, corner만 알아도 절반은 알아들어요.",
        examples: [
          { en: "Go straight for two blocks.", ko: "두 블록 직진하세요." },
          { en: "Turn left at the corner.", ko: "모퉁이에서 왼쪽으로 도세요." },
          { en: "It's on your right.", ko: "오른쪽에 있어요." },
          { en: "It's just around the corner.", ko: "바로 모퉁이 돌면 있어요." },
          { en: "You can't miss it.", ko: "(눈에 띄어서) 못 찾을 수 없을 거예요." }
        ]
      },
      {
        pattern: "Taking the bus / subway",
        meaning: "버스·지하철 이용하기",
        tip: "line은 호선, stop은 정거장, transfer는 환승이에요.",
        examples: [
          { en: "Which line goes to downtown?", ko: "시내로 가는 노선이 어느 거예요?" },
          { en: "Do I need to transfer?", ko: "환승해야 하나요?" },
          { en: "How many stops is it?", ko: "몇 정거장이에요?" },
          { en: "Does this bus go to the airport?", ko: "이 버스 공항 가나요?" },
          { en: "Could you tell me when to get off?", ko: "내릴 때 알려주실 수 있나요?" }
        ]
      },
      {
        pattern: "Taking a taxi",
        meaning: "택시 타기",
        tip: "Take me to ~보다 Could you take me to ~가 부드러워요.",
        examples: [
          { en: "Could you take me to this address?", ko: "이 주소로 가주시겠어요?" },
          { en: "How much will it be, roughly?", ko: "대략 얼마나 나올까요?" },
          { en: "Could you turn on the meter?", ko: "미터기 켜주시겠어요?" },
          { en: "I'm in a bit of a hurry.", ko: "제가 좀 급해요." },
          { en: "You can drop me off here.", ko: "여기서 내려주시면 돼요." }
        ]
      }
    ]
  },
  {
    id: "travel",
    icon: "✈️",
    title: "공항 & 여행",
    subtitle: "Airport & Travel",
    blurb: "체크인, 입국심사, 호텔, 관광까지 여행 전반의 표현.",
    groups: [
      {
        pattern: "At check-in",
        meaning: "공항 체크인 카운터에서",
        tip: "창가 window, 복도 aisle. 수하물은 baggage/luggage.",
        examples: [
          { en: "I'd like to check in for my flight.", ko: "탑승 수속 하려고요." },
          { en: "Could I have a window seat?", ko: "창가 자리로 받을 수 있을까요?" },
          { en: "I have one bag to check in.", ko: "부칠 가방이 하나 있어요." },
          { en: "Is the flight on time?", ko: "비행기 정시 출발하나요?" },
          { en: "Which gate does it leave from?", ko: "몇 번 게이트에서 출발하나요?" }
        ]
      },
      {
        pattern: "At immigration",
        meaning: "입국 심사대에서",
        tip: "목적(purpose)과 기간(how long)은 거의 100% 물어봐요. 미리 준비!",
        examples: [
          { en: "I'm here on vacation.", ko: "휴가차 왔어요." },
          { en: "I'm here for business.", ko: "출장 왔어요." },
          { en: "I'll be staying for two weeks.", ko: "2주 동안 머물 거예요." },
          { en: "I'm staying at a hotel downtown.", ko: "시내 호텔에 머물러요." },
          { en: "Here's my passport.", ko: "여기 여권이요." }
        ]
      },
      {
        pattern: "Asking for help while traveling",
        meaning: "여행 중 도움 요청하기",
        tip: "관광지에서 사진 부탁은 아주 흔해요. 미소와 함께!",
        examples: [
          { en: "Could you take a picture of us?", ko: "저희 사진 좀 찍어주실 수 있나요?" },
          { en: "Where's the nearest restroom?", ko: "가장 가까운 화장실이 어디예요?" },
          { en: "Is there free Wi-Fi here?", ko: "여기 무료 와이파이 있나요?" },
          { en: "What time does it open?", ko: "몇 시에 문 열어요?" },
          { en: "Do you know any good places to eat nearby?", ko: "근처에 맛집 아세요?" }
        ]
      },
      {
        pattern: "When something goes wrong",
        meaning: "문제가 생겼을 때 (분실·지연)",
        tip: "당황하지 말고 또박또박. lost, delayed, missed가 핵심 단어.",
        examples: [
          { en: "I think I lost my passport.", ko: "여권을 잃어버린 것 같아요." },
          { en: "My luggage didn't arrive.", ko: "제 짐이 안 나왔어요." },
          { en: "I missed my connecting flight.", ko: "환승 비행기를 놓쳤어요." },
          { en: "My flight got delayed.", ko: "제 비행기가 지연됐어요." },
          { en: "Who should I talk to about this?", ko: "이건 누구한테 말해야 하나요?" }
        ]
      }
    ]
  },
  {
    id: "hotel",
    icon: "🏨",
    title: "호텔 & 숙소",
    subtitle: "Hotel & Accommodation",
    blurb: "체크인·체크아웃, 요청사항, 문제 해결까지 숙소에서의 표현.",
    groups: [
      {
        pattern: "Checking in / out",
        meaning: "체크인·체크아웃",
        tip: "예약 reservation, 늦은 체크아웃 late check-out.",
        examples: [
          { en: "I have a reservation under Lee.", ko: "Lee 이름으로 예약했어요." },
          { en: "What time is check-out?", ko: "체크아웃은 몇 시예요?" },
          { en: "Is it possible to check in early?", ko: "일찍 체크인할 수 있을까요?" },
          { en: "Could I get a late check-out?", ko: "체크아웃을 늦게 할 수 있을까요?" },
          { en: "Can I leave my luggage here after check-out?", ko: "체크아웃 후에 짐 좀 맡길 수 있나요?" }
        ]
      },
      {
        pattern: "Requests at the hotel",
        meaning: "호텔에 요청하기",
        tip: "Could I get ~ / Could you send up ~ 으로 정중하게.",
        examples: [
          { en: "Could I get some extra towels?", ko: "수건 좀 더 받을 수 있을까요?" },
          { en: "Is breakfast included?", ko: "조식 포함인가요?" },
          { en: "What's the Wi-Fi password?", ko: "와이파이 비밀번호가 뭐예요?" },
          { en: "Could you call me a taxi?", ko: "택시 좀 불러주시겠어요?" },
          { en: "Do you have a room with a better view?", ko: "전망 더 좋은 방 있나요?" }
        ]
      },
      {
        pattern: "Reporting a problem",
        meaning: "숙소 문제 알리기",
        tip: "The ___ isn't working. 패턴이면 거의 다 해결돼요.",
        examples: [
          { en: "The air conditioning isn't working.", ko: "에어컨이 안 돼요." },
          { en: "The room next door is really noisy.", ko: "옆방이 너무 시끄러워요." },
          { en: "There's no hot water.", ko: "온수가 안 나와요." },
          { en: "Could someone come and take a look?", ko: "누가 와서 봐줄 수 있을까요?" },
          { en: "Could I change to another room?", ko: "다른 방으로 바꿀 수 있을까요?" }
        ]
      }
    ]
  },
  {
    id: "phone",
    icon: "📞",
    title: "전화 & 메시지",
    subtitle: "Phone & Messaging",
    blurb: "전화 걸고 받기, 메시지 남기기, 약속 잡기 표현.",
    groups: [
      {
        pattern: "Making a call",
        meaning: "전화 걸 때",
        tip: "This is ~ (전화상 '저는'), May I speak to ~ (~ 바꿔주세요).",
        examples: [
          { en: "Hi, this is Jun from ABC Company.", ko: "안녕하세요, ABC사의 준입니다." },
          { en: "May I speak to Mr. Smith, please?", ko: "스미스 씨와 통화할 수 있을까요?" },
          { en: "I'm calling about the appointment.", ko: "예약 건으로 전화드렸어요." },
          { en: "Is this a good time to talk?", ko: "지금 통화 괜찮으세요?" },
          { en: "Could you put me through to the manager?", ko: "매니저에게 연결해 주시겠어요?" }
        ]
      },
      {
        pattern: "Taking a call / messages",
        meaning: "전화 받기 · 메시지",
        tip: "speaking은 '전데요', hold on은 '잠시만요'.",
        examples: [
          { en: "Speaking. How can I help you?", ko: "전데요. 무엇을 도와드릴까요?" },
          { en: "Hold on a second, please.", ko: "잠시만 기다려 주세요." },
          { en: "He's not available right now.", ko: "그는 지금 자리에 없어요." },
          { en: "Can I take a message?", ko: "메시지 남겨드릴까요?" },
          { en: "Could you ask her to call me back?", ko: "다시 전화 좀 부탁드린다고 전해주실래요?" }
        ]
      },
      {
        pattern: "Trouble on the line",
        meaning: "통화가 안 들릴 때",
        tip: "break up은 (신호가) 끊긴다는 뜻이에요.",
        examples: [
          { en: "Sorry, you're breaking up.", ko: "죄송한데, 소리가 끊겨요." },
          { en: "Could you speak up a little?", ko: "조금만 더 크게 말씀해 주시겠어요?" },
          { en: "I can't hear you very well.", ko: "잘 안 들려요." },
          { en: "Let me call you back.", ko: "제가 다시 걸게요." },
          { en: "Could you repeat that?", ko: "다시 한번 말씀해 주시겠어요?" }
        ]
      }
    ]
  },
  {
    id: "work",
    icon: "💼",
    title: "직장 & 회의",
    subtitle: "Work & Meetings",
    blurb: "회의, 이메일, 동료와의 대화 등 비즈니스 영어 핵심 패턴.",
    groups: [
      {
        pattern: "In a meeting",
        meaning: "회의 중에",
        tip: "끼어들 땐 Sorry to interrupt, 의견엔 I think / In my opinion.",
        examples: [
          { en: "Shall we get started?", ko: "시작할까요?" },
          { en: "Just to clarify, do you mean...?", ko: "확실히 하자면, ~라는 말씀이신가요?" },
          { en: "Sorry to interrupt, but I have a question.", ko: "끼어들어 죄송한데, 질문이 있어요." },
          { en: "Could you go over that again?", ko: "그거 다시 한번 짚어주시겠어요?" },
          { en: "Let's circle back to that later.", ko: "그건 나중에 다시 다루죠." }
        ]
      },
      {
        pattern: "Sharing opinions at work",
        meaning: "업무 의견 말하기",
        tip: "단정보다 I'd suggest / Maybe we could 처럼 부드럽게.",
        examples: [
          { en: "I'd suggest we go with the first option.", ko: "첫 번째 안으로 가는 걸 제안하고 싶어요." },
          { en: "That makes sense to me.", ko: "그거 말 되네요(이해돼요)." },
          { en: "I see your point, but...", ko: "무슨 말씀인지 알겠는데, 다만…" },
          { en: "Can we look at the numbers first?", ko: "먼저 수치부터 볼 수 있을까요?" },
          { en: "Let's table this for now.", ko: "이건 일단 보류하죠." }
        ]
      },
      {
        pattern: "Asking & offering help",
        meaning: "도움 요청·제안",
        tip: "동료끼리는 Could you give me a hand? 처럼 캐주얼하게.",
        examples: [
          { en: "Could you give me a hand with this?", ko: "이것 좀 도와줄 수 있어요?" },
          { en: "Do you have a minute?", ko: "잠깐 시간 있어요?" },
          { en: "Let me know if you need anything.", ko: "필요한 거 있으면 말해줘요." },
          { en: "I'll take care of it.", ko: "제가 처리할게요." },
          { en: "Can you walk me through this?", ko: "이거 차근차근 설명해 줄 수 있어요?" }
        ]
      },
      {
        pattern: "Deadlines & schedule",
        meaning: "마감·일정 관련",
        tip: "by Friday(금요일까지), push back(미루다), ASAP(가능한 빨리).",
        examples: [
          { en: "When's the deadline?", ko: "마감이 언제예요?" },
          { en: "Can we push the deadline back?", ko: "마감을 좀 미룰 수 있을까요?" },
          { en: "I'll get it to you by Friday.", ko: "금요일까지 드릴게요." },
          { en: "I'm a little behind on this.", ko: "이거 조금 밀렸어요." },
          { en: "Could you send it over ASAP?", ko: "가능한 빨리 보내주실 수 있나요?" }
        ]
      }
    ]
  },
  {
    id: "requests",
    icon: "🙏",
    title: "부탁 & 제안",
    subtitle: "Requests & Suggestions",
    blurb: "정중하게 부탁하고, 제안하고, 허락을 구하는 표현.",
    groups: [
      {
        pattern: "Could you ___? / Would you mind ___?",
        meaning: "___해 주시겠어요? (정중한 부탁)",
        tip: "Would you mind에는 '괜찮아요'를 No problem으로 답해요 (부정이 긍정!).",
        examples: [
          { en: "Could you help me for a second?", ko: "잠깐만 도와주실 수 있나요?" },
          { en: "Would you mind opening the window?", ko: "창문 좀 열어주시겠어요?" },
          { en: "Could you do me a favor?", ko: "부탁 하나 들어주실 수 있나요?" },
          { en: "Would it be possible to move our meeting?", ko: "우리 회의를 옮기는 게 가능할까요?" },
          { en: "If it's not too much trouble, could you...?", ko: "번거롭지 않으시면, ~해 주실 수 있나요?" }
        ]
      },
      {
        pattern: "Asking permission",
        meaning: "허락 구하기",
        tip: "Can I는 캐주얼, May I는 격식, Do you mind if I는 매우 정중.",
        examples: [
          { en: "Can I borrow this for a sec?", ko: "이거 잠깐 빌려도 돼요?" },
          { en: "Is it okay if I sit here?", ko: "여기 앉아도 될까요?" },
          { en: "Do you mind if I join you?", ko: "같이 껴도 될까요?" },
          { en: "Would it be alright if I left early?", ko: "일찍 나가도 괜찮을까요?" },
          { en: "May I use your bathroom?", ko: "화장실 좀 써도 될까요?" }
        ]
      },
      {
        pattern: "Making suggestions",
        meaning: "제안하기",
        tip: "Why don't we / How about / Let's 로 가볍게 권유해요.",
        examples: [
          { en: "Why don't we grab some coffee?", ko: "커피 한잔 하는 거 어때요?" },
          { en: "How about meeting at seven?", ko: "7시에 만나는 거 어때요?" },
          { en: "Let's take a break.", ko: "잠깐 쉬어요." },
          { en: "We could try the new place.", ko: "새로 생긴 데 가봐도 되고요." },
          { en: "What do you say we leave now?", ko: "지금 출발하는 거 어때요?" }
        ]
      },
      {
        pattern: "Saying yes / no politely",
        meaning: "정중하게 수락·거절",
        tip: "거절은 I'd love to, but ~ 로 쿠션을 깔면 부드러워요.",
        examples: [
          { en: "Sure, no problem.", ko: "그럼요, 문제없어요." },
          { en: "I'd be happy to.", ko: "기꺼이 할게요." },
          { en: "I'd love to, but I'm a bit busy.", ko: "그러고 싶은데, 제가 좀 바빠서요." },
          { en: "Maybe some other time?", ko: "다음 기회에 어때요?" },
          { en: "Let me think about it.", ko: "좀 생각해 볼게요." }
        ]
      }
    ]
  },
  {
    id: "opinions",
    icon: "💬",
    title: "의견 & 동의·반대",
    subtitle: "Opinions & Agreeing",
    blurb: "내 생각을 말하고, 동의하거나 정중히 반대하는 표현.",
    groups: [
      {
        pattern: "Giving your opinion",
        meaning: "의견 말하기",
        tip: "If you ask me / Personally 로 시작하면 자연스러워요.",
        examples: [
          { en: "Personally, I think it's a great idea.", ko: "개인적으로는 좋은 생각인 것 같아요." },
          { en: "If you ask me, it's too expensive.", ko: "제 생각엔 너무 비싸요." },
          { en: "The way I see it, we have two options.", ko: "제가 보기엔 선택지가 둘이에요." },
          { en: "I'm not sure, to be honest.", ko: "솔직히 잘 모르겠어요." },
          { en: "It depends, really.", ko: "사실 경우에 따라 달라요." }
        ]
      },
      {
        pattern: "Agreeing",
        meaning: "동의하기",
        tip: "Totally / Exactly / I couldn't agree more 로 맞장구!",
        examples: [
          { en: "I totally agree.", ko: "완전 동의해요." },
          { en: "Exactly, that's what I was thinking.", ko: "맞아요, 저도 그렇게 생각했어요." },
          { en: "You have a point.", ko: "일리 있는 말이에요." },
          { en: "I couldn't agree more.", ko: "전적으로 동의해요." },
          { en: "That's true.", ko: "그건 맞아요." }
        ]
      },
      {
        pattern: "Disagreeing politely",
        meaning: "정중하게 반대하기",
        tip: "I see what you mean, but ~ 로 먼저 인정하고 반대해요.",
        examples: [
          { en: "I see what you mean, but I'm not so sure.", ko: "무슨 말인지 알겠는데, 전 좀 확신이 안 서요." },
          { en: "I'm afraid I disagree.", ko: "죄송하지만 저는 생각이 달라요." },
          { en: "That's one way to look at it, but...", ko: "그렇게 볼 수도 있지만, 다만…" },
          { en: "I'd have to disagree with that.", ko: "그건 동의하기 어렵네요." },
          { en: "Have you considered the other side?", ko: "반대편 입장도 생각해 보셨어요?" }
        ]
      }
    ]
  },
  {
    id: "emotions",
    icon: "😊",
    title: "감정 표현",
    subtitle: "Expressing Emotions",
    blurb: "기쁨, 놀람, 공감, 위로 등 감정을 자연스럽게 드러내는 표현.",
    groups: [
      {
        pattern: "Excitement & happiness",
        meaning: "기쁨·신남",
        tip: "I can't wait / I'm so stoked 처럼 생생하게 표현해요.",
        examples: [
          { en: "I'm so excited!", ko: "너무 신나요!" },
          { en: "I can't wait for the weekend.", ko: "주말이 너무 기다려져요." },
          { en: "This made my day.", ko: "덕분에 오늘 하루가 행복해요." },
          { en: "I'm thrilled about the news.", ko: "그 소식 정말 기뻐요." },
          { en: "That's awesome!", ko: "완전 멋지다!" }
        ]
      },
      {
        pattern: "Surprise",
        meaning: "놀람",
        tip: "No way / You're kidding 은 '진짜?!' 같은 리액션이에요.",
        examples: [
          { en: "No way! Really?", ko: "말도 안 돼! 진짜?" },
          { en: "You're kidding!", ko: "농담이지!" },
          { en: "I can't believe it.", ko: "믿기지 않아요." },
          { en: "That's so unexpected.", ko: "정말 예상 못 했어요." },
          { en: "Wait, what?", ko: "잠깐, 뭐라고?" }
        ]
      },
      {
        pattern: "Sympathy & comfort",
        meaning: "공감·위로",
        tip: "상대가 힘들 때 I'm so sorry to hear that 로 마음을 전해요.",
        examples: [
          { en: "I'm so sorry to hear that.", ko: "그 말 들으니 정말 안타까워요." },
          { en: "That must be really hard.", ko: "정말 힘들겠어요." },
          { en: "If you need anything, I'm here.", ko: "필요한 거 있으면 언제든 말해요." },
          { en: "Take all the time you need.", ko: "천천히 시간 가지세요." },
          { en: "Things will get better.", ko: "다 나아질 거예요." }
        ]
      },
      {
        pattern: "Frustration & worry",
        meaning: "짜증·걱정",
        tip: "감정 폭발보다 I'm a bit frustrated 처럼 담담하게.",
        examples: [
          { en: "I'm a little stressed out.", ko: "좀 스트레스 받았어요." },
          { en: "This is so frustrating.", ko: "이거 진짜 답답하네요." },
          { en: "I'm worried about it.", ko: "그게 좀 걱정돼요." },
          { en: "I don't know what to do.", ko: "어떻게 해야 할지 모르겠어요." },
          { en: "It's been a rough week.", ko: "힘든 한 주였어요." }
        ]
      }
    ]
  },
  {
    id: "problems",
    icon: "⚠️",
    title: "문제 & 불만 해결",
    subtitle: "Problems & Complaints",
    blurb: "서비스 불만, 사과, 문제 해결을 요청하는 표현. 감정보다 사실 위주로.",
    groups: [
      {
        pattern: "Making a complaint",
        meaning: "불만 제기하기",
        tip: "공격적이지 않게. I'm afraid there's a problem 으로 시작하세요.",
        examples: [
          { en: "I'm afraid there's a problem with my order.", ko: "주문에 문제가 좀 있는 것 같아요." },
          { en: "This isn't quite what I expected.", ko: "이건 제가 기대한 것과 좀 달라요." },
          { en: "I'd like to speak to a manager.", ko: "매니저와 얘기하고 싶어요." },
          { en: "I've been waiting for over an hour.", ko: "한 시간 넘게 기다리고 있어요." },
          { en: "Could you look into this for me?", ko: "이 문제 좀 알아봐 주실 수 있나요?" }
        ]
      },
      {
        pattern: "Asking for a solution",
        meaning: "해결 요청하기",
        tip: "환불 refund, 교체 replacement, 수리 fix.",
        examples: [
          { en: "I'd like a refund, please.", ko: "환불 부탁드려요." },
          { en: "Can you replace it?", ko: "교체해 주실 수 있나요?" },
          { en: "How can we fix this?", ko: "이거 어떻게 해결할 수 있을까요?" },
          { en: "What can you do about it?", ko: "이 건에 대해 어떻게 해주실 수 있나요?" },
          { en: "Is there anything you can do?", ko: "해주실 수 있는 게 있을까요?" }
        ]
      },
      {
        pattern: "Apologizing",
        meaning: "사과하기",
        tip: "My bad는 캐주얼, I sincerely apologize는 격식 있는 사과예요.",
        examples: [
          { en: "I'm really sorry about that.", ko: "그 점 정말 죄송해요." },
          { en: "That was my fault.", ko: "그건 제 잘못이에요." },
          { en: "My bad, I didn't realize.", ko: "미안, 몰랐어." },
          { en: "I apologize for the mix-up.", ko: "혼선이 있었던 점 사과드려요." },
          { en: "It won't happen again.", ko: "다시는 이런 일 없을 거예요." }
        ]
      },
      {
        pattern: "Accepting an apology",
        meaning: "사과 받아주기",
        tip: "No worries / It's fine 으로 가볍게 넘겨요.",
        examples: [
          { en: "No worries, it happens.", ko: "괜찮아요, 그럴 수 있죠." },
          { en: "It's totally fine.", ko: "정말 괜찮아요." },
          { en: "Don't worry about it.", ko: "신경 쓰지 마세요." },
          { en: "These things happen.", ko: "그런 일도 있는 거죠." },
          { en: "Apology accepted.", ko: "사과 받아들일게요." }
        ]
      }
    ]
  },
  {
    id: "health",
    icon: "🏥",
    title: "병원 & 응급",
    subtitle: "Health & Emergencies",
    blurb: "병원·약국에서 증상을 설명하고 도움을 요청하는 표현.",
    groups: [
      {
        pattern: "Describing symptoms",
        meaning: "증상 설명하기",
        tip: "I have a ___ 패턴으로 대부분의 증상을 말할 수 있어요.",
        examples: [
          { en: "I have a headache.", ko: "머리가 아파요." },
          { en: "I've had a fever since yesterday.", ko: "어제부터 열이 나요." },
          { en: "My stomach hurts.", ko: "배가 아파요." },
          { en: "I feel dizzy.", ko: "어지러워요." },
          { en: "I think I caught a cold.", ko: "감기에 걸린 것 같아요." }
        ]
      },
      {
        pattern: "At the doctor / pharmacy",
        meaning: "병원·약국에서",
        tip: "처방전 prescription, 진통제 painkiller, 알레르기 allergic to.",
        examples: [
          { en: "I'd like to see a doctor.", ko: "진료를 받고 싶어요." },
          { en: "Do I need a prescription for this?", ko: "이거 처방전이 필요한가요?" },
          { en: "Do you have something for a cough?", ko: "기침에 먹는 약 있나요?" },
          { en: "I'm allergic to penicillin.", ko: "저는 페니실린 알레르기가 있어요." },
          { en: "How often should I take this?", ko: "이거 얼마나 자주 먹어야 하나요?" }
        ]
      },
      {
        pattern: "In an emergency",
        meaning: "응급 상황에서",
        tip: "급할 땐 짧고 명확하게. Call an ambulance!가 핵심.",
        examples: [
          { en: "Help! Call an ambulance!", ko: "도와주세요! 구급차 불러주세요!" },
          { en: "It's an emergency.", ko: "응급 상황이에요." },
          { en: "Someone is hurt.", ko: "누가 다쳤어요." },
          { en: "Where's the nearest hospital?", ko: "가장 가까운 병원이 어디예요?" },
          { en: "I need help right now.", ko: "지금 당장 도움이 필요해요." }
        ]
      }
    ]
  },
  {
    id: "daily",
    icon: "☕",
    title: "일상 & 친구 대화",
    subtitle: "Daily Life & Friends",
    blurb: "친구와 편하게 주고받는 캐주얼한 일상 대화 표현.",
    groups: [
      {
        pattern: "Making plans with friends",
        meaning: "친구와 약속 잡기",
        tip: "Are you free ~ / Wanna ~ 로 가볍게 물어봐요.",
        examples: [
          { en: "Are you free this weekend?", ko: "이번 주말에 시간 돼?" },
          { en: "Wanna grab dinner sometime?", ko: "언제 저녁 같이 먹을래?" },
          { en: "Let's hang out soon.", ko: "조만간 놀자." },
          { en: "What time works for you?", ko: "넌 몇 시가 괜찮아?" },
          { en: "I'm down for whatever.", ko: "난 아무거나 다 좋아." }
        ]
      },
      {
        pattern: "Casual reactions",
        meaning: "캐주얼한 리액션",
        tip: "맞장구는 대화를 살려요. For real? / That's wild! 등.",
        examples: [
          { en: "For real?", ko: "진짜?" },
          { en: "That's so cool.", ko: "완전 멋지다." },
          { en: "Oh, that sucks.", ko: "에이, 별로다(안됐다)." },
          { en: "Same here.", ko: "나도 그래." },
          { en: "Tell me about it.", ko: "내 말이(완전 공감)." }
        ]
      },
      {
        pattern: "Catching up",
        meaning: "근황 나누기",
        tip: "How's everything 이후엔 가족·일·취미로 자연스럽게 이어가요.",
        examples: [
          { en: "How's everything going with you?", ko: "넌 요즘 다 잘 돼가?" },
          { en: "How's your family doing?", ko: "가족들은 잘 지내?" },
          { en: "Anything new with you?", ko: "뭐 새로운 일 있어?" },
          { en: "We should do this more often.", ko: "우리 이거 더 자주 하자." },
          { en: "Time flies, huh?", ko: "시간 진짜 빠르다, 그치?" }
        ]
      },
      {
        pattern: "Filler & natural speech",
        meaning: "자연스러운 추임새",
        tip: "말이 막힐 때 원어민도 쓰는 시간벌기 표현이에요.",
        examples: [
          { en: "You know what I mean?", ko: "무슨 말인지 알지?" },
          { en: "Let me think...", ko: "음, 생각 좀 해보고…" },
          { en: "To be honest...", ko: "솔직히 말하면…" },
          { en: "I mean, it's fine.", ko: "그러니까, 뭐 괜찮아." },
          { en: "Anyway, where were we?", ko: "아무튼, 우리 어디까지 얘기했지?" }
        ]
      }
    ]
  }
];
