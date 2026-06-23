import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '有靓又健 | 科学瘦身 · 健康生活方式',
    template: '%s | 有靓又健',
  },
  description:
    '有靓又健（西安）健康科技有限公司——通过科学管理+个性化服务+智能科技三位一体模式，为用户提供体重管理、体态优化、营养规划及营养瘦身食品支持的全周期解决方案。让人们健康美丽生活。',
  keywords: [
    '有靓又健',
    '体重健康科技',
    '健康体重管理',
    '代餐营养品',
    '体重管理',
    '瘦身管理',
    '健康管理',
    '中医减重',
    '代餐奶昔',
    '健康生活方式',
    '西安健康科技',
  ],
  openGraph: {
    title: '有靓又健 | Beauty Meets Wellness',
    description: '让人们健康美丽生活。科学瘦身+健康生活方式，一站式体重管理解决方案。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
