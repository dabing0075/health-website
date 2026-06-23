'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'membership',
    tag: '健康瘦身会员服务',
    title: '有靓又健·瘦身管理会员',
    headline: '你不是一个人在战斗，我们全程陪伴',
    description:
      '检测阶段：体脂率、代谢率、基因检测，通过AI算法分析用户基因、代谢率、生活习惯，生成个性化健康档案。定制方案：饮食计划（含每周食谱+代餐产品）、运动课程、相关课程。跟踪服务：AI营养师24小时答疑，每周专家视频面诊。智能设备联动：体脂秤、手环实时监测数据，动态调整方案。线下各类主题俱乐部。',
    features: ['AI算法个性化方案', '24小时AI营养师', '每周专家视频面诊', '智能设备实时监测', '线下主题俱乐部', '动态调整方案'],
    highlight: '从检测到跟踪，全周期科学管理',
  },
  {
    id: 'meal-replacement',
    tag: '代餐营养食品',
    title: '轻享代餐系列',
    headline: '减重+营养+功能性，三效合一',
    description:
      '采用中医药食同源技术，研发高效的减重代餐食品，体现"减重+营养+功能性（降脂、除湿等）"。产品涵盖瘦身代餐奶昔（咖啡、红豆薏苡仁、黑芝麻等口味）、代餐粥、瘦身茶饮及降脂软糖，大众与高档系列并行，低热量高营养，满足用户在瘦身过程中的营养需求。',
    features: ['中医药食同源技术', '大众+高档双系列', '奶昔/粥/茶饮/软糖', '低热量高营养', '降脂除湿功能性', '驼奶高档配方'],
    highlight: '囊泡技术加持，减重同时调养体质',
  },
  {
    id: 'app',
    tag: '体重健康科技App',
    title: '体重健康管理App',
    headline: '你的口袋健康管家，数据驱动每一次蜕变',
    description:
      'App设有健康体重指标跟踪模块、自我健康成长知识库（免费）、线上靓健圈社区、线上商城（销售低GI食品、运动器械等自营/联名产品）、会员中心（打卡积分制+用户成长体系，游戏化运营系统）。用户可方便地管理健康和体重，获取健康知识，参与社区互动，购买相关产品和服务。',
    features: ['健康指标跟踪', '免费知识库', '靓健圈社区', '线上商城', '打卡积分制', '游戏化成长体系'],
    highlight: 'App是"大脑"，体重管理的智能中枢',
  },
  {
    id: 'hardware',
    tag: '智能硬件',
    title: '智能健康硬件',
    headline: '精准感知身体信号，让数据为你导航',
    description:
      '智能体脂秤、瘦身手环（硬件销售或租赁），实时监测用户的健康数据，为用户提供更精准的健康管理和瘦身指导。硬件产生的数据反哺App，使AI建议更精准，形成体验闭环。智能穿戴设备+APP实时监测数据，提升用户粘性。',
    features: ['智能体脂秤', '瘦身手环', '实时数据监测', 'App数据联动', '销售或租赁模式', '提升用户粘性'],
    highlight: '硬件是"传感器"，精准感知每一次变化',
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
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            核心业务
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            App + 代餐 + 硬件，飞轮驱动健康管理
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            通过社交媒体优质内容或爆款代餐产品吸引初始用户，用户使用App记录饮食运动感受到初步效果，
            引导其购买代餐食品提升体验，通过社群运营与AI指导增加粘性，硬件销售成为高客单价变现点，
            同时硬件数据反哺App使AI更精准——形成体验闭环
          </p>
        </div>

        {/* Flywheel diagram */}
        <div
          className={`mb-16 transition-all duration-700 ease-out delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-primary/2 p-8 text-center">
            <h3 className="mb-4 text-lg font-bold text-foreground">业务飞轮效应</h3>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
              {[
                { label: 'App', role: '"大脑"', desc: '用户入口+数据中枢' },
                { label: '代餐', role: '"供给"', desc: '高频变现+复购' },
                { label: '硬件', role: '"传感器"', desc: '精准数据+高客单' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex flex-col items-center rounded-xl border border-primary/20 bg-card px-6 py-4">
                    <span className="text-lg font-bold text-primary">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.role}</span>
                    <span className="mt-1 text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                  {i < 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hidden h-5 w-5 text-primary/40 sm:block">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              三者相辅相成，形成生态链解决方案，构建差异化竞争壁垒
            </p>
          </div>
        </div>

        {/* Product cards */}
        <div className="space-y-8">
          {products.map((product, i) => (
            <Card
              id={product.id}
              key={product.title}
              className={`overflow-hidden border-border/50 transition-all duration-700 ease-out ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  {/* Left: Visual area */}
                  <div className="flex items-center justify-center bg-gradient-to-br from-primary/8 to-primary/3 p-8 md:col-span-2 md:min-h-[340px]">
                    <div className="text-center">
                      <Badge
                        variant="secondary"
                        className="mb-4 bg-primary/10 text-primary hover:bg-primary/15"
                      >
                        {product.tag}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-primary">
                        {product.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-8 md:col-span-3">
                    <h4 className="mb-3 text-lg font-semibold text-card-foreground">
                      {product.headline}
                    </h4>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
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
