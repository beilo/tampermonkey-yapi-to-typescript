import { GM_getValue, GM_setValue } from '$';

// 导入显示通知的函数
import { showNotification } from './notifications';

export interface Preferences {
  typeStyle: 'interface' | 'type';
  requestLib: 'axios' | 'fetch' | 'custom';
  enableComments: boolean;
  includeExamples: boolean;
  useOptionalProps: boolean;
  useEnums: boolean;
}

// 默认偏好设置
const defaults: Preferences = {
  typeStyle: 'interface', // 类型定义风格: interface 或 type
  requestLib: 'axios', // 请求库: axios, fetch 或 custom
  enableComments: true, // 是否添加注释
  includeExamples: true, // 是否包含示例代码
  useOptionalProps: true, // 是否对可选属性使用 ? 标记
  useEnums: true, // 是否使用类型字面量+as const代替enum
};

// 获取用户偏好
function get<K extends keyof Preferences>(key: K): Preferences[K] {
  // 使用 localStorage 作为 GM_getValue 的回退选项
  try {
    return GM_getValue(key, defaults[key]) as Preferences[K];
  } catch (e) {
    const value = localStorage.getItem(`yapi_helper_${key}`);
    return value !== null ? JSON.parse(value) : defaults[key];
  }
}

// 保存用户偏好
function save<K extends keyof Preferences>(key: K, value: Preferences[K]): void {
  // 使用 localStorage 作为 GM_setValue 的回退选项
  try {
    GM_setValue(key, value);
  } catch (e) {
    localStorage.setItem(`yapi_helper_${key}`, JSON.stringify(value));
  }
  showNotification(`已保存偏好: ${key}`);
}

// 获取所有偏好作为对象
function getAll(): Preferences {
  const prefs = {} as Preferences;
  for (const key in defaults) {
    prefs[key as keyof Preferences] = get(key as keyof Preferences);
  }
  return prefs;
}

// 重置所有偏好为默认值
function resetAll(): void {
  for (const key in defaults) {
    try {
      GM_setValue(key, defaults[key as keyof Preferences]);
    } catch (e) {
      localStorage.setItem(
        `yapi_helper_${key}`,
        JSON.stringify(defaults[key as keyof Preferences])
      );
    }
  }
  showNotification('已重置所有偏好为默认值');
}

export const UserPreferences = {
  defaults,
  get,
  save,
  getAll,
  resetAll,
}; 