import React, { useState } from 'react';
import { UserPreferences } from '../utils/userPreferences';
import { ApiData } from '../utils/instructionGenerator';
import { generateAgentInstruction } from '../utils/instructionGenerator';
import { convertYapiResponseToTypeScript } from '../utils/jsonToTsConverter';
import { showNotification } from '../utils/notifications';

interface ModalProps {
  instruction: string;
  apiData: ApiData;
  onClose: () => void;
  onCopy: () => void;
}

const YapiModal: React.FC<ModalProps> = ({ instruction, apiData, onClose, onCopy }) => {
  const [activeTab, setActiveTab] = useState<'instruction' | 'preferences' | 'typescript'>('instruction');
  const [generatedTypes, setGeneratedTypes] = useState<string[]>([]);
  
  // 生成TypeScript类型
  const handleGenerateTs = () => {
    try {
      const tsInterfaces = convertYapiResponseToTypeScript(apiData.res_body);
      setGeneratedTypes(tsInterfaces);
      setActiveTab('typescript');
    } catch (error) {
      console.error('生成TypeScript失败:', error);
      alert(`生成TypeScript失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  };
  
  // 复制生成的TypeScript
  const handleCopyTs = () => {
    const typeScript = generatedTypes.join('\n\n');
    navigator.clipboard.writeText(typeScript);
    showNotification('TypeScript类型已复制到剪贴板！');
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
            UserPreferences.save(name as any, value);
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
            UserPreferences.save(name as any, e.target.checked);
          }}
        />
        <label htmlFor={`checkbox-${name}`}>{label}</label>
      </div>
    );
  };

  // 重置所有偏好为默认值
  const handleReset = () => {
    UserPreferences.resetAll();
    // 使用最新的偏好重新生成指令
    const freshInstruction = generateAgentInstruction({ data: apiData });
    // 这里应该刷新modal，但由于state不会立即更新，可能需要其他方式实现
    window.location.reload(); // 简单的解决方案：刷新页面
  };

  return (
    <div className="yapi-helper-modal">
      {/* 标签页 */}
      <div className="yapi-helper-tabs">
        <div
          className={`yapi-helper-tab ${activeTab === 'instruction' ? 'active' : ''}`}
          onClick={() => setActiveTab('instruction')}
        >
          Cursor 指令
        </div>
        <div
          className={`yapi-helper-tab ${activeTab === 'typescript' ? 'active' : ''}`}
          onClick={handleGenerateTs}
        >
          TypeScript
        </div>
        <div
          className={`yapi-helper-tab ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          偏好设置
        </div>
      </div>

      {/* 内容区域 */}
      <div>
        {/* 指令内容 */}
        {activeTab === 'instruction' && (
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
              {instruction}
            </pre>
          </div>
        )}
        
        {/* TypeScript内容 */}
        {activeTab === 'typescript' && (
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
              {generatedTypes.length > 0 
                ? generatedTypes.join('\n\n') 
                : '// 正在生成TypeScript接口...'}
            </pre>
          </div>
        )}

        {/* 偏好设置内容 */}
        {activeTab === 'preferences' && (
          <div>
            {/* 类型定义风格 */}
            <div className="yapi-helper-section">
              <div className="yapi-helper-section-title">类型定义风格</div>
              <div className="yapi-helper-checkbox-group">
                <RadioOption
                  name="typeStyle"
                  value="interface"
                  label="Interface"
                  checked={UserPreferences.get('typeStyle') === 'interface'}
                />
                <RadioOption
                  name="typeStyle"
                  value="type"
                  label="Type"
                  checked={UserPreferences.get('typeStyle') === 'type'}
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
                  checked={UserPreferences.get('requestLib') === 'axios'}
                />
                <RadioOption
                  name="requestLib"
                  value="fetch"
                  label="Fetch API"
                  checked={UserPreferences.get('requestLib') === 'fetch'}
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
                  checked={UserPreferences.get('enableComments')}
                />
                <CheckboxOption
                  name="includeExamples"
                  label="包含使用示例"
                  checked={UserPreferences.get('includeExamples')}
                />
                <CheckboxOption
                  name="useOptionalProps"
                  label="使用可选属性标记 (?)"
                  checked={UserPreferences.get('useOptionalProps')}
                />
                <CheckboxOption
                  name="useEnums"
                  label="使用类型字面量+as const代替enum"
                  checked={UserPreferences.get('useEnums')}
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
        
        {activeTab === 'instruction' && (
          <button className="yapi-helper-button primary" onClick={onCopy}>
            复制Cursor指令
          </button>
        )}
        
        {activeTab === 'typescript' && (
          <button className="yapi-helper-button primary" onClick={handleCopyTs}>
            复制TypeScript
          </button>
        )}
      </div>
    </div>
  );
};

export default YapiModal; 