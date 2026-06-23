'use client';

import { useEffect, useRef, useState } from 'react';

const cultureValues = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '以奋斗者为本',
    description:
      '重视每一位为事业拼搏的人，让奋斗者获得应有回报。公司为员工提供系统化的职业发展通道与培训体系，让专业与能力同步提升。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: '诚信、热爱、价值',
    description:
      '以诚信立身，以热爱驱动，以价值衡量。我们鼓励跨部门协作，用开放的心态拥抱不同观点，共同创造超越个人能力的成果。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: '客户第一',
    description:
      '客户第一，员工第二，股东第三。用户的健康是我们存在的意义，从产品设计到服务交付，每一个决策都以用户真实需求为核心出发点。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: '诚信敬业·责任进步·简单高效',
    description:
      '在工作中秉持诚信，认真履行职责，不断追求进步，同时保持简单高效的工作方式，减少冗余，专注于价值创造。',
  },
];

const benefits = [
  '有竞争力的薪酬与绩效奖金',
  '五险一金 + 补充商业保险',
  '弹性工作制，平衡工作与生活',
  '系统化培训与清晰的晋升通道',
  '免费代餐营养品及内部健康管理服务',
  '年度体检与健身补贴',
  '定期团建与下午茶',
  '西安高新区核心地段办公',
];

const positions = [
  {
    title: '高级营养师',
    dept: '产品研发部',
    location: '西安',
    type: '全职',
  },
  {
    title: '健康管理师',
    dept: '会员服务部',
    location: '西安',
    type: '全职',
  },
  {
    title: 'AI算法工程师',
    dept: '技术部',
    location: '西安',
    type: '全职',
  },
  {
    title: '产品经理',
    dept: '产品部',
    location: '西安',
    type: '全职',
  },
  {
    title: '新媒体运营',
    dept: '市场部',
    location: '西安',
    type: '全职',
  },
  {
    title: '食品研发工程师',
    dept: '食品研发部',
    location: '西安',
    type: '全职',
  },
];

export function CultureSection() {
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
      id="culture"
      ref={ref}
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/3 to-background py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute top-1/3 right-10 h-[250px] w-[250px] rounded-full bg-primary/4 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 left-5 h-[180px] w-[180px] rounded-full bg-primary/3 blur-3xl animate-float-slow" style={{ animationDelay: '1.5s' }} />

      <div className="mx-auto max-w-7xl px-6">
        {/* Culture Values */}
        <div
          className={`mb-20 transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            企业文化
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            在这里，健康不仅是事业，更是日常
          </h2>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            我们打造的是一个让每个人都能健康成长的工作环境——无论你是团队伙伴还是服务用户
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((item, i) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-500 group-hover:from-primary/5 group-hover:to-primary/2" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div
          className={`mb-20 transition-all duration-700 ease-out delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            员工福利
          </h3>
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <div
                key={b}
                className={`group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-card-foreground transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-sm ${
                  visible ? 'translate-x-0 opacity-100' : i % 2 === 0 ? '-translate-x-4 opacity-0' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + i * 60}ms` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-125"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function JoinSection() {
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
      id="join"
      ref={ref}
      className="scroll-mt-24 relative overflow-hidden py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute top-20 left-1/4 h-[200px] w-[200px] rounded-full bg-primary/4 blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            加入我们
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            与我们一起，让健康触手可及
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            我们正在寻找热爱健康事业、愿意用专业和温度改变世界的伙伴
          </p>
        </div>

        {/* Positions */}
        <div className="mx-auto max-w-3xl space-y-4">
          {positions.map((pos, i) => (
            <div
              key={pos.title}
              className={`group flex items-center justify-between rounded-xl border border-border/50 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:border-primary/20 ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                <h4 className="text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {pos.title}
                </h4>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {pos.dept} · {pos.location} · {pos.type}
                </p>
              </div>
              <button className="shrink-0 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95">
                投递简历
              </button>
            </div>
          ))}
        </div>

        <p
          className={`mt-8 text-center text-sm text-muted-foreground transition-all duration-700 delay-500 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          没有找到合适的岗位？发送简历至{' '}
          <a
            href="mailto:hr@youjiangyoujian.com"
            className="font-medium text-primary underline-offset-4 hover:underline transition-colors"
          >
            hr@youjiangyoujian.com
          </a>
          ，我们会持续关注优秀人才
        </p>
      </div>
    </section>
  );
}
