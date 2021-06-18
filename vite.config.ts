import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'

// const env = process.argv[process.argv.length - 1]
// const base = config[env]
// console.log('import.meta.env', import.meta.env)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@utils': resolve('./src/utils'),
      '@constants': resolve('./src/constants'),
      '@containers': resolve('./src/containers'),
      '@components': resolve('./src/components'),
      '@stores': resolve('./src/stores'),
      '@provider': resolve('./src/provider'),
      '@data': resolve('./src/data'),

      // mobx: resolve('node_modules/mobx/lib/mobx.es6.js'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 javascript
        javascriptEnabled: true,
        // 头部注入变量文件
        additionalData: "@import './src/styles/fn.less';",
      },
    },
  },
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            return `antd/es/${name}/style/index`
          },
        }
      ],
    })
  ],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/dev': {
        target: 'DEV_API',
        rewrite: path => path.replace(/^\/dev/, ''),
      },
    },
  },
})

function resolve(pathname: string) {
  return path.resolve(__dirname, pathname)
}
