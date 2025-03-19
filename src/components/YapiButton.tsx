import React, { useState } from 'react';
import { generateAgentInstruction } from '../utils/instructionGenerator';
import { showNotification, sendSystemNotification } from '../utils/notifications';
import YapiModal from './YapiModal';
import '../styles/yapiHelper.css';

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

const YapiButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [instruction, setInstruction] = useState('');
  const [apiData, setApiData] = useState<YapiData | null>(null);

  const handleClick = async () => {
    try {
      // 1. 从 URL 获取接口 ID
      const apiId = window.location.pathname.split('/').pop();
      if (!apiId) throw new Error('无法获取接口ID');

      // 2. 调用 YApi 接口获取数据
      const response = await fetch(`/api/interface/get?id=${apiId}`);
      const data = await response.json();

      // 3. 生成 Cursor Agent 指令
      const generatedInstruction = generateAgentInstruction(data);

      // 4. 设置状态并显示模态框
      setInstruction(generatedInstruction);
      setApiData(data);
      setShowModal(true);
    } catch (error) {
      console.error('YApi Helper: 生成指令失败:', error);
      alert(`生成指令失败: ${(error as Error).message || '请查看控制台了解详情'}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(instruction);
    
    // 显示通知
    showNotification('指令已复制到剪贴板！请切换到 Cursor 编辑器并粘贴。');
    
    // 关闭模态框
    setShowModal(false);
    
    // 发送系统通知
    sendSystemNotification(
      'YApi to TypeScript', 
      'YApi 指令已复制，请切换到 Cursor 编辑器并粘贴'
    );
  };

  return (
    <>
      <button 
        className="yapi-helper-btn" 
        onClick={handleClick}
        data-yapi-helper="true"
      >
        生成 TypeScript 代码
      </button>
      
      {showModal && apiData && (
        <YapiModal
          instruction={instruction}
          apiData={apiData.data}
          onClose={() => setShowModal(false)}
          onCopy={handleCopy}
        />
      )}
    </>
  );
};

export default YapiButton; 