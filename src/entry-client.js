
// 客户端版本会立即调用 mouted接口将组件 挂载到页面上

import {  createSSRApp } from "vue"

import App from "./App.vue"

createSSRApp(App).mounted("#app")