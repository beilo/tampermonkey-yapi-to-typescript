import React from "react";
import "../styles/yapiHelper.css";
import {
  handleData
} from "../utils/jsonToTsConverter";
import {
  sendSystemNotification,
  showNotification,
} from "../utils/notifications";

interface YapiData {
  data: {
    title: string;
    method: string;
    query_path: {
      path: string;
    };
    req_body_other?: string;
    res_body?: string;
  };
}

const JsonToTsButton: React.FC = () => {
  const handleClick = async () => {
    try {
      // 1. 从 URL 获取接口 ID
      const apiId = window.location.pathname.split("/").pop();
      if (!apiId) throw new Error("无法获取接口ID");

      // 2. 调用 YApi 接口获取数据
      const response = await fetch(`/api/interface/get?id=${apiId}`);
      const data = await response.json();

      const { queryType, paramsType, responseType } = await handleData(
        data.data
      );

      const allTypes = [
        '// 请求参数类型',
        [queryType, paramsType].join("\n"),
        '',
        '// 响应数据类型',
        responseType
      ].join("\n\n");

      handleCopy(allTypes);
    } catch (error) {
      console.error("JSON转TypeScript失败:", error);
      alert(
        `生成TypeScript失败: ${(error as Error).message || "请查看控制台了解详情"}`
      );
    }
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);

    // 显示通知
    showNotification("TypeScript类型已复制到剪贴板！");

    // 发送系统通知
    sendSystemNotification(
      "YApi to TypeScript",
      "TypeScript类型已复制到剪贴板"
    );
  };

  return (
    <>
      <button
        className="yapi-helper-btn json-to-ts-btn"
        onClick={handleClick}
        data-yapi-helper="true"
      >
        转换为TypeScript
      </button>
    </>
  );
};

export default JsonToTsButton;
