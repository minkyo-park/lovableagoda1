import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Search, CreditCard, CheckCircle, Smartphone, Monitor, ArrowRight, Star, AlertTriangle } from "lucide-react";

import mobileBooking from "@/assets/mobile-booking.jpg";
import stepsGuide from "@/assets/steps-guide.jpg";
import discountCodes from "@/assets/discount-codes.jpg";
import luxuryHotel from "@/assets/luxury-hotel.jpg";
import savings from "@/assets/savings.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import travelBeach from "@/assets/travel-beach.jpg";
import resortPool from "@/assets/resort-pool.jpg";
import japanHotel from "@/assets/japan-hotel.jpg";
import deals from "@/assets/deals.jpg";
import comparison from "@/assets/comparison.jpg";

const AFFILIATE_LINK = "http://app.ac/2ErYXqS23";

const HowToUse = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "아고다 할인코드 사용방법",
    description: "아고다 할인코드를 적용하여 호텔 예약 시 추가 할인을 받는 방법을 단계별로 안내합니다.",
    step: [
      { "@type": "HowToStep", position: 1, name: "할인코드 선택 및 복사", text: "아고다 할인코드 사이트에서 원하는 할인코드를 찾고 복사 버튼을 클릭합니다." },
      { "@type": "HowToStep", position: 2, name: "아고다 접속", text: "적용하기 버튼을 클릭하여 아고다 공식 사이트로 이동합니다." },
      { "@type": "HowToStep", position: 3, name: "호텔 검색", text: "여행 날짜와 목적지를 입력하여 원하는 호텔을 검색합니다." },
      { "@type": "HowToStep", position: 4, name: "예약 진행", text: "원하는 객실을 선택하고 예약 페이지로 이동합니다." },
      { "@type": "HowToStep", position: 5, name: "할인코드 입력", text: "결제 정보 입력 시 프로모션 코드 입력란에 복사한 할인코드를 붙여넣기 합니다." },
      { "@type": "HowToStep", position: 6, name: "할인 확인 및 결제", text: "할인이 정상 적용되었는지 최종 금액을 확인하고 결제를 완료합니다." },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "/" },
      { "@type": "ListItem", position: 2, name: "사용방법", item: "/how-to-use" },
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={stepsGuide} alt="아고다 할인코드 사용방법 가이드" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
              <li><a href="/" className="hover:text-primary-foreground">홈</a></li>
              <li>/</li>
              <li className="text-primary-foreground font-medium">사용방법</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            아고다 할인코드 <span className="text-secondary">사용방법</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            처음 사용하시는 분도 쉽게 따라할 수 있는 단계별 아고다 할인코드 적용 가이드입니다.
          </p>
        </div>
      </section>

      {/* Step by step guide */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">📋 단계별 아고다 할인코드 사용 가이드</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-foreground">할인코드 선택 및 복사</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                본 사이트의 메인 페이지에서 현재 사용 가능한 아고다 할인코드 목록을 확인하세요. 각 할인코드에는 할인율, 적용 조건, 유효기간이 명시되어 있습니다. 원하는 코드의 <strong className="text-foreground">'코드 복사'</strong> 버튼을 클릭하면 자동으로 클립보드에 복사됩니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                <p className="font-medium text-foreground mb-1">💡 팁: 여러 코드 비교하기</p>
                <p className="text-muted-foreground">여러 할인코드가 있을 경우, 할인율과 최소 주문 금액을 비교하여 본인의 예약 금액에 가장 유리한 코드를 선택하세요.</p>
              </div>
            </div>
            <img src={discountCodes} alt="아고다 할인코드 선택 화면" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src={comparison} alt="아고다 할인코드 적용 전 호텔 검색" className="rounded-xl shadow-[var(--shadow-card)] w-full md:order-1" loading="lazy" />
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-foreground">아고다 사이트 접속</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                '적용하기' 버튼을 클릭하면 아고다 공식 사이트로 바로 이동합니다. 또는 직접 <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline font-medium">agoda.com</a>에 접속하셔도 됩니다. 아고다 계정이 없다면 먼저 회원가입을 진행하세요. 신규 회원 전용 할인코드도 있으니 활용하세요.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                <p className="font-medium text-foreground mb-1">💡 팁: 앱 vs 웹사이트</p>
                <p className="text-muted-foreground">아고다 앱에서만 사용 가능한 할인코드도 있습니다. 앱 전용 코드의 경우 반드시 아고다 앱을 통해 예약하세요.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-foreground">호텔 검색 및 선택</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                여행 목적지, 체크인/체크아웃 날짜, 인원 수를 입력하여 호텔을 검색합니다. 필터 기능을 활용하여 가격대, 성급, 위치, 리뷰 점수 등으로 결과를 좁혀보세요. 원하는 호텔을 선택하고 객실 타입을 고른 후 '예약하기'를 클릭합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">중요:</strong> 할인코드에 따라 특정 호텔이나 지역에서만 적용되는 경우가 있습니다. 할인코드의 적용 조건을 반드시 확인하세요.
              </p>
            </div>
            <img src={luxuryHotel} alt="아고다 할인코드 적용 가능 럭셔리 호텔" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src={mobileBooking} alt="아고다 할인코드 입력 화면" className="rounded-xl shadow-[var(--shadow-card)] w-full md:order-1" loading="lazy" />
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">4</div>
                <h3 className="text-xl font-bold text-foreground">할인코드 입력 및 적용</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                결제 정보를 입력하는 페이지에서 <strong className="text-foreground">'프로모션 코드'</strong> 또는 <strong className="text-foreground">'할인 코드'</strong> 입력란을 찾으세요. 복사한 할인코드를 붙여넣기(Ctrl+V)하고 '적용' 버튼을 클릭합니다. 할인이 정상 적용되면 총 결제 금액에서 할인 금액이 차감됩니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                <p className="font-medium text-foreground mb-1">⚠️ 주의사항</p>
                <p className="text-muted-foreground">할인코드가 적용되지 않을 경우, 유효기간이 지났거나 최소 주문 금액을 충족하지 않았을 수 있습니다. 다른 코드를 시도해보세요.</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">5</div>
                <h3 className="text-xl font-bold text-foreground">최종 확인 및 결제 완료</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                할인이 적용된 최종 결제 금액을 확인합니다. 숙박 일정, 객실 타입, 취소 정책 등을 다시 한번 확인한 후 결제를 완료하세요. 예약 확인 이메일이 발송되며, 아고다 앱에서도 예약 내역을 확인할 수 있습니다.
              </p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                <Button variant="cta" size="lg" className="mt-2">
                  <ExternalLink className="h-4 w-4" /> 지금 아고다에서 할인받기
                </Button>
              </a>
            </div>
            <img src={savings} alt="아고다 할인코드 적용 후 절약 금액 확인" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PC vs Mobile comparison */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">💻 PC vs 📱 모바일 할인코드 적용 비교</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            아고다 할인코드는 PC와 모바일 앱에서 적용 방법이 약간 다릅니다. 각 플랫폼별 사용법을 비교해보세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">PC (웹사이트)</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "agoda.com 접속 후 로그인",
                  "호텔 검색 및 객실 선택",
                  "결제 페이지 우측 '프로모션 코드' 클릭",
                  "할인코드 입력 후 '적용' 클릭",
                  "할인 적용된 금액 확인 후 결제",
                  "큰 화면으로 상세 정보 확인 가능",
                  "브라우저 확장 프로그램으로 자동 적용 가능"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">모바일 (앱)</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "아고다 앱 설치 후 로그인",
                  "호텔 검색 및 객실 선택",
                  "결제 화면 하단 '할인 코드 입력' 탭",
                  "할인코드 붙여넣기 후 '적용' 탭",
                  "할인 적용된 금액 확인 후 결제",
                  "앱 전용 추가 할인(최대 +5%) 혜택",
                  "푸시 알림으로 새 할인코드 수신 가능"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <img src={deals} alt="아고다 할인코드 PC 사용 방법" className="rounded-xl shadow-[var(--shadow-card)] w-full max-w-sm h-48 object-cover" loading="lazy" />
            <img src={resortPool} alt="아고다 할인코드로 예약한 리조트 수영장" className="hidden md:block rounded-xl shadow-[var(--shadow-card)] w-full max-w-sm h-48 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">⚠️ 아고다 할인코드 적용 시 흔한 실수</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          할인코드가 적용되지 않는 대부분의 경우는 아래 실수들 때문입니다. 미리 확인하고 방지하세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "유효기간 만료", desc: "할인코드의 유효기간이 지났는지 반드시 확인하세요. 본 사이트에서는 유효기간을 항상 표시하고 있습니다.", icon: "⏰" },
            { title: "최소 주문 금액 미충족", desc: "많은 할인코드에는 최소 주문 금액 조건이 있습니다. 예약 금액이 조건을 충족하는지 확인하세요.", icon: "💰" },
            { title: "대소문자 오류", desc: "할인코드는 대소문자를 구분합니다. 복사 버튼을 사용하면 정확한 코드가 입력됩니다.", icon: "🔤" },
            { title: "중복 사용 불가", desc: "대부분의 할인코드는 1인 1회만 사용 가능합니다. 이미 사용한 코드인지 확인하세요.", icon: "🔄" },
            { title: "앱 전용 코드를 웹에서 사용", desc: "앱 전용 할인코드는 웹사이트에서 적용되지 않습니다. 코드의 사용 조건을 확인하세요.", icon: "📱" },
            { title: "특정 국가/호텔 한정", desc: "일부 코드는 특정 국가나 호텔에서만 적용됩니다. 적용 범위를 반드시 확인하세요.", icon: "🌏" },
          ].map((mistake, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)]">
              <span className="text-3xl">{mistake.icon}</span>
              <h3 className="font-bold text-foreground mt-3 mb-2">{mistake.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{mistake.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional images and tips */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <img src={heroBanner} alt="아고다 할인코드 사용 가능한 럭셔리 리조트" className="rounded-xl shadow-[var(--shadow-card)] w-full" loading="lazy" />
              <div className="grid grid-cols-2 gap-4">
                <img src={japanHotel} alt="일본 료칸에서 아고다 할인코드 사용하기" className="rounded-xl shadow-[var(--shadow-card)] w-full h-32 object-cover" loading="lazy" />
                <img src={travelBeach} alt="해변 리조트 아고다 할인코드 예약" className="rounded-xl shadow-[var(--shadow-card)] w-full h-32 object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">🎯 할인 극대화를 위한 프로 팁</h2>
              <div className="space-y-4">
                {[
                  { title: "이중 할인 활용", desc: "아고다 할인코드 + 카드사 할인을 함께 적용하면 최대 40%까지 할인받을 수 있습니다. 삼성, 현대, KB 등 주요 카드사의 아고다 프로모션을 확인하세요." },
                  { title: "아고다 포인트 적립", desc: "예약 시 아고다 포인트가 적립되며, 적립된 포인트는 다음 예약 시 추가 할인으로 사용할 수 있습니다. 포인트맥스 기능을 활성화하세요." },
                  { title: "가격 알림 설정", desc: "아고다 앱에서 관심 호텔의 가격 알림을 설정하면, 가격이 하락했을 때 알림을 받을 수 있습니다. 최저가 시점에 할인코드를 적용하면 극대화된 할인을 받을 수 있습니다." },
                  { title: "비수기 예약", desc: "성수기를 피해 비수기에 예약하면 기본 가격이 낮아지므로, 할인코드 적용 시 절대 할인 금액은 줄어들더라도 총 비용은 크게 줄어듭니다." },
                ].map((tip, i) => (
                  <div key={i} className="bg-card rounded-lg p-4 border border-border">
                    <h3 className="font-bold text-foreground mb-1">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">지금 바로 아고다 할인코드를 적용해보세요!</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          위 가이드를 따라하면 누구나 쉽게 아고다 할인코드를 적용할 수 있습니다. 지금 메인 페이지에서 최신 할인코드를 확인하세요.
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
      </section>
    </Layout>
  );
};

export default HowToUse;
