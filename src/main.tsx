import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// 初始化 Helux store
// 注意：如果有需要添加其他插件的话，可以使用 addPlugin 方法

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
