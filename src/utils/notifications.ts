import { GM_notification } from '$';

/**
 * 显示界面通知
 * @param message 通知内容
 * @param duration 显示时长（毫秒）
 */
export function showNotification(message: string, duration = 3000): void {
  // 移除现有通知
  const existingNotification = document.querySelector(
    '.yapi-helper-notification'
  ) as HTMLElement | null;
  
  if (existingNotification) {
    existingNotification.remove();
  }

  // 创建新通知
  const notification = document.createElement('div');
  notification.className = 'yapi-helper-notification';
  notification.textContent = message;

  document.body.appendChild(notification);

  // 触发显示动画
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  // 自动关闭
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, duration);
}

/**
 * 尝试发送系统通知
 * @param title 通知标题
 * @param message 通知内容
 */
export function sendSystemNotification(title: string, message: string): void {
  try {
    // 尝试使用 GM_notification
    if (typeof GM_notification === 'function') {
      GM_notification({
        text: message,
        title: title,
        timeout: 5000,
        onclick: function () {
          console.log('用户点击了通知');
        },
      });
    } 
    // 备选：使用浏览器原生通知 API
    else if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
      });
    } 
    // 请求通知权限
    else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, {
            body: message,
          });
        }
      });
    }
  } catch (e) {
    console.warn('系统通知不可用:', e);
  }
} 