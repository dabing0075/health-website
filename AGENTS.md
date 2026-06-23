# 项目上下文

### 项目名称
有靓又健（西安）健康科技有限公司官网

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **主题色**: 翡翠绿 (emerald)

## 目录结构

```
├── public/                 # 静态资源
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式与主题变量
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页（所有板块聚合）
│   ├── components/
│   │   ├── ui/             # Shadcn UI 组件库
│   │   ├── navbar.tsx      # 顶部导航栏
│   │   ├── footer.tsx      # 页脚（关注我们）
│   │   └── sections/       # 页面板块组件
│   │       ├── hero-section.tsx     # Hero 首屏
│   │       ├── about-section.tsx    # 关于我们/企业介绍
│   │       ├── mission-section.tsx  # 使命愿景价值观
│   │       ├── business-section.tsx # 核心业务
│   │       └── culture-section.tsx  # 企业文化 + 加入我们
│   ├── hooks/              # 自定义 Hooks
│   └── lib/                # 工具库
│       └── utils.ts        # 通用工具函数 (cn)
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
├── DESIGN.md               # 设计规范
└── tsconfig.json           # TypeScript 配置
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用 path.resolve(__dirname, ...)、import.meta.dirname 或 process.cwd() 动态拼接。

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. 禁止使用 head 标签，优先使用 metadata。

## UI 设计与组件规范

- 模板默认预装核心组件库 `shadcn/ui`，位于 `src/components/ui/` 目录下
- Next.js 项目必须默认采用 shadcn/ui 组件、风格和规范
- 主题色为翡翠绿 (emerald)，通过 globals.css 中的 CSS 变量管理
- 禁止硬编码颜色值，统一使用语义化变量（如 bg-primary, text-muted-foreground）

## 构建与运行命令

- 安装依赖：`pnpm install`
- 开发：`pnpm run dev`
- 构建：`pnpm run build`
- 生产运行：`pnpm run start`
- 类型检查：`pnpm ts-check`
- 代码检查：`pnpm lint`
