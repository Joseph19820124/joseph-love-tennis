# Joseph Love Tennis - 开发计划

## 项目概述

创建一个高端质感的网球学习网站，集成YouTube API自动获取教学视频，支持用户登录、收藏视频和练习记录功能。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS 4 + Framer Motion
- **认证**: NextAuth.js v5 (Google/GitHub OAuth)
- **数据库**: Vercel Postgres + Prisma
- **视频**: YouTube Data API v3
- **部署**: Vercel

---

## 开发阶段

### 第一阶段：基础设施搭建

#### 1.1 项目配置完善

- [ ] 配置 ESLint + Prettier 规则
- [ ] 添加 Framer Motion 动画库
- [ ] 配置字体：Playfair Display (标题) + Space Grotesk (正文)
- [ ] 设置深色主题 CSS 变量
- [ ] 配置 Tailwind 自定义颜色方案
  - 深色底: `#0a0a0a`
  - 网球绿: `#c8e600`
  - 金色高亮: `#d4af37`

#### 1.2 数据库配置

- [ ] 安装 Prisma CLI 和客户端
- [ ] 配置 Vercel Postgres 连接
- [ ] 创建 Prisma Schema (User, Video, Favorite, Practice)
- [ ] 运行数据库迁移
- [ ] 创建 Prisma 客户端单例

#### 1.3 认证系统

- [ ] 安装 NextAuth.js v5
- [ ] 配置 Google OAuth Provider
- [ ] 配置 GitHub OAuth Provider
- [ ] 创建 auth 配置文件
- [ ] 实现 session provider 包装
- [ ] 创建登录/登出 UI 组件

---

### 第二阶段：UI 组件库

#### 2.1 通用 UI 组件 (`components/ui/`)

- [ ] Button - 多种变体（primary, secondary, ghost）
- [ ] Card - 视频卡片基础组件
- [ ] Modal - 模态框组件
- [ ] Input - 表单输入组件
- [ ] Badge - 分类标签组件
- [ ] Avatar - 用户头像组件
- [ ] Skeleton - 加载骨架屏
- [ ] Toast - 通知提示组件

#### 2.2 布局组件

- [ ] Navbar - 导航栏（Logo、导航链接、用户菜单）
- [ ] Footer - 页脚
- [ ] Container - 内容容器
- [ ] PageHeader - 页面标题区域

---

### 第三阶段：Landing Page

#### 3.1 Hero Section

- [ ] 全屏深色渐变背景
- [ ] 动态粒子/网球元素动画
- [ ] 主标题 + 副标题
- [ ] CTA 按钮（发光边框效果）
- [ ] 响应式布局

#### 3.2 Features Section

- [ ] 三列特性展示卡片
- [ ] 图标动画效果
- [ ] 滚动触发动画

#### 3.3 Featured Videos Section

- [ ] 精选视频卡片展示
- [ ] Hover 缩放动画
- [ ] "查看更多"链接

#### 3.4 CTA Section

- [ ] 注册引导区域
- [ ] 背景装饰效果

---

### 第四阶段：YouTube API 集成

#### 4.1 API 封装

- [ ] 创建 YouTube API 客户端 (`lib/youtube.ts`)
- [ ] 实现视频搜索功能
- [ ] 实现频道视频获取
- [ ] 实现播放列表获取
- [ ] 错误处理和重试逻辑

#### 4.2 数据同步

- [ ] 创建视频同步 API 路由
- [ ] 实现视频数据缓存逻辑
- [ ] 配置推荐频道列表
  - Essential Tennis
  - Top Tennis Training
  - Tennis Tonic
  - 等...
- [ ] 视频分类逻辑（发球、正手、反手、网前、步法、战术）

#### 4.3 Server Actions

- [ ] `syncVideos` - 同步 YouTube 视频
- [ ] `getVideos` - 获取视频列表
- [ ] `getVideoById` - 获取单个视频

---

### 第五阶段：视频画廊页面 (`/videos`)

#### 5.1 页面布局

- [ ] 分类筛选栏（Tabs 或 Dropdown）
- [ ] 搜索框
- [ ] 视频网格/瀑布流布局
- [ ] 分页或无限滚动

#### 5.2 视频卡片组件

- [ ] 缩略图展示
- [ ] 视频标题
- [ ] 频道名称
- [ ] 时长标签
- [ ] 收藏按钮（心形图标）
- [ ] Hover 播放预览效果

#### 5.3 视频详情模态框

- [ ] YouTube 播放器嵌入
- [ ] 视频信息展示
- [ ] 收藏按钮
- [ ] 相关视频推荐

#### 5.4 收藏功能

- [ ] `POST /api/favorites` - 添加收藏
- [ ] `DELETE /api/favorites` - 取消收藏
- [ ] `GET /api/favorites` - 获取用户收藏列表
- [ ] 乐观更新 UI

---

### 第六阶段：练习记录页面 (`/practice`)

#### 6.1 日历视图

- [ ] 月度日历组件
- [ ] 练习日期标记
- [ ] 日期选择交互

#### 6.2 练习记录表单

- [ ] 日期选择器
- [ ] 练习时长输入
- [ ] 练习类别选择（多选）
- [ ] 笔记文本框
- [ ] 表单验证

#### 6.3 统计图表

- [ ] 每周练习时长柱状图
- [ ] 练习类别分布饼图
- [ ] 练习趋势折线图
- [ ] 使用 Recharts 或 Chart.js

#### 6.4 API 路由

- [ ] `POST /api/practices` - 创建练习记录
- [ ] `GET /api/practices` - 获取练习列表
- [ ] `PUT /api/practices/:id` - 更新记录
- [ ] `DELETE /api/practices/:id` - 删除记录

---

### 第七阶段：用户主页 (`/profile`)

#### 7.1 用户信息区

- [ ] 头像展示
- [ ] 用户名/邮箱
- [ ] 加入时间
- [ ] 编辑资料按钮

#### 7.2 收藏视频列表

- [ ] 网格展示收藏的视频
- [ ] 取消收藏功能
- [ ] 空状态提示

#### 7.3 练习统计

- [ ] 总练习时长
- [ ] 本月练习天数
- [ ] 连续练习天数
- [ ] 最常练习的技能

#### 7.4 练习历史

- [ ] 时间线展示
- [ ] 筛选功能
- [ ] 详情查看

---

### 第八阶段：优化与部署

#### 8.1 性能优化

- [ ] 图片优化（next/image）
- [ ] 组件懒加载
- [ ] API 响应缓存
- [ ] 数据库查询优化

#### 8.2 SEO 优化

- [ ] Meta 标签配置
- [ ] Open Graph 标签
- [ ] Sitemap 生成
- [ ] robots.txt 配置

#### 8.3 部署配置

- [ ] Vercel 项目创建
- [ ] 环境变量配置
  - `DATABASE_URL`
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `GITHUB_CLIENT_ID`
  - `GITHUB_CLIENT_SECRET`
  - `YOUTUBE_API_KEY`
- [ ] 域名配置（可选）
- [ ] 生产环境测试

---

## 文件结构

```
joseph-love-tennis/
├── app/
│   ├── layout.tsx              # 根布局（深色主题、字体）
│   ├── page.tsx                # Landing Page
│   ├── globals.css             # 全局样式 + CSS 变量
│   ├── videos/
│   │   └── page.tsx            # 视频画廊
│   ├── practice/
│   │   └── page.tsx            # 练习记录
│   ├── profile/
│   │   └── page.tsx            # 用户主页
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── videos/route.ts
│       ├── favorites/route.ts
│       └── practices/route.ts
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── skeleton.tsx
│   │   └── toast.tsx
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── container.tsx
│   ├── landing/
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── featured-videos.tsx
│   │   └── cta-section.tsx
│   ├── videos/
│   │   ├── video-card.tsx
│   │   ├── video-grid.tsx
│   │   ├── video-modal.tsx
│   │   ├── category-filter.tsx
│   │   └── favorite-button.tsx
│   ├── practice/
│   │   ├── calendar.tsx
│   │   ├── practice-form.tsx
│   │   ├── stats-chart.tsx
│   │   └── practice-list.tsx
│   └── auth/
│       ├── login-button.tsx
│       ├── user-menu.tsx
│       └── auth-provider.tsx
├── lib/
│   ├── prisma.ts               # Prisma 客户端单例
│   ├── auth.ts                 # NextAuth 配置
│   ├── youtube.ts              # YouTube API 封装
│   └── utils.ts                # 工具函数
├── prisma/
│   ├── schema.prisma           # 数据模型
│   └── seed.ts                 # 种子数据（可选）
├── public/
│   ├── fonts/                  # 自定义字体
│   └── images/                 # 静态图片
├── types/
│   └── index.ts                # TypeScript 类型定义
└── package.json
```

---

## 环境变量模板 (.env.example)

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# GitHub OAuth
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

# YouTube API
YOUTUBE_API_KEY="..."
```

---

## 开发优先级

### 高优先级（MVP）

1. Landing Page（视觉冲击力）
2. 视频画廊页面（核心功能）
3. 用户认证（收藏功能前提）
4. 收藏功能

### 中优先级

5. 练习记录功能
6. 用户主页
7. 统计图表

### 低优先级（可迭代）

8. 高级搜索
9. 视频推荐算法
10. 社交分享功能

---

## 下一步行动

1. **立即开始**: 配置字体和颜色主题
2. **然后**: 搭建数据库和认证系统
3. **接着**: 实现 Landing Page
4. **最后**: 逐步完成各功能页面

准备好开始了吗？请确认这个计划，我们可以开始第一阶段的开发！
