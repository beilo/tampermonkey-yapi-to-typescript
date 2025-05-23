import React from "react";
import useYapiStore from "../store/useYapiStore";
import useClipboard from "../hooks/useClipboard";
import YapiModal from "./YapiModal";
import "../styles/yapiHelper.css";

/**
 * YapiButton 组件 - 提供生成 TypeScript 代码功能
 */
const YapiButton: React.FC = () => {
  // 使用 yapiStore
  const store = useYapiStore.useStore();
  const loading = useYapiStore.useLoading();

  // 使用剪贴板 Hook
  const { copyToClipboard } = useClipboard();

  /**
   * 处理按钮点击事件
   */
  const handleClick = async () => {
    try {
      // 生成 Agent 指令并显示模态框
      await store.generateInstruction();
      handleCopy(false);
    } catch (error) {
      // 错误处理在 store 中已完成
      console.error("YApi Helper: 生成指令失败:", error);
    }
  };

  /**
   * 处理复制功能
   */
  const handleCopy = (isClose?: boolean) => {
    let tempIsClose = isClose;
    if (isClose === undefined || isClose === null) {
      tempIsClose = true;
    }
    // 复制到剪贴板
    copyToClipboard(store.instruction, {
      successMessage: "指令已复制到剪贴板！请切换到 Cursor 编辑器并粘贴。",
      notificationTitle: "YApi to TypeScript",
      onSuccess: () => {
        tempIsClose && store.setModalVisibility(false);
      },
    });
  };

  return (
    <>
      <button
        className="yapi-helper-btn"
        onClick={handleClick}
        data-yapi-helper="true"
        disabled={
          loading.fetchApiData.loading || loading.generateInstruction.loading
        }
      >
        {loading.fetchApiData.loading || loading.generateInstruction.loading
          ? "加载中..."
          : "生成 ai提示词 代码"}
      </button>

      {store.isModalVisible && store.apiData && (
        <YapiModal
          onClose={() => store.setModalVisibility(false)}
          onCopy={handleCopy}
        />
      )}
    </>
  );
};

export default YapiButton;
