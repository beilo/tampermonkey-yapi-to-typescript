# YApi to TypeScript via Cursor

这是一个油猴脚本，用于将 YApi 接口转换为 TypeScript 代码（通过 Cursor Agent）。

## 功能特点

- 在 YApi 接口页面添加「生成 TypeScript 代码」按钮
- 自动获取接口数据并生成 Cursor Agent 指令
- 支持自定义类型定义风格、请求库等选项
- 支持系统通知提醒
- 一键生成 TypeScript 接口定义
- 支持 axios/fetch 请求库
- 可配置类型生成风格（interface/type）

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击下方安装链接：
   [安装脚本](https://raw.githubusercontent.com/beilo/tampermonkey-yapi-to-typescript/main/yapi-to-typescript.user.js)

## 使用方法

1. 访问 YApi 接口页面
2. 点击页面右上角的「生成 TypeScript 代码」按钮
3. 在弹出的模态框中查看生成的指令并点击「复制到剪贴板」
4. 粘贴到 Cursor 编辑器中并发送

## 配置选项

脚本支持多种配置选项，可以通过界面进行设置：
- 类型定义风格：interface 或 type
- 请求库：axios 或 fetch
- 注释：是否添加详细注释
- 示例代码：是否包含使用示例
- 可选属性：是否使用 ? 标记
- 枚举处理：使用类型字面量+as const 代替 enum

## 技术栈

- [Vite](https://vitejs.dev/) - 前端构建工具
- [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) - 油猴脚本开发插件
- [React](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集

## 开发设置

### 前提条件

- Node.js (v14+)
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

这将启动开发服务器，并生成一个本地油猴脚本用于测试。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

构建后的脚本将位于 `dist` 目录中。

## 项目结构

```
.
├── src/                    # 源代码
│   ├── components/         # React 组件
│   │   ├── YapiButton.tsx  # 主按钮组件
│   │   └── YapiModal.tsx   # 模态框组件
│   ├── utils/              # 工具函数
│   │   ├── userPreferences.ts     # 用户偏好管理
│   │   ├── notifications.ts       # 通知相关函数
│   │   └── instructionGenerator.ts # 指令生成器
│   ├── styles/             # 样式文件
│   │   └── yapiHelper.css  # YApi助手样式
│   ├── App.tsx             # 应用入口组件
│   └── main.tsx            # 应用入口文件
├── public/                 # 静态资源
├── vite.config.ts          # Vite 配置
└── package.json            # 项目依赖与脚本
```

## 更新日志

### v0.2.1 (2023-07-xx)
- 优化用户界面
- 添加自动更新支持
- 修复已知问题

### v0.2 (2023-xx-xx)
- 初始发布版本

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 反馈与支持

如有问题或建议，请 [提交 Issue](https://github.com/beilo/tampermonkey-yapi-to-typescript/issues)

## 许可证

本项目采用 MIT 许可证 - 详情见 LICENSE 文件
