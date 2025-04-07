# JSON Schema 到 TypeScript 转换工具

本工具使用 `json-schema-to-typescript` 库将 JSON Schema 和普通 JSON 数据转换为 TypeScript 类型定义。提供同步和异步API，推荐使用异步API获取更高质量的类型定义。

## 主要功能

### 同步API（向后兼容）

- `convertJsonSchemaToTypeScript(schema)`: 将 JSON Schema 转换为 TypeScript 接口
- `convertResponseToTypeScript(jsonData)`: 将普通 JSON 数据转换为 TypeScript 接口
- `convertYapiResponseToTypeScript(resBody)`: 将 YApi 响应体转换为 TypeScript 接口

### 异步API（推荐）

- `convertJsonSchemaToTypeScriptAsync(schema, identifier, prefix, suffix, options)`: 将 JSON Schema 转换为 TypeScript 接口
- `convertResponseToTypeScriptAsync(jsonData, identifier, prefix, suffix)`: 将普通 JSON 数据转换为 TypeScript 接口
- `convertYapiResponseToTypeScriptAsync(resBody, identifier)`: 将 YApi 响应体转换为 TypeScript 接口

## 使用示例

### 同步API (向后兼容)

```typescript
import { convertYapiResponseToTypeScript } from './utils/jsonToTsConverter';

// YApi响应示例
const yapiResponse = JSON.stringify({
  code: 0,
  msg: "success",
  data: {
    type: "object",
    properties: {
      id: { type: "integer" },
      name: { type: "string" }
    },
    required: ["id"]
  }
});

// 同步调用
const tsCode = convertYapiResponseToTypeScript(yapiResponse);
console.log(tsCode.join('\n'));
```

### 异步API（推荐）

```typescript
import { convertJsonSchemaToTypeScriptAsync } from './utils/jsonToTsConverter';

// 示例JSON Schema
const mySchema = {
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" }
  },
  "required": ["id"]
};

// 异步调用
async function generateTypes() {
  const tsCode = await convertJsonSchemaToTypeScriptAsync(mySchema, 'user');
  console.log(tsCode.join('\n'));
}

generateTypes();
```

### 处理普通 JSON 数据

```typescript
import { convertResponseToTypeScriptAsync } from './utils/jsonToTsConverter';

// 普通JSON数据
const myJson = {
  id: 123,
  name: "张三",
  roles: ["admin", "user"]
};

async function generateTypes() {
  const tsCode = await convertResponseToTypeScriptAsync(myJson, 'UserInfo');
  console.log(tsCode.join('\n'));
}
```

### 自定义类型名称

```typescript
// 使用API路径作为标识符生成类型名
const apiPath = '/api/users/profile';
const tsCode = await convertJsonSchemaToTypeScriptAsync(
  mySchema, 
  apiPath, 
  'I',  // 使用'I'前缀
  'Res' // 使用'Res'后缀
);
// 生成的类型名将是 IUsersProfileRes
```

### 处理YApi响应

```typescript
import { convertYapiResponseToTypeScriptAsync } from './utils/jsonToTsConverter';

// YApi响应示例
const yapiResponse = JSON.stringify({
  code: 0,
  msg: "success",
  data: {
    // 响应数据...
  }
});

async function generateApiTypes() {
  const tsCode = await convertYapiResponseToTypeScriptAsync(
    yapiResponse, 
    '/api/users/profile'
  );
  console.log(tsCode.join('\n'));
}
```

## 高级特性

1. **JSON 到 Schema 自动转换**: 工具可以自动将普通 JSON 数据转换为 JSON Schema 格式
2. **Schema预处理**: 所有对象类型节点会自动添加`additionalProperties: false`以生成更严格的类型
3. **智能类型名生成**: 从API路径自动生成合适的类型名称
4. **自定义配置**: 支持传入自定义配置选项到`json-schema-to-typescript`库

## 技术说明

- 异步API基于`json-schema-to-typescript`库实现，提供更准确的类型定义
- 同步API提供了基本类型推断，适用于简单场景
- 自动处理嵌套对象、数组和复杂数据结构
- 支持本地bundle.js文件或全局jstt变量 