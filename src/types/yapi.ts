/**
 * YApi 接口数据类型定义
 */

/**
 * YApi 接口数据结构
 */
export interface YapiData {
  data: ApiData;
}

/**
 * API 数据结构
 */
export interface ApiData {
  title: string;
  method: string;
  query_path: {
    path: string;
  };
  req_body_other?: string;
  res_body?: string;
  req_query?: any[];
}

/**
 * 转换后的 TypeScript 类型结果
 */
export interface TypeScriptResult {
  queryType: string;
  paramsType: string;
  responseType: string;
}

/**
 * 生成代码的格式选项
 */
export interface CodeGenerationOptions {
  typeStyle: 'interface' | 'type';
  requestLib: 'axios' | 'fetch';
  enableComments: boolean;
  includeExamples: boolean;
  useOptionalProps: boolean;
  useEnums: boolean;
} 