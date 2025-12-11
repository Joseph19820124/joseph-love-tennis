# Vercel 部署指南

## 📋 部署前准备

### 1. 准备 Vercel 账号

- 访问 https://vercel.com
- 使用 GitHub 账号登录
- 授权 Vercel 访问你的 GitHub 仓库

### 2. 准备环境变量

部署时需要配置以下环境变量：

```bash
# 数据库（目前使用 SQLite，生产环境建议使用 Postgres）
DATABASE_URL="file:./dev.db"

# NextAuth（稍后配置）
NEXTAUTH_SECRET="生成一个随机字符串"
NEXTAUTH_URL="https://你的域名.vercel.app"

# Google OAuth（稍后配置）
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# GitHub OAuth（稍后配置）
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# YouTube API（稍后配置）
YOUTUBE_API_KEY=""
```

## 🚀 Vercel 部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

1. **导入项目**
   - 访问 https://vercel.com/new
   - 选择 "Import Git Repository"
   - 选择 `joseph-love-tennis` 仓库
   - 点击 "Import"

2. **配置项目**
   - Project Name: `joseph-love-tennis`
   - Framework Preset: Next.js (自动检测)
   - Root Directory: `./` (默认)
   - Build Command: `prisma generate && next build` (已在 vercel.json 配置)
   - Output Directory: `.next` (默认)

3. **配置环境变量**
   - 点击 "Environment Variables"
   - 暂时只添加以下必需变量：
     ```
     DATABASE_URL=file:./dev.db
     NEXTAUTH_SECRET=your-secret-key-here
     ```
   - 其他变量稍后配置

4. **开始部署**
   - 点击 "Deploy"
   - 等待构建和部署完成（约 2-3 分钟）
   - 部署成功后获得预览 URL

### 方法二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署（在项目根目录）
vercel

# 生产环境部署
vercel --prod
```

## ⚠️ 重要注意事项

### 数据库迁移到生产环境

**当前状态：** 使用 SQLite 本地开发数据库

**生产环境建议：** 使用 Vercel Postgres

1. **创建 Vercel Postgres 数据库**
   - 在 Vercel Dashboard 中选择项目
   - 进入 "Storage" 标签
   - 点击 "Create Database"
   - 选择 "Postgres"
   - 创建后会自动获得 `DATABASE_URL`

2. **更新 Prisma 配置**

   ```bash
   # 更新 prisma/schema.prisma 中的 datasource
   datasource db {
     provider = "postgresql"  // 从 sqlite 改为 postgresql
   }
   ```

3. **运行数据库迁移**

   ```bash
   # 本地测试
   DATABASE_URL="你的Postgres连接字符串" npx prisma migrate deploy
   ```

4. **在 Vercel 设置环境变量**
   - 将 Vercel Postgres 的 `DATABASE_URL` 添加到环境变量
   - 重新部署

### 生成 NextAuth Secret

```bash
# 方式一：使用 OpenSSL
openssl rand -base64 32

# 方式二：使用 Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 🔄 自动部署

配置完成后，每次 push 到 `main` 分支都会自动触发部署：

```bash
git add .
git commit -m "your changes"
git push
```

Vercel 会自动：

1. 检测到新的 commit
2. 拉取最新代码
3. 运行构建
4. 部署到生产环境

## 📊 部署后检查

1. **访问网站**
   - 打开 Vercel 提供的 URL
   - 检查首页是否正常显示

2. **检查日志**
   - 在 Vercel Dashboard 查看部署日志
   - 检查是否有错误或警告

3. **测试功能**
   - 导航栏是否工作
   - 响应式设计是否正常
   - 字体和样式是否正确加载

## 🎯 下一步

部署成功后，您需要：

1. ✅ 配置自定义域名（可选）
2. ✅ 设置 OAuth 认证（Google + GitHub）
3. ✅ 配置 YouTube API Key
4. ✅ 迁移到 Vercel Postgres 数据库
5. ✅ 测试所有功能

## 🐛 常见问题

### 构建失败

**问题：** Prisma 相关错误
**解决：** 确保 `vercel.json` 中配置了 `prisma generate`

**问题：** 模块找不到
**解决：** 检查 `package.json` 依赖是否完整

### 数据库连接失败

**问题：** SQLite 在 Vercel 无法工作
**解决：** 迁移到 Vercel Postgres（参见上面的步骤）

### 字体加载失败

**问题：** Google Fonts 加载缓慢
**解决：** Next.js 会自动优化，无需额外配置

---

**当前部署状态：** ✅ 代码已推送到 GitHub，准备部署

**GitHub 仓库：** https://github.com/Joseph19820124/joseph-love-tennis
