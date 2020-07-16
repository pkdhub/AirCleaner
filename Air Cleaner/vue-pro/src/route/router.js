import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import About from "../components/About.vue";
import Index from "../components/Index.vue";
import News from "../components/News.vue";
import NewsDetails from "../components/NewsDetails.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Product from "../components/Product.vue";
import Me from "../components/Me.vue";
const routes=[
    {path:'/',component:Index},
    {path:'/About',component:About},
    {path:'/News',component:News},
    {path:'/newsdetails/:nid',component:NewsDetails,name:"nd"},
    {path:'/Login',component:Login},
    {path:'/Register',component:Register},
    {path:'/Product',component:Product},
    {path:'/Me',component:Me},
]
// 利用对应关系数组 做出路由对象
export default new VueRouter({
    mode:"history",
    routes // (缩写) 相当于 routes: routes
  })