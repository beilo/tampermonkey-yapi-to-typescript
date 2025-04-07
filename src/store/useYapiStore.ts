import { defineStore } from '@helux/store-pinia';
import { showNotification, sendSystemNotification } from '../utils/notifications';
import { ApiData, YapiData, TypeScriptResult } from '../types/yapi';
import { handleData } from '../utils/jsonToTsConverter';
import { generateAgentInstruction } from '../utils/instructionGenerator';

interface YapiState {
  apiData: ApiData | null;
  apiId: string | null;
  instruction: string;
  typescriptResult: TypeScriptResult | null;
  isModalVisible: boolean;
  activeTab: 'instruction' | 'preferences' | 'typescript';
  isLoading: boolean;
  error: string | null;
}

const useYapiStore = defineStore('YapiStore', {
  // 状态定义
  state: (): YapiState => ({
    apiData: null,
    apiId: null,
    instruction: '',
    typescriptResult: null,
    isModalVisible: false,
    activeTab: 'instruction',
    isLoading: false,
    error: null,
  }),

  // 计算属性
  getters: {
    // 是否有可用的API数据
    hasApiData() {
      return this.apiData !== null;
    },
    
    // 合并后的TypeScript类型
    mergedTypeScript() {
      if (!this.typescriptResult) return '';
      
      const { queryType, paramsType, responseType } = this.typescriptResult;
      return [
        '// 请求参数类型',
        [queryType, paramsType].join('\n'),
        '',
        '// 响应数据类型',
        responseType
      ].join('\n\n');
    },
  },

  // 操作方法
  actions: {
    /**
     * 从当前URL获取API ID
     */
    extractApiIdFromUrl() {
      this.apiId = window.location.pathname.split('/').pop() || null;
      return this.apiId;
    },

    /**
     * 重置状态
     */
    resetState() {
      this.apiData = null;
      this.instruction = '';
      this.typescriptResult = null;
      this.error = null;
    },

    /**
     * 设置当前激活的标签页
     */
    setActiveTab(tab: 'instruction' | 'preferences' | 'typescript') {
      this.activeTab = tab;
    },

    /**
     * 显示/隐藏模态框
     */
    setModalVisibility(isVisible: boolean) {
      this.isModalVisible = isVisible;
    },

    /**
     * 获取API数据
     */
    async fetchApiData() {
      try {
        this.isLoading = true;
        this.error = null;
        
        // 获取API ID
        const apiId = this.apiId || this.extractApiIdFromUrl();
        if (!apiId) {
          throw new Error('无法获取接口ID');
        }

        // 调用API获取数据
        const response = await fetch(`/api/interface/get?id=${apiId}`);
        const data: YapiData = await response.json();
        this.apiData = data.data;
        
        return data;
      } catch (error) {
        this.error = (error as Error).message || '获取API数据失败';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    /**
     * 生成Agent指令
     */
    async generateInstruction() {
      try {
        if (!this.apiData) {
          await this.fetchApiData();
        }
        
        if (this.apiData) {
          this.instruction = generateAgentInstruction({ data: this.apiData });
          this.setActiveTab('instruction');
          this.setModalVisibility(true);
        }
        
        return this.instruction;
      } catch (error) {
        this.error = (error as Error).message || '生成指令失败';
        throw error;
      }
    },

    /**
     * 生成TypeScript类型
     */
    async generateTypeScript() {
      try {
        if (!this.apiData) {
          await this.fetchApiData();
        }
        
        if (this.apiData) {
          this.typescriptResult = await handleData(this.apiData);
          this.setActiveTab('typescript');
        }
        
        return this.typescriptResult;
      } catch (error) {
        this.error = (error as Error).message || '生成TypeScript失败';
        throw error;
      }
    },

    /**
     * 复制内容到剪贴板
     */
    copyToClipboard(content: string, message: string = '内容已复制到剪贴板！') {
      try {
        navigator.clipboard.writeText(content);
        
        // 显示通知
        showNotification(message);
        
        // 发送系统通知
        sendSystemNotification('YApi to TypeScript', message);
        
        return true;
      } catch (error) {
        this.error = (error as Error).message || '复制失败';
        return false;
      }
    },

    /**
     * 复制指令到剪贴板
     */
    copyInstruction() {
      if (this.instruction) {
        const success = this.copyToClipboard(
          this.instruction, 
          '指令已复制到剪贴板！请切换到 Cursor 编辑器并粘贴。'
        );
        if (success) {
          this.setModalVisibility(false);
        }
      }
    },

    /**
     * 复制TypeScript类型到剪贴板
     */
    copyTypeScript() {
      if (this.typescriptResult) {
        this.copyToClipboard(
          this.mergedTypeScript, 
          'TypeScript类型已复制到剪贴板！'
        );
      }
    }
  }
});

export default useYapiStore; 