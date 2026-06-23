'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-gym.jpeg"
          alt="健康生活方式"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div
        className={`relative mx-auto max-w-5xl px-6 py-32 transition-all duration-1000 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-1.5 text-sm text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            科学瘦身 · 健康生活方式
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            有靓又健
            <br />
            <span className="text-primary">让人们健康美丽生活</span>
          </h1>

          <p className="mb-4 max-w-xl text-lg leading-relaxed text-foreground/80">
            靓健时代（西安）健康科技有限公司，通过"科学管理 + 个性化服务 + 智能科技"三位一体的模式，
            为用户提供体重管理、体态优化、营养规划及营养瘦身食品支持的全周期解决方案，拒绝极端减肥。
          </p>
          <p className="mb-10 text-base font-medium text-foreground/70">
            Beauty Meets Wellness — 让美丽与健康相遇
          </p>

          <div className="flex flex-col items-start justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[160px]" asChild>
              <a href="#business">了解我们的服务</a>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px] border-foreground/20 bg-background/50 backdrop-blur-sm" asChild>
              <a href="#about">关于我们</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid max-w-lg grid-cols-3 gap-8 rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-md">
          {[
            { value: '4大', label: '产品服务体系' },
            { value: '4亿+', label: '中国超重肥胖人群' },
            { value: '15%', label: '市场年增长率' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
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
