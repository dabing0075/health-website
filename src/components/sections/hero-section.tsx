'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-primary/3 blur-3xl" />

      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          健康体重管理 · 科学生活方式
        </div>

        <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          有靓又健
          <br />
          <span className="text-primary">让健康成为一种轻盈的生活方式</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          有靓又健（西安）健康科技有限公司，专注于健康体重管理及健康生活方式管理。
          我们以科学为根基，以代餐营养品和会员服务体系，帮助每一位用户实现
          <strong className="text-foreground">有靓又健</strong>的理想状态。
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="min-w-[160px]" asChild>
            <a href="#business">了解我们的服务</a>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[160px]" asChild>
            <a href="#about">关于我们</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
          {[
            { value: '10万+', label: '服务用户' },
            { value: '98%', label: '客户满意度' },
            { value: '50+', label: '营养专家团队' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
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
