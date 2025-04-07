import { TypeScriptResult } from "../types/yapi";

// 使用类型断言获取全局window上的jstt对象
const jstt = (window as any).jstt;

/**
 * JSON转TypeScript的编译选项
 */
const compileOptions = {
  bannerComment: "",
  declareExternallyReferenced: true,
  enablevarEnums: true,
  unreachableDefinitions: false,
  strictIndexSignatures: false,
  format: false,
  unknownAny: false,
};

/**
 * 格式化JSON，设置additionalProperties为false
 * @param objectJson JSON字符串
 * @returns 格式化后的对象
 */
function formatJson(objectJson: string) {
  const cloneObject = JSON.parse(objectJson);
  
  // 顶层属性设置
  if (cloneObject.properties) {
    cloneObject.additionalProperties = false;
  }
  
  // 递归设置子属性
  function processNestedProperties(obj: any) {
    for (const key in obj) {
      if (obj[key]?.properties) {
        obj[key].additionalProperties = false;
      }
      
      if (typeof obj[key] === "object" && obj[key] !== null) {
        processNestedProperties(obj[key]);
      }
    }
  }
  
  processNestedProperties(cloneObject);
  return cloneObject;
}

/**
 * 从API路径生成类型名称（大驼峰格式）
 * @param path API路径
 * @returns 格式化后的类型名称
 */
function getTypeNameFromPath(path: string): string {
  if (!path) {
    return "";
  }

  const words = path.split("/").filter(Boolean);
  if (words.length === 0) {
    return "";
  }

  // 以I开头，后面是大驼峰格式
  let typeName = "I";
  for (const word of words) {
    typeName += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return typeName;
}

/**
 * 将JSON转换为TypeScript类型定义
 * @param json JSON字符串
 * @param name 类型名称
 * @returns 生成的TypeScript类型定义
 */
export async function convertJsonToTypeScript(json: string, name: string): Promise<string> {
  try {
    const formattedJson = formatJson(json);
    const result = await jstt.compile(formattedJson, name, compileOptions);
    return result;
  } catch (error) {
    console.error("📢 convertJsonToTypeScript error:", error);
    return "";
  }
}

/**
 * 处理YApi数据，生成TypeScript类型定义
 * @param data YApi接口数据
 * @returns 生成的TypeScript类型定义结果
 */
export async function handleData(data: any): Promise<TypeScriptResult> {
  try {
    const name = getTypeNameFromPath(data.query_path?.path || data.path);
    
    // 处理请求参数
    const query = data.req_query || [];
    const reqBodyOther = data.req_body_other || "{}";
    const params = JSON.parse(reqBodyOther);

    // 处理响应数据
    const resBody = JSON.parse(data.res_body || "{}");
    const response = (resBody.properties && resBody.properties.data) || resBody;

    // 生成TypeScript类型
    const [queryType, paramsType, responseType] = await Promise.all([
      convertJsonToTypeScript(JSON.stringify(query), `${name}Query`),
      convertJsonToTypeScript(JSON.stringify(params), `${name}Params`),
      convertJsonToTypeScript(JSON.stringify(response), `${name}Response`)
    ]);

    return {
      queryType,
      paramsType,
      responseType,
    };
  } catch (error) {
    console.error("📢 handleData error:", error);
    throw new Error(`生成TypeScript类型失败: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// 保留向后兼容性
export const convertYapiRequestToTypeScript = convertJsonToTypeScript;
export const convertYapiResponseToTypeScript = convertJsonToTypeScript;
