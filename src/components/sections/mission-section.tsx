'use client';

import { useEffect, useRef, useState } from 'react';

export function MissionSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mission"
      ref={ref}
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/3 to-background py-24 lg:py-32"
    >
      {/* Animated decorative elements */}
      <div className="pointer-events-none absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[200px] w-[200px] rounded-full bg-primary/4 blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            使命愿景
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            以科学为基石，以个性化为核心
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            帮助用户实现健康、可持续的体重管理，打造&ldquo;健康美&rdquo;生活方式
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div
            className={`group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/8 via-primary/5 to-primary/3 p-8 text-center transition-all duration-700 ease-out hover:shadow-lg hover:border-primary/20 ${
              visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Animated ring behind icon */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-primary/10 animate-pulse-glow" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">使命</h3>
              <p className="text-2xl font-bold text-primary">让人们健康美丽生活</p>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all duration-700 ease-out hover:shadow-lg hover:border-primary/20 ${
              visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">愿景</h3>
              <p className="text-lg leading-relaxed text-card-foreground">
                打造世界领先的<span className="font-bold text-primary">一站式科学体重管理及健康生活方式解决方案服务商</span>
              </p>
            </div>
          </div>
        </div>

        {/* Values & Behavior */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Values */}
          <div
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out hover:shadow-md ${
              visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-card-foreground">价值观</h3>
            <ul className="space-y-4 text-muted-foreground">
              {[
                { label: '以奋斗者为本', desc: '重视每一位为事业拼搏的人，让奋斗者获得应有回报' },
                { label: '诚信、热爱、价值', desc: '以诚信立身，以热爱驱动，以价值衡量' },
                { label: '客户第一，员工第二，股东第三', desc: '将客户放在首位的服务理念，员工成长紧随其后' },
              ].map((v, i) => (
                <li
                  key={v.label}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
                  <span>
                    <strong className="text-card-foreground">{v.label}</strong> — {v.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Behavior norms */}
          <div
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out hover:shadow-md ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-card-foreground">行为规范</h3>
            <div className="grid gap-4">
              {[
                { label: '诚信敬业', desc: '在工作中秉持诚信，认真履行职责，以专业精神对待每一项工作' },
                { label: '责任进步', desc: '勇于担当，不断追求进步，推动个人与团队共同成长' },
                { label: '简单高效', desc: '保持简单高效的工作方式，减少冗余，专注于价值创造' },
              ].map((v, i) => (
                <div
                  key={v.label}
                  className={`group/norm rounded-xl border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:-translate-y-0.5 ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div className="mb-1 text-base font-semibold text-primary">{v.label}</div>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
