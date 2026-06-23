import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '有靓又健 | 健康体重管理专家',
    template: '%s | 有靓又健',
  },
  description:
    '有靓又健（西安）健康科技有限公司——专注于健康体重管理及健康生活方式管理，提供代餐营养品与体重管理会员服务，让健康成为一种轻盈的生活方式。',
  keywords: [
    '有靓又健',
    '健康体重管理',
    '代餐营养品',
    '体重管理',
    '健康管理',
    '西安健康科技',
  ],
  openGraph: {
    title: '有靓又健 | 健康体重管理专家',
    description: '专注于健康体重管理及健康生活方式管理，让健康成为一种轻盈的生活方式。',
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
