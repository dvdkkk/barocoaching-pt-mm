export const MALE_COACH_IMAGE = 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjE1/MDAxNzg5MTAyODIzNzQ3.kWTFlz-n_KNFmGHLBrqJl96EsnYINkCSF9VIjn9brNsg.pTwqIkyo412NCvIkb2DW4m3Q_Yw5ANHPhPA8IjYkg-0g.PNG/%EB%82%A8%EC%84%B1%EC%BD%94%EC%B9%98%EB%8B%98_%EB%B8%94%EB%9D%BC%EC%9D%B8%EB%93%9C%EC%82%AC%EC%A7%84.png?type=w966';
export const FEMALE_COACH_IMAGE = 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjQx/MDAxNzg5MTAyODIzNzQ1.1eoeB_et6uqhcUld83siooQRfv9OuR_b3gK7Kldq9Gsg.8_W3xVcOSMZ_JdENk2LiY8JH-CFln4daLQt1BoXw6QUg.PNG/%EC%97%AC%EC%9E%902-%EC%BD%94%EC%B9%98%EB%8B%98_%EC%8B%A4%EB%A3%A8%EC%97%A3.png?type=w966';

import { COACH_PASSED_COMPANIES } from './coachPassedCompanies';

export interface InterviewerCategory {
  category: string;
  items: string[];
}

export interface CoachCustomCategory {
  title: string;
  badge?: string;
  items: string[];
}

export interface PassedCompanies {
  major?: string[];
  public?: string[];
  finance?: string[];
}

export interface CoachDetail {
  id: string;
  name: string;
  role: string;
  category: 'rep' | 'major' | 'public' | 'finance' | 'it' | 'bio';
  image: string;
  tagline: string;
  currentRole: string;
  career: string[];
  // If undefined/empty, the interviewer history section is COMPLETELY OMITTED for this coach
  interviewerHistory?: InterviewerCategory[];
  // Dynamic custom categories unique to this coach's profile
  customCategories?: CoachCustomCategory[];
  // Target or successful coaching companies for this coach
  coachingCompanies?: { name: string; type: 'major' | 'public' | 'finance' }[];
  passedCompanies?: PassedCompanies;
}

const RAW_COACHES_LIST: CoachDetail[] = [
  {
    id: 'ji-gyu-han',
    name: '지규한 코치님',
    role: '現 바로코칭 대표코치 / 前 NCS 집필개발위원',
    category: 'rep',
    tagline: 'NCS 개발위원 & 다음커뮤니케이션 인사기획본부장!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 NCS 직업교육 개발위원 / NCS 공기업 외부면접관 / NCS 자격과정 개발위원 / NCS 직무분석 및 경력모델모형 집필',
      '前 다음커뮤니케이션(주) / 금융계열사 인사기획본부장',
      '\'평경특취\' 집필(2018년도)(평범한 경험으로 작성하는 특별한 자기소개서)'
    ],
    interviewerHistory: [
      {
        category: '대기업 면접관 이력',
        items: ['삼성SDI', 'LG디스플레이', '한국조선해양', 'LG이노텍', '롯데케미칼', '두산', 'SK텔레콤', 'SK온', '하림', '현대중공업', 'CJ대한통운', '현대트랜시스', '대우건설', 'GS건설', 'SK네트웍스', '동원산업', '한국타이어', 'SK디스커버리', 'KG케미칼', 'SK에코플랜트', '삼성전기', '아시아나항공', '대한항공', '동원엔터프라이즈', '효성티앤씨', '에코프로', 'SK가스', '롯데건설', 'LG생활건강', '대림', '현대코퍼레이션', 'GS에너지', '세아', '신세계', '금호석유화학', '성우하이텍', '효성중공업', 'SK브로드밴드', '현대백화점']
      },
      {
        category: '공기업/공공기관 면접관 이력',
        items: ['국민건강보험공단', '국민연금공단', '서민금융진흥원', '시청자미디어재단', '신용보증기금', '주택관리공단', '중소벤처기업진흥공단', '창업진흥원', '한국도로공사', '한국문화재단', '한국벤처투자', '한국보건의료연구원', '한국산업단지공단', '한국콘텐츠진흥원', '한국투자공사', '한국특허정보원', '한국해양진흥공사', '한국환경공단']
      },
      {
        category: '은행/금융권 면접관 이력',
        items: ['KB국민은행', '우리은행', 'SC제일은행', '한국씨티은행', '하나은행', '신한은행', '수협은행', 'NH농협은행', 'IBK기업은행', '카카오뱅크']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTc2/MDAxNzg5MTA0MTUzNDgw.9clgVuwmVXcBl_zOz0tUDAX7fq8PcF7HG9VZhTsoh3Yg.LCWDGkEb08tAhplpQe3eQbAT-MCfSRGTahXVi8pVWMAg.PNG/%EC%A7%80%EA%B7%9C%ED%95%9C%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'oh-shin-jong',
    name: '오신종 코치님',
    role: '現 바로코칭 대표코치 / 前 현대자동차 인재채용팀',
    category: 'major',
    tagline: '현대자동차 인재채용팀 및 R&D 인사 기획 핵심 경력!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 현대자동차 인력관리위원회/ 인력운영팀/ 인재채용팀',
      '前 현대자동차 연구개발 기획팀/ 연구개발 인사팀',
      '前 R&D 조직 및 인력운영, 인사제도기획, 연구장학생 제도 기획 운영',
      '前 전사 인력운영, 대졸공채, 경력채용, 해외우수인재 채용- Halcyon search International',
      '前 헤드헌팅 -PTX 컨설팅 수석컨설턴트 =기업 HR컨설팅, 헤드헌팅'
    ],
    customCategories: [
      {
        title: '대학/대학교 활동',
        badge: '겸임교수',
        items: [
          '성균관대학교 학부대학 겸임교수',
          '동국대학교 취업지원센터 겸임교수',
          '한림대학교 취업지원센터 겸임교수',
          '취업전략 학기강좌: 성균관대, 경희대, 한국외대, 동국대, 한림대, 가천대',
          '취업멘토링 : 한양대, 성균관대, 이화여대, 경희대, 한국외대, 중앙대, 동국대, 전남대, 강원대, 유니스트',
          '경희대 두잇나우/두잇어게인 프로그램 운영, 건국대 엘리트프로그램 담당 서울과기대 리더스 프로그램 운영',
          '취업 및 진로상담 : 경희대, 한국외대, 동국대, 이화여대, 유니스트',
          '외국인 유학생 진로 및 취업특강 : 연세대, 한남대, KT&G',
          '유니스트 입학사정관 교육'
        ]
      },
      {
        title: '주요 강의내용',
        badge: '강의 커리큘럼',
        items: [
          '유형별 면접 강의 및 실습',
          '기업정보 분석 및 직무분석',
          '희망 기업 분석을 통한 경쟁토론 Role-Play',
          '채용동향에 따른 취업전략 및 직무소개',
          '로드맵 작성을 통한 경력관리 방법',
          '면접전략 및 1분 Speech 작성법 강의 및 실습'
        ]
      }
    ],
    // 면접관 이력 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjE1/MDAxNzg5MTAyODIzNzQ3.kWTFlz-n_KNFmGHLBrqJl96EsnYINkCSF9VIjn9brNsg.pTwqIkyo412NCvIkb2DW4m3Q_Yw5ANHPhPA8IjYkg-0g.PNG/%EB%82%A8%EC%84%B1%EC%BD%94%EC%B9%98%EB%8B%98_%EB%B8%94%EB%9D%BC%EC%9D%B8%EB%93%9C%EC%82%AC%EC%A7%84.png?type=w966'
  },
  {
    id: 'park-se-yong',
    name: '박세용 코치님',
    role: '現 바로코칭 대표코치 / 前 드림코칭연구소 대표',
    category: 'public',
    tagline: '단국대·순천대 외래교수 & 면접위원장 출신!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 드림코칭연구소 대표',
      '前 단국대학교 외래교수',
      '前 순천대학교 외래교수'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['공공기관 면접위원장', '지자체 채용 면접위원']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTYy/MDAxNzg5MTA0MTUzNjYw.sXSxUkUxrccafhbvTk5QZ8yFCdXvuH_4ue9zCPO7Vi8g.lZKG-aeWODpjM99eXVjQdkUHQ3yYUZYygpPYd6js65kg.PNG/%EB%B0%95%EC%84%B8%EC%9A%A9%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'kim-feel-mo',
    name: '김필모 코치님',
    role: '現 바로코칭 대표코치 / 前 가입성장인재교육원 강사',
    category: 'finance',
    tagline: '공공기관 및 대기업/금융권 면접 전문 강사!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 가입성장인재교육원 - 공공기관 면접 전문 강사',
      '前 한국능률협회 / 트레져잡컴퍼니(주) - 취업, 진로 컨설턴트',
      '前 인하공업전문대학 / 동양미래대학 / 국민대학교 - 취업컨설턴트',
      '前 도서출판 대영사 - 인사, 기획 과장'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: [
          '한국도로공사', '한국토지주택공사', '한국중부발전', '한국동서발전', 
          '한전KDN', '주택금융공사', '서울교통공사 등 다수'
        ]
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjAz/MDAxNzg5MTA0MTUzNjU5.mIykz5SksKrYYuTEpMJm2BRIXOVWMVFkJqIj7zsGi_Ug.VmSO30CpWhuGRWEaP0nZor9eFMNUt-h763u-dTiSsjEg.PNG/%EA%B9%80%ED%95%84%EB%AA%A8%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'park-hyun-woo',
    name: '박현우 코치님',
    role: '現 바로코칭 대표코치 / 前 LG계열사 취업 전담코치',
    category: 'major',
    tagline: 'LG계열사 전담 취업 코치 & 영국계 은행 출신!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 LG재단 대학 LG계열사(LG화학, LG디스플레이 등) 취업 전담 코치',
      '前 영국계 Standard Chartered 은행 근무',
      '前 유수 대기업 및 외국계 기업 서류·면접 전문위원'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['LG계열사 취업 전담 코치', '외국계 기업 서류·면접 전문위원']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfODkg/MDAxNzg5MTA0MTUzMjk1.5RNfKh3f4uHePtgXkyWnMi8gcQdVyDI-2u9EWV02EyMg.yzfMNH0_cUf4Lp505wzdeoJTEogPlAg_IdCfRFb0jEcg.PNG/%EB%B0%95%ED%98%84%EC%9A%B0%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'lee-won-june',
    name: '이원준 코치님',
    role: '現 바로코칭 대표코치 / 前 인사부서장(이사)',
    category: 'major',
    tagline: '국내/외국계 기업 인사부 20년 이상 경력의 전문가!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 OOOOO(주) 상무이사, 한국취업진로학회 이사',
      '前 태광실업(Nike 신발제조) 인도네시아 주재원(인사총괄부장)',
      '前 AIG 손해보험주식회사(세계 1위의 금융회사) 인사부 선임부장',
      '前 NXP (필립스 반도체: 반도체 칩 Design하는 세계 일류 기업) 인사부서장(이사)',
      '前 Applied Materials Korea (세계 1위의 반도체 장비회사) 인사부장',
      '前 Lucent Technologies Korea (노벨상 14명 배출 벨 연구소를 보유한 세계적 통신 장비회사) 인사부 차장',
      '前 한국능률협회(국내 최고 산업교육기관) 선임연구원(영업/마케팅, 역량강화팀-KT&DDI)',
      '국내회사, 미국계회사, 유럽계회사의 인사부 총 20년 이상 경력 및 해외 주재원 직무 수행',
      '다양한 Industry의 채용절차와 조직문화를 경험한 인사전문가',
      '풍부한 외부면접관 경험과 역량(공기업 및 사기업) 총 200회 이상'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: [
          '한전KPS', '아시아문화원', '한국국립생태원', '한국장학재단', '건강보험심사평가원', '한국벤처투자', 
          '시설관리공단(파주)', '한국재정정보원', '주택도시보증공사', '도로교통공단', '한국중부발전', '한국관광공사', 
          '한국서부발전', '한국산업기술평가관리원', '한국산업기술시험원', '금융감독원', '한국토지공사', '한국수자원공사', 
          '국립공원관리공단', 'LH주택공사', '한국안전보건공단', '한국무역보험공사', '수은플러스', 'IBK기업은행', 
          'SH서울주택도시공사', '한국증권예탁원', '한국농어촌공사', '한국생산성본부', '국민체육진흥공단', '제주에너지공사', 
          '국립호남권생물자원관', '한국은행', 'KDB산업은행', '농협중앙회', '한국산업단지공단', '인천교통공사', 
          '국민연금공단', '인천항만공사', '전북개발공사', '평택시공무원공채', 'ADD보안환경관리단', '제주공공기관통합채용', 
          '안전보건공단(제주)', '한국자산관리공사', '한국전력공사', '한국주택금융공사', '시설관리공단(울산)', '강원대학교', 
          '강원랜드', '동서발전', '한국의약품안전관리원', '한국도자재단', '수목원정원관리원', '제주관광공사', '새만금개발공사', 
          '산림청', '서울교통공사', '한국소비자원', 'KOTRA', '한국가스기술공사', '예금보험공사', '한국선급', 
          'NH농협은행(6급)', '한국에너지재단', '정보통신기획평가원', '세종학당재단', '한국기상산업기술원', 
          '중소벤처기업진흥공단', '신용보증기금', '한국표준협회', 'SK하이닉스청년취업아카데미', '원익그룹(공채) 등 다수'
        ]
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'heo-woong',
    name: '허웅 코치님',
    role: '現 바로코칭 대표코치 / 前 현대차그룹 채용평가위원',
    category: 'major',
    tagline: '현대차그룹 채용평가위원 & 대학 조교수 출신!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 현대차그룹 채용평가위원',
      '前 한양대학교 ERICA캠퍼스 겸임교수',
      '前 상지대학교 외래교수',
      '前 가톨릭대학교 정보통신전자공학과 조교수',
      '前 유라시안인터내셔날(주) 이사(인사/경영지원)'
    ],
    customCategories: [
      {
        title: '경력요약',
        badge: '연구 및 출제',
        items: [
          '주요 대기업 신입사원 채용 인적성검사 문제 개발 및 결과 처리, DB관리',
          '공공기관 채용 NCS 직업기초능력 문제 개발 및 검사 운영, 결과 처리',
          '가톨릭대학교 직무교육개론(16주), NCS직업기초역량실무(16주) 교과목 강의 (NCS취업반, 반도체 취업스터디, 이공계열 전공PT면접반 운영 중)',
          '현재 주요 공공기관 전기, 기계, 통신, 빅데이터, 전산, IT관련 공공사업 입찰 평가',
          '인공지능형 드론 특허 및 개발 (녹조탐지 및 영상 신호처리)',
          '특허 출원: “드론을 활용한 녹조 탐색 및 제거 시스템(2023.01.13) 출원번호 10-2022-0187420”',
          '(전공) 자동차IT융합전공'
        ]
      }
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['현대차그룹', '현대모비스', '현대글로비스 채용평가위원']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfODcg/MDAxNzg5MTA0MTUzODE5.EigKDHXrpLbklrGRZnomWRwlgOtw8xowKSM6RK8l7eAg.XwRaCgRQh1OcnxNJKlzVhMzCscRzVoTe1iXCDO9wXj8g.PNG/%ED%97%88%EC%9B%85%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'an-tae-jeong',
    name: '안태정 코치님',
    role: '現 바로코칭 대표코치 / 前 CJ제일제당 인사팀',
    category: 'major',
    tagline: 'CJ제일제당 인사팀 출신 & 한양인재개발원 겸임교수!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 한양인재개발원 커리어센터 겸임교수',
      '前 서류/면접 외부 면접관 활동 중',
      '前 CJ제일제당 인사팀, 마케팅전략팀, 매스영업팀',
      '前 YNK Associates 채용컨설팅본부장, 상무',
      '자격증보유: 행정사, NCS직업교육전문강사, MBTI form M, Q 진단해석전문가 한국인재연구소 진로코치, 자기주도학습코치'
    ],
    // 면접관 이력 없음 (소개란에 외부 면접관 언급만 포함)
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTkx/MDAxNzg5MTA0MTUzMjk2.GMoyfEJChs2YVetZ54pcnX0hz74VXQ4fhRJWyGanWhgg.8EJqajxd8MYLhooX0VXvXg9v5W9T9H60Gm9pcDCGYj4g.PNG/%EC%95%88%ED%83%9C%EC%A0%95%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'park-ji-hoon',
    name: '박지훈 코치님',
    role: '現 바로코칭 대표코치 / 現 OO전자 반도체 엔지니어',
    category: 'major',
    tagline: '현직 반도체 엔지니어의 공정/설비/품질 테크 솔루션!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '現 OO전자 반도체사업부 엔지니어',
      '前 4대 외국계 반도체 장비회사 CS엔지니어',
      '前 반도체 후공정 패키징회사 제품개발 엔지니어'
    ],
    customCategories: [
      {
        title: '직무지식 코칭 가능분야',
        badge: '직무 전문성',
        items: [
          '기술직, 연구 및 개발직, 공정, 설비, 품질, 공대(엔지니어) 직무 등',
          '취업 및 진로컨설팅',
          '반도체 취업 코칭 사이트 인터넷 강의 제작',
          '모교 화학공학과 학생대상 취업 상담 및 코칭활동 진행',
          '부산대학교 반도체 취업 캠프 현직자코칭 진행',
          '경기도○○대학교 반도체 현직자 취업 상담 프로그램 진행'
        ]
      }
    ],
    // 면접관 이력 없음
    image: MALE_COACH_IMAGE
  },
  {
    id: 'choi-seon-woong-public',
    name: '최선웅 코치님',
    role: '現 바로코칭 공기업 대표코치 / 前 삼광의료재단 인사팀장',
    category: 'public',
    tagline: '대기업 채용 프로세스 설계 & 국립순천대 취업과진로 교수!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 디싸이더스 인사팀 팀장',
      '前 삼광바이오트리그룹 삼광의료재단 인사팀 팀장',
      '前 한샘개발(한샘자회사) 채용담당자 인사팀 채용 파트장',
      '前 외향산업(구 외환은행 자회사) 채용담당자 팀원',
      '대기업 채용프로세스 설계, 역량모델구축, 인재상정립, 가치관수립 컨설팅',
      '국립순천대학교 취업과진로 교과목 교수'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: [
          '중부발전 면접위원', '대구산업단지공단 면접위원', '부산도시공사 면접위원', 
          '도로교통공단 면접위원', '코이카', '전경련국제경영원 면접위원', '기업은행 서류평가 위원', 
          '주택금융공사 서류평가 위원', '토지주택공사 서류평가 위원', '남동발전 서류평가 위원', 
          'NH농협은행공채 면접위원', 'IBK기업은행 서류심사위원'
        ]
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjk3/MDAxNzg5MTA0MTUzNDgz.TTPgxTRIxGvepvVeserXu3ioutKKeW9o0gNl9UgFtScg.f7gpn0EOqP_nqXwJPmGoBO2krYZM9OqarycIctMHrgUg.PNG/%EC%B5%9C%EC%84%A0%EC%9B%85%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'park-yeon-sik',
    name: '박연식 코치님',
    role: '現 바로코칭 대표코치 / Group Senior HR Manager',
    category: 'public',
    tagline: '글로벌 브랜드 Senior HR Manager & 전문 코치!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 한국코치협회 인증 코치 & ㈜ CMOE 전문 코치',
      '포르쉐센터, 람보르기니, 스타렌터카, 스타 파이낸스 Group Senior HR manager',
      '중국 청도 태광 유한공사 인사팀장',
      '아디다스 코리아 Talent team manager',
      'LG 데이콤 (현 LG 유플러스) HR manager'
    ],
    // 면접관 이력 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjE1/MDAxNzg5MTAyODIzNzQ3.kWTFlz-n_KNFmGHLBrqJl96EsnYINkCSF9VIjn9brNsg.pTwqIkyo412NCvIkb2DW4m3Q_Yw5ANHPhPA8IjYkg-0g.PNG/%EB%82%A8%EC%84%B1%EC%BD%94%EC%B9%98%EB%8B%98_%EB%B8%94%EB%9D%BC%EC%9D%B8%EB%93%9C%EC%82%AC%EC%A7%84.png?type=w966'
  },
  {
    id: 'kang-in-sung',
    name: '강인성 코치님',
    role: '現 바로코칭 대표코치 / 前 ㈜취업뽀개기 부대표',
    category: 'rep',
    tagline: '대기업·공기업·금융권 합격자 최다 배출 대표코치!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 ㈜취업뽀개기 부대표, 취업교육컨텐츠연구소장',
      '前 취업포털 커리어 경영관리 이사, HR, 취업교육컨텐츠, 온라인서비스',
      '前 ㈜다음커뮤니케이션(현, 카카오) HR 매니저, 사내벤처취업 전략기획'
    ],
    interviewerHistory: [
      {
        category: '외부 면접위원 이력',
        items: [
          '한국도로공사', '건강보험공단', '한국토지주택공사', '환경공단', '서부발전', 
          '국민은행', '기업은행', '국민카드', '한국벤처투자', '한국연구재단', 
          '한국무역보험공사', '항공보안파트너스 등 다수 대기업 / 공기업 / 은행권 외부 면접위원'
        ]
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'lee-seung-hwan',
    name: '이승환 코치님',
    role: '現 바로코칭 대표코치 / 前 SC제일은행 인사본부',
    category: 'major',
    tagline: 'SC제일은행 인사본부 팀장 & 한양대 겸임교수!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 한양대학교(에리카) 겸임교수',
      '前 유투앤(IT) 경영지원팀장',
      '前 SC제일은행 인사본부 팀장 및 금융지주 채용총괄',
      '청년취업아카데미(수출입, IT분야) 대표강사 및 멘토',
      '공공기관, 금융기업 채용 면접관 참여 및 면접관 교육프로그램'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: [
          '한국장학재단', '한국무역보험공사', '한국건설기술연구원', '한국전력', 
          '시흥시', '부산항만공사', '서울시립대', '한양대', '산업은행', '한국증권금융', 
          'KB국민은행', '하나은행', '농협은행', '광주은행 등 다수'
        ]
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'kim-jang-wook',
    name: '김장욱 코치님',
    role: '現 바로코칭 대표코치 / 前 (주)커리아원 수석컨설턴트',
    category: 'bio',
    tagline: '<취업, 나와 맞는 기업은?> 저술 저자 & 취업 코치!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 커리어임팩트 대표',
      '前 코리아취업아카데미 취업코치',
      '前 (주)커리아원 수석컨설턴트',
      '50여개 주요 대학 및 기관 취업 강의 및 컨설팅 진행',
      '저서 : <취업, 나와 맞는 기업은?> <NCS직무가이드> <NCS자소서 취업을 부탁해>',
      'LG CNS 면접관'
    ],
    // 면접관 출신 이력이 따로 없으므로 interviewerHistory 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfODcg/MDAxNzg5MTE0MzQwMDc0.HUgRfjaDl0BUNxqc6mN-VXjUGHvtlZ00yVT8_oll9YAg.jK0s3mz8tqle6pjp6V3jZpMKJGA0pdpHWz0tjIDqiUQg.PNG/%EA%B9%80%EC%9E%A5%EC%9A%B1%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'lee-ji-ah',
    name: '이지아 코치님',
    role: '現 바로코칭 대표코치 / 前 깨끗한나라 파트장',
    category: 'major',
    tagline: '마케팅 전략기획 파트장 & 경영학 외래교수 출신!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 대림대학교 경영학과 외래교수',
      '前 깨끗한나라 마케팅 / 전략기획 파트장',
      '前 보령제약 HC마케팅 팀원'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['깨끗한나라 마케팅/전략기획 면접관', '대학 경영학과 외래교수']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjQx/MDAxNzg5MTAyODIzNzQ1.1eoeB_et6uqhcUld83siooQRfv9OuR_b3gK7Klbq9Gsg.8_W3xVcOSMZ_JdENk2LiY8JH-CFln4daLQt1BoXw6QUg.PNG/%EC%97%AC%EC%9E%902-%EC%BD%94%EC%B9%98%EB%8B%98_%EC%8B%A4%EB%A3%A8%EC%97%A3.png?type=w966'
  },
  {
    id: 'lee-jae-chul',
    name: '이재철 코치님',
    role: '現 바로코칭 대표코치 / PI 전문 면접관',
    category: 'major',
    tagline: 'Professional Interviewer 자격 보유 전문 면접관!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 한국HR연구소 대표',
      '前 질병관리청 감염병 분과 평가위원',
      '前 고용노동부 취업성공패키지 운영위원',
      '서울산업진흥원 전문면접관 교육',
      'PI(Professional Interviewer) 전문 면접관 취득'
    ],
    interviewerHistory: [
      {
        category: '에너지/발전/SOC 서류·면접 평가 (300여회)',
        items: ['한국전력', '한국수력원자력', '중부발전', '동서발전', '남부발전', '한국도로공사', '한국수자원공사 등']
      },
      {
        category: '공공기관 서류·면접 평가 (100여회)',
        items: ['건강보험공단', '한국노인인력개발원', '한국해양환경공단', '독립기념관', '한국데이터진흥원', '한국관광공사 등']
      },
      {
        category: '대기업 서류·면접 평가 (30여회)',
        items: ['카카오', 'LG전자', 'SM엔터테인먼트', '현대카드', 'KB투자증권', '고영테크놀러지', '바텍 등']
      },
      {
        category: '공무원 면접위원 (30여회)',
        items: ['경기도', '경찰청', '서울시', '용인시', '수원시', '제주시', '식약처 등']
      },
      {
        category: '금융 서류·면접 평가 (100여회)',
        items: ['한국은행', '한국무역보험공사', '금융감독원', '사학연금공단', 'KB국민은행', 'IBK기업은행', '하나은행', '농협 등']
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'choi-young-woo',
    name: '최영우 코치님',
    role: '現 바로코칭 대표코치 / 前 삼성엔지니어링 인사팀',
    category: 'major',
    tagline: '삼성엔지니어링 글로벌 채용담당 & <취업의 비밀> 저자!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 삼성엔지니어링 글로벌 인사팀 근무(국내/해외 인재 채용담당)',
      '前 스카우트파트너스 헤드헌팅 사업부 전문 헤드헌터',
      '前 코리아취업아카데미 취업파트 수석코치',
      '前 LX판토스 프랑스법인 해외영업무 근무',
      '저서 : <취업의 비밀 Secret-사기업편>'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: [
          'GS파워', '한국수자원공사', '한국도로공사', '한국농수산식품유통공사', '용인시청', '수원시청', 
          '김포시청', '군포시청', '광주시청', '한국동서발전', '우정사업본부 경인지방우정청', '기업은행', 
          '한국은행', '수협은행 등 다수'
        ]
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'park-jin-young',
    name: '박진영 코치님',
    role: '現 바로코칭 대표코치 / 前 잡아이디어 취업코치',
    category: 'major',
    tagline: '잡아이디어·취뽀스터디 대표강사 & 헤드헌터 출신!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 잡아이디어 취업코치',
      '前 취뽀스터디 대표강사',
      '前 머스트컨설팅 헤드헌터',
      '前 신협 개인금융 근무',
      '前 KMAC(한국능률협회 컨설팅) 근무'
    ],
    // 면접관 이력 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfODUg/MDAxNzg5MTA0MTUzNjkx.RA9gUYLzyeMyiBEYujb_qJlL3q6mWwgGo-qiJ99qsJgg.9ncOmnn-Sn0nx108Q_2NRMC3GqBJZvkmA9M0KToDHrUg.PNG/%EB%B0%95%EC%A7%84%EC%98%81%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'jung-tae-june',
    name: '정태준 코치님',
    role: '現 바로코칭 대표코치 / 前 위메이드 인사부장',
    category: 'major',
    tagline: '네오위즈·위메이드 인사부장 & 헤드헌팅 전직 실적!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '연세대학교 교육대학원 석사',
      '前 네오위즈 ENC 사업부장',
      '前 위메이드엔터테인먼트 인사부장',
      '前 한국능률협회 인사교육팀',
      '前 헤드헌팅 200여명 이상 전직 성과'
    ],
    customCategories: [
      {
        title: '대학교육',
        badge: '대학 출강',
        items: ['한남대학교', '카이스트', '부산대학교', '국민대학교']
      }
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['코레일', '한국조세재정연구원', '한국승강기안전공단', '한국산업인력공단', '국민체육진흥공단']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfODUg/MDAxNzg5MTA0MTUzNDc1.pc6HhegngDIU0jcFyzSM0fu9wl8fcy6G5eAGewiqMnkg.aBSaJMDX9eHdpvMcffqGz44gF9tr9wuL5QZ8kZC9SWEg.PNG/%EC%A0%95%ED%83%9C%EC%A4%80%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'park-hyun-soo',
    name: '박현수 코치님',
    role: '現 바로코칭 대표코치 / 前 SK그룹 인사/마케팅',
    category: 'major',
    tagline: 'SK이노베이션·SK텔레콤 20년 인사 및 마케팅 경력!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 인사제도 기획, 운영, 평가 / 채용 / 교육 기획·운영 / 기업문화 구축·확산 / 조직진단 / 조직의 변화&혁신 / Junior Board',
      '前 마케팅 부문 : 석유제품 판매/기획, 대리점 관리, CRM/PRM 등 경력',
      '근무회사: SK이노베이션, SK에너지, SK텔레콤(2년), SK인천석유화학',
      '성균관대 경영학과 졸업'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['IBK기업은행', '서울시', '한국도로공사', '한국지능정보사회진흥원']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfNjgg/MDAxNzg5MTA0MTUzMjk2.nspIu92s3vu_UGsvQ4T9SjHWmXeu88ymEPMOcsXFl_0g.YE-8RtqzqORCTwYN78GbOm6mIDqvTK_JwWCrbdXlW4Yg.PNG/%EB%B0%A9%ED%98%81%EC%88%98%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'seok-eun-ha',
    name: '석은하 코치님',
    role: '現 바로코칭 대표코치 / 고용노동부 대상 수상',
    category: 'bio',
    tagline: '연간 1000건 컨설팅 & 고용노동부 직업상담 대상 수상!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 연간 1000건 이상 자소서 / 면접 컨설팅',
      '前 대학교 취업 진로 출강 강사',
      '前 백석대학교 취업진로지원처 취업컨설턴트',
      '前 신용협동조합 금융사무원',
      '前 실전모의 면접 및 취업캠프 면접 심사위원',
      '수상: 고용노동부 직업상담부문 대상 수상(2021)',
      '자격증: 직업상담사1,2급, 버크만레벨2, 커리어로드맵전문가1급'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['백석대학교', '선문대학교']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTUg/MDAxNzg5MTA0MTUzMjk2.sUew4dL0lAM9A-lYREGoFsGOosZlsLQPHVCggR6eLpkg.OMvoBO0T9oA4t24hx2g68yGNntc0lDBVjMgF3c9BZKwg.PNG/%EC%84%9D%EC%9D%80%ED%95%98%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'choi-won-young',
    name: '최원영 코치님',
    role: '現 바로코칭 대표코치 / 前 NCS전문위원',
    category: 'public',
    tagline: 'NCS활용면접관 & 국립한밭대 취업지원관 출신!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 국립한밭대학교 취업지원관',
      '前 NCS전문위원 겸 NCS면접관 위촉',
      '前 NCS직업교육지도사 대표전속강사',
      '前 ㈜한국코리아창업 실장',
      '前 ㈜미래고속 인사팀',
      '자격증: 직업상담사2급, NCS활용면접관, NCS직업교육지도사, NCS진로지도사'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['서울교통공사', '남부발전', '한국교통안전공단', '안산도시공사', '광진구시설관리공단']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTA3/MDAxNzg5MTA0MTUzNzk1.rlUlOVnn7C5uIw8g8DIVVSyFErdxSxOTXBt3wjE_NqAg.QLEpbNXOTRtBonuwj0dpor61_PKv2LWNU-O1dPTy3Asg.PNG/%EC%B5%9C%EC%9B%90%EC%98%81%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'kim-jung-hee',
    name: '김정희 코치님',
    role: '現 바로코칭 대표코치 / 前 대한항공 객실사무장',
    category: 'major',
    tagline: '대한항공 객실사무장 & 호텔관광경영학 박사수료!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 세명대학교 외래교수',
      '前 서정대학교 컨설턴트',
      '前 ㈜대한항공 객실사무장',
      '前 인덕대학교 외래교수',
      '세종대학교 일반대학원 호텔관광경영학 박사수료',
      '세종대학교 관광대학원 호텔관광경영학 석사'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['한국원자력환경공단', '코레일 테크', '한국관광공사', '국민은행', '한국농어촌공사']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTgy/MDAxNzg5MTA0MTUzNjI4.MtJrUkpcIU6SMS8A368kyBcOz2jOuJm6tVnu4mdAmgwg.pnsHrdWvUUTU8MpPu8Rgn02I_nbFcFIYQ1kIpKx59XEg.PNG/%EA%B9%80%EC%A0%95%ED%9D%AC%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'sam-lee',
    name: '쌤리 코치님',
    role: '現 바로코칭 대표코치 / 前 HERSHEY 법규이사',
    category: 'major',
    tagline: '글로벌 식품/제약 법규이사 & 수입 무역 허가 전문가!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 THE HERSHEY COMPANY 식품법규이사',
      '前 한국암웨이 기술개발부 팀장',
      '前 내추럴라이프 수입, 무역, 인허가, 개발 담당',
      '前 일양약품 건강사업부 상품기획, 마케팅 담당'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['수협중앙회']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfNjAg/MDAxNzg5MTA0MTUzMzA0.uq1LiPsWaoGsC11eebDQw8ZtLHbRhtbt1iS9q8i4Yzcg.1nzXUgKqN_7_TIdFHqe2GMMPSAwo6TClXqgptBuCpYcg.PNG/%EC%8C%A4%EB%A6%AC%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'park-jung-hoon',
    name: '박정훈 코치님',
    role: '現 바로코칭 대표코치 / 現 OO전자 파운드리 재직중',
    category: 'major',
    tagline: '서울대 석사 현직 파운드리 엔지니어 & 사내 코치!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '現 OO전자 파운드리사업부 재직중',
      '前 OO전자 DS부문 사내코치 및 퍼실리테이터 활동',
      '前 삼성 그룹 신입사원 교육 담당',
      '前 한동대학교 커리어코칭',
      '서울대학교 전자공학 석사',
      '한양사이버대학원 교육공학 석사'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['삼성전자']
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'kim-jae-in',
    name: '김재인 코치님',
    role: '現 바로코칭 대표코치 / 前 NCS문항 개발',
    category: 'major',
    tagline: 'NCS문항 개발 & 성균관대 석사 및 CS/이미지 전문가!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 NCS문항 개발',
      '前 이미지 컨설팅',
      '前 해외 취업 가이드북 집필 참여',
      '성균관대학교 일반대학원 비교문화(홍보) 졸업',
      '자격증: ESG전문가, CS.이미지메이킹, 중국어 정교사'
    ],
    // 면접관 이력 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTQ0/MDAxNzg5MTA0MTUzNDk1.CLTmtoy4Q8kO-VMrNsALQiCNwg3LJ2tyJBIzjP1J6Ogg.FyqGzyvdTohRBF6O8Pe3BtsD4TKLlEovNHOD2crdM2cg.PNG/%EA%B9%80%EC%9E%AC%EC%9D%B8%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'lee-hye-joon',
    name: '이혜준 코치님',
    role: '現 바로코칭 대표코치 / 前 광고기획팀장',
    category: 'public',
    tagline: '광고기획 & 디자인실장 출신 직업상담사/스피치강사!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 국제와이드아트 광고기획팀/팀장(과장)',
      '前 외환은행 CI변경관련 신규 디자인',
      '前 토리디자인 디자인팀/실장',
      '前 KM커뮤니케이션 디자인팀/실장',
      '원광대학교 미술대학 시각디자인학과 졸업',
      '자격증: 직업상담사2급, 커리어코칭강사, 스피치강사'
    ],
    // 면접관 이력 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMTcw/MDAxNzg5MTA0MTUzNDY5.mk9G3O_6oL69RkTryiRFH7gE6jPqfyppJoU4cSGPJJMg.1b35-3IaOol8NluFRJ8tVn4kNXykd09kZU5Gfhyvgywg.PNG/%EC%9D%B4%ED%98%9C%EC%A4%80%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'kim-saboo',
    name: '김동균 코치님',
    role: '現 바로코칭 대표코치 / 前 항공사 인사팀 채용파트장',
    category: 'rep',
    tagline: '1:1 최종면접 단기 완성 & 항공사/대기업 채용 전문가!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 이화여대 인재개발원 취업/진로 컨설턴트, OOOO대 항공서비스과 겸임교수',
      'OOOO항공 인사팀 채용파트장(2004~2019)'
    ],
    interviewerHistory: [
      {
        category: '주요 기관 면접관 이력',
        items: [
          '국가철도공단', '국민건강보험공단', '일산병원', '중소기업진흥공단', 
          '한국생산성본부', '한국수자원공사', '한국연구재단', '한국주택금융공사', 
          '한국해외인프라도시개발지원공사 등'
        ]
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'jung-gwang-sik',
    name: '정광식 코치님',
    role: '現 바로코칭 대표코치 / 前 아주대 교수',
    category: 'major',
    tagline: '(주)역량개발연구소 대표 & 아주대 취업역량 교수!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 (주)역량개발연구소 대표',
      '前 아주대학교 취업역량개발 교수',
      '前 K지역상공회의소 면접관',
      '前 한국마사회시설관리 면접관'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['k지역 상공회의소 면접관', '한국마사회시설관리㈜ 면접관', '한국지능정보사회진흥원 서류평가위원']
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'bang-young-hwang',
    name: '방영황 코치님',
    role: '現 바로코칭 대표코치 / 주요 대학 취업 외래교수',
    category: 'it',
    tagline: 'SAFFY·청년재단 대표강사 & 주요 대학 외래교수!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '삼성멀티캠퍼스(SAFFY), 에듀윌, 청년재단, 서울일자리 재단, 경기도 일자리 재단, 마이패스 등 다수 대표강사',
      '前 중앙대, 한국산업기술대, 동국대, 단국대, 순천대 등 다수 대학의 취업 교과목 외래교수(2013~)'
    ],
    // 면접관 이력 없음
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfOTAg/MDAxNzg5MTA0MTUzMjk1.DyfYDwcwknOOM18bg4l15IMNbOuXppQLAd-67f2xut4g.mI-Go_6sdWlMXgds57E7BzM3kA1RI5Nn_dw4A5BnT_Ig.PNG/%EB%B0%A9%EC%98%81%ED%99%A9%EC%BD%94%EC%B9%98%EB%8B%98.png?type=w966'
  },
  {
    id: 'jini',
    name: '지니 코치님',
    role: '現 바로코칭 대표코치 / 前 고용노동부 취업지원관',
    category: 'public',
    tagline: '<취업?중소기업!>, <생생취업토크> 저자 & 면접평가위원!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 유플러스(You+) 컨설팅 대표',
      '前 고용노동부 취업지원관 (안양고용센터, 안산고용센터)',
      '前 한국산업인력공단 NCS 기업활용 컨설팅 전문가',
      '前 서울시 일자리 카페 전담 컨설턴트'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['고용노동부 안양/안산고용센터 면접평가위원', '서울시 일자리 카페 전담 평가위원']
      }
    ],
    image: MALE_COACH_IMAGE
  },
  {
    id: 'choi-yu-ri',
    name: '최유리 코치님',
    role: '現 바로코칭 대표코치 / 前 국회의원 보좌진',
    category: 'major',
    tagline: '이미지멘토 대표 & 대학 외래교수 및 국회 보좌진 경력!',
    currentRole: '現 바로코칭 대표코치',
    career: [
      '前 용인송담대학교 \'매너와 이미지메이킹\' 외래교수',
      '前 대한민국 국회의원 보좌진 (5급 비서관)',
      '前 이미지멘토 대표',
      '前 한국수력원자력, 한국전력공사 등 공공기관 특강 강사'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['국회의원 보좌진 채용 면접관', '공공기관 이미지/인성 면접평가위원']
      }
    ],
    image: 'https://postfiles.pstatic.net/MjAyNjA5MTFfMjQx/MDAxNzg5MTAyODIzNzQ1.1eoeB_et6uqhcUld83siooQRfv9OuR_b3gK7Klbq9Gsg.8_W3xVcOSMZ_JdENk2LiY8JH-CFln4daLQt1BoXw6QUg.PNG/%EC%97%AC%EC%9E%902-%EC%BD%94%EC%B9%98%EB%8B%98_%EC%8B%A4%EB%A3%A8%EC%97%A3.png?type=w966'
  },
  {
    id: 'lee-roo-da',
    name: '이루다 코치님',
    role: '現 바로코칭 금융권 대표코치 / 연세대 겸임교수',
    category: 'finance',
    tagline: '연세대학교 겸임교수 & 금융권/공공기관 평가위원!',
    currentRole: '現 바로코칭 금융권 대표코치',
    career: [
      '現 연세대학교 겸임교수',
      '前 KB국민은행 / 신한은행 금융 특강 및 면접 전담 코치',
      '前 공공기관 및 금융권 전문 채용 평가위원'
    ],
    interviewerHistory: [
      {
        category: '면접관 이력',
        items: ['금융권/공공기관 전문 채용 평가위원', '연세대학교 채용 면접관']
      }
    ],
    image: MALE_COACH_IMAGE
  }
];

export const COACHES_LIST: CoachDetail[] = RAW_COACHES_LIST.map(coach => ({
  ...coach,
  passedCompanies: COACH_PASSED_COMPANIES[coach.id] || coach.passedCompanies
}));
