import Layout from "@/components/Layout";
import CouponCard from "@/components/CouponCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, TrendingUp, Shield, Clock, MapPin, Percent, CreditCard, Smartphone, Globe, Users, Award, AlertTriangle, Zap, Moon, Calendar, Sunrise } from "lucide-react";

import heroBanner from "@/assets/hero-banner.jpg";
import discountCodes from "@/assets/discount-codes.jpg";
import luxuryHotel from "@/assets/luxury-hotel.jpg";
import travelBeach from "@/assets/travel-beach.jpg";
import travelCity from "@/assets/travel-city.jpg";
import familyTravel from "@/assets/family-travel.jpg";
import savings from "@/assets/savings.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import resortPool from "@/assets/resort-pool.jpg";
import japanHotel from "@/assets/japan-hotel.jpg";
import worldMap from "@/assets/world-map.jpg";
import romanticTravel from "@/assets/romantic-travel.jpg";

import coupon5pctBasic from "@/assets/coupon-1.webp";
import coupon7pctNew from "@/assets/coupon-2.webp";
import coupon8pctRegion from "@/assets/coupon-3.webp";
import coupon60usd from "@/assets/coupon-4.webp";
import coupon5pctKorea from "@/assets/coupon-5.webp";
import couponAppOnly from "@/assets/coupon-app-only.png";

import cardSamsung from "@/assets/card-samsung.png";
import cardShinhan from "@/assets/card-shinhan.png";
import cardWoori from "@/assets/card-woori.png";
import cardHana from "@/assets/card-hana.png";
import cardHyundai from "@/assets/card-hyundai.png";
import cardKakaopay from "@/assets/card-kakaopay.png";

const AFFILIATE_LINK = "http://app.ac/2ErYXqS23";

const coupons = [
  {
    code: "5% 기본코드",
    discount: "5% 즉시 할인",
    description: "전 세계 숙소 5% 즉시 할인 — 신규/기존 회원 모두 사용 가능한 가장 범용적인 코드",
    expiry: "상시 (재고 소진 시 종료)",
    category: "전 세계",
    minOrder: "USD 결제 기준",
    isHot: true,
    image: coupon5pctBasic,
  },
  {
    code: "AGDNEW7",
    discount: "7% 즉시 할인",
    description: "아고다 첫 예약 회원 전용 (이메일 검증 필요). 홍콩·스페인·독일·라오스 숙소 적용",
    expiry: "재고 소진 시 종료",
    category: "신규회원",
    minOrder: "KRW 결제 가능",
    isHot: true,
    image: coupon7pctNew,
  },
  {
    code: "8% 지역코드",
    discount: "8% 즉시 할인",
    description: "태국, 인도네시아, 이탈리아, 말레이시아 숙소 전용. 전용 프로모션 링크 경유 필수",
    expiry: "2026.05.31 (투숙 12.31까지)",
    category: "인기지역",
    isHot: true,
    image: coupon8pctRegion,
  },
  {
    code: "AGODADEAL8",
    discount: "최대 $60 할인",
    description: "$100 이상 예약 시 최대 $60 할인. 전 세계 숙소 (쿠폰 적용 가능 숙소 한정)",
    expiry: "상시",
    category: "정액할인",
    minOrder: "$100 이상",
    isHot: true,
    image: coupon60usd,
  },
  {
    code: "LPAGDKR10",
    discount: "5% 즉시 할인",
    description: "대한민국 국내 숙소 전용 코드. 전용 프로모션 링크 경유 및 한국어 사이트 접속 필수",
    expiry: "2026.05.31",
    category: "국내전용",
    image: coupon5pctKorea,
  },
  {
    code: "앱 전용 코드",
    discount: "5~8% 할인",
    description: "아고다 앱(App) 전용 할인. PC/모바일 웹 적용 불가. 앱 접속 시 자동 반영되는 경우 많음",
    expiry: "상시",
    category: "앱전용",
    image: couponAppOnly,
  },
];

const cardPromotions = [
  {
    name: "삼성카드",
    emoji: "🔵",
    discount: "최대 10%",
    period: "2026년 5월 31일까지",
    condition: "삼성카드 실물 카드 선불 결제 (간편결제 제외)",
    note: "예산 소진 시 조기 종료, 전용 링크 경유 필수",
    image: cardSamsung,
  },
  {
    name: "신한카드",
    emoji: "🔴",
    discount: "최소 7% (말레이시아·이탈리아·인도네시아 10%)",
    period: "2026년 5월 31일까지",
    condition: "신한카드 전용 페이지 접속 후 결제",
    note: "선착순 자동 적용",
    image: cardShinhan,
  },
  {
    name: "우리카드",
    emoji: "🟢",
    discount: "최소 7% (특정 지역 10%)",
    period: "진행 중",
    condition: "우리카드 전용 프로모션 페이지 접속 필수",
    note: "말레이시아, 이탈리아, 인도네시아 10% 적용 가능",
    image: cardWoori,
  },
  {
    name: "하나카드",
    emoji: "🟡",
    discount: "최소 7%",
    period: "2026년 5월 31일까지",
    condition: "하나카드 전용 페이지 접속 후 결제",
    note: "선착순 마감",
    image: cardHana,
  },
  {
    name: "현대카드",
    emoji: "🟠",
    discount: "최소 7%",
    period: "2026년 5월 31일까지",
    condition: "현대카드 전용 프로모션 페이지 접속 후 결제",
    note: "",
    image: cardHyundai,
  },
  {
    name: "카카오페이",
    emoji: "🔵",
    discount: "11% (최대 USD $100 한도)",
    period: "진행 중",
    condition: "아고다 앱 전용, 카카오페이 결제",
    note: "매일 오전 9시 타임드롭 방식 발급, 선착순",
    image: cardKakaopay,
  },
];

const regularPromos = [
  {
    icon: Moon,
    title: "Night Owl Sale (야간 특가)",
    time: "매일 오후 8시 ~ 자정",
    discount: "최대 20%",
    region: "일본, 태국, 말레이시아, 인도네시아, 한국, 대만, 인도, 필리핀, 베트남, 홍콩, 싱가포르",
  },
  {
    icon: Calendar,
    title: "Payday Sale (월말 페이데이 특가)",
    time: "매월 마지막 5일간",
    discount: "최대 20% 추가 할인",
    region: "전 세계 인기 호텔",
  },
  {
    icon: Zap,
    title: "정오 & 자정 플래시 세일",
    time: "매일 오전 12~3시 / 오후 2~6시",
    discount: "정오 최대 25% / 자정 최대 30%",
    region: "수량 한정, 선착순 소진",
  },
  {
    icon: Sunrise,
    title: "조기 예약 할인 (Early Bird)",
    time: "매주 토·일요일 예약 건 한정",
    discount: "최대 25%",
    region: "체크인 90일 이전 예약 시 (2026.05.31까지)",
  },
];

const Index = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "아고다 할인쿠폰",
    url: "https://lvagd.agd-offer.co.kr",
    description: "5월 아고다 할인쿠폰 총정리! 국내 여행, 일본 여행 전용 아고다 할인코드부터 카카오페이 할인 혜택, 전용 할인링크까지 한 번에. 지금 바로 쓸 수 있는 아고다 할인쿠폰 모음! 5월 최신 할인 정보를 확인해보세요.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lvagd.agd-offer.co.kr/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "아고다 할인코드 목록",
    description: "2026년 5월 기준 아고다 공식 할인코드 및 쿠폰, 프로모션 코드 모음",
    itemListElement: coupons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Offer",
        name: `아고다 할인코드 ${c.code}`,
        description: c.description,
        discount: c.discount,
        validThrough: c.expiry,
        category: c.category
      }
    }))
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="아고다 할인코드로 럭셔리 호텔을 저렴하게 예약하세요" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
            2026년 5월 최신<br />
            <span className="text-secondary">아고다 할인코드</span> 완전 정리
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            공식 할인코드 + 카드사 제휴 할인 + 정기 프로모션까지! 검증된 최신 아고다 할인 정보를 한눈에 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" onClick={() => document.getElementById("coupons")?.scrollIntoView({ behavior: "smooth" })}>
              🎫 할인코드 보기
            </Button>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="hero" size="lg">
                <ExternalLink className="h-5 w-5" /> 아고다 바로가기
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> 공식 검증 코드</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 2026년 5월 기준</span>
            <span className="flex items-center gap-1"><TrendingUp className="h-4 w-4" /> 최대 30% 할인</span>
          </div>
        </div>
      </section>

      {/* 필수 체크사항 */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">⚠️ 할인코드 적용 전 필수 체크사항</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "코드 입력란은 결제 페이지 오른쪽 'Promotions & discounts' 섹션에 위치",
              "한 번에 하나의 코드만 적용 가능 (중복 입력 불가)",
              "일부 코드는 앱(App) 전용, 일부는 PC/모바일 웹 전용",
              "'숙소에서 결제'(현장 결제) 상품이나 특가 상품에는 코드 적용 불가",
              "메리어트, 힐튼, 하얏트 등 글로벌 체인 호텔에는 대부분 적용 불가",
              "'쿠폰 적용 가능' 배너가 있는 숙소에만 할인 가능",
              "코드 입력 후 할인 금액이 바로 표시되면 정상 적용",
              "입력란이 안 보이면 브라우저 쿠키 삭제 후 재접속",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Codes Section */}
      <section id="coupons" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">🎟️ 2026년 5월 사용 가능한 공식 할인코드</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            아고다 공식 할인코드입니다. 어필리에이트·인플루언서 커미션 코드는 제외한 검증된 코드만 수록했습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {coupons.map((coupon, i) => (
            <CouponCard key={i} {...coupon} />
          ))}
        </div>
      </section>

      {/* 카드사 제휴 프로모션 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">💳 카드사 제휴 프로모션 (2026년 5월)</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            별도 코드 없이 해당 카드로 결제하면 자동 적용됩니다. 반드시 카드사 전용 프로모션 페이지를 통해 접속해야 합니다.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {cardPromotions.map((card, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                {card.image && (
                  <img src={card.image} alt={`${card.name} 아고다 할인 프로모션`} className="w-full h-24 md:h-40 object-cover" loading="lazy" />
                )}
                <div className="p-3 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{card.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground">{card.name}</h3>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">{card.discount}</div>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground"><span className="font-medium">기간:</span> {card.period}</p>
                  <p className="text-foreground"><span className="font-medium">조건:</span> {card.condition}</p>
                  {card.note && <p className="text-muted-foreground text-xs">{card.note}</p>}
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  <Button variant="hero" className="w-full mt-4" size="sm">
                    <ExternalLink className="h-4 w-4" /> 프로모션 페이지 접속
                  </Button>
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 정기 프로모션 이벤트 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">🎯 정기 프로모션 이벤트</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          아고다에서 주기적으로 진행하는 할인 이벤트입니다. 시간대와 조건을 잘 활용하면 할인코드 없이도 큰 할인을 받을 수 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularPromos.map((promo, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <promo.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{promo.title}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-foreground"><span className="font-medium">⏰ 진행 시간:</span> {promo.time}</p>
                <p className="text-primary font-bold text-lg">{promo.discount}</p>
                <p className="text-muted-foreground">{promo.region}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 최대 절약 전략 조합 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">💰 최대 절약 전략 조합</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            아고다에서 가장 많이 절약하는 방법은 지역별 코드 + 카드 할인 중복 적용입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "🌴 동남아 여행 (태국·말레이시아·인도네시아)",
                strategy: "8% 지역 코드 + 신한/우리/하나카드 7~10%",
                result: "실질 15% 이상 절약 가능",
              },
              {
                title: "🏙️ 홍콩·스페인·독일 여행 (신규 회원)",
                strategy: "AGDNEW7(7%) + 카드 할인",
                result: "최대 17% 절약",
              },
              {
                title: "🏨 고가 호텔 예약 ($600 이상)",
                strategy: "5% 기본 코드 → 금액이 클수록 절감액 증가",
                result: "고정 비율 적용으로 대형 절감",
              },
              {
                title: "📱 앱 예약",
                strategy: "카카오페이 11% 할인 활용",
                result: "단일 결제 수단 최고 할인율",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground mb-1">전략: {item.strategy}</p>
                <p className="text-sm font-bold text-primary">{item.result}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm text-center mt-6 max-w-2xl mx-auto">
            ※ 할인코드와 카드 할인의 중복 적용 여부는 프로모션마다 달라지므로, 예약 전 해당 프로모션 페이지에서 반드시 확인하세요.
          </p>
        </div>
      </section>

      {/* Images gallery - travel destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">✈️ 아고다 할인코드로 떠나는 인기 여행지</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            아고다 할인코드를 활용하면 전 세계 인기 여행지의 호텔을 더욱 저렴하게 예약할 수 있습니다.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { img: travelBeach, title: "동남아 비치 리조트", desc: "발리, 푸켓, 보라카이 등 인기 해변 리조트를 할인코드로 저렴하게", discount: "최대 25% 할인" },
              { img: travelCity, title: "아시아 도시 호텔", desc: "도쿄, 방콕, 싱가포르 등 도시 호텔 특가 예약", discount: "최대 20% 할인" },
              { img: japanHotel, title: "일본 료칸 & 온천", desc: "전통 일본 료칸과 온천 호텔 특별 할인", discount: "최대 15% 할인" },
              { img: resortPool, title: "럭셔리 리조트", desc: "5성급 럭셔리 리조트에서 특별한 휴가를", discount: "최대 30% 할인" },
              { img: luxuryHotel, title: "시티 럭셔리 호텔", desc: "도심 속 프리미엄 호텔에서 비즈니스 & 레저", discount: "최대 20% 할인" },
              { img: romanticTravel, title: "로맨틱 여행", desc: "커플 여행에 완벽한 로맨틱 호텔 & 레스토랑", discount: "최대 18% 할인" },
            ].map((dest, i) => (
              <a
                key={i}
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img src={dest.img} alt={`아고다 할인코드 - ${dest.title}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute bottom-2 right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-lg">
                    {dest.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{dest.title}</h3>
                  <p className="text-muted-foreground text-sm">{dest.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 자주 발생하는 오류 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">⚠️ 자주 발생하는 오류 및 해결 방법</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            할인코드 적용 시 문제가 발생하면 아래 해결 방법을 참고하세요.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left text-sm font-bold">오류 상황</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">원인 및 해결 방법</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { error: "코드 입력란 자체가 보이지 않음", solution: "전용 프로모션 링크로 재접속 / 브라우저 쿠키 삭제 후 시도" },
                  { error: "\"유효하지 않은 코드\" 오류", solution: "일반 검색 링크로 접속했을 가능성 — 전용 링크 재접속 필요" },
                  { error: "할인이 적용되지 않음", solution: "앱 전용 코드를 웹에서 입력했거나, 체인 호텔이거나 특가 상품인 경우" },
                  { error: "카드 할인이 반영 안 됨", solution: "간편결제(카카오페이·삼성페이 등) 사용 시 → 실물 카드 직접 입력으로 변경" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{row.error}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works brief */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">📱 할인코드 적용 방법 (단계별 가이드)</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "아고다 접속", desc: "전용 프로모션 링크를 통해 agoda.com에 접속합니다." },
                  { step: "2", title: "숙소 검색", desc: "여행지, 체크인/체크아웃 날짜, 인원을 입력하고 '쿠폰 적용 가능' 숙소를 선택합니다." },
                  { step: "3", title: "결제 페이지 이동", desc: "객실 선택 후 '지금 예약하기' → 결제 페이지로 이동합니다." },
                  { step: "4", title: "코드 입력", desc: "오른쪽 'Promotions & discounts' 섹션에서 'Enter a promo code'에 코드를 입력합니다." },
                  { step: "5", title: "할인 확인 & 결제", desc: "할인 금액이 표시되면 정상 적용! '다음: 마지막 단계'를 클릭해 완료합니다." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src={mobileBooking} alt="아고다 할인코드 모바일 예약 방법" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
              <img src={discountCodes} alt="아고다 할인코드 종류별 혜택" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Image feature: savings & world */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <img src={savings} alt="아고다 할인코드로 여행 경비 절약하기" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">💰 스마트한 여행 경비 절약법</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  아고다 할인코드를 활용하면 1박당 평균 ₩30,000~₩80,000를 절약할 수 있습니다. 카드사 할인과 함께 활용하면 최대 17% 이상의 할인이 가능합니다.
                </p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  <Button variant="cta" className="mt-4 w-full">아고다에서 저렴한 호텔 찾기</Button>
                </a>
              </div>
            </div>
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <img src={worldMap} alt="아고다 할인코드 사용 가능 지역 세계지도" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">🌍 전 세계 200개국 호텔 할인</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  아고다는 Booking Holdings 소속으로 아시아 중심 특화 플랫폼입니다. 한국인이 선호하는 동남아 여행지 숙소를 다양하게 보유하고 있으며, 가격 경쟁력도 높습니다.
                </p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  <Button variant="hero" className="mt-4 w-full">전 세계 호텔 검색하기</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family travel feature */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src={familyTravel} alt="아고다 할인코드를 사용한 가족 여행" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">👨‍👩‍👧‍👦 가족 여행도 할인코드로 스마트하게</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              가족 여행은 숙박비가 큰 비중을 차지합니다. 아고다 할인코드를 활용하면 가족 단위 숙박에서 더 큰 할인 효과를 누릴 수 있습니다.
            </p>
            <ul className="space-y-3 text-foreground text-sm">
              {[
                "패밀리룸 예약 시 할인코드 적용으로 1박당 ₩50,000 이상 절약 가능",
                "어린이 무료 투숙 + 할인코드 이중 혜택 활용",
                "연박 할인코드로 가족 장기 여행 시 최대 30% 절약",
                "키즈프렌들리 호텔 필터 + 할인코드로 최적의 가족 숙소 찾기",
                "아고다 포인트 적립으로 다음 가족 여행 추가 할인"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="cta" size="lg" className="mt-6">
                <ExternalLink className="h-4 w-4" /> 가족 여행 호텔 찾기
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 고객센터 안내 */}
      <section className="bg-card border-t border-border py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">📞 아고다 고객센터</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>💬 앱 내 채팅: 24시간 이용 가능</span>
            <span>📧 이메일: 공식 홈페이지 고객센터</span>
            <span>📋 예약 취소/변경: 앱 또는 웹 → '내 예약' 메뉴</span>
          </div>
          <p className="text-muted-foreground text-xs mt-4">
            ※ 카드 할인 및 공식 코드는 예산 소진 시 조기 종료될 수 있으므로, 여행 계획이 확정됐다면 가능한 빨리 예약하는 것이 좋습니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={travelBeach} alt="아고다 할인코드로 꿈의 해변 여행 떠나기" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            지금 바로 아고다 할인코드를 적용하세요!
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            수백만 명의 여행자가 아고다 할인코드로 숙박비를 절약하고 있습니다. 지금 아고다에 접속하여 최저가 호텔을 찾아보세요.
          </p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
            <Button variant="cta" size="lg" className="text-lg px-10 py-6 h-auto">
              🎯 아고다 최저가 호텔 예약하기
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
