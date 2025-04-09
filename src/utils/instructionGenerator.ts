import { UserPreferences, Preferences } from "./userPreferences";
import useUserPreferencesStore from "../store/userPreferencesStore";

export interface ApiData {
  title: string;
  method: string;
  query_path: {
    path: string;
  };
  req_body_other?: string;
  req_query?: string;
  res_body?: string;
}

/**
 * 根据YApi接口数据生成Cursor Agent指令
 * @param data YApi接口数据
 * @returns 生成的Cursor Agent指令
 */
export function generateAgentInstruction(data: { data: ApiData }): string {
  // 尝试从 store 获取用户偏好，如果无法获取则使用 UserPreferences
  let prefs: Preferences;

  try {
    // 获取 store 实例
    const prefsStore = useUserPreferencesStore.useStore();
    // 从 store 获取偏好
    prefs = prefsStore.getAllPreferences();
  } catch (e) {
    // 如果无法获取 store（例如在初始化前调用），则回退到直接获取
    prefs = UserPreferences.getAll();
  }

  // 提取API数据
  const apiData = data.data;
  const method = apiData.method.toUpperCase();
  const path = apiData.query_path.path;
  const title = apiData.title;
  const domain = window.location.href; // 获取当前域名

  // 解析请求和响应数据
  let resQuery = "无请求体";
  if (apiData.req_query) {
    try {
      resQuery = JSON.parse(apiData.req_query);
      resQuery = JSON.stringify(resQuery);
    } catch (error) {
      resQuery = apiData.req_query;
    }
  }
  let reqBody = "无请求体";
  if (apiData.req_body_other) {
    try {
      const reqJson = JSON.parse(apiData.req_body_other);
      reqBody = JSON.stringify(reqJson);
    } catch (e) {
      reqBody = apiData.req_body_other;
    }
  }

  let resBody = "无响应数据";
  if (apiData.res_body) {
    try {
      const resJson = JSON.parse(apiData.res_body);
      resBody = JSON.stringify(resJson);
    } catch (e) {
      resBody = apiData.res_body;
    }
  }

  // 生成 Cursor Agent 指令
  return generateInstructionText(
    title,
    path,
    method,
    domain,
    resQuery,
    reqBody,
    resBody,
    prefs
  );
}

/**
 * 生成指令文本
 */
function generateInstructionText(
  title: string,
  path: string,
  method: string,
  domain: string,
  resQuery: string,
  reqBody: string,
  resBody: string,
  prefs: Preferences
): string {
  return `我需要你帮我将以下 YApi 接口转换为 TypeScript 代码：

## 接口基本信息
- 接口名称: ${title}
- 请求路径: ${path}
- 请求方法: ${method}
- 接口域名: ${domain}

## 请求数据query
\`\`\`json
${resQuery}
\`\`\`

## 请求数据body
\`\`\`json
${reqBody}
\`\`\`

## 响应数据
\`\`\`json
${resBody}
\`\`\`

## 代码生成严格要求
### A. 核心要求 (根据用户偏好)
1.  **类型风格**: 使用 \`${prefs.typeStyle}\` 定义所有类型。
2.  **注释**: ${prefs.enableComments ? "添加详细的、**中文的** JSDoc 注释（为所有生成的类型、函数、接口属性、常量添加，清晰地解释其用途、参数和返回值）" : "尽量减少注释"}。
3.  **请求库**: 使用 \`${prefs.requestLib}\` 作为请求库来生成异步请求函数。函数应返回一个解析为响应数据接口类型的 \`Promise\`。
4.  **可选属性**: ${prefs.useOptionalProps ? "对可选属性使用 \`?\` 标记" : "不使用 \`?\` 标记可选属性"}。
5.  **使用示例**: ${prefs.includeExamples ? "必须在代码末尾提供一个可运行的、使用 \`try-catch\` 包裹的、无注释的函数调用示例，用于演示如何使用生成的请求函数。" : "不需要提供使用示例。"}
${
  prefs.useEnums
    ? `6.  **常量与枚举**: 对于有固定值集合的字段（如状态码、类型标识等），必须使用"字面量类型 + as const"方案，并使用 \`UPPER_SNAKE_CASE\` 命名常量。严格禁止使用 \`enum\`。示例如下：
    \`\`\`typescript
    // 正确示例: 字面量类型 + as const
    const ORDER_STATUS = {
      PENDING: 'pending',
      PROCESSING: 'processing',
      COMPLETED: 'completed',
      CANCELLED: 'cancelled'
    } as const;
    type OrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS];

    // 错误示例: enum
    // enum OrderStatus { PENDING = 'pending', ... } // 禁止使用
    \`\`\``
    : ""
}
6. 仅使用 export 导出顶层接口/类型（请求参数和响应数据的主要类型）
7. 所有嵌套/内部类型必须定义为内部类型，不要导出它们。

### B. 通用规范 (始终遵循)
*   **头部注释**: 必须在生成的代码最开始处添加包含接口基本信息（接口名称、请求路径、请求方法、接口域名）的 JSDoc 注释块。格式如下：
    \`\`\`typescript
    /**
     * 接口名称: ${title}
     * 请求路径: ${path}
     * 请求方法: ${method}
     * 接口域名: ${domain}
     */
    \`\`\`
*   **导出规则**: 所有嵌套/内部类型必须定义为内部类型，不要导出它们·
*   **命名规范**: 接口名称必须使用 \`PascalCase\`，函数名称必须使用 \`camelCase\`。如果使用 \`as const\` 定义常量，常量名称使用 \`UPPER_SNAKE_CASE\`。
*   **类型安全**: 严格禁止使用 \`any\` 类型。
*   **输出格式**: 最终生成的输出必须是纯粹的、格式化良好的 TypeScript 代码，不应包含任何 Markdown 标记（如 \`\`\`typescript ... \`\`\`）、介绍性文字或解释性说明。
*   **最佳实践**: 确保生成的代码遵循 TypeScript 的最佳实践，注重类型安全、代码清晰度和可维护性。必须严格遵守A. 核心要求`;
}
