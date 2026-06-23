'use client';

import Link from 'next/link';

const footerLinks = {
  关于我们: [
    { label: '公司介绍', href: '#about' },
    { label: '使命愿景', href: '#mission' },
    { label: '企业文化', href: '#culture' },
    { label: '加入我们', href: '#join' },
  ],
  核心业务: [
    { label: '代餐营养品', href: '#business' },
    { label: '体重管理会员', href: '#business' },
    { label: '健康管理咨询', href: '#business' },
  ],
  关注我们: [
    { label: '微信公众号', href: '#contact' },
    { label: '小红书', href: '#contact' },
    { label: '抖音', href: '#contact' },
    { label: '微博', href: '#contact' },
  ],
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-card/50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">有靓又健</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              有靓又健（西安）健康科技有限公司
              <br />
              专注于健康体重管理及健康生活方式管理
            </p>
            <div className="mt-4 flex gap-3">
              {/* Social icons - WeChat */}
              <a
                href="#contact"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="微信公众号"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.133 0 .241-.11.241-.246 0-.06-.024-.118-.04-.178l-.325-1.233a.49.49 0 0 1 .177-.555C23.024 17.855 24 16.228 24 14.352c0-3.196-3.137-5.494-7.062-5.494zm-2.69 2.832c.535 0 .969.44.969.983a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.543.434-.983.97-.983zm4.844 0c.535 0 .969.44.969.983a.976.976 0 0 1-.97.983.976.976 0 0 1-.968-.983c0-.543.434-.983.969-.983z" />
                </svg>
              </a>
              {/* Douyin */}
              <a
                href="#contact"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="抖音"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z" />
                </svg>
              </a>
              {/* Weibo */}
              <a
                href="#contact"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="微博"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.583.631.283.827.989.442 1.574zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.307-.366-.165-.601.14-.234.44-.349.676-.255.24.09.315.363.178.603zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.642 4.318-.341 5.132-2.126.8-1.74-.108-3.689-2.161-4.202zm8.703-1.681c-.347-.095-.588-.168-.41-.602.396-.967.443-1.803.005-2.407-.827-1.141-3.094-1.08-5.692-.034 0 0-.82.35-.612-.285.401-1.279.343-2.349-.281-2.963-1.389-1.365-5.072.063-8.222 3.194C.548 10.364-.263 13.418.698 15.894c1.854 4.783 7.066 7.694 12.27 7.106 5.239-.593 8.714-4.574 8.714-8.297 0-2.318-1.36-3.573-2.453-3.511z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} 有靓又健（西安）健康科技有限公司 版权所有
            </p>
            <p className="text-xs text-muted-foreground">
              陕ICP备XXXXXXXX号
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
