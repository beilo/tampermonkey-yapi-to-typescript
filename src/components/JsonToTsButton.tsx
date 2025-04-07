import React from "react";
import useYapiStore from "../store/yapiStore";
import useClipboard from "../hooks/useClipboard";
import "../styles/yapiHelper.css";

/**
 * JsonToTsButton 组件 - 提供一键转换 JSON 到 TypeScript 的功能
 */
const JsonToTsButton: React.FC = () => {
  // 使用 yapiStore
  const yapiStore = useYapiStore;
  const store = yapiStore.useStore();
  const loading = yapiStore.useLoading();
  
  // 使用剪贴板 Hook
  const { copyToClipboard } = useClipboard();

  /**
   * 处理按钮点击事件
   */
  const handleClick = async () => {
    try {
      // 如果已经有 TypeScript 结果，直接复制
      if (store.typescriptResult) {
        handleCopy();
        return;
      }
      
      // 否则先生成 TypeScript，再复制
      await store.generateTypeScript();
      handleCopy();
    } catch (error) {
      // 错误处理在 store 中已完成
      console.error("JSON转TypeScript失败:", error);
    }
  };

  /**
   * 处理复制功能
   */
  const handleCopy = () => {
    if (store.mergedTypeScript) {
      copyToClipboard(store.mergedTypeScript, {
        successMessage: "TypeScript类型已复制到剪贴板！",
        notificationTitle: "YApi to TypeScript"
      });
    }
  };

  return (
    <>
      <button
        className="yapi-helper-btn json-to-ts-btn"
        onClick={handleClick}
        data-yapi-helper="true"
        disabled={loading.fetchApiData.loading || loading.generateTypeScript.loading}
      >
        {loading.fetchApiData.loading || loading.generateTypeScript.loading
          ? "转换中..."
          : "转换为TypeScript"
        }
      </button>
    </>
  );
};

export default JsonToTsButton;
