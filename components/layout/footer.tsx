import Link from "next/link";
import Container from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/videos", label: "视频库" },
      { href: "/practice", label: "练习记录" },
    ],
    resources: [
      { href: "/about", label: "关于我们" },
      { href: "/contact", label: "联系方式" },
    ],
  };

  return (
    <footer className="border-border bg-surface/50 border-t">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              Joseph Love Tennis
            </h2>
            <p className="text-muted mt-4 max-w-md text-sm">
              专业的网球学习平台，汇聚全球优质教学视频，助您提升球技，享受网球运动的乐趣。
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">产品</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">资源</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted text-sm">
              © {currentYear} Joseph Love Tennis. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-muted hover:text-primary text-sm transition-colors"
              >
                隐私政策
              </Link>
              <Link
                href="/terms"
                className="text-muted hover:text-primary text-sm transition-colors"
              >
                使用条款
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
