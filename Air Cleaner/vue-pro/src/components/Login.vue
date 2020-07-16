<template>
  <div>
      <div class="header_box"></div>
<!--页面主体-->
<div class="login_box">
  <div class="container">
    <div class="login">
      <h2>用户登录</h2>
      <dl class="clearfloat">
        <dt><span class="tips" id="uname_prompt_text"></span>用户名：</dt>
        <dd>
          <input type="text" id="uname" placeholder="邮箱/手机号" v-model="uname"/>
          <em class="icon_user"></em>
          <i class="icon_error" id="uname_prompt_icon"></i>
        </dd>
      </dl>
      <dl>
        <dt><span class="tips" id="pwd_prompt_text">请输入密码</span>密码：</dt>
        <dd>
          <input type="password" id="pwd" placeholder="密码" v-model="upwd"/>
          <em class="icon_pwd"></em>
          <i class="icon_error" id="pwd_prompt_icon"></i>
        </dd>
      </dl>
      <p><label>
        <input type="checkbox"/>
        <span>自动登录</span>
      </label></p>
      <button type="button" id="login" @click="DoLogin()">立 即 登 录</button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
name:"Login",
data(){
  return{
   uname:"",
   upwd:""
  }
},
methods:{
  DoLogin(){
    console.log(this.uname,this.upwd)
    this.axios.post("user_login.php","unameOrPhone=${this.uname}&upwd=${this.upwd}")
    .then(res => {
      console.log(res)
      let code=res.data.code
      if(code==1){
        alert("登陆成功，即将跳到首页")
        this.$router.push({path:"/"})
        // 更新vuex的state值，必须通过mutations提供的方法才可以
        //通过commit（‘方法名’） 可以出发mutations中的指定方法
        this.$store.commit("DoLogin")
      }else{
        alert("登陆失败")
      }
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
}
</script>

<style>

</style>