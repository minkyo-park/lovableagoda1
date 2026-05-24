import { useState } from "react";
import { Copy, Check, ExternalLink, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CouponCardProps {
  code: string;
  discount: string;
  description: string;
  expiry: string;
  category: string;
  minOrder?: string;
  isHot?: boolean;
  image?: string;
}

const CouponCard = ({ code, discount, description, expiry, category, minOrder, isHot, image }: CouponCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("할인코드가 복사되었습니다!", { description: `코드: ${code}` });
    setTimeout(() => setCopied(false), 2000);
    window.open("http://app.ac/2ErYXqS23", "_blank", "noopener,noreferrer");
  };

  const handleApply = () => {
    window.open("http://app.ac/2ErYXqS23", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
      {isHot && (
        <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-bold rounded-bl-lg">
          🔥 인기
        </div>
      )}
      {image && (
        <img src={image} alt={`${discount} - ${code}`} className="w-full max-w-[180px] h-auto mx-auto mt-3 md:mt-4 rounded-lg" loading="lazy" />
      )}
      <div className="p-3 md:p-6">
        <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 flex-wrap">
          <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-medium px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full">
            {category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-[10px] md:text-xs">
            <Clock className="h-2.5 w-2.5 md:h-3 md:w-3" /> {expiry}
          </span>
        </div>

        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{discount}</h3>
        <p className="text-foreground text-xs md:text-sm mb-1 line-clamp-2">{description}</p>
        {minOrder && (
          <p className="text-muted-foreground text-[10px] md:text-xs mb-2 md:mb-4">최소 주문 금액: {minOrder}</p>
        )}

        <div className="flex items-center gap-1 md:gap-2 bg-muted rounded-lg p-2 md:p-3 mb-2 md:mb-4">
          <Tag className="h-3 w-3 md:h-4 md:w-4 text-primary shrink-0" />
          <code className="flex-1 font-mono text-[11px] md:text-sm font-bold text-foreground tracking-wider truncate">{code}</code>
          <Button variant="ghost" size="sm" onClick={handleCopy} className="h-6 md:h-8 px-1 md:px-2">
            {copied ? <Check className="h-3 w-3 md:h-4 md:w-4 text-accent" /> : <Copy className="h-3 w-3 md:h-4 md:w-4" />}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-1.5 md:gap-2">
          <Button variant="cta" className="flex-1 text-xs md:text-sm h-8 md:h-10" onClick={handleCopy}>
            {copied ? "✅ 복사 완료!" : "📋 코드 복사"}
          </Button>
          <Button variant="hero" className="flex-1 text-xs md:text-sm h-8 md:h-10" onClick={handleApply}>
            <ExternalLink className="h-3 w-3 md:h-4 md:w-4" /> 적용하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
