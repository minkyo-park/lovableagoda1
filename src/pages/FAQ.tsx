import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import faqConcept from "@/assets/faq-concept.jpg";
import discountCodes from "@/assets/discount-codes.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import savings from "@/assets/savings.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import luxuryHotel from "@/assets/luxury-hotel.jpg";
import travelBeach from "@/assets/travel-beach.jpg";
import familyTravel from "@/assets/family-travel.jpg";
import budgetHotel from "@/assets/budget-hotel.jpg";
import worldMap from "@/assets/world-map.jpg";
import resortPool from "@/assets/resort-pool.jpg";
import deals from "@/assets/deals.jpg";

const AFFILIATE_LINK = "http://app.ac/2ErYXqS23";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "아고다 할인코드란 무엇인가요?",
    answer: "아고다 할인코드(프로모션 코드)는 아고다에서 호텔 예약 시 추가 할인을 받을 수 있는 특별 코드입니다. 결제 과정에서 코드를 입력하면 총 예약 금액에서 일정 비율 또는 금액이 할인됩니다. 할인코드는 아고다 공식 프로모션, 카드사 제휴, 시즌 이벤트 등을 통해 제공되며, 각 코드마다 할인율, 유효기간, 최소 주문 금액 등의 조건이 다릅니다. 본 사이트에서는 현재 사용 가능한 모든 아고다 할인코드를 수집하여 검증 후 제공하고 있으며, 더 많은 할인 정보는 <a href='https://xn--bk1b700b1cz40buif.com/dealstore/agoda/' target='_blank' rel='noopener noreferrer' style='color: hsl(var(--primary)); text-decoration: underline;'>아고다 할인코드</a> 페이지에서도 확인하실 수 있습니다."
  },
  {
    question: "아고다 할인코드는 어떻게 사용하나요?",
    answer: "아고다 할인코드 사용법은 매우 간단합니다. 1) 본 사이트에서 원하는 할인코드를 복사합니다. 2) 아고다 공식 사이트 또는 앱에 접속합니다. 3) 원하는 호텔을 검색하고 객실을 선택합니다. 4) 결제 페이지에서 '프로모션 코드' 입력란에 복사한 코드를 붙여넣습니다. 5) '적용' 버튼을 클릭하면 할인이 적용된 금액이 표시됩니다. 6) 최종 금액을 확인하고 결제를 완료합니다. 자세한 사용법은 사용방법 페이지에서 단계별 가이드를 확인하세요."
  },
  {
    question: "아고다 할인코드가 적용되지 않는 이유는 무엇인가요?",
    answer: "아고다 할인코드가 적용되지 않는 가장 흔한 이유는 다음과 같습니다: 1) 유효기간이 만료된 코드 사용 2) 최소 주문 금액 미충족 3) 이미 사용한 코드 재사용 시도 4) 앱 전용 코드를 웹사이트에서 사용 5) 특정 지역/호텔에서만 적용되는 코드를 다른 곳에서 사용 6) 대소문자 오류. 이러한 문제가 발생하면 다른 할인코드를 시도하거나, 본 사이트에서 최신 코드를 확인하세요. 복사 버튼을 사용하면 대소문자 오류를 방지할 수 있습니다."
  },
  {
    question: "아고다 할인코드는 얼마나 자주 업데이트 되나요?",
    answer: "본 사이트에서는 아고다 할인코드를 매일 확인하고 업데이트하고 있습니다. 아고다는 월 평균 8~15개의 새로운 할인코드를 발행하며, 특별 시즌(블랙프라이데이, 설/추석, 여름 휴가철 등)에는 추가 프로모션 코드가 제공됩니다. 만료된 코드는 즉시 제거하고 새로운 코드를 추가하여 항상 최신 상태를 유지하고 있으니, 정기적으로 방문하시거나 <a href='https://travista.co.kr/agoda-deals-promo-code/' target='_blank' rel='noopener noreferrer' style='color: hsl(var(--primary)); text-decoration: underline;'>아고다 할인코드</a> 관련 페이지를 참고하시면 최신 할인 혜택을 놓치지 않을 수 있습니다."
  },
  {
    question: "아고다 할인코드를 여러 개 동시에 사용할 수 있나요?",
    answer: "안타깝게도, 아고다에서는 한 번의 예약에 하나의 할인코드만 적용할 수 있습니다. 여러 코드를 동시에 사용할 수는 없지만, 할인코드와 함께 다른 혜택을 중복으로 활용할 수 있습니다. 예를 들어, 1) 할인코드 + 카드사 할인을 중복 적용 2) 할인코드 + 아고다 포인트 적립 3) 할인코드 + 인사이더 딜(회원 특가)을 조합하면 최대 40% 이상의 할인 효과를 누릴 수 있습니다. 따라서 여러 코드 중 가장 할인율이 높은 코드를 선택하는 것이 중요합니다."
  },
  {
    question: "아고다 앱 전용 할인코드란 무엇인가요?",
    answer: "아고다 앱 전용 할인코드는 아고다 모바일 앱(iOS/Android)에서만 사용할 수 있는 특별한 할인코드입니다. 웹사이트(PC, 모바일 웹)에서는 적용되지 않으며, 반드시 앱을 통해 예약해야 합니다. 앱 전용 코드는 일반 코드보다 할인율이 높은 경우가 많으며(보통 +5% 추가), 앱 설치 후 최초 예약 시 추가 혜택이 제공되기도 합니다. 아직 앱을 설치하지 않았다면, 앱 스토어에서 '아고다'를 검색하여 무료로 다운로드할 수 있습니다."
  },
  {
    question: "아고다 VIP 프로그램은 무엇이고 어떤 할인코드를 받을 수 있나요?",
    answer: "아고다 VIP 프로그램(AgodaVIP)은 예약 횟수에 따라 등급이 부여되는 로열티 프로그램입니다. 실버(2~4박), 골드(5~14박), 플래티넘(15박 이상) 3단계로 구성되며, 등급이 올라갈수록 더 높은 할인율의 전용 코드와 비공개 특가를 제공받습니다. VIP 전용 할인코드는 최대 25~30%까지 할인받을 수 있으며, VIP 회원에게는 우선 고객 지원, 무료 객실 업그레이드 기회 등의 추가 혜택도 제공됩니다."
  },
  {
    question: "아고다와 부킹닷컴, 어디가 더 저렴한가요?",
    answer: "호텔 가격은 지역과 시기에 따라 다르지만, 일반적으로 아시아 지역(동남아시아, 일본, 한국 등)에서는 아고다가, 유럽/미주 지역에서는 부킹닷컴이 더 저렴한 경우가 많습니다. 하지만 아고다 할인코드를 적용하면 거의 모든 지역에서 아고다가 더 유리합니다. 예를 들어, 방콕 4성급 호텔의 경우 아고다(할인코드 적용)가 부킹닷컴보다 약 20~25% 저렴합니다. 더 자세한 지역별 가격 비교는 비교분석 페이지에서 확인하실 수 있습니다."
  },
  {
    question: "아고다 할인코드 사용 시 취소 정책은 어떻게 되나요?",
    answer: "아고다 할인코드를 사용하여 예약한 경우에도 해당 호텔의 취소 정책은 동일하게 적용됩니다. 대부분의 호텔은 '무료 취소 가능' 옵션과 '환불 불가(대신 더 저렴)' 옵션을 모두 제공합니다. 할인코드 적용 예약을 취소하면 할인코드가 복원되지 않는 경우가 많으므로, 예약 전 일정을 확정하고 진행하는 것을 권장합니다. 단, 일부 프로모션 할인코드는 취소 후에도 재사용 가능한 경우가 있으니 코드 조건을 확인하세요."
  },
  {
    question: "아고다 포인트(AgodaCash)와 할인코드를 동시에 사용할 수 있나요?",
    answer: "네, 아고다 포인트(AgodaCash)와 할인코드는 동시에 사용할 수 있습니다! 이것이 아고다의 큰 장점 중 하나입니다. 먼저 할인코드를 적용하여 할인된 가격을 확인한 후, 보유 중인 AgodaCash를 추가로 적용하면 이중 할인을 받을 수 있습니다. 또한, 할인코드로 예약하더라도 AgodaCash 적립은 정상적으로 이루어지므로, 꾸준히 아고다를 이용하면 점점 더 많은 할인을 누릴 수 있습니다."
  },
  {
    question: "한국 카드사 할인과 아고다 할인코드를 함께 사용할 수 있나요?",
    answer: "네, 대부분의 경우 카드사 할인과 아고다 할인코드를 중복 적용할 수 있습니다. 삼성카드, 현대카드, KB국민카드, 신한카드 등 주요 카드사들은 아고다와 정기적으로 제휴 프로모션을 진행합니다. 카드사 할인은 결제 시 자동으로 적용되거나 카드사 전용 코드를 입력하는 방식으로 제공되며, 이때 아고다 자체 할인코드와 별도로 작동합니다. 다만, 카드사 전용 코드와 아고다 할인코드가 동일한 입력란을 사용하는 경우에는 둘 중 하나만 선택해야 할 수도 있으니, 할인 금액을 비교하여 더 유리한 코드를 선택하세요."
  },
  {
    question: "아고다 할인코드에 지역 제한이 있나요?",
    answer: "일부 아고다 할인코드는 특정 지역이나 국가에서만 사용 가능한 경우가 있습니다. 예를 들어, '동남아 전용', '일본 호텔 전용', '국내 숙소 전용' 등으로 제한된 코드가 있습니다. 본 사이트에서는 각 할인코드의 적용 범위를 명시하고 있으니, 코드를 선택하기 전에 본인이 예약하려는 지역에서 사용 가능한지 확인하세요. 전 세계 공통으로 사용 가능한 코드도 많이 있으니 걱정하지 마세요!"
  },
  {
    question: "아고다 인사이더 딜이란 무엇인가요?",
    answer: "아고다 인사이더 딜(Insider Deals)은 아고다 회원에게만 제공되는 비공개 특가입니다. 일반 검색 결과에는 표시되지 않으며, 로그인한 회원만 볼 수 있는 특별 할인 가격입니다. 인사이더 딜은 보통 정상가 대비 10~30% 저렴하며, 여기에 할인코드를 추가로 적용하면 최대 50%까지 할인받을 수 있습니다. 인사이더 딜을 확인하려면 아고다에 무료로 회원가입하고 로그인한 상태에서 호텔을 검색하면 됩니다."
  },
  {
    question: "아고다 할인코드는 항공권에도 적용되나요?",
    answer: "아고다 할인코드는 주로 호텔/숙소 예약에 적용됩니다. 아고다에서 항공권도 예약할 수 있지만, 대부분의 할인코드는 호텔 예약에만 유효합니다. 항공권에 적용 가능한 별도의 프로모션 코드가 간혹 제공되기도 하지만, 호텔 할인코드에 비해 매우 드뭅니다. 항공권과 호텔을 함께 할인받고 싶다면, 아고다의 '항공+호텔' 패키지 상품을 이용하면 별도의 패키지 할인을 받을 수 있습니다."
  },
  {
    question: "아고다 최저가 보장 정책은 무엇인가요?",
    answer: "아고다는 최저가 보장 정책(Best Price Guarantee)을 운영하고 있습니다. 아고다에서 예약한 호텔이 다른 웹사이트에서 더 저렴한 가격으로 판매되고 있을 경우, 아고다에 신고하면 해당 가격을 맞춰주거나 차액을 보상해줍니다. 이 정책 덕분에 아고다에서 예약하면 다른 곳에서 더 저렴한 가격이 있을지 걱정할 필요 없이 안심하고 예약할 수 있습니다. 할인코드를 적용한 후에도 최저가 보장 정책은 동일하게 적용됩니다."
  },
];

const FAQAccordion = ({ item, index }: { item: FAQItem; index: number }) => {
  const [open, setOpen] = useState(index < 3);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <h3 className="font-bold text-foreground text-sm md:text-base pr-4">{item.question}</h3>
        {open ? <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "/" },
      { "@type": "ListItem", position: 2, name: "자주 묻는 질문", item: "/faq" },
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={faqConcept} alt="아고다 할인코드 자주 묻는 질문" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
              <li><a href="/" className="hover:text-primary-foreground">홈</a></li>
              <li>/</li>
              <li className="text-primary-foreground font-medium">자주 묻는 질문</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            아고다 할인코드 <span className="text-secondary">자주 묻는 질문</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            아고다 할인코드에 대해 궁금하신 모든 것을 답변해드립니다.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">❓ 아고다 할인코드 FAQ</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          총 {faqData.length}개의 자주 묻는 질문을 정리했습니다. 클릭하여 답변을 확인하세요.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, i) => (
            <FAQAccordion key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Image gallery */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">📸 아고다 할인코드 활용 사례</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            실제 아고다 할인코드를 활용하여 예약한 다양한 숙소와 여행 사례를 확인해보세요.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { img: luxuryHotel, alt: "아고다 할인코드로 예약한 럭셔리 호텔", title: "럭셔리 호텔 30% 할인" },
              { img: travelBeach, alt: "아고다 할인코드 해변 리조트 예약", title: "해변 리조트 25% 할인" },
              { img: resortPool, alt: "아고다 할인코드 리조트 수영장", title: "풀빌라 리조트 20% 할인" },
              { img: familyTravel, alt: "가족 여행 아고다 할인코드 사용", title: "가족 패밀리룸 15% 할인" },
              { img: budgetHotel, alt: "아고다 할인코드 저가 숙소", title: "게스트하우스 10% 할인" },
              { img: worldMap, alt: "아고다 할인코드 전 세계 사용", title: "전 세계 200개국 적용" },
              { img: savings, alt: "아고다 할인코드로 절약한 금액", title: "평균 ₩50,000 절약" },
              { img: mobileBooking, alt: "아고다 앱 할인코드 사용", title: "앱 전용 추가 5% 할인" },
              { img: discountCodes, alt: "아고다 할인코드 종류", title: "다양한 할인코드 제공" },
              { img: heroBanner, alt: "아고다 할인코드로 꿈의 여행", title: "꿈의 여행 할인 예약" },
              { img: deals, alt: "아고다 할인코드 특가 딜", title: "시즌 특가 세일" },
              { img: faqConcept, alt: "아고다 할인코드 문의", title: "24시간 고객 지원" },
            ].map((item, i) => (
              <a
                key={i}
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <img src={item.img} alt={item.alt} className="w-full h-36 md:h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 p-2">
                  <p className="text-primary-foreground text-xs font-medium text-center">{item.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">📋 아고다 할인코드 유형별 비교</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          다양한 유형의 아고다 할인코드를 한눈에 비교해보세요.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left text-sm font-bold">코드 유형</th>
                <th className="px-4 py-3 text-center text-sm font-bold">평균 할인율</th>
                <th className="px-4 py-3 text-center text-sm font-bold">사용 조건</th>
                <th className="px-4 py-3 text-center text-sm font-bold">제공 빈도</th>
                <th className="px-4 py-3 text-center text-sm font-bold">추천 대상</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "일반 할인코드", rate: "10~15%", cond: "최소 주문금액 충족", freq: "상시", target: "모든 사용자" },
                { type: "신규 회원 코드", rate: "10~15%", cond: "첫 예약", freq: "1회", target: "신규 가입자" },
                { type: "앱 전용 코드", rate: "15~20%", cond: "앱 설치 필수", freq: "수시", target: "모바일 유저" },
                { type: "VIP 전용 코드", rate: "20~30%", cond: "VIP 등급 보유", freq: "월 1~2회", target: "VIP 회원" },
                { type: "시즌 코드", rate: "12~25%", cond: "특정 기간", freq: "분기별", target: "계절 여행자" },
                { type: "카드사 코드", rate: "5~15%", cond: "특정 카드 결제", freq: "수시", target: "제휴 카드 소지자" },
                { type: "장기투숙 코드", rate: "20~30%", cond: "7박 이상", freq: "상시", target: "장기 여행자" },
                { type: "조기예약 코드", rate: "15~20%", cond: "60일+ 전 예약", freq: "상시", target: "계획형 여행자" },
              ].map((row, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{row.type}</td>
                  <td className="px-4 py-3 text-sm text-center font-bold text-primary">{row.rate}</td>
                  <td className="px-4 py-3 text-sm text-center text-muted-foreground">{row.cond}</td>
                  <td className="px-4 py-3 text-sm text-center text-muted-foreground">{row.freq}</td>
                  <td className="px-4 py-3 text-sm text-center text-muted-foreground">{row.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="아고다 할인코드 최저가 예약" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            지금 바로 아고다에 접속하여 최신 할인코드를 적용하고 저렴하게 호텔을 예약하세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/">
              <Button variant="hero" size="lg">
                🎫 할인코드 보러가기
              </Button>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="cta" size="lg">
                <ExternalLink className="h-4 w-4" /> 아고다 바로가기
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
