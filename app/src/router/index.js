// 引入Vue
import Vue from 'vue'
// 引入VueRouter 
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'






// 解决路由跳转的bug-----从Header组件内部搜索按钮跳转的bug过来的,统一的解决方案
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给成功的回调函数指定一个默认为空的的函数参数即可
VueRouter.prototype.push = function (location, onComplete = () => { }, onAbort) {
  return originPush.call(this, location, onComplete, onAbort)
}
// 给失败的回调函数指定一个默认为空的函数参数即可
VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
  return originReplace.call(this, location, onComplete, onAbort)
}
// 指定catch也可以
// VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
//   return originReplace.call(this, location, onComplete, onAbort).catch(() => { })
// }











// 声明使用路由
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history', // 设置路由地址的模式---hash是带#,history---不带#
  routes,  // 路由组件的注册的数组
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})




// 实例化路由器对象,并暴露出去
export default router