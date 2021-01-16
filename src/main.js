/*
* 项目的启动入口
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入element-UI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入 加载全局的样式文件
import './styles/index.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 创建Vue 根实例
// 把router 配置到实例中
// 通过 render 方法把 App 根组件渲染到 #app 入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
