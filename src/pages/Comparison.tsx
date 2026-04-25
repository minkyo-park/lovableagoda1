import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Check, X, TrendingUp, Shield } from "lucide-react";

import comparison from "@/assets/comparison.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import luxuryHotel from "@/assets/luxury-hotel.jpg";
import travelBeach from "@/assets/travel-beach.jpg";
import travelCity from "@/assets/travel-city.jpg";
import budgetHotel from "@/assets/budget-hotel.jpg";
import resortPool from "@/assets/resort-pool.jpg";
import japanHotel from "@/assets/japan-hotel.jpg";
import europeTravel from "@/assets/europe-travel.jpg";
import asiaTemple from "@/assets/asia-temple.jpg";
import ratingStars from "@/assets/rating-stars.jpg";
import worldMap from "@/assets/world-map.jpg";

const AFFILIATE_LINK = "http://app.ac/2ErYXqS23";

const Comparison = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "아고다 vs 경쟁 플랫폼 비교분석 - 할인코드 혜택 비교",
    description: "아고다와 부킹닷컴, 호텔스닷컴, 익스피디아, 트립닷컴 등 주요 호텔 예약 플랫폼의 할인코드 혜택, 가격, 서비스를 상세히 비교 분석합니다.",
    author: { "@type": "Organization", name: "아고다 할인쿠폰" },
    datePublished: "2026-05-01",
    dateModified: "2026-05-07",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "/" },
      { "@type": "ListItem", position: 2, name: "비교분석", item: "/comparison" },
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={comparison} alt="아고다 할인코드 vs 경쟁사 비교분석" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
              <li><a href="/" className="hover:text-primary-foreground">홈</a></li>
              <li>/</li>
              <li className="text-primary-foreground font-medium">비교분석</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            아고다 <span className="text-secondary">비교분석</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            아고다와 주요 호텔 예약 플랫폼의 할인코드 혜택, 가격, 서비스를 상세 비교합니다.
          </p>
        </div>
      </section>

      {/* Main comparison table */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">📊 주요 호텔 예약 플랫폼 종합 비교</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          아고다, 부킹닷컴, 호텔스닷컴, 익스피디아, 트립닷컴 5개 플랫폼의 핵심 지표를 비교했습니다.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] min-w-[800px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left text-sm font-bold">비교 항목</th>
                <th className="px-4 py-3 text-center text-sm font-bold bg-secondary text-secondary-foreground">아고다 ⭐</th>
                <th className="px-4 py-3 text-center text-sm font-bold">부킹닷컴</th>
                <th className="px-4 py-3 text-center text-sm font-bold">호텔스닷컴</th>
                <th className="px-4 py-3 text-center text-sm font-bold">익스피디아</th>
                <th className="px-4 py-3 text-center text-sm font-bold">트립닷컴</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "아시아 호텔 가격", vals: ["최저가 🏆", "보통", "높음", "높음", "저렴"] },
                { item: "유럽 호텔 가격", vals: ["보통", "최저가 🏆", "보통", "보통", "저렴"] },
                { item: "할인코드 종류", vals: ["다양 🏆", "적음", "보통", "보통", "다양"] },
                { item: "최대 할인율", vals: ["30% 🏆", "15%", "20%", "20%", "25%"] },
                { item: "앱 전용 할인", vals: ["있음 🏆", "없음", "있음", "있음", "있음"] },
                { item: "로열티 프로그램", vals: ["PointsMAX 🏆", "Genius", "리워드", "포인트", "Trip Coins"] },
                { item: "숙소 수", vals: ["390만+", "350만+", "100만+", "200만+", "200만+"] },
                { item: "한국어 지원", vals: ["완벽 🏆", "완벽", "완벽", "완벽", "완벽"] },
                { item: "무료 취소율", vals: ["높음", "매우 높음 🏆", "보통", "보통", "보통"] },
                { item: "카드사 제휴 할인", vals: ["다양 🏆", "적음", "보통", "적음", "다양"] },
                { item: "가격 보장 정책", vals: ["있음 🏆", "있음", "있음", "있음", "있음"] },
                { item: "결제 수단 다양성", vals: ["다양 🏆", "다양", "보통", "보통", "다양"] },
              ].map((row, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{row.item}</td>
                  {row.vals.map((val, j) => (
                    <td key={j} className={`px-4 py-3 text-sm text-center ${j === 0 ? "font-bold text-primary bg-primary/5" : "text-muted-foreground"}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Price comparison by region */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">💰 지역별 평균 호텔 가격 비교</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            동일한 호텔을 각 플랫폼에서 검색했을 때의 평균 가격을 비교했습니다. (2026년 5월 기준, 1박 기준)
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] min-w-[700px]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left text-sm font-bold">여행지</th>
                  <th className="px-4 py-3 text-center text-sm font-bold bg-secondary text-secondary-foreground">아고다 (할인코드 적용)</th>
                  <th className="px-4 py-3 text-center text-sm font-bold">부킹닷컴</th>
                  <th className="px-4 py-3 text-center text-sm font-bold">호텔스닷컴</th>
                  <th className="px-4 py-3 text-center text-sm font-bold">익스피디아</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { city: "🇹🇭 방콕 (4성급)", agoda: "₩95,000 🏆", booking: "₩120,000", hotels: "₩125,000", expedia: "₩118,000" },
                  { city: "🇯🇵 도쿄 (4성급)", agoda: "₩160,000 🏆", booking: "₩185,000", hotels: "₩190,000", expedia: "₩188,000" },
                  { city: "🇻🇳 다낭 (5성급)", agoda: "₩85,000 🏆", booking: "₩100,000", hotels: "₩110,000", expedia: "₩105,000" },
                  { city: "🇸🇬 싱가포르 (4성급)", agoda: "₩170,000 🏆", booking: "₩195,000", hotels: "₩200,000", expedia: "₩190,000" },
                  { city: "🇮🇩 발리 (5성급)", agoda: "₩110,000 🏆", booking: "₩130,000", hotels: "₩135,000", expedia: "₩128,000" },
                  { city: "🇫🇷 파리 (4성급)", agoda: "₩220,000", booking: "₩210,000 🏆", hotels: "₩225,000", expedia: "₩218,000" },
                  { city: "🇺🇸 뉴욕 (4성급)", agoda: "₩290,000", booking: "₩285,000 🏆", hotels: "₩300,000", expedia: "₩295,000" },
                  { city: "🇰🇷 제주 (리조트)", agoda: "₩120,000 🏆", booking: "₩140,000", hotels: "₩145,000", expedia: "₩138,000" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{row.city}</td>
                    <td className={`px-4 py-3 text-sm text-center font-bold ${row.agoda.includes("🏆") ? "text-primary bg-primary/5" : "text-foreground"}`}>{row.agoda}</td>
                    <td className={`px-4 py-3 text-sm text-center ${row.booking.includes("🏆") ? "font-bold text-primary" : "text-muted-foreground"}`}>{row.booking}</td>
                    <td className="px-4 py-3 text-sm text-center text-muted-foreground">{row.hotels}</td>
                    <td className="px-4 py-3 text-sm text-center text-muted-foreground">{row.expedia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground text-center text-sm mt-4">
            * 아고다 가격은 할인코드 적용 후 가격입니다. 할인코드 미적용 시 다른 플랫폼과 유사한 수준입니다.
          </p>
        </div>
      </section>

      {/* Feature by feature comparison */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">🔍 기능별 상세 비교</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          각 플랫폼의 할인코드 시스템, 포인트 프로그램, 고객 서비스 등을 상세히 비교합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Agoda */}
          <div className="bg-card border-2 border-primary rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <div className="bg-primary text-primary-foreground p-4 text-center">
              <h3 className="text-xl font-bold">아고다 (Agoda) ⭐ 추천</h3>
            </div>
            <img src={heroBanner} alt="아고다 할인코드 플랫폼 특징" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="space-y-2">
                {[
                  { feat: "할인코드 다양성", has: true, detail: "월 평균 8~15개 할인코드 제공" },
                  { feat: "앱 전용 추가 할인", has: true, detail: "최대 5% 앱 전용 추가 할인" },
                  { feat: "PointsMAX", has: true, detail: "항공 마일리지 적립 가능" },
                  { feat: "인사이더 딜", has: true, detail: "회원 전용 비공개 특가" },
                  { feat: "아시아 지역 최저가", has: true, detail: "동남아 호텔 최저가 보장" },
                  { feat: "카드사 제휴 할인", has: true, detail: "삼성/현대/KB 등 제휴" },
                  { feat: "무료 취소 비율", has: true, detail: "약 60~70% 호텔 무료 취소" },
                  { feat: "가격 보장 정책", has: true, detail: "최저가 보장 정책 운영" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{f.feat}:</span>
                    <span className="text-muted-foreground">{f.detail}</span>
                  </div>
                ))}
              </div>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                <Button variant="cta" className="w-full mt-6">아고다 할인코드 적용하기</Button>
              </a>
            </div>
          </div>

          {/* Booking.com */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <div className="bg-muted text-foreground p-4 text-center">
              <h3 className="text-xl font-bold">부킹닷컴 (Booking.com)</h3>
            </div>
            <img src={europeTravel} alt="부킹닷컴 유럽 호텔 비교" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="space-y-2">
                {[
                  { feat: "할인코드 다양성", has: false, detail: "할인코드 시스템 제한적" },
                  { feat: "앱 전용 추가 할인", has: false, detail: "별도 앱 할인 없음" },
                  { feat: "Genius 프로그램", has: true, detail: "예약 횟수 기반 등급 할인" },
                  { feat: "비공개 특가", has: true, detail: "Genius 회원 전용 특가" },
                  { feat: "유럽 지역 최저가", has: true, detail: "유럽 호텔 강력한 가격 경쟁력" },
                  { feat: "무료 취소 비율", has: true, detail: "약 80~90% 무료 취소 가능" },
                  { feat: "숙소 리뷰 신뢰도", has: true, detail: "실제 투숙객 인증 리뷰" },
                  { feat: "아시아 가격 경쟁력", has: false, detail: "아고다 대비 10~20% 비쌈" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    {f.has ? <Check className="h-4 w-4 text-primary flex-shrink-0" /> : <X className="h-4 w-4 text-destructive flex-shrink-0" />}
                    <span className="font-medium text-foreground">{f.feat}:</span>
                    <span className="text-muted-foreground">{f.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional platform comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              name: "호텔스닷컴",
              img: luxuryHotel,
              pros: ["10박 적립 1박 무료", "가격 보장 정책"],
              cons: ["할인코드 종류 적음", "아시아 가격 높음"],
            },
            {
              name: "익스피디아",
              img: travelCity,
              pros: ["항공+호텔 패키지 할인", "포인트 적립 시스템"],
              cons: ["단독 호텔 가격 높음", "할인코드 혜택 제한적"],
            },
            {
              name: "트립닷컴",
              img: asiaTemple,
              pros: ["아시아 가격 경쟁력", "Trip Coins 적립"],
              cons: ["유럽 숙소 부족", "고객 서비스 질 차이"],
            },
          ].map((platform, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src={platform.img} alt={`${platform.name} 비교분석`} className="w-full h-32 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-3">{platform.name}</h3>
                <div className="space-y-1 mb-3">
                  {platform.pros.map((p, j) => (
                    <div key={j} className="flex items-center gap-1 text-xs text-foreground">
                      <Check className="h-3 w-3 text-primary" />{p}
                    </div>
                  ))}
                  {platform.cons.map((c, j) => (
                    <div key={j} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <X className="h-3 w-3 text-destructive" />{c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount code comparison */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">🎫 할인코드 시스템 상세 비교</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            각 플랫폼의 할인코드(프로모션 코드) 시스템을 구체적으로 비교합니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] min-w-[700px]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left text-sm font-bold">할인코드 항목</th>
                  <th className="px-4 py-3 text-center text-sm font-bold bg-secondary text-secondary-foreground">아고다</th>
                  <th className="px-4 py-3 text-center text-sm font-bold">부킹닷컴</th>
                  <th className="px-4 py-3 text-center text-sm font-bold">호텔스닷컴</th>
                  <th className="px-4 py-3 text-center text-sm font-bold">트립닷컴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "월 평균 코드 수", vals: ["8~15개 🏆", "1~3개", "3~5개", "5~8개"] },
                  { item: "최대 할인율", vals: ["30% 🏆", "15%", "20%", "25%"] },
                  { item: "신규 회원 할인", vals: ["10% 🏆", "5%", "8%", "10%"] },
                  { item: "앱 전용 코드", vals: ["있음 🏆", "없음", "있음", "있음"] },
                  { item: "시즌 특별 코드", vals: ["있음 🏆", "있음", "있음", "있음"] },
                  { item: "VIP 전용 코드", vals: ["있음 🏆", "Genius만", "없음", "있음"] },
                  { item: "카드사 연계 코드", vals: ["다양 🏆", "제한적", "제한적", "보통"] },
                  { item: "장기 투숙 코드", vals: ["있음 🏆", "없음", "있음", "있음"] },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{row.item}</td>
                    {row.vals.map((val, j) => (
                      <td key={j} className={`px-4 py-3 text-sm text-center ${j === 0 ? "font-bold text-primary bg-primary/5" : "text-muted-foreground"}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image gallery - why agoda */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">🏆 아고다를 선택해야 하는 이유</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          종합적인 비교 결과, 아고다는 특히 아시아 여행 시 할인코드 혜택이 가장 뛰어난 플랫폼입니다. 최신 <a href="https://solar-revival.co.kr/agoda" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">아고다 할인코드</a>를 함께 활용하면 더욱 저렴하게 예약할 수 있습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: travelBeach, title: "아시아 최저가 보장", desc: "동남아, 일본, 한국 등 아시아 지역에서 타 플랫폼 대비 10~25% 저렴한 가격을 제공합니다." },
            { img: ratingStars, title: "다양한 할인코드", desc: "월 평균 8~15개의 할인코드를 제공하며, 시즌별 특별 프로모션도 자주 진행합니다." },
            { img: resortPool, title: "390만+ 숙소 보유", desc: "전 세계 200개국 이상에서 390만 개 이상의 숙소를 보유한 대형 플랫폼입니다." },
            { img: budgetHotel, title: "예산별 맞춤 숙소", desc: "저가 게스트하우스부터 5성급 리조트까지 예산에 맞는 다양한 숙소를 제공합니다." },
            { img: japanHotel, title: "독특한 숙소 경험", desc: "일본 료칸, 발리 빌라, 태국 워터빌라 등 특별한 숙박 경험을 할인코드로 저렴하게 즐기세요." },
            { img: worldMap, title: "글로벌 커버리지", desc: "200개 이상 국가에서 사용 가능하며, 38개 언어와 45개 통화를 지원합니다." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <img src={item.img} alt={`아고다 할인코드 - ${item.title}`} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Score comparison */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">📈 종합 평가 점수</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            5개 항목(가격, 할인코드 다양성, 사용 편의성, 고객 서비스, 숙소 다양성)을 10점 만점으로 종합 평가했습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { name: "아고다", score: "9.2", highlight: true },
              { name: "부킹닷컴", score: "8.8", highlight: false },
              { name: "트립닷컴", score: "8.0", highlight: false },
              { name: "호텔스닷컴", score: "7.5", highlight: false },
              { name: "익스피디아", score: "7.3", highlight: false },
            ].map((p, i) => (
              <div key={i} className={`bg-card border ${p.highlight ? "border-primary border-2" : "border-border"} rounded-xl p-6 text-center shadow-[var(--shadow-card)]`}>
                {p.highlight && <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-bold mb-2 inline-block">추천</span>}
                <h3 className="font-bold text-foreground text-lg mb-2">{p.name}</h3>
                <div className={`text-4xl font-extrabold ${p.highlight ? "text-primary" : "text-muted-foreground"}`}>{p.score}</div>
                <p className="text-muted-foreground text-xs mt-1">/ 10점</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="아고다 할인코드로 최저가 예약" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            비교 결과, 아고다가 최선의 선택!
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            특히 아시아 여행 시 아고다 할인코드를 활용하면 다른 어떤 플랫폼보다 저렴하게 호텔을 예약할 수 있습니다.
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

export default Comparison;
