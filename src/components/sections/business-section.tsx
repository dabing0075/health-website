'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const products = [
  {
    tag: '代餐营养品',
    title: '轻享代餐系列',
    headline: '每一口，都是对身体的温柔善待',
    description:
      '精选优质蛋白、膳食纤维与多种维生素矿物质，科学配比营养密度，低热量却饱腹感十足。无论是忙碌的早晨还是午后的能量补给，一杯轻享代餐，轻松替代高热量饮食，让体重管理不再是痛苦的"节食"，而是美味的"选择"。',
    features: ['科学营养配比', '低卡高饱腹', '多种口味选择', '便携即饮设计'],
    highlight: '热量仅为正餐的 1/3，营养却是正餐的 2 倍',
  },
  {
    tag: '会员服务',
    title: '有靓又健·体重管理会员',
    headline: '你不是一个人在战斗，我们全程陪伴',
    description:
      '专业营养师与健康管理师一对一服务，从体质评估、方案制定到进度追踪、动态调整，全流程精细化管理。会员专属社群互相鼓励，每周健康课程持续赋能，让你在温暖的陪伴中稳步实现健康目标。',
    features: ['一对一定制方案', '全程进度追踪', '专属社群支持', '每周健康课程'],
    highlight: '98% 会员表示：有陪伴，减重不再孤单',
  },
];

export function BusinessSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="business"
      ref={ref}
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            核心业务
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            用科学与温度，守护每一次改变
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            从营养代餐到全程会员服务，我们为你构建完整的健康管理闭环
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, i) => (
            <Card
              key={product.title}
              className={`overflow-hidden border-border/50 transition-all duration-700 ease-out ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  {/* Left: Visual area */}
                  <div className="flex items-center justify-center bg-gradient-to-br from-primary/8 to-primary/3 p-8 md:col-span-2 md:min-h-[380px]">
                    <div className="text-center">
                      <Badge
                        variant="secondary"
                        className="mb-4 bg-primary/10 text-primary hover:bg-primary/15"
                      >
                        {product.tag}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-primary">
                        {product.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-8 md:col-span-3">
                    <h4 className="mb-3 text-xl font-semibold text-card-foreground">
                      {product.headline}
                    </h4>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {f}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      了解更多
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
