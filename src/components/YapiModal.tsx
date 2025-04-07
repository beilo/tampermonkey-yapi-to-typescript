import React, { useEffect } from 'react';
import useYapiStore from '../store/useYapiStore';
import useUserPreferencesStore from '../store/userPreferencesStore';
import useClipboard from '../hooks/useClipboard';
import { generateAgentInstruction } from '../utils/instructionGenerator';

interface ModalProps {
  onClose: () => void;
  onCopy: () => void;
}

const YapiModal: React.FC<ModalProps> = ({ onClose, onCopy }) => {
  // 使用 yapiStore
  const store = useYapiStore.useStore();
  // 使用 userPreferencesStore
  const prefsStore = useUserPreferencesStore.useStore();
  const { copyToClipboard } = useClipboard();
  
  // 每次模态框打开时，如果选择了TypeScript标签但没有生成TypeScript类型，则自动生成
  useEffect(() => {
    if (store.activeTab === 'typescript' && !store.typescriptResult) {
      handleGenerateTs();
    }
  }, [store.activeTab]);
  
  // 生成TypeScript类型
  const handleGenerateTs = async () => {
    try {
      await store.generateTypeScript();
    } catch (error) {
      console.error('生成TypeScript失败:', error);
    }
  };
  
  // 复制生成的TypeScript
  const handleCopyTs = () => {
    if (store.mergedTypeScript) {
      copyToClipboard(store.mergedTypeScript, {
        successMessage: 'TypeScript类型已复制到剪贴板！'
      });
    }
  };

  // 创建单选按钮选项
  const RadioOption = ({ 
    name, 
    value, 
    label, 
    checked 
  }: { 
    name: string; 
    value: string; 
    label: string; 
    checked: boolean 
  }) => {
    return (
      <div className="yapi-helper-checkbox-item">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          id={`${name}-${value}`}
          onChange={() => {
            prefsStore.setPreference(name as any, value);
          }}
        />
        <label htmlFor={`${name}-${value}`}>{label}</label>
      </div>
    );
  };

  // 创建复选框选项
  const CheckboxOption = ({ 
    name, 
    label, 
    checked 
  }: { 
    name: string; 
    label: string; 
    checked: boolean 
  }) => {
    return (
      <div className="yapi-helper-checkbox-item">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          id={`checkbox-${name}`}
          onChange={(e) => {
            prefsStore.setPreference(name as any, e.target.checked);
          }}
        />
        <label htmlFor={`checkbox-${name}`}>{label}</label>
      </div>
    );
  };

  // 重置所有偏好为默认值
  const handleReset = async () => {
    prefsStore.resetAllPreferences();
    
    // 使用最新的偏好重新生成指令
    if (store.apiData) {
      const freshInstruction = generateAgentInstruction({ data: store.apiData });
      
      // 更新 store 中的指令而不是刷新页面
      store.instruction = freshInstruction;
      
      // 强制更新视图
      store.setActiveTab(store.activeTab);
    }
  };

  return (
    <div className="yapi-helper-modal">
      {/* 标签页 */}
      <div className="yapi-helper-tabs">
        <div
          className={`yapi-helper-tab ${store.activeTab === 'instruction' ? 'active' : ''}`}
          onClick={() => store.setActiveTab('instruction')}
        >
          Cursor 指令
        </div>
        <div
          className={`yapi-helper-tab ${store.activeTab === 'typescript' ? 'active' : ''}`}
          onClick={() => {
            handleGenerateTs();
            store.setActiveTab('typescript');
          }}
        >
          TypeScript
        </div>
        <div
          className={`yapi-helper-tab ${store.activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => store.setActiveTab('preferences')}
        >
          偏好设置
        </div>
      </div>

      {/* 内容区域 */}
      <div>
        {/* 指令内容 */}
        {store.activeTab === 'instruction' && (
          <div className="yapi-helper-instruction-content">
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                background: '#f6f8fa',
                padding: '16px',
                borderRadius: '4px',
                overflowX: 'auto',
                fontSize: '14px',
                fontFamily:
                  "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
                maxHeight: '400px',
                overflowY: 'auto',
              }}
            >
              {store.instruction}
            </pre>
          </div>
        )}
        
        {/* TypeScript内容 */}
        {store.activeTab === 'typescript' && (
          <div className="yapi-helper-instruction-content">
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                background: '#f6f8fa',
                padding: '16px',
                borderRadius: '4px',
                overflowX: 'auto',
                fontSize: '14px',
                fontFamily:
                  "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
                maxHeight: '400px',
                overflowY: 'auto',
              }}
            >
              {store.typescriptResult 
                ? store.mergedTypeScript 
                : '// 正在生成TypeScript接口...'}
            </pre>
          </div>
        )}

        {/* 偏好设置内容 */}
        {store.activeTab === 'preferences' && (
          <div>
            {/* 类型定义风格 */}
            <div className="yapi-helper-section">
              <div className="yapi-helper-section-title">类型定义风格</div>
              <div className="yapi-helper-checkbox-group">
                <RadioOption
                  name="typeStyle"
                  value="interface"
                  label="Interface"
                  checked={prefsStore.typeStyle === 'interface'}
                />
                <RadioOption
                  name="typeStyle"
                  value="type"
                  label="Type"
                  checked={prefsStore.typeStyle === 'type'}
                />
              </div>
            </div>

            {/* 请求库 */}
            <div className="yapi-helper-section">
              <div className="yapi-helper-section-title">请求库</div>
              <div className="yapi-helper-checkbox-group">
                <RadioOption
                  name="requestLib"
                  value="axios"
                  label="Axios"
                  checked={prefsStore.requestLib === 'axios'}
                />
                <RadioOption
                  name="requestLib"
                  value="fetch"
                  label="Fetch API"
                  checked={prefsStore.requestLib === 'fetch'}
                />
              </div>
            </div>

            {/* 其他选项 */}
            <div className="yapi-helper-section">
              <div className="yapi-helper-section-title">其他选项</div>
              <div className="yapi-helper-checkbox-group">
                <CheckboxOption
                  name="enableComments"
                  label="添加详细注释"
                  checked={prefsStore.enableComments}
                />
                <CheckboxOption
                  name="includeExamples"
                  label="包含使用示例"
                  checked={prefsStore.includeExamples}
                />
                <CheckboxOption
                  name="useOptionalProps"
                  label="使用可选属性标记 (?)"
                  checked={prefsStore.useOptionalProps}
                />
                <CheckboxOption
                  name="useEnums"
                  label="使用类型字面量+as const代替enum"
                  checked={prefsStore.useEnums}
                />
              </div>
            </div>

            {/* 重置按钮 */}
            <button className="yapi-helper-button secondary" onClick={handleReset}>
              重置为默认值
            </button>
          </div>
        )}
      </div>

      {/* 按钮容器 */}
      <div className="yapi-helper-button-container">
        <button className="yapi-helper-button secondary" onClick={onClose}>
          关闭
        </button>
        
        {store.activeTab === 'instruction' && (
          <button className="yapi-helper-button primary" onClick={onCopy}>
            复制Cursor指令
          </button>
        )}
        
        {store.activeTab === 'typescript' && (
          <button className="yapi-helper-button primary" onClick={handleCopyTs}>
            复制TypeScript
          </button>
        )}
      </div>
    </div>
  );
};

export default YapiModal; 