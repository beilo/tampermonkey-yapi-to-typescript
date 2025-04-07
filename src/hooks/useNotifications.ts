import { useCallback } from 'react';
import { showNotification, sendSystemNotification } from '../utils/notifications';

interface NotificationOptions {
  /**
   * 通知显示持续时间（毫秒）
   */
  duration?: number;
  
  /**
   * 是否同时发送系统通知
   */
  sendSystemNotify?: boolean;
  
  /**
   * 系统通知的标题
   */
  systemTitle?: string;
}

/**
 * 通知功能 Hook
 */
export function useNotifications() {
  /**
   * 显示通知
   */
  const notify = useCallback((
    message: string, 
    options: NotificationOptions = {}
  ) => {
    const {
      duration = 3000,
      sendSystemNotify = false,
      systemTitle = 'YApi to TypeScript'
    } = options;
    
    // 显示UI通知
    showNotification(message, duration);
    
    // 可选发送系统通知
    if (sendSystemNotify) {
      sendSystemNotification(systemTitle, message);
    }
  }, []);
  
  /**
   * 显示成功通知（同时发送系统通知）
   */
  const notifySuccess = useCallback((
    message: string, 
    options: Omit<NotificationOptions, 'sendSystemNotify'> = {}
  ) => {
    notify(message, { ...options, sendSystemNotify: true });
  }, [notify]);
  
  /**
   * 显示错误通知
   */
  const notifyError = useCallback((
    message: string, 
    options: NotificationOptions = {}
  ) => {
    notify(message, options);
  }, [notify]);
  
  return {
    notify,
    notifySuccess,
    notifyError
  };
}

export default useNotifications; 