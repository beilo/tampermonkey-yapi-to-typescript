import React, { useEffect, useState } from 'react';
import YapiButton from './components/YapiButton';

const App: React.FC = () => {
  const [isValidPage, setIsValidPage] = useState(false);

  useEffect(() => {
    // 检查当前是否在YApi的接口页面上
    const checkYApiInterface = () => {
      const { pathname } = window.location;
      if (pathname.includes('/project/') && pathname.includes('/interface/view/')) {
        setIsValidPage(true);
      }
    };

    // 初始检查
    checkYApiInterface();

    // 监听URL变化
    const handleUrlChange = () => {
      checkYApiInterface();
    };

    // 使用轮询检查URL变化（在SPA中URL可能不会触发常规的事件）
    const intervalId = setInterval(handleUrlChange, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {isValidPage && <YapiButton />}
    </>
  );
};

export default App;
