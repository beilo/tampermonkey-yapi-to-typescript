import { defineStore } from '@helux/store-pinia';
import { UserPreferences, Preferences } from '../utils/userPreferences';
import { showNotification } from '../utils/notifications';

// 用户偏好设置 Store
const useUserPreferencesStore = defineStore('UserPreferencesStore', {
  // 状态定义
  state: (): Preferences => ({
    ...UserPreferences.defaults,
    ...UserPreferences.getAll(),
  }),

  // 操作方法
  actions: {
    /**
     * 设置单个偏好设置
     */
    setPreference<K extends keyof Preferences>(key: K, value: Preferences[K]): void {
      // 更新本地状态
      (this as any)[key] = value;
      
      // 同步到 UserPreferences
      UserPreferences.save(key, value);
    },

    /**
     * 获取所有偏好设置
     */
    getAllPreferences(): Preferences {
      return { ...this.$state };
    },

    /**
     * 重置所有偏好为默认值
     */
    resetAllPreferences(): void {
      // 使用默认值重置状态
      const defaults = UserPreferences.defaults;
      for (const key in defaults) {
        const typedKey = key as keyof Preferences;
        (this as any)[typedKey] = defaults[typedKey];
      }
      
      // 同步到 UserPreferences
      UserPreferences.resetAll();
      
      // 显示通知
      showNotification('已重置所有偏好为默认值');
    },

    /**
     * 从 UserPreferences 重新加载所有偏好
     */
    reloadPreferences(): void {
      const prefs = UserPreferences.getAll();
      for (const key in prefs) {
        const typedKey = key as keyof Preferences;
        (this as any)[typedKey] = prefs[typedKey];
      }
    }
  }
});

export default useUserPreferencesStore; 