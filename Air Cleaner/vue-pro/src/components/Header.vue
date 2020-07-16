<template>
  <div>
      <header class="header container">
  <h1 class="logo"><a href="index.html" class="link"></a></h1>
  <div class="h_con">
    <ul class="clearfloat">
      <li class="phone">4000-585-116</li>
      <li><a href="#">中文</a></li>
      <li><em>|</em></li>
      <li><a href="#">English</a></li>
      <li><a href="#" class="weixin"></a></li>
      <li><a href="#" class="weibo"></a></li>
      <li><router-link to="/Login" class="h_login" v-if="!login">登录</router-link></li>
      <li v-if="!login"><em>|</em></li>
      <li><router-link to="/Register" class="h_register" v-if="!login">注册</router-link></li>
      <li class="top_user" v-if="login"><a href="" >admin</a></li>
      <li class="top_quit" v-if="login"><a @click="logout()">退出</a></li>
    </ul>
    <div class="search clearfloat">
      <button type="button"></button>
      <input type="text"/>
    </div>
  </div>
</header>
<!--nav-->
<nav class="navbar">
  <div class="container">
    <div class="nav">
      <ul>
        <li><router-link to="/"><span class="icon_home"></span>首页</router-link></li>
        <li><router-link to="/About">关于净美仕</router-link></li>
        <li><router-link to="/News">公司动态</router-link></li>
        <li class="nav_pd">
          <router-link to="/Product">限时秒杀</router-link>
        </li>
        <li><router-link to="/Me">联系我们</router-link></li>
      </ul>
    </div>
    <div class="s_cart">
      
      <div class="cart_dropdown">
        <!--<h3>您的购物车为空~</h3>-->
        <ul>
          <!--<li>-->
            <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
            <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
            <!--</div>-->
            <!--<strong>¥1599.00</strong>-->
            <!--<em></em>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
            <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
            <!--</div>-->
            <!--<strong>¥1599.00</strong>-->
            <!--<em></em>-->
          <!--</li>-->
        </ul>
        <div class="cd_js clearfloat">
          <span>共计：<strong>0.00</strong></span>
          <a href="#">结算</a>
        </div>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
name:"Header",
//引入vuex的store中的state值 必须在计算属性中书写
computed:{
//mapState辅助函数  可以快速引入store中的值
//此处的login代表 store文件中的state中的值login  登录状态
...mapState(["login"])
},
methods:{
  logout(){
    this.$store.commit("DoLogout")
  }
}
}
</script>

<style>

</style>