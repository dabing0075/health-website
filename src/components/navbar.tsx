'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navGroups = [
  {
    label: '关于我们',
    href: '#about',
    children: [
      { label: '企业简介', href: '#about' },
      { label: '使命愿景', href: '#mission' },
      { label: '团队', href: '#team' },
      { label: '企业文化', href: '#culture' },
    ],
  },
  {
    label: '关于业务',
    href: '#business',
    children: [
      { label: '核心业务', href: '#business' },
      { label: '会员服务', href: '#membership' },
      { label: '代餐营养品', href: '#meal-replacement' },
      { label: '体重健康管理App', href: '#app' },
      { label: '智能健康硬件', href: '#hardware' },
    ],
  },
  {
    label: '加入我们',
    href: '#join',
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">靓健时代</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            体重健康科技
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navGroups.map((group) =>
            group.children ? (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={group.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {group.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-3 w-3 transition-transform ${
                      activeDropdown === group.label ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {activeDropdown === group.label && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[140px] rounded-lg border border-border bg-background/95 backdrop-blur-md py-1 shadow-lg">
                      {group.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={group.label}
                href={group.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {group.label}
              </Link>
            )
          )}
          <Button size="sm" className="ml-3" asChild>
            <Link href="#contact">关注我们</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-all ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-b border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            {navGroups.map((group) => (
              <div key={group.label}>
                {group.children ? (
                  <>
                    <Link
                      href={group.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {group.label}
                    </Link>
                    {group.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {group.label}
                  </Link>
                )}
              </div>
            ))}
            <Button size="sm" className="mt-3 w-full" asChild>
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                关注我们
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
