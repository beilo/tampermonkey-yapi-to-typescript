import {
  convertJsonSchemaToTypeScript,
  convertJsonSchemaToTypeScriptAsync,
  convertResponseToTypeScript,
  convertResponseToTypeScriptAsync,
  convertYapiResponseToTypeScript,
  convertYapiResponseToTypeScriptAsync
} from './jsonToTsConverter';

/**
 * 示例：演示如何使用同步和异步API将JSON转换为TypeScript接口
 */
async function exampleUsage() {
  // 示例 JSON Schema
  const mySchema = {
    "title": "User",
    "type": "object",
    "properties": {
      "id": { "type": "integer" },
      "name": { "type": "string" },
      "email": { "type": "string", "format": "email" },
      "address": {
        "type": "object",
        "properties": {
          "street": { "type": "string" },
          "city": { "type": "string" }
        },
        // 注意：这里没有 additionalProperties，会被 formatJsonSchema 添加
        "required": ["street", "city"]
      }
    },
    "required": ["id", "name"]
    // 注意：顶层没有 additionalProperties，也会被 formatJsonSchema 添加
  };

  // 示例普通JSON数据
  const myJson = {
    id: 123,
    name: "张三",
    email: "zhangsan@example.com",
    roles: ["admin", "user"],
    createdAt: "2023-01-01",
    profile: {
      age: 30,
      active: true
    }
  };

  // YApi响应示例
  const yapiResponse = JSON.stringify({
    "code": 0,
    "msg": "success",
    "data": {
      "type": "object",
      "properties": {
        "userId": { "type": "integer" },
        "username": { "type": "string" },
        "roles": { 
          "type": "array", 
          "items": { "type": "string" } 
        }
      },
      "required": ["userId", "username"]
    }
  });

  // API 路径或其他标识符
  const apiPath = '/users/profile';

  console.log("=== 同步API示例 ===");

  // 1. 使用同步API处理JSON Schema
  const syncCode1 = convertJsonSchemaToTypeScript(mySchema);
  console.log("1. 同步API - JSON Schema转换:\n", syncCode1.join('\n'));

  // 2. 使用同步API处理普通JSON
  const syncCode2 = convertResponseToTypeScript(myJson);
  console.log("\n2. 同步API - 普通JSON转换:\n", syncCode2.join('\n'));

  // 3. 使用同步API处理YApi响应
  const syncCode3 = convertYapiResponseToTypeScript(yapiResponse);
  console.log("\n3. 同步API - YApi响应转换:\n", syncCode3.join('\n'));

  console.log("\n=== 异步API示例（推荐使用）===");

  try {
    // 1. 异步API - 使用JSON Schema
    const tsCode1 = await convertJsonSchemaToTypeScriptAsync(mySchema, 'User');
    console.log("1. 异步API - JSON Schema转换:\n", tsCode1.join('\n'));

    // 2. 异步API - 使用普通JSON数据
    const tsCode2 = await convertResponseToTypeScriptAsync(myJson, 'UserInfo');
    console.log("\n2. 异步API - 普通JSON数据转换:\n", tsCode2.join('\n'));

    // 3. 异步API - 使用API路径作为标识符
    const tsCode3 = await convertJsonSchemaToTypeScriptAsync(mySchema, apiPath);
    console.log("\n3. 异步API - 使用API路径作为标识符:\n", tsCode3.join('\n'));

    // 4. 异步API - 使用自定义前缀和后缀
    const tsCode4 = await convertJsonSchemaToTypeScriptAsync(
      mySchema, 
      apiPath, 
      'I', 
      'Response'
    );
    console.log("\n4. 异步API - 使用自定义前缀和后缀:\n", tsCode4.join('\n'));

    // 5. 异步API - 处理YApi响应
    const tsCode5 = await convertYapiResponseToTypeScriptAsync(yapiResponse, apiPath);
    console.log("\n5. 异步API - 处理YApi响应:\n", tsCode5.join('\n'));

  } catch (error) {
    console.error("转换失败:", error);
  }
}

// 运行示例
exampleUsage().catch(console.error); 