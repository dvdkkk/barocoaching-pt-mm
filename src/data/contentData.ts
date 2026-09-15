// Data extracted from the user's prompt and PDF specifications

export interface Passer {
  company: string;
  name: string;
}

export const PASSERS_LIST: Passer[] = [
  { company: "코오롱글로벌", name: "유O은님" },
  { company: "한진", name: "박O이님" },
  { company: "LS일렉트릭", name: "권O주님" },
  { company: "그린카", name: "박O우님" },
  { company: "롯데웰푸드", name: "황O영님" },
  { company: "현대자동차", name: "유O원님" },
  { company: "현대자동차", name: "박O한님" },
  { company: "현대자동차", name: "이O재님" },
  { company: "롯데렌탈", name: "신O준님" },
  { company: "현대자동차", name: "이O인님" },
  { company: "롯데마트", name: "최O서님" },
  { company: "현대자동차", name: "김O지님" },
  { company: "한진정보통신", name: "이O윤님" },
  { company: "현대자동차", name: "정O진님" },
  { company: "NC소프트", name: "강O라님" },
  { company: "삼성중공업", name: "곽O우님" },
  { company: "넷케이티아이", name: "여O석님" },
  { company: "현대자동차", name: "진O빈님" },
  { company: "롯데아사히주류", name: "박O호님" },
  { company: "현대자동차", name: "임O선님" },
  { company: "하이브", name: "김O님" },
  { company: "농심개발", name: "이O미님" },
  { company: "롯데백화점", name: "성O제님" },
  { company: "현대자동차", name: "김O진님" },
  { company: "KCC건설", name: "유O성님" },
  { company: "셀트리온", name: "이O윤님" },
  { company: "현대자동차", name: "윤O우님" },
  { company: "SK지오센트릭", name: "전O란님" },
  { company: "지마린서비스", name: "백O훈님" },
  { company: "현대자동차", name: "현O윤님" },
  { company: "이랜드월드", name: "남O린님" },
  { company: "크림㈜", name: "신O용님" },
  { company: "포스코HY클린메탈", name: "권O우님" },
  { company: "농심엔지니어링", name: "송O진님" },
  { company: "KCC글라스", name: "곽O현님" },
  { company: "금강레저", name: "박O연님" },
  { company: "롯데칠성을묘", name: "모O선님" },
  { company: "대림산업", name: "최O연님" },
  { company: "LG", name: "안O준님" },
  { company: "롯데웰푸드", name: "김O석님" },
  { company: "SK스퀘어", name: "이O혁님" },
  { company: "에스오일", name: "이O준님" },
  { company: "HD현대일렉트릭", name: "송O현님" },
  { company: "GS글로벌", name: "이O빈님" },
  { company: "산청음료", name: "이O준님" },
  { company: "HD현대오일뱅크", name: "김O숙님" },
  { company: "삼성SDI", name: "현O모님" },
  { company: "스마일위드", name: "서O욱님" },
  { company: "갤럭시아일렉트로닉스", name: "김O우님" },
  { company: "대원제약", name: "최O은님" },
  { company: "서브원", name: "이O규님" },
  { company: "SK바이오사이언스", name: "유O민님" },
  { company: "메가마트", name: "조O민님" },
  { company: "카카오벤처스", name: "홍O성님" },
  { company: "롯데인천타운", name: "김O나님" },
  { company: "아워홈", name: "김O규님" },
  { company: "HD현대코스모", name: "조O호님" },
  { company: "GS동해전력", name: "양O석님" },
  { company: "두산큐벡스", name: "최O원님" },
  { company: "포스코GY솔루션", name: "김O영님" },
  { company: "동아제약", name: "방O환님" },
  { company: "GS에코메탈", name: "조O선님" },
  { company: "포항SRDC", name: "정O준님" },
  { company: "아산병원", name: "박O홍님" },
  { company: "YG엔터테인먼트", name: "김O수님" },
  { company: "에코프로", name: "김O중님" },
  { company: "HD현대건설기계", name: "최O주님" },
  { company: "삼성물산 리조트부문", name: "안O수님" },
  { company: "CJ", name: "조O신님" },
  { company: "호텔농심", name: "최O주님" },
  { company: "CJENM", name: "정O엽님" },
  { company: "삼성물산 건설부문", name: "배O형님" },
  { company: "한미약품", name: "국O석님" },
  { company: "HLKlemove", name: "강O진님" },
  { company: "신세계", name: "김O규님" },
  { company: "LX하우시스", name: "전O윤님" },
  { company: "LX인터내셔널", name: "김O경님" },
  { company: "효성ITX", name: "최O연님" },
  { company: "넥센", name: "최O희님" },
  { company: "GS스포츠", name: "최O연님" },
  { company: "롯데글로벌로지스", name: "김O주님" },
  { company: "한컴", name: "정O웅님" },
  { company: "효성중공업", name: "윤O현님" },
  { company: "SK이노베이션", name: "이O형님" },
  { company: "코오롱베니트", name: "김O하님" },
  { company: "한화토탈에너지스", name: "이O림님" },
  { company: "포스코건설", name: "이O환님" },
  { company: "기아", name: "문O정님" },
  { company: "CJ푸드빌", name: "전O석님" },
  { company: "SK온", name: "이O국님" },
  { company: "CJ대한통운", name: "최O주님" },
  { company: "삼성전자 DS부문", name: "정O수님" },
  { company: "두산에너빌리티", name: "문O일님" },
  { company: "한국콜마", name: "이O원님" },
  { company: "GS건설", name: "송O연님" },
  { company: "현대모비스", name: "류O희님" },
  { company: "SKC&C", name: "김O현님" },
  { company: "LGCNS", name: "윤O정님" },
  { company: "한화에어로스페이스", name: "김O훈님" },
  { company: "삼성SDS", name: "정O주님" },
  { company: "HD현대마린솔루션", name: "윤O신님" },
  { company: "LG생활건강", name: "오O경님" },
  { company: "쿠팡", name: "한O세님" },
  { company: "현대백화점", name: "백O의님" },
  { company: "카카오모빌리티", name: "장O수님" },
  { company: "대한항공", name: "홍O민님" },
  { company: "크래프톤", name: "황O현님" },
  { company: "네이버", name: "한O윤님" },
  { company: "SK하이닉스", name: "이O주님" },
  { company: "한화시스템", name: "허O연님" },
  { company: "LG전자", name: "박O희님" },
  { company: "삼성바이오로직스", name: "문O빈님" },
  { company: "LG에너지솔루션", name: "차O진님" },
  { company: "KT&G", name: "김O호님" },
  { company: "두산로보틱스", name: "조O인님" },
  { company: "HD현대중공업", name: "엄O원님" },
  { company: "SK텔레콤", name: "신O연님" },
  { company: "카카오", name: "이O용님" },
  { company: "JYP엔터테인먼트", name: "이O홍님" }
];

export const PUBLIC_PASSERS_LIST: Passer[] = [
  { company: "한국기계연구원", name: "예O현님" },
  { company: "한국해양과학기술원", name: "신O수님" },
  { company: "한국전기안전공사", name: "윤O우님" },
  { company: "한국항공안전기술원", name: "김O진님" },
  { company: "울산항만공사", name: "김O진님" },
  { company: "한국교육시설안전원", name: "황O웅님" },
  { company: "한국건축도시공간연구소", name: "최O연님" },
  { company: "한국무역협회(KITA)", name: "이O형님" },
  { company: "주택도시보증공사(HUG)", name: "윤O석님" },
  { company: "한국농촌경제연구원", name: "박O정님" },
  { company: "한국기계연구원", name: "예O현님" },
  { company: "한국해양과학기술원", name: "신O수님" },
  { company: "한국전기안전공사", name: "윤O우님" },
  { company: "한국항공안전기술원", name: "김O진님" },
  { company: "울산항만공사", name: "김O진님" },
  { company: "한국교육시설안전원", name: "황O웅님" },
  { company: "한국건축도시공간연구소", name: "최O연님" },
  { company: "한국무역협회(KITA)", name: "이O형님" },
  { company: "주택도시보증공사(HUG)", name: "윤O석님" },
  { company: "한국농촌경제연구원", name: "박O정님" },
  { company: "한국기계연구원", name: "예O현님" },
  { company: "한국해양과학기술원", name: "신O수님" },
  { company: "한국전기안전공사", name: "윤O우님" },
  { company: "한국항공안전기술원", name: "김O진님" }
];

export const FINANCE_PASSERS_LIST: Passer[] = [
  { company: "현대캐피탈", name: "김O균님" },
  { company: "현대해상", name: "최O정님" },
  { company: "DGB대구은행", name: "오O빈님" },
  { company: "금융감독원", name: "박O예님" },
  { company: "한국자산관리공사(캠코)", name: "김O영님" },
  { company: "네이버파이낸셜", name: "조O현님" },
  { company: "미래에셋자산운용", name: "송O석님" },
  { company: "ADD보안환경관리단", name: "함O현님" },
  { company: "현대캐피탈", name: "김O균님" },
  { company: "한국산업단지공단", name: "한O민님" },
  { company: "현대해상", name: "최O정님" },
  { company: "DGB대구은행", name: "오O빈님" },
  { company: "금융감독원", name: "박O예님" },
  { company: "두산인베스트먼트", name: "박O연님" },
  { company: "한국자산관리공사(캠코)", name: "김O영님" },
  { company: "네이버파이낸셜", name: "조O현님" },
  { company: "미래에셋자산운용", name: "송O석님" },
  { company: "ADD보안환경관리단", name: "함O현님" }
];

export const TARGET_AUDIENCE_LIST = [
  "단, 한 번도 코칭이나 컨설팅을 받은 적이 없으신 분",
  "면접을 처음 보시는 분",
  "돈 낭비 시간 낭비 하고 싶지 않으신 분",
  "면접을 어떻게 준비해야 할지 모르시는 분",
  "취업에 자신감이 없으신 분",
  "최근 면접에서 떨어지신 분",
  "직무에 확신이 없으신 분",
  "면접에 자주 탈락하는 이유를 모르시는 분",
  "기존의 코칭 교육에 만족을 느끼지 못하신 분",
  "면접을 한 번도 보지 않았는데 꼭 가고 싶은 회사에 처음 지원하시는 분",
  "한번 배워서 다른 기업에도 적용하고 싶으신 분",
  "빠르게 준비하고 싶으신 분",
  "내 답변이 뻔하다고 생각하는 분",
  "면접만 보면 횡설수설, 답변 정리가 안되는 지원자 분"
];

export const COACHING_POINTS = {
  trend: [
    "삼성전자를 제외한 모든 대기업 수시 채용 시대",
    "계열사 및 자회사 수시 채용",
    "경험의 구체화를 통한 역량 평가 일반화",
    "AI 면접, 자소서 평가 도입 확대",
    "경험이 바탕된 자기소개서 / 면접 강화"
  ],
  candidates: [
    "대기업 준비가 처음이신 분",
    "기업선정 및 직무설정이 필요하신 분",
    "면접 A to Z까지 종합적인 지도가 필요하신 분",
    "자신의 수준에 맞춰 집중적인 코칭이 필요하신 분",
    "영문도 모른 채 여러차례 면접에서 탈락하신 분",
    "지원서 기반 예상 질문을 도출하여 철저하게 면접 준비가 필요한 분",
    "1차 면접을 한번도 통과하지 못한 분",
    "최종 면접의 관문을 통과하지 못하는 분"
  ]
};

export const REVIEWS = [
  {
    id: 1,
    content: "매번 면접에서 떨어지다가 왜 떨어졌는지 콕 집어주셔서 정말 도움 많이 되었어요. 이번에 2군데나 최종 합격했어요. 코치님 정말 다시한번더 감사합니다.",
    stars: 5,
    tag: "대기업 최종합격"
  },
  {
    id: 2,
    content: "스터디 할까 고민하다가 3시간 코칭받았는데. 스터디 3일동안 해도 안될 부분을 코칭받았던것 같아요. 면접에대한 두려움이 컸는데 요점만 잘 코칭해주셔서 감사합니다.",
    stars: 5,
    tag: "단기 집중 코칭"
  },
  {
    id: 3,
    content: "원래 후기같은거 잘 안남기는데 코치님 잘 만나서 이번에 면접까지 최종합격했어요! 감사합니다. 주변에 취업고민하는 친구들 생기면 소개시켜드릴께요!",
    stars: 5,
    tag: "면접 최종합격"
  },
  {
    id: 4,
    content: "인생에서 가장 중요한 시기 역시 취업입니다. 비싸다면 비싸고 싸다면 싸지만 분명 일반적인 스터디로 준비하는 것과 차이가 있는거 같아요. 결과를 위해서 절대 투자를 아끼지 않았으면 좋겠어요.",
    stars: 5,
    tag: "결과 중심 코칭"
  },
  {
    id: 5,
    content: "저는 자소서 코칭을 받았습니다. 기승전결, 맞춤법만 중요하다고 생각했던 자소서가 면접, 면접 유형도 생각하면서 작성해야 하는 걸 알았습니다! 자소서부터 체계적으로 준비하는거 진짜 추천드려요",
    stars: 5,
    tag: "자소서 첨삭 코칭"
  },
  {
    id: 6,
    content: "수업을 듣기 전에는 그냥 유하게 말을 잘 하는게 중요하다고 생각했던 면접이 세부 평가 요소부터 질문에 따라서 원하는 답변이 있다는 것을 알았습니다! 코치님께 진심으로 감사하다고 말씀드리고 싶습니다!",
    stars: 5,
    tag: "평가요소 분석"
  },
  {
    id: 7,
    content: "금융권 취업 준비만 2년째라 답답하고 막막했는데 코치님 덕분에 원하는 기업에 취업 한번에 했습니다! 코치님 정말 감사드립니다.",
    stars: 5,
    tag: "금융권 합격"
  },
  {
    id: 8,
    content: "역시 스터디만 할때와는 차이가 크네요! 혼자 인터넷에 있는 자료로만 준비하면 되겠지 라고 생각했던 제 자신이 부끄러울정도입니다. 도움 많이 되었습니다.",
    stars: 5,
    tag: "맞춤형 피드백"
  },
  {
    id: 9,
    content: "혼자서 막막하고 힘들었는데 금융권 전문 코치님이랑 수업하고난 뒤 제가 생각지도 못했던 부분들까지 알게되어서 너무 준비 잘했습니다. 코치님 감사합니다!!",
    stars: 5,
    tag: "직무 전문 코칭"
  },
  {
    id: 10,
    content: "인터넷에 떠도는 카더라로 면접 준비하다가 자꾸 떨어져 코칭을 받아보았는데, 왜 진작 받지 않았나 후회될 정도였어요 ㅠㅠ 실제로 코칭 이후 면접에 갔을때 코치님과 연습했던 질문들이 나와서 좋은 결과 받아볼 수 있었습니다! 감사합니다 코치님!!",
    stars: 5,
    tag: "실전 적중률 최고"
  },
  {
    id: 11,
    content: "스터디, 합격생 후기, 코칭 학원으로 면접 준비를 했지만 계속 탈락한 1인입니다. 탈락 요인을 알려주지 않아서 어떤 점이 부족한지 몰라 1:1 코칭을 받아봤는데, 눈높이에 맞게 설명해주셔서 제가 부족한 부분을 제대로 채울 수 있었어요!",
    stars: 5,
    tag: "탈락요인 정밀분석"
  },
  {
    id: 12,
    content: "면접은 말을 잘하는 사람을 뽑는게 아니라는 코치님의 말이 제 뼈를 때렸습니다.. 질문 의도 파악하는 방법과 그에 맞는 내 경험을 녹여내서 어떻게 답변하면 되는지 알려주시는데, 묵은 체증이 내려가는 기분이였어요...ㅋㅋㅋ",
    stars: 5,
    tag: "경험 구조화"
  },
  {
    id: 13,
    content: "처음에는 단체 특강으로 듣기로 했는데, 기회가 닿아서 일대일 특강으로 진행했어요. 결론부터 말하자면 '대만족'이었습니다!! 직장인 취준생이라 면접 준비할 시간과 여력이 부족한 상황이었는데 멘토님과의 모의면접이 큰 도움이 되었습니다.",
    stars: 5,
    tag: "이직/중고신입 코칭"
  },
  {
    id: 14,
    content: "혹시 내가 왜떨어진지 모르겠다면 꼭 저희 멘토님 멘토링 받아보세요! 여러분 저는 여태 면접 14번 (대기업, 공기업, 외국계 등등) 떨어져본 경험이 있습니다. 나름 진지하게 임했고 도저히 답이 안나오는 상황에 지푸라기라도 잡고싶은 심정으로 코칭받고 드디어 합격했습니다.",
    stars: 5,
    tag: "14탈 극복 합격"
  }
];

export const PORTFOLIO_ITEMS = [
  {
    university: "동국대학교",
    program: "삼성 모의채용 패스트트랙 프로그램",
    badge: "삼성 채용 대비",
    imageTheme: "samsung",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMjcx/MDAxNzg5MTE4NTc1NzQ5.OIOcJHriyWP-m1z70tvluh_A5n7n42b3QXQKdXTS2rgg.3R7JATq106WXno3GSyZaLePVTYFptp6xp2ugg8fUDIUg.PNG/20260911_182235_1.png?type=w966"
  },
  {
    university: "국토안전관리원",
    program: "인턴 대상 공기업·공공기관 취업전략",
    badge: "공공기관 출강",
    imageTheme: "kalis",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMjgz/MDAxNzg5MTE4NTc1NzU0.eUUo-zf-wI_LBWM_n1NbHbMk4BXUyJB_Rc7gU91vRXIg.IYVR780kRcV6Lc2iNvoOLNPIcJsJ701Gi8ZRvz9vw6gg.PNG/20260911_182235_2.png?type=w966"
  },
  {
    university: "울산대학교",
    program: "「NEXT STEP 2026 : 나만의 커리어 플랜」취업지원 프로그램",
    badge: "커리어 플랜",
    imageTheme: "nextstep",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMjkx/MDAxNzg5MTE4NTc1NzUz.cfa3xBfFME0QRNqCptCfpE2bcg3zuWJFImDPRBX3HcUg.jc185HlszfK5pwsSr7x2FnUe8gsiykUfCElsY9JIsMog.PNG/20260911_182235_3.png?type=w966"
  },
  {
    university: "동국대학교",
    program: "현대자동차 구매 직무 이해 및 제조산업 SCM 취업전략 프로그램",
    badge: "현대차 SCM",
    imageTheme: "hyundai",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMTA5/MDAxNzg5MTE4NTc1NzUy.Vt9hkMF8V2EPjHzJylDksZl3U6oKK36tZJhfqxITYZgg.ZI5sne43aocg6RAZqaoclt_9Vj8qrpl-7CoHJiGx9fog.PNG/20260911_182235_4.png?type=w966"
  },
  {
    university: "울산대학교",
    program: "[SK이노베이션 패스트트랙] 맞춤형 취업지원 프로그램",
    badge: "SK이노베이션",
    imageTheme: "skinno",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMTY1/MDAxNzg5MTE4NTc1NzUx.pyGcrb_ATSx6cxJEO9TT_fayV4R4n_s2pylDcMyDJZUg.x8knmtytee9WsK0AnscdS0_7wuCAf_8mDohuvK3Wp4Ig.PNG/20260911_182235_5.png?type=w966"
  },
  {
    university: "동국대 바이오메디캠퍼스",
    program: "차별화된 취업준비를 위한 역량강화 경험프로젝트 프로그램",
    badge: "바이오메디 특화",
    imageTheme: "biomedi",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMjIy/MDAxNzg5MTE4NTc1NzUx.uhUh1r5UUdCGlyvdIYA_xVzkdb1jcW4knao6gB2Txo4g.-4a2Ml5yI1hYkVhX9NQ_cABw2ifev2N0TM5Qi4D8qrwg.PNG/20260911_182235_6.png?type=w966"
  },
  {
    university: "한경국립대학교",
    program: "인문·상경계열 취업 대비 디지털 마케팅 직무 이해 및 실습 프로그램",
    badge: "디지털 마케팅",
    imageTheme: "digitalmkt",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMjM2/MDAxNzg5MTE4NTc1OTE1.AMAftuM7pNU1mGEFJ--b8u14kAZ10qmiExExbrYWYokg.-szxHBOts4LcJ4dEGrKSMODhvSN4nwWGnwCmNYDIVHAg.PNG/20260911_182235_7.png?type=w966"
  },
  {
    university: "동국대학교",
    program: "개인별 맞춤형 자기소개서 첨삭 및 취업 서류 완성 프로그램",
    badge: "서류 완성",
    imageTheme: "resume",
    image: "https://postfiles.pstatic.net/MjAyNjA5MTFfMTUg/MDAxNzg5MTE4NTc1OTIx.w0aYX4j1oHwfkY8uRwI3GBKrZa5svqKSoSAntpQSIPQg.gXJW2QWqrAaa2Jh7t1Awoqx15PgI2Wj0JH3SIQq6QXQg.PNG/20260911_182235_8.png?type=w966"
  }
];

export const COACHING_RESULTS_DATA = {
  major: [
    { name: "AK PLAZA", group: "대기업" },
    { name: "SK", group: "대기업" },
    { name: "HANJIN", group: "대기업" },
    { name: "HJ중공업", group: "대기업" },
    { name: "현대자동차", group: "대기업" },
    { name: "삼성전자", group: "대기업" },
    { name: "LG에너지솔루션", group: "대기업" },
    { name: "포스코", group: "대기업" }
  ],
  public: [
    { name: "nst 국가과학기술연구회", group: "공기업" },
    { name: "국가철도공단", group: "공기업" },
    { name: "국가생명연구자원정보센터", group: "공기업" },
    { name: "SCHENTRY", group: "공기업" },
    { name: "국토안전관리원", group: "공공기관" },
    { name: "한국전력공사", group: "공기업" }
  ],
  finance: [
    { name: "KB국민은행", group: "금융권" },
    { name: "BNK경남은행", group: "금융권" },
    { name: "신한은행", group: "금융권" },
    { name: "신한라이프", group: "금융권" },
    { name: "하나은행", group: "금융권" },
    { name: "우리은행", group: "금융권" }
  ],
  smallGiant: [
    { name: "TDM", group: "강소기업" },
    { name: "내일신문", group: "강소기업" },
    { name: "NEXTURN", group: "강소기업" },
    { name: "NEXTLab", group: "강소기업" },
    { name: "원익IPS", group: "강소기업" },
    { name: "티맥스소프트", group: "강소기업" }
  ]
};

export const ENTERPRISE_LOGOS = [
  "HYUNDAI TRANSYS", "LG", "Hanwha", "SBS", "AK PLAZA", "SK", "CJ CHEILJEDANG",
  "HANJIN", "OCI", "SNT Motiv", "오뚜기", "Incheon Airport", "조선일보", "GS SHOP"
];
