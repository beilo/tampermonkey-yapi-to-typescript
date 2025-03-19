import React, { useState } from 'react';
import { convertYapiResponseToTypeScript } from '../utils/jsonToTsConverter';
import { showNotification } from '../utils/notifications';
import '../styles/yapiHelper.css';

interface JsonToTsButtonProps {
  resBody?: string;
}

const JsonToTsButton: React.FC<JsonToTsButtonProps> = ({ resBody }) => {
  const [showModal, setShowModal] = useState(false);
  const [generatedTypes, setGeneratedTypes] = useState<string[]>([]);

  const handleGenerateTypeScript = () => {
    try {
      // 使用json-to-ts转换响应数据
      const tsInterfaces = convertYapiResponseToTypeScript(resBody);
      setGeneratedTypes(tsInterfaces);
      setShowModal(true);
    } catch (error) {
      console.error('TypeScript生成错误:', error);
      alert(`生成TypeScript失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleCopy = () => {
    const typeScript = generatedTypes.join('\n\n');
    navigator.clipboard.writeText(typeScript);
    showNotification('TypeScript类型已复制到剪贴板！');
    setShowModal(false);
  };

  return (
    <>
      <button 
        className="yapi-helper-btn local-ts-btn"
        onClick={handleGenerateTypeScript}
        title="在本地生成TypeScript接口"
        data-yapi-helper="true"
      >
        本地生成TS
      </button>
      
      {showModal && (
        <div className="yapi-helper-modal">
          <div className="yapi-helper-modal-header">
            <h3>生成的TypeScript接口</h3>
          </div>
          
          <div className="yapi-helper-instruction-content">
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                background: '#f6f8fa',
                padding: '16px',
                borderRadius: '4px',
                overflowX: 'auto',
                fontSize: '14px',
                fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
                maxHeight: '400px',
                overflowY: 'auto',
              }}
            >
              {generatedTypes.join('\n\n')}
            </pre>
          </div>
          
          <div className="yapi-helper-button-container">
            <button 
              className="yapi-helper-button secondary" 
              onClick={() => setShowModal(false)}
            >
              关闭
            </button>
            <button 
              className="yapi-helper-button primary" 
              onClick={handleCopy}
            >
              复制到剪贴板
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JsonToTsButton; 