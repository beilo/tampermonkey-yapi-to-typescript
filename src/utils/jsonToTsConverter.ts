import JsonToTS from 'json-to-ts';

/**
 * 将JSON响应数据转换为TypeScript接口定义
 * 
 * @param jsonData 要转换的JSON数据
 * @returns 生成的TypeScript接口定义数组
 */
export function convertResponseToTypeScript(jsonData: any): string[] {
  try {
    // 检查是否为有效JSON
    if (!jsonData) {
      return ['// 没有提供有效的JSON数据'];
    }

    // 如果是字符串，尝试解析
    let dataToConvert = jsonData;
    if (typeof jsonData === 'string') {
      try {
        dataToConvert = JSON.parse(jsonData);
      } catch (error) {
        return [`// JSON解析错误: ${error instanceof Error ? error.message : String(error)}`];
      }
    }

    // 使用json-to-ts库转换为TypeScript接口
    return JsonToTS(dataToConvert);
  } catch (error) {
    console.error('转换TypeScript类型时出错:', error);
    return [`// 转换错误: ${error instanceof Error ? error.message : String(error)}`];
  }
}

/**
 * 处理YApi响应体
 * 尝试解析并转换YApi返回的响应体数据为TypeScript接口
 * 
 * @param resBody YApi的响应体字符串
 * @returns 生成的TypeScript接口数组
 */
export function convertYapiResponseToTypeScript(resBody?: string): string[] {
  if (!resBody) {
    return ['// 没有响应数据'];
  }

  try {
    // 解析YApi响应体
    const parsedBody = JSON.parse(resBody);
    
    // 如果有data字段，我们主要关注data的类型
    if (parsedBody && typeof parsedBody === 'object' && 'data' in parsedBody) {
      // 获取data字段的值
      const { data } = parsedBody;
      
      // 如果data为空，返回基本接口
      if (data === null || data === undefined) {
        return [
          'interface ApiResponse {',
          '  code: number;',
          '  msg: string;',
          '  data: null;',
          '}'
        ];
      }
      
      // 转换data对象为TypeScript接口
      const dataInterfaces = JsonToTS(data);
      
      // 添加外层响应接口
      const rootInterface = [
        'interface ApiResponse {',
        '  code: number;',
        '  msg: string;',
        '  data: RootObject;',
        '}'
      ];
      
      return [...rootInterface, ...dataInterfaces];
    }
    
    // 如果没有特定结构，直接转换整个响应
    return JsonToTS(parsedBody);
  } catch (error) {
    console.error('解析YApi响应体时出错:', error);
    return [`// 响应体解析错误: ${error instanceof Error ? error.message : String(error)}`];
  }
} 