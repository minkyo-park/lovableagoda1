import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Tag, Plane } from "lucide-react";

const navItems = [
  { path: "/", label: "아고다 할인쿠폰" },
  { path: "/how-to-use", label: "사용방법" },
  { path: "/comparison", label: "비교분석" },
  { path: "/faq", label: "자주 묻는 질문" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3" aria-label="메인 네비게이션">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Tag className="h-6 w-6" />
            <span>아고다 할인쿠폰</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-primary">
                <Tag className="h-5 w-5" /> 아고다 할인쿠폰
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <a href="https://xn--bk1b700b1cz40buif.com/dealstore/agoda/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">아고다 할인쿠폰</a> 정보를 제공하는 사이트입니다. 최신 프로모션 코드와 쿠폰 정보를 통해 여행 경비를 절약하세요. 본 사이트는 아고다 제휴 파트너로서 운영됩니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">빠른 링크</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">아고다 바로가기</h3>
              <p className="text-muted-foreground text-sm mb-4">
                아고다에서 최저가 호텔을 검색하고 할인코드를 적용하여 추가 할인을 받으세요.
              </p>
              <a
                href="http://app.ac/2ErYXqS23"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Plane className="h-4 w-4" /> 아고다 바로가기
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} 아고다 할인쿠폰. 이 사이트는 Agoda 제휴 프로그램에 참여하고 있습니다.</p>
            <p className="mt-1">본 사이트의 링크를 통해 예약하시면 소정의 커미션을 받을 수 있습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
