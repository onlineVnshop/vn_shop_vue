<template>
  <div class="register"  :style="{backgroundImage: 'url(' +registerBg+ ')' }">
       <div class="registerInfo">
            <div class="userName">
                <div><span>用&nbsp;户&nbsp;名</span><input type="text" minlength="3" maxlength="20" name="userName" id="username" v-model="newUsername" @blur="blurName"></div>
                <label for="username" id="userLabel" v-show="showTishiname">{{tishiName}}</label>
            </div>
            <div class="password">
                <div ><span>设置密码</span><input type="password" name="password" minlength="6" id="password" v-model="newPassword" @blur="blurpwd"></div>
                <label for="password" id="passLabel"  v-show="showTishipwd">{{tishipwd}}</label>
            </div>
            <div class="rePassword">
                <div ><span>确认密码</span><input type="password" name="rePassword" id="rePassword" v-model="renewpassword" @blur="blurrepwd"></div>
                <label for="rePassword" id="rePassLabel"  v-show="showTishirepwd">{{tishirepwd}}</label>
            </div>
            <div class="mobile">
                <div ><span>手&nbsp;机&nbsp;号</span><input type="text" name="mobile" id="mobile" v-model="phone" @blur="blurphone"></div>
                <label for="mobile" id="mobileLabel"  v-show="showTishiphone">{{tishiphone}}</label>
            </div>
            <div class="had_userId">
                <span>已有帐号？</span>
                <!-- <a href="goods_login.html" v-on:click="ToLogin">请登录</a> -->
                <router-link to="/login">请登录</router-link>
            </div> 
            <button class="registerBtn" id="registerBtn" v-on:click="register">立即注册</button>
              
        </div>
  </div>
</template>
<script>
import {setCookie,getCookie} from './../assets/js/cookie'  
import {check} from './../assets/js/check'  
export default {
  name:"Register",
  data(){
     return{
          registerBg:"../../../static/image/2.jpg",
            userID: '',
            username: '',
            password: '',
            newUsername: '',
            newPassword: '',
            renewPassword: '',
            status:'',
            showTishiname:false,
            tishiName:'',
            showTishipwd:false,
            tishipwd:'',
            showTishirepwd:false,
            tishirepwd:'',
            showTishiphone:false,
            tishiphone:'',
            renewpassword:'',
            phone:'',
     }
  },
 mounted(){  
    if(getCookie("username")){  
        this.$router.push('/')  
    }
 }, 
  methods:{
            
      blurName(){
          if(!check("username",this.newUsername)){
              this.tishiName = "用户名为3-20位字母数字下滑线"
              this.showTishiname = true
              this.username = ''
        }else{
            this.showTishiname = false;
        }
      },
      blurpwd(){
          if(!check('password',this.newPassword)){
              this.tishipwd = "最小长度为6位,最长20"
              this.showTishipwd = true
              this.newPassword = ''
      }else{
          this.showTishipwd = false;
      }
      },
      blurrepwd(){
          if(this.newPassword!==this.renewpassword){
              this.tishirepwd = "密码不一致"
              this.showTishirepwd = true
              this.renewUsername = ''
          }else{
              this.showTishirepwd = false
          }
      },
      blurphone(){
          if(!check('mobile',this.phone)){
               this.tishiphone = "手机格式不正确"
              this.showTishiphone = true
              this.phone = ''
          }else{
              this.showTishiphone = false
          }
      },
      register(){
     
          if(this.newUsername==""||this.newPassword==""){
              alert("请输入用户名或者密码")
          }
          else{
           
              this.$http({
                  method:"post",
                  url:"http://h6.duchengjiu.top/shop/api_user.php",
                  data:{
                      status:"register",
                      username:this.newUsername,
                      password:this.newPassword
                  },
                  transformRequest:[function(data){
                      let ret='';
                      for(let it in data){
                          ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
                      }
                      return ret
                  }]
              }).then((res)=>{
                  console.log(res.data.code)
                  if(res.data.code===0){
                      alert("注册成功")
                     this.$router.push('/login') 
                  }else if(res.data.code===2001){
                      alert("用户已存在，请重新注册")
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
