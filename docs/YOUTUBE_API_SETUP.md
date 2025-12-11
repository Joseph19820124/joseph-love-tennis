# YouTube Data API v3 设置指南

## 📋 获取 YouTube API Key 步骤

### 1️⃣ 创建 Google Cloud 项目

1. **访问 Google Cloud Console**
   - 打开：https://console.cloud.google.com/
   - 使用你的 Google 账号登录

2. **创建新项目**
   - 点击顶部导航栏的项目选择器
   - 点击 **"NEW PROJECT"**（新建项目）
   - 项目名称：`Joseph Love Tennis`
   - 位置：不选择组织（默认即可）
   - 点击 **"CREATE"**（创建）

3. **等待项目创建**
   - 通常需要几秒钟
   - 创建完成后会自动切换到新项目

---

### 2️⃣ 启用 YouTube Data API v3

1. **进入 API 库**
   - 在左侧菜单中，点击 **"APIs & Services"** → **"Library"**
   - 或直接访问：https://console.cloud.google.com/apis/library

2. **搜索 YouTube API**
   - 在搜索框输入：`YouTube Data API v3`
   - 点击搜索结果中的 **"YouTube Data API v3"**

3. **启用 API**
   - 点击 **"ENABLE"**（启用）按钮
   - 等待几秒钟，API 将被启用

---

### 3️⃣ 创建 API Key

1. **进入凭据页面**
   - 在左侧菜单中，点击 **"APIs & Services"** → **"Credentials"**
   - 或直接访问：https://console.cloud.google.com/apis/credentials

2. **创建凭据**
   - 点击顶部的 **"+ CREATE CREDENTIALS"**
   - 选择 **"API key"**

3. **获取 API Key**
   - 弹窗会显示你的 API Key
   - **立即复制并保存**这个 Key（类似：`AIzaSyD-xxxxxxxxxxxxxxxxxxx`）
   - 点击 **"CLOSE"**

---

### 4️⃣ 限制 API Key（重要！安全性）

**强烈建议**限制 API Key 的使用范围，防止滥用和超额费用。

1. **编辑 API Key**
   - 在 Credentials 页面，找到刚创建的 API Key
   - 点击 API Key 名称进入编辑页面

2. **设置应用限制**
   - 选择 **"HTTP referrers (web sites)"**
   - 添加你的域名：
     ```
     https://joseph-love-tennis-xxx.vercel.app/*
     http://localhost:3000/*
     ```
   - 这样只有你的网站可以使用这个 Key

3. **限制 API**
   - 在 "API restrictions" 部分
   - 选择 **"Restrict key"**
   - 在下拉菜单中选择：**YouTube Data API v3**
   - 这样这个 Key 只能访问 YouTube API

4. **保存更改**
   - 点击底部的 **"SAVE"** 按钮

---

### 5️⃣ 配置环境变量

#### 本地开发环境

1. **编辑 .env 文件**

   ```bash
   # 在项目根目录创建或编辑 .env 文件
   echo 'YOUTUBE_API_KEY="你的API-Key"' >> .env
   ```

2. **示例 .env 文件**

   ```bash
   # Database
   DATABASE_URL="file:./dev.db"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"

   # YouTube API
   YOUTUBE_API_KEY="AIzaSyD-xxxxxxxxxxxxxxxxxxx"
   ```

#### Vercel 生产环境

1. **访问 Vercel Dashboard**
   - 打开你的项目：https://vercel.com/your-username/joseph-love-tennis
   - 进入 **"Settings"** → **"Environment Variables"**

2. **添加环境变量**
   - Name: `YOUTUBE_API_KEY`
   - Value: `AIzaSyD-xxxxxxxxxxxxxxxxxxx`（粘贴你的 API Key）
   - Environment: 选择 **Production**、**Preview**、**Development** 全部勾选
   - 点击 **"Save"**

3. **重新部署**
   - 添加环境变量后需要重新部署
   - 可以通过推送新代码触发，或在 Deployments 页面手动重新部署

---

## 📊 API 配额说明

### 免费配额（每天）

YouTube Data API v3 的免费配额：

- **每日配额：** 10,000 配额单位
- **足够用于小型应用**

### 配额消耗示例

不同操作消耗的配额单位：

- **搜索视频** (`search.list`)：100 单位
- **获取视频详情** (`videos.list`)：1 单位
- **获取播放列表** (`playlists.list`)：1 单位
- **获取频道信息** (`channels.list`)：1 单位

**示例计算：**

- 每天搜索 50 次视频：50 × 100 = 5,000 单位
- 获取 1,000 个视频详情：1,000 × 1 = 1,000 单位
- **总计：** 6,000 单位（在免费配额内）

### 优化建议

1. **缓存视频数据**
   - 将获取的视频信息存储到数据库
   - 定期同步（如每天一次），而不是每次请求都调用 API

2. **使用分页**
   - 一次只获取需要的视频数量
   - 使用 `maxResults` 参数控制返回数量

3. **监控配额使用**
   - 在 Google Cloud Console 查看配额使用情况
   - 路径：APIs & Services → Dashboard → YouTube Data API v3

---

## 🧪 测试 API Key

### 使用浏览器测试

在浏览器中访问以下 URL（替换 `YOUR_API_KEY`）：

```
https://www.googleapis.com/youtube/v3/search?part=snippet&q=tennis+lesson&type=video&maxResults=5&key=YOUR_API_KEY
```

**成功响应示例：**

```json
{
  "kind": "youtube#searchListResponse",
  "items": [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "xxx"
      },
      "snippet": {
        "title": "Tennis Lesson Video",
        "description": "..."
      }
    }
  ]
}
```

### 使用 Node.js 测试

创建测试文件 `test-youtube-api.js`：

```javascript
const fetch = require("node-fetch");

const API_KEY = "YOUR_API_KEY";
const query = "tennis lesson";

async function testYouTubeAPI() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=5&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items) {
      console.log("✅ API Key 工作正常！");
      console.log(`找到 ${data.items.length} 个视频`);
      data.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.snippet.title}`);
      });
    } else {
      console.log("❌ API 调用失败：", data);
    }
  } catch (error) {
    console.error("❌ 错误：", error.message);
  }
}

testYouTubeAPI();
```

运行测试：

```bash
node test-youtube-api.js
```

---

## ⚠️ 常见问题

### 问题 1: API Key 无效

**错误信息：** `Invalid API key`

**解决方法：**

- 检查 API Key 是否正确复制（没有多余空格）
- 确认 YouTube Data API v3 已启用
- 等待几分钟（新创建的 Key 可能需要时间生效）

### 问题 2: 超出配额

**错误信息：** `Quota exceeded`

**解决方法：**

- 查看 Google Cloud Console 中的配额使用情况
- 减少 API 调用频率
- 实现缓存机制
- 考虑升级到付费计划（如有需要）

### 问题 3: 请求被拒绝

**错误信息：** `API key not valid. Please pass a valid API key.`

**解决方法：**

- 检查 API Key 限制设置
- 确保你的域名在允许列表中
- 临时移除限制进行测试

---

## 📚 相关文档

- YouTube Data API 文档：https://developers.google.com/youtube/v3
- API Key 最佳实践：https://cloud.google.com/docs/authentication/api-keys
- 配额管理：https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas

---

## ✅ 检查清单

在继续开发之前，确保：

- [ ] 已创建 Google Cloud 项目
- [ ] 已启用 YouTube Data API v3
- [ ] 已创建并保存 API Key
- [ ] 已设置 API Key 限制（推荐）
- [ ] 已在本地 `.env` 文件中添加 `YOUTUBE_API_KEY`
- [ ] 已在 Vercel 中添加环境变量
- [ ] 已测试 API Key 是否工作

完成这些步骤后，就可以开始第四阶段的开发了！🚀
