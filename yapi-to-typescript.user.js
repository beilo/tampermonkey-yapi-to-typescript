// ==UserScript==
// @name         YApi to TypeScript via Cursor
// @namespace    https://github.com/beilo/tampermonkey-yapi-to-typescript
// @version      0.2.1
// @description  将 YApi 接口转换为 TypeScript 代码（通过 Cursor Agent）
// @author       YApi Helper
// @match        *://interface.codemao.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @updateURL    https://raw.githubusercontent.com/beilo/tampermonkey-yapi-to-typescript/main/yapi-to-typescript.user.js
// @downloadURL  https://raw.githubusercontent.com/beilo/tampermonkey-yapi-to-typescript/main/yapi-to-typescript.user.js
// @supportURL   https://github.com/beilo/tampermonkey-yapi-to-typescript/issues
// @license      MIT
// ==/UserScript==


// @require      file:///Users/am/Documents/dev/tampermonkey/yapi-to-typescript/yapi-to-typescript.user.js
(function () {
  "use strict";

  // 添加样式 - 使用原生DOM API代替GM_addStyle
  function addStyles() {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        .yapi-helper-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            padding: 10px 20px;
            background-color: #4285f4;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .yapi-helper-btn:hover {
            background-color: #3367d6;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
        }
        
        .yapi-helper-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            overflow: auto;
            z-index: 10000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .yapi-helper-notification {
            position: fixed;
            top: 70px;
            right: 20px;
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            z-index: 10001;
            opacity: 0;
            transition: opacity 0.3s ease;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        }
        
        .yapi-helper-notification.show {
            opacity: 1;
        }
        
        .yapi-helper-button-container {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }
        
        .yapi-helper-button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .yapi-helper-button.primary {
            background-color: #4285f4;
            color: white;
        }
        
        .yapi-helper-button.secondary {
            background-color: #f0f0f0;
        }
        
        .yapi-helper-button:hover {
            filter: brightness(0.95);
        }
        
        .yapi-helper-tabs {
            display: flex;
            margin-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .yapi-helper-tab {
            padding: 8px 16px;
            cursor: pointer;
            border-bottom: 2px solid transparent;
        }
        
        .yapi-helper-tab.active {
            border-bottom: 2px solid #4285f4;
            color: #4285f4;
        }
        
        .yapi-helper-section {
            margin-bottom: 15px;
        }
        
        .yapi-helper-section-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .yapi-helper-checkbox-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .yapi-helper-checkbox-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .yapi-helper-instruction-content {
            max-height: 400px;
            overflow-y: auto;
        }`;

    document.head.appendChild(styleElement);
  }

  // 初始化样式
  addStyles();

  // 等待文档加载完成
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButton);
  } else {
    initButton();
  }

  // 添加 window.onload 事件处理，作为备用方案
  window.addEventListener("load", () => {
    const buttonExists = document.querySelector(
      'button[data-yapi-helper="true"]'
    );
    if (!buttonExists) {
      initButton();
    }
  });

  // 用户偏好存储相关函数
  const UserPreferences = {
    // 默认偏好
    defaults: {
      typeStyle: "interface", // 类型定义风格: interface 或 type
      requestLib: "axios", // 请求库: axios, fetch 或 custom
      enableComments: true, // 是否添加注释
      includeExamples: true, // 是否包含示例代码
      useOptionalProps: true, // 是否对可选属性使用 ? 标记
      useEnums: true, // 是否使用类型字面量+as const代替enum
    },

    // 获取用户偏好
    get: function (key) {
      // 使用 localStorage 作为 GM_getValue 的回退选项
      if (typeof GM_getValue === "function") {
        return GM_getValue(key, this.defaults[key]);
      } else {
        const value = localStorage.getItem(`yapi_helper_${key}`);
        return value !== null ? JSON.parse(value) : this.defaults[key];
      }
    },

    // 保存用户偏好
    save: function (key, value) {
      // 使用 localStorage 作为 GM_setValue 的回退选项
      if (typeof GM_setValue === "function") {
        GM_setValue(key, value);
      } else {
        localStorage.setItem(`yapi_helper_${key}`, JSON.stringify(value));
      }
      showNotification(`已保存偏好: ${key}`);
    },

    // 获取所有偏好作为对象
    getAll: function () {
      const prefs = {};
      for (const key in this.defaults) {
        prefs[key] = this.get(key);
      }
      return prefs;
    },

    // 重置所有偏好为默认值
    resetAll: function () {
      for (const key in this.defaults) {
        if (typeof GM_setValue === "function") {
          GM_setValue(key, this.defaults[key]);
        } else {
          localStorage.setItem(
            `yapi_helper_${key}`,
            JSON.stringify(this.defaults[key])
          );
        }
      }
      showNotification("已重置所有偏好为默认值");
    },
  };

  /**
   * 初始化YApi助手按钮
   */
  function initButton() {
    try {
      const button = document.createElement("button");
      button.textContent = "生成 TypeScript 代码";
      button.setAttribute("data-yapi-helper", "true");
      button.className = "yapi-helper-btn";

      button.addEventListener("click", async () => {
        try {
          // 1. 从 URL 获取接口 ID
          const apiId = window.location.pathname.split("/").pop();
          if (!apiId) throw new Error("无法获取接口ID");

          // 2. 调用 YApi 接口获取数据
          const response = await fetch(`/api/interface/get?id=${apiId}`);
          const data = await response.json();

          // 3. 生成 Cursor Agent 指令
          const agentInstruction = generateAgentInstruction(data);

          // 4. 显示结果及选项
          showResult(agentInstruction, data.data);
        } catch (error) {
          console.error("YApi Helper: 生成指令失败:", error);
          alert(`生成指令失败: ${error.message || "请查看控制台了解详情"}`);
        }
      });

      document.body.appendChild(button);
    } catch (error) {
      console.error("YApi Helper: Error adding button:", error);
    }
  }

  /**
   * 根据YApi接口数据生成Cursor Agent指令
   */
  function generateAgentInstruction(data) {
    // 获取用户偏好
    const prefs = UserPreferences.getAll();

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

  /**
   * 显示通知
   */
  function showNotification(message, duration = 3000) {
    // 移除现有通知
    const existingNotification = document.querySelector(
      ".yapi-helper-notification"
    );
    if (existingNotification) {
      existingNotification.remove();
    }

    // 创建新通知
    const notification = document.createElement("div");
    notification.className = "yapi-helper-notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    // 触发显示动画
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    // 自动关闭
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  }

  /**
   * 显示生成结果的模态框
   */
  function showResult(instruction, apiData) {
    // 创建模态框
    const modal = document.createElement("div");
    modal.className = "yapi-helper-modal";

    // 创建标签页
    const tabs = document.createElement("div");
    tabs.className = "yapi-helper-tabs";

    const instructionTab = document.createElement("div");
    instructionTab.className = "yapi-helper-tab active";
    instructionTab.textContent = "Cursor 指令";
    instructionTab.dataset.tab = "instruction";

    const preferencesTab = document.createElement("div");
    preferencesTab.className = "yapi-helper-tab";
    preferencesTab.textContent = "偏好设置";
    preferencesTab.dataset.tab = "preferences";

    tabs.appendChild(instructionTab);
    tabs.appendChild(preferencesTab);

    // 创建内容容器
    const contentContainer = document.createElement("div");

    // 指令内容区域
    const instructionContent = document.createElement("div");
    instructionContent.id = "tab-instruction";
    instructionContent.className = "yapi-helper-instruction-content";

    const pre = document.createElement("pre");
    pre.style.whiteSpace = "pre-wrap";
    pre.style.background = "#f6f8fa";
    pre.style.padding = "16px";
    pre.style.borderRadius = "4px";
    pre.style.overflowX = "auto";
    pre.style.fontSize = "14px";
    pre.style.fontFamily =
      "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace";
    pre.style.maxHeight = "400px"; // 设置最大高度
    pre.style.overflowY = "auto"; // 添加垂直滚动条
    pre.textContent = instruction;

    instructionContent.appendChild(pre);

    // 偏好设置区域
    const preferencesContent = document.createElement("div");
    preferencesContent.id = "tab-preferences";
    preferencesContent.style.display = "none";

    // 类型定义风格选择
    const typeStyleSection = document.createElement("div");
    typeStyleSection.className = "yapi-helper-section";

    const typeStyleTitle = document.createElement("div");
    typeStyleTitle.className = "yapi-helper-section-title";
    typeStyleTitle.textContent = "类型定义风格";

    const typeStyleOptions = document.createElement("div");
    typeStyleOptions.className = "yapi-helper-checkbox-group";

    const interfaces = createRadioOption(
      "typeStyle",
      "interface",
      "Interface",
      UserPreferences.get("typeStyle") === "interface"
    );
    const types = createRadioOption(
      "typeStyle",
      "type",
      "Type",
      UserPreferences.get("typeStyle") === "type"
    );

    typeStyleOptions.appendChild(interfaces);
    typeStyleOptions.appendChild(types);

    typeStyleSection.appendChild(typeStyleTitle);
    typeStyleSection.appendChild(typeStyleOptions);

    // 请求库选择
    const requestLibSection = document.createElement("div");
    requestLibSection.className = "yapi-helper-section";

    const requestLibTitle = document.createElement("div");
    requestLibTitle.className = "yapi-helper-section-title";
    requestLibTitle.textContent = "请求库";

    const requestLibOptions = document.createElement("div");
    requestLibOptions.className = "yapi-helper-checkbox-group";

    const axios = createRadioOption(
      "requestLib",
      "axios",
      "Axios",
      UserPreferences.get("requestLib") === "axios"
    );
    const fetch = createRadioOption(
      "requestLib",
      "fetch",
      "Fetch API",
      UserPreferences.get("requestLib") === "fetch"
    );

    requestLibOptions.appendChild(axios);
    requestLibOptions.appendChild(fetch);

    requestLibSection.appendChild(requestLibTitle);
    requestLibSection.appendChild(requestLibOptions);

    // 其他选项
    const otherOptionsSection = document.createElement("div");
    otherOptionsSection.className = "yapi-helper-section";

    const otherOptionsTitle = document.createElement("div");
    otherOptionsTitle.className = "yapi-helper-section-title";
    otherOptionsTitle.textContent = "其他选项";

    const otherOptionsGroup = document.createElement("div");
    otherOptionsGroup.className = "yapi-helper-checkbox-group";

    const enableComments = createCheckboxOption(
      "enableComments",
      "添加详细注释",
      UserPreferences.get("enableComments")
    );
    const includeExamples = createCheckboxOption(
      "includeExamples",
      "包含使用示例",
      UserPreferences.get("includeExamples")
    );
    const useOptionalProps = createCheckboxOption(
      "useOptionalProps",
      "使用可选属性标记 (?)",
      UserPreferences.get("useOptionalProps")
    );
    const useEnums = createCheckboxOption(
      "useEnums",
      "使用类型字面量+as const代替enum",
      UserPreferences.get("useEnums")
    );

    otherOptionsGroup.appendChild(enableComments);
    otherOptionsGroup.appendChild(includeExamples);
    otherOptionsGroup.appendChild(useOptionalProps);
    otherOptionsGroup.appendChild(useEnums);

    otherOptionsSection.appendChild(otherOptionsTitle);
    otherOptionsSection.appendChild(otherOptionsGroup);

    // 重置按钮
    const resetButton = document.createElement("button");
    resetButton.className = "yapi-helper-button secondary";
    resetButton.textContent = "重置为默认值";
    resetButton.onclick = () => {
      UserPreferences.resetAll();
      modal.remove();
      showResult(generateAgentInstruction({ data: apiData }), apiData);
    };

    // 组装偏好设置内容
    preferencesContent.appendChild(typeStyleSection);
    preferencesContent.appendChild(requestLibSection);
    preferencesContent.appendChild(otherOptionsSection);
    preferencesContent.appendChild(resetButton);

    contentContainer.appendChild(instructionContent);
    contentContainer.appendChild(preferencesContent);

    // 按钮容器
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "yapi-helper-button-container";

    const closeButton = document.createElement("button");
    closeButton.className = "yapi-helper-button secondary";
    closeButton.textContent = "关闭";
    closeButton.onclick = () => modal.remove();

    const copyButton = document.createElement("button");
    copyButton.className = "yapi-helper-button primary";
    copyButton.textContent = "复制到剪贴板";
    copyButton.onclick = () => {
      navigator.clipboard.writeText(instruction);

      // 显示通知
      showNotification("指令已复制到剪贴板！请切换到 Cursor 编辑器并粘贴。");

      // 复制后自动关闭弹窗
      modal.remove();

      // 尝试发送系统通知
      try {
        if (typeof GM_notification === "function") {
          GM_notification({
            text: "YApi 指令已复制，请切换到 Cursor 编辑器并粘贴",
            title: "YApi to TypeScript",
            timeout: 5000,
            onclick: function () {
              console.log("用户点击了通知");
            },
          });
        } else if (
          "Notification" in window &&
          Notification.permission === "granted"
        ) {
          // 使用浏览器原生通知 API 作为备选
          new Notification("YApi to TypeScript", {
            body: "YApi 指令已复制，请切换到 Cursor 编辑器并粘贴",
          });
        } else if (
          "Notification" in window &&
          Notification.permission !== "denied"
        ) {
          // 请求通知权限
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              new Notification("YApi to TypeScript", {
                body: "YApi 指令已复制，请切换到 Cursor 编辑器并粘贴",
              });
            }
          });
        }
      } catch (e) {
        console.warn("系统通知不可用:", e);
      }
    };

    // 标签页切换逻辑
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("yapi-helper-tab")) {
        // 清除所有活动状态
        const allTabs = tabs.querySelectorAll(".yapi-helper-tab");
        allTabs.forEach((tab) => tab.classList.remove("active"));

        // 隐藏所有内容
        document.getElementById("tab-instruction").style.display = "none";
        document.getElementById("tab-preferences").style.display = "none";

        // 设置活动标签页
        e.target.classList.add("active");

        // 显示对应内容
        const tabId = e.target.dataset.tab;
        document.getElementById(`tab-${tabId}`).style.display = "block";

        // 更新模态框高度
        modal.style.overflow = "auto";
      }
    });

    // 组装模态框
    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(copyButton);

    modal.appendChild(tabs);
    modal.appendChild(contentContainer);
    modal.appendChild(buttonContainer);
    document.body.appendChild(modal);
  }

  /**
   * 创建单选按钮选项
   */
  function createRadioOption(name, value, label, checked) {
    const container = document.createElement("div");
    container.className = "yapi-helper-checkbox-item";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    radio.checked = checked;
    radio.id = `${name}-${value}`;

    radio.addEventListener("change", () => {
      if (radio.checked) {
        UserPreferences.save(name, value);
      }
    });

    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.htmlFor = `${name}-${value}`;

    container.appendChild(radio);
    container.appendChild(labelElement);

    return container;
  }

  /**
   * 创建复选框选项
   */
  function createCheckboxOption(name, label, checked) {
    const container = document.createElement("div");
    container.className = "yapi-helper-checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.checked = checked;
    checkbox.id = `checkbox-${name}`;

    checkbox.addEventListener("change", () => {
      UserPreferences.save(name, checkbox.checked);
    });

    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.htmlFor = `checkbox-${name}`;

    container.appendChild(checkbox);
    container.appendChild(labelElement);

    return container;
  }
})();
