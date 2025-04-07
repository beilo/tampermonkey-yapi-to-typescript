# YApi to TypeScript via Cursor

这是一个油猴脚本，用于将 YApi 接口转换为 TypeScript 代码和类型定义。

## 功能特点

- 在 YApi 接口页面添加「生成 TypeScript 代码」按钮
- 自动获取接口数据并提供多种转换选项
- 一键生成 Cursor Agent 指令，支持自定义配置
- 直接生成 TypeScript 类型定义，无需复制到 Cursor
- 响应式配置界面，实时预览配置更改效果
- 支持自定义类型定义风格、请求库等多种选项
- 集成系统通知功能

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击下方安装链接：
   [安装脚本](https://raw.githubusercontent.com/beilo/tampermonkey-yapi-to-typescript/main/dist/yapi-to-typescript.user.js)

## 使用方法

1. 访问 YApi 接口页面
2. 点击页面右上角的「生成 TypeScript 代码」按钮
3. 在弹出的模态框中选择所需功能：
   - **Cursor 指令**：查看生成的 Cursor Agent 指令并复制
   - **TypeScript**：直接查看生成的 TypeScript 类型定义并复制
   - **偏好设置**：自定义配置选项

### Cursor 指令使用方法
1. 在模态框中选择「Cursor 指令」标签
2. 点击「复制Cursor指令」按钮
3. 切换到 Cursor 编辑器并粘贴指令
4. 等待 Cursor 生成完整的 TypeScript 代码

### TypeScript 类型使用方法
1. 在模态框中选择「TypeScript」标签
2. 查看自动生成的 TypeScript 类型定义
3. 点击「复制TypeScript」按钮
4. 将类型定义粘贴到项目中使用

## 配置选项

脚本提供多种配置选项，所有配置实时生效并自动保存：

### 类型定义风格
- **Interface**：使用 interface 定义类型（默认）
- **Type**：使用 type 定义类型

### 请求库
- **Axios**：生成基于 axios 的请求代码（默认）
- **Fetch API**：生成基于 fetch 的请求代码

### 其他选项
- **添加详细注释**：为生成的类型添加详细的 JSDoc 注释（默认开启）
- **包含使用示例**：在生成的代码中包含调用示例（默认开启）
- **使用可选属性标记 (?)**：对可选属性使用 ? 标记（默认开启）
- **使用类型字面量+as const代替enum**：对枚举类型使用更灵活的类型字面量（默认开启）

所有配置均可通过点击「重置为默认值」按钮恢复默认设置。

## 技术栈

- [Vite](https://vitejs.dev/) - 前端构建工具
- [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) - 油猴脚本开发
- [React](https://reactjs.org/) - 用户界面库
- [@helux/store-pinia](https://npmjs.com/package/@helux/store-pinia) - 响应式状态管理
- [json-to-ts](https://npmjs.com/package/json-to-ts) - JSON到TypeScript转换


```bash
npm run build
# 或
yarn build
```

构建后的脚本将位于 `dist` 目录中。

## 更新日志

### v1.1.0
- 添加直接生成 TypeScript 类型功能
- 实现响应式配置界面
- 优化用户体验和界面交互
- 改进类型转换算法

### v1.0.0
- 初始版本发布

## 反馈与支持

如有问题或建议，请 [提交 Issue](https://github.com/beilo/tampermonkey-yapi-to-typescript/issues)

## 许可证

本项目采用 MIT 许可证 - 详情见 LICENSE 文件
