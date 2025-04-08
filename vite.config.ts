import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        name: 'YApi to TypeScript via Cursor',
        namespace: 'https://github.com/beilo/tampermonkey-yapi-to-typescript',
        version: '0.2.1',
        description: '将 YApi 接口转换为 TypeScript 代码（通过 Cursor Agent）',
        author: 'YApi Helper',
        match: ['*://interface.codemao.cn/*'],
        icon: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        license: 'MIT',
        supportURL: 'https://github.com/beilo/tampermonkey-yapi-to-typescript/issues',
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr(
            'ReactDOM',
            'umd/react-dom.production.min.js',
          ),
          'json-schema-to-typescript': [
            'jstt',
            'https://cdn.jsdelivr.net/gh/beilo/tampermonkey-yapi-to-typescript/src/utils/bundle.js'
          ],
        },
      },
    }),
  ],
});
