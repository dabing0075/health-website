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
      className="relative overflow-hidden bg-gradient-to-b from-background via-primary/3 to-background py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />

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
            以科学守护健康，以陪伴成就蜕变
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            我们相信，每一个人都值得拥有健康而自信的生活
          </p>
        </div>

        {/* Mission */}
        <div
          className={`mb-16 transition-all duration-700 ease-out delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/10 bg-primary/5 p-8 text-center lg:p-12">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">我们的使命</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              让每一位追求健康的人都能获得科学、有效、可持续的体重管理方案，
              用专业与温度陪伴每一次改变，帮助人们实现
              <span className="font-semibold text-primary">「有靓又健」</span>
              的美好人生。
            </p>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out delay-200 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">愿景</h3>
            <p className="leading-relaxed text-muted-foreground">
              成为中国领先的健康体重管理品牌，让科学体重管理走进每一个家庭，
              让「有靓又健」成为健康生活方式的代名词。
            </p>
          </div>

          {/* Values */}
          <div
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out delay-300 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">核心价值观</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                { label: '科学严谨', desc: '以循证医学为基础，绝不夸大宣传' },
                { label: '用户至上', desc: '每一位用户的健康是我们最大的责任' },
                { label: '真诚陪伴', desc: '不只是一套方案，更是全程守护' },
                { label: '持续创新', desc: '不断优化产品与服务，追求更好的健康体验' },
              ].map((v) => (
                <li key={v.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-card-foreground">{v.label}</strong> — {v.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
