<template>
  <div>
      <div class="register">
  <h2>新用户注册</h2>
  <ul>
    <li>
      <span>邮箱：</span>
      <input type="text" id="uname" placeholder="请输入邮箱名" v-model="uname" />
      <em></em>
      <i></i>
    </li>
    <li>
      <span>密码：</span>
      <input type="password" id="upwd" placeholder="请输入密码" v-model="upwd" />
      <em></em>
      <i></i>
    </li>
    <li>
      <span>重复密码：</span>
      <input type="password" id="upwd2" placeholder="请重复输入密码"/>
      <em></em>
      <i></i>
    </li>
    <li>
      <span>手机号：</span>
      <input type="text" id="phone" placeholder="请输入手机号" v-model="phone" />
      <em></em>
      <i></i>
    </li>
    <li>
      <span>验证码：</span>
      <input type="text" class="inp_yzm" placeholder="请输入验证码"/>
      <img src="../assets/images/yzm.png" alt=""/>
      <strong class="icon_refresh"></strong>
    </li>
    <li class="li_checkbox"><label>
      <input type="checkbox" checked/>
      <span>我已阅读并同意用户注册协议</span>
    </label>
    </li>
    <li class="li_btn">
      <button type="button" @click="doReg">提交注册</button>
    </li>
  </ul>
</div>
  </div>
</template>

<script>
export default {
name:"Register",
data(){
    return{
      uname:"",
      upwd:"",
      phone:""
    }
    },
methods:{
  doReg(){
   console.log(this.uname,this.upwd,this.phone)
   this.axios.post('user_register.php',
   `uname=${this.uname}&upwd=${this.uname}&phone=${this.phone}`)
   .then(res => {
     console.log(res)
     let code=res.data.code;
     if(code==1){
      alert("success")
      this.$router.go(-1)
      // this.$router.push("/News")
     }else{
       alert("register no")
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