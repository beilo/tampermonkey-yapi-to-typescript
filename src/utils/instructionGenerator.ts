import { UserPreferences, Preferences } from './userPreferences';
import useUserPreferencesStore from '../store/userPreferencesStore';

export interface ApiData {
  title: string;
  method: string;
  query_path: {
    path: string;
  };
  req_body_other?: string;
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
  let reqBody = "无请求体";
  if (apiData.req_body_other) {
    try {
      const reqJson = JSON.parse(apiData.req_body_other);
      reqBody = JSON.stringify(reqJson, null, 2);
    } catch (e) {
      reqBody = apiData.req_body_other;
    }
  }

  let resBody = "无响应数据";
  if (apiData.res_body) {
    try {
      const resJson = JSON.parse(apiData.res_body);
      resBody = JSON.stringify(resJson, null, 2);
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

## 请求数据
\`\`\`json
${reqBody}
\`\`\`

## 响应数据
\`\`\`json
${resBody}
\`\`\`

## 代码生成严格要求
1. 使用 ${prefs.typeStyle} 定义所有类型
2. 仅使用 export 导出顶层接口/类型（请求参数和响应数据的主要类型）
3. 所有嵌套/内部类型必须定义为内部类型，不要导出它们
4. 使用 ${prefs.requestLib} 作为请求库
5. ${prefs.enableComments ? "添加详细的注释" : "尽量减少注释"}
6. ${prefs.useOptionalProps ? "对可选属性使用 ? 标记" : "不使用 ? 标记可选属性"}
7. ${
    prefs.includeExamples
      ? "提供使用示例代码，并使用 try-catch 包裹示例代码以处理可能的异常，不要注释示例代码"
      : "不需要提供使用示例"
  }
${
  prefs.useEnums
    ? `8. 对于有固定值集合的字段（如状态码、类型标识等），不要使用enum，应该使用类型字面量+as const方案，例如：
\`\`\`typescript
// 类型字面量+as const方案
const METHOD = {
  ADD: 'add',
  /**
   * @deprecated 不再支持删除
   */  
  DELETE: 'delete', // 可以添加丰富的JSDoc注释
  UPDATE: 'update',
  QUERY: 'query'
} as const
type METHOD_TYPE = typeof METHOD[keyof typeof METHOD]
\`\`\`
这种方案支持添加JSDoc注释，代码可读性更好，并且值可以在运行时使用。`
    : ""
}

请确保代码符合 TypeScript 最佳实践，保持类型安全和代码清晰度。`;
} 