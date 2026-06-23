'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
}

const stats = [
  { value: 4, suffix: '大', label: '产品服务体系' },
  { value: 4, suffix: '亿+', label: '中国超重肥胖人群' },
  { value: 15, suffix: '%', label: '市场年增长率' },
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const count1 = useCountUp(stats[0].value, 1200, visible);
  const count2 = useCountUp(stats[1].value, 1600, visible);
  const count3 = useCountUp(stats[2].value, 1400, visible);
  const counts = [count1, count2, count3];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-background animate-gradient-shift" />

      {/* Floating decorative circles */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-primary/3 blur-3xl animate-float-slow" />
      
      {/* Small floating orbs */}
      <div className="pointer-events-none absolute top-1/4 left-[10%] h-3 w-3 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="pointer-events-none absolute top-1/3 right-[15%] h-2 w-2 rounded-full bg-primary/25 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute bottom-1/3 left-[20%] h-4 w-4 rounded-full bg-primary/15 animate-float" style={{ animationDelay: '3s' }} />
      <div className="pointer-events-none absolute top-[60%] right-[8%] h-2.5 w-2.5 rounded-full bg-primary/20 animate-float-slow" style={{ animationDelay: '0.5s' }} />

      {/* Slow-rotating subtle ring */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-primary/5 animate-spin-slow" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-primary/3 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Tag badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          科学瘦身 · 健康生活方式
        </div>

        {/* Title with staggered reveal */}
        <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span
            className={`inline-block transition-all duration-700 delay-300 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            有靓又健
          </span>
          <br />
          <span
            className={`inline-block text-primary transition-all duration-700 delay-500 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            让人们健康美丽生活
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          靓健时代（西安）健康科技有限公司，通过&ldquo;科学管理 + 个性化服务 + 智能科技&rdquo;三位一体的模式，
          为用户提供体重管理、体态优化、营养规划及营养瘦身食品支持的全周期解决方案，拒绝极端减肥。
        </p>
        <p
          className={`mx-auto mb-10 text-base font-medium text-foreground/80 transition-all duration-700 delay-[800ms] ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Beauty Meets Wellness — 让美丽与健康相遇
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-[900ms] ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <Button size="lg" className="min-w-[160px] transition-transform hover:scale-105 active:scale-95" asChild>
            <a href="#business">了解我们的服务</a>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[160px] transition-transform hover:scale-105 active:scale-95" asChild>
            <a href="#about">关于我们</a>
          </Button>
        </div>

        {/* Stats with counter animation */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${1000 + i * 200}ms` }}
            >
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                {counts[i]}{stat.suffix}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
