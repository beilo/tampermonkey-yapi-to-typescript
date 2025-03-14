# YApi to TypeScript

一个将 YApi 接口自动转换为 TypeScript 代码的 Tampermonkey 脚本，通过 Cursor Agent 实现高质量代码生成。

## 功能特点

- 一键生成 TypeScript 接口定义
- 支持 axios/fetch 请求库
- 可配置类型生成风格（interface/type）
- 支持自定义代码生成选项

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击下方安装链接：
   [安装脚本](https://raw.githubusercontent.com/beilo/tampermonkey-yapi-to-typescript/main/yapi-to-typescript.user.js)

## 使用方法

1. 访问 YApi 接口详情页面
2. 点击页面右上角的"生成 TypeScript 代码"按钮
3. 复制生成的指令
4. 在 Cursor 编辑器中粘贴并执行

## 配置选项

脚本支持多种配置选项，可以通过界面进行设置：
- 类型定义风格：interface 或 type
- 请求库：axios 或 fetch
- 注释：是否添加详细注释
- 示例代码：是否包含使用示例
- 可选属性：是否使用 ? 标记
- 枚举处理：使用类型字面量+as const 代替 enum

## 更新日志

### v0.2.1 (2023-07-xx)
- 优化用户界面
- 添加自动更新支持
- 修复已知问题

### v0.2 (2023-xx-xx)
- 初始发布版本

## 反馈与支持

如有问题或建议，请 [提交 Issue](https://github.com/你的用户名/yapi-to-typescript/issues)
