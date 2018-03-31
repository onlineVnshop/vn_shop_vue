<template>
  <div class="register"  :style="{backgroundImage: 'url(' +registerBg+ ')' }">
       <div class="registerInfo">
        <div class="userName">
            <div><span>用&nbsp;户&nbsp;名</span><input type="text" minlength="3" maxlength="20" name="userName" id="username" v-model="username"></div>
            <label for="username" id="userLabel"></label>
        </div>
        <div class="password">
            <div ><span>密&nbsp;&nbsp;&nbsp;码</span><input type="password" name="password" minlength="6" id="password" v-model="password"></div>
            <label for="password" id="passLabel"></label>
        </div>
        <div class="had_userId">
            <span>么有帐号？</span>
            <!-- <a href="goods_register.html">请注册</a> -->
            <router-link to="/register">请注册</router-link>
        </div>
        <button class="registerBtn" id="loginBtn" v-on:click="login">立即登录</button>
    </div>
  </div>
</template>
<script>
import {setCookie,getCookie} from './../assets/js/cookie' 
export default {
  name:"Login",
  data(){
     return{
          registerBg:"../../../static/image/2.jpg",
          username:"",
          password:"",
          status:'',
          showTishiname:false,
          tishiName:'',
          showTishipwd:false,
          tishipwd:'',
     }
  },
   mounted(){  
    if(getCookie("username")){  
        // this.$router.push('/home')  
    }  
  }, 
  methods:{
      login(){
          if(this.username==''||this.password==''){
              alert("请输入用户名或密码")
          }else{
              this.$http({
                  method:"post",
                  url:"http://h6.duchengjiu.top/shop/api_user.php",
                  data:{
                      status:"login",
                      username:this.username,
                      password:this.password
                  },
                  transformRequest:[function(data){
                      let ret='';
                      for(let it in data){
                          ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
                      }
                      return ret
                  }]
              }).then((res)=>{
                  console.log(res)
                  if(res.data.code===0){
                      alert("登录成功")
                      setCookie("username",this.username,6000)
                      setCookie("token",res.data.data.token,6000)
                      console.log(res.data.data.token)
                      this.$router.push('/') 
                  }else if(res.data.code===2002){
                      alert("用户不存在，请重新注册")
                  }
              }).catch(error=>{
                    console.log(error);
                    alert('网络错误，不能访问');
              })
          }
      }
  },

}
</script>
<style scoped>

    .register{
        height:100%;
        background-size: cover; 
        position: relative;
    }
    .registerInfo{
        position: absolute;
        top:40%;
        right:10%;
        background:transparent;
    }
    .registerInfo>div{
        width: 398px;
        height: 80px;
        margin: 0 auto;
    }
    .registerInfo div>div{
        border:1px solid #000;
        height: 50px;
    }
    .registerInfo div>div>span{
        display: inline-block;
        width: 122px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        /* float: left; */
        color:lightskyblue;
    }
    .registerInfo div>div>input{
        padding:25px 15px;
        border: 0;
        outline: none;
        width:273px;
        box-sizing: border-box;
        height:16px;
        opacity:0.8;
    }
    .registerInfo div label{
        font-size:16px;
        color: #CFC8D5
    }
    .registerBtn{
        width:100px;
        height:50px;
        font-size:18px;
        background: #000;
        color:#fff;
        border:none;
        outline: none;
        cursor: pointer;
        margin-left: 40%;
    }
    .had_userId{
        display: inline;
        color: #fff;
    }
    .had_userId a{
        color:#38f;
    }
</style>
