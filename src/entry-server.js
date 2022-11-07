
// 服务端版本只是 export 一个创建应用的工厂函数

import { createSSRApp } from "vue"

import App from './App.vue'

export default () => {
  return  createSSRApp(App)
}