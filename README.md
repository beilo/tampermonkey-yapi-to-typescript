# YApi to TypeScript 转换工具

这是一个用于将 YApi 接口定义转换为 TypeScript 代码的 Tampermonkey 用户脚本。

## 功能特点

- 在 YApi 接口详情页面添加「生成 TypeScript 代码」按钮
- 自动获取当前接口的定义信息
- 利用 OpenAI API 将接口定义转换为 TypeScript 代码
- 生成的代码包含：
  - 请求参数的 TypeScript 接口定义
  - 返回数据的 TypeScript 接口定义
  - 基于 axios 的请求函数
  - 使用示例代码
- 纯文本格式展示生成结果
- 提供复制代码功能

## 安装方法

1. 确保已安装 Tampermonkey 浏览器扩展
   - [Chrome 版本](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox 版本](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge 版本](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. 点击 [安装脚本](yapi-to-typescript.user.js) (或者复制脚本内容，在 Tampermonkey 中手动创建)

## 使用方法

1. 打开任意 YApi 接口详情页面（例如：interface.codemao.cn）
2. 页面右上角会出现「生成 TypeScript 代码」按钮
3. 点击按钮后，脚本会自动获取当前接口信息并调用 OpenAI API 生成代码
4. 生成的代码会以纯文本模态框的形式显示，可以直接复制使用

## API 配置

脚本默认使用以下 OpenAI API 配置：
```javascript
{
    apiKey: 'sk-XE8ttQvteFk9Ijqz282fD78cF77a46AdB94c8355011612A9',
    baseURL: 'https://www.gptapi.us/v1',
    model: 'gpt-3.5-turbo'
}
```

如需修改配置，请直接编辑脚本中的相应部分。

## 注意事项

- 脚本需要接口页面能够正确加载，并且能够获取到接口 ID
- 脚本使用 OpenAI API，需要确保 API 密钥有效且能够正常访问
- 如遇问题，可以查看浏览器控制台输出的日志信息进行排查

## 许可证

MIT

## 贡献指南

欢迎提交 Issue 或 Pull Request 来改进这个脚本。 