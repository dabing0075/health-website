'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const coreAdvantages = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2c3 3.5 4.5 6.5 4.5 10S15 18.5 12 22" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: '智能科技驱动',
    description:
      '建立全食品热量及营养数据库，通过图像精准识别食物热量及营养成分，AI算法生成千人千面个性化方案，动态调整用户进度。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M11 2a10 10 0 1 0 10 10" />
        <path d="M11 2c3 3.5 4.5 6.5 4.5 10S15 18.5 12 22" />
        <path d="M2 12h20" />
        <path d="M12 2c3 3.5 4.5 6.5 4.5 10S15 18.5 12 22" />
      </svg>
    ),
    title: '中医理论赋能',
    description:
      '采用中医药食同源技术研发减重代餐食品，体现"减重+营养+功能性"。通过望闻问切判定体质，根据痰湿质、气虚质等制定差异化管理策略。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: '全程服务关怀',
    description:
      '线上社群 + 线下活动构建高互动性健康生态圈，通过俱乐部和社群全程陪伴跟进体重管理效果，AI营养师24小时答疑。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: '全链健康闭环',
    description:
      'App是"大脑"，食品是"供给"，硬件是"传感器"，软件+食品+硬件三者相辅相成，形成生态链解决方案与差异化竞争壁垒。',
  },
];

const teamMembers = [
  { name: '卢兵', title: '创始人 / 管理学博士', desc: '西安交通大学管理学院博士，精通组织管理与营销' },
  { name: '马天有', title: '医学博士 / 教授', desc: '西安交通大学医学院，医学营养学专家' },
  { name: '张晓叶', title: '医学博士 / 副教授', desc: '陕西中医药大学，药食同源与降脂机制研究' },
  { name: '左振宇', title: '博士 / 教授', desc: '陕西中医药大学，中药成分提取与药食同源产品开发' },
  { name: '张瑞', title: '技术负责人', desc: '资深软件工程师，丰富的项目开发与管理经验' },
];

export function AboutSection() {
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
      id="about"
      ref={ref}
      className="scroll-mt-24 relative overflow-hidden py-24 lg:py-32"
    >
      {/* Subtle floating decoration */}
      <div className="pointer-events-none absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-primary/4 blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - text content */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              关于我们
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              靓健时代（西安）健康科技有限公司
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              有靓又健是一家专注于健康体重管理的新型科技公司，通过创新科技手段为用户提供专业服务。
              我们通过&ldquo;科学管理 + 个性化服务 + 智能科技&rdquo;三位一体的模式，重新定义瘦身健康，为用户提供
              体重管理、体态优化、营养规划及营养瘦身食品支持的全周期解决方案，拒绝极端减肥。
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              以科学的方法帮助用户实现健康瘦身，满足用户对健康美丽生活的追求，打造&ldquo;健康美&rdquo;生活方式。
              围绕公司核心业务，未来公司将发展为集团公司，下设食品公司、健康管理公司和硬件科技公司，
              通过多元化发展拓展业务范围，提升公司综合实力。
            </p>
          </div>

          {/* Right - image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/about-consultant.jpeg"
                alt="专业健康管理咨询"
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-primary/20 bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="text-sm font-semibold text-primary">3位教授 · 4位博士</div>
              <div className="text-xs text-muted-foreground">专家级创业团队</div>
            </div>
          </div>
        </div>

        {/* Core competitiveness */}
        <div className="mt-16">
          <h3 className={`mb-6 text-xl font-bold text-foreground transition-all duration-700 delay-200 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            核心竞争力
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreAdvantages.map((item, i) => (
              <Card
                key={item.title}
                className={`group border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <h4 className="mb-2 text-base font-semibold text-card-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team highlight */}
        <div
          id="team"
          className={`scroll-mt-24 mt-16 transition-all duration-700 ease-out delay-500 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h3 className="mb-6 text-xl font-bold text-foreground">专家团队</h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Team image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/about-experts-v2.jpeg"
                alt="专家团队工作场景"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Team text */}
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                拥有团结有力的人才团队：团队成员有3位专家教授（西安交通大学医学院教授和陕西中医药大学教授），
                4位博士，有使命感且精通管理和营销的创始人，经验丰富的软件工程师，以及在减肥代餐行业深耕10多年的行业销售人才，
                形成了集技术、管理、营销为一体的专家创业团队。
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {teamMembers.map((member, i) => (
                  <div
                    key={member.name}
                    className={`group rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:border-primary/20 ${
                      visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                    style={{ transitionDelay: `${700 + i * 100}ms` }}
                  >
                    <div className="mb-1 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary">{member.name}</div>
                    <div className="mb-1 text-xs font-medium text-primary">{member.title}</div>
                    <div className="text-xs text-muted-foreground">{member.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
