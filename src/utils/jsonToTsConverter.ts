// @ts-ignore
// 使用动态导入和window全局对象结合的方式处理UMD模块
import "./bundle.js";

// 使用类型断言获取全局window上的jstt对象
const jstt = (window as any).jstt;

var options = {
  bannerComment: "",
  declareExternallyReferenced: true,
  enablevarEnums: true,
  unreachableDefinitions: false,
  strictIndexSignatures: false,
  format: false,
  unknownAny: false,
};

// 格式化 JSON
function formatJson(objectJson: string) {
  var cloneObject = JSON.parse(objectJson);
  if (cloneObject.properties) {
    cloneObject.additionalProperties = false;
  }
  function loop(looper: any) {
    for (var key in looper) {
      if (looper[key].properties) {
        looper[key].additionalProperties = false;
      }
      if (typeof looper[key] === "object") {
        loop(looper[key]);
      }
    }
  }
  loop(cloneObject);
  return cloneObject;
}

// 提取path转成大驼峰
function getFormattedString(str: string) {
  if (!str) {
    return "";
  }

  var words = str.split("/").filter(Boolean);

  if (words.length === 0 || words[0] === "") {
    return "";
  }

  var output = "I";
  for (var i = 0; i < words.length; i++) {
    output += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return output;
}

export async function convertYapiRequestToTypeScript(
  json: string,
  name: string
) {
  try {
    const formattedJson = formatJson(json);
    const result = await jstt.compile(formattedJson, name, options);
    return result;
  } catch (error) {
    console.log("📢 convertYapiRequestToTypeScript", error);
    return "";
  }
}

export async function convertYapiResponseToTypeScript(
  json: string,
  name: string
) {
  try {
    const formattedJson = formatJson(json);
    const result = await jstt.compile(formattedJson, name, options);
    return result;
  } catch (error) {
    console.log("📢 convertYapiResponseToTypeScript", error);
    return "";
  }
}

export async function handleData(data: any) {
  const name = getFormattedString(data.path);
  const query = data.req_query;
  const params = JSON.parse(data.req_body_other);

  const resBody = JSON.parse(data.res_body);
  const response = (resBody.properties && resBody.properties.data) || resBody;

  const queryType = await convertYapiRequestToTypeScript(
    JSON.stringify(query),
    `${name}Query`
  );
  const paramsType = await convertYapiRequestToTypeScript(
    JSON.stringify(params),
    `${name}Params`
  );
  const responseType = await convertYapiResponseToTypeScript(
    JSON.stringify(response),
    `${name}Response`
  );

  return {
    queryType,
    paramsType,
    responseType,
  };
}
