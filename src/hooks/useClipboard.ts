import { useState, useCallback } from 'react';
import { showNotification, sendSystemNotification } from '../utils/notifications';

interface ClipboardOptions {
  /**
   * 复制成功时显示的通知消息
   */
  successMessage?: string;
  
  /**
   * 系统通知的标题
   */
  notificationTitle?: string;
  
  /**
   * 是否发送系统通知
   */
  sendSystemNotify?: boolean;
  
  /**
   * 复制成功后的回调函数
   */
  onSuccess?: () => void;
  
  /**
   * 复制失败后的回调函数
   */
  onError?: (error: Error) => void;
}

/**
 * 剪贴板操作 Hook
 */
export function useClipboard(defaultOptions: ClipboardOptions = {}) {
  const [error, setError] = useState<Error | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  
  /**
   * 复制内容到剪贴板
   */
  const copyToClipboard = useCallback(async (
    text: string, 
    options: ClipboardOptions = {}
  ) => {
    const {
      successMessage = '内容已复制到剪贴板！',
      notificationTitle = 'YApi to TypeScript',
      sendSystemNotify = true,
      onSuccess,
      onError
    } = { ...defaultOptions, ...options };
    
    try {
      await navigator.clipboard.writeText(text);
      
      // 显示通知
      showNotification(successMessage);
      
      // 发送系统通知
      if (sendSystemNotify) {
        sendSystemNotification(notificationTitle, successMessage);
      }
      
      // 更新状态
      setIsCopied(true);
      setError(null);
      
      // 调用成功回调
      onSuccess?.();
      
      // 延迟重置状态
      setTimeout(() => setIsCopied(false), 2000);
      
      return true;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('复制失败');
      
      // 更新状态
      setError(error);
      setIsCopied(false);
      
      // 调用错误回调
      onError?.(error);
      
      return false;
    }
  }, [defaultOptions]);
  
  return {
    copyToClipboard,
    isCopied,
    error,
    reset: () => {
      setIsCopied(false);
      setError(null);
    }
  };
}

export default useClipboard; 