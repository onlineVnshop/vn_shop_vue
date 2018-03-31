<template>
  <header>
      <div class="navTop">
          <div class="navTopContainer">
              <div class="navTopContainerLeft">
                  <span>vnshop欢迎你</span>
                  <span v-show="noregister">
                      <!-- <a href="">登录</a><a href="">免费注册</a> -->
                        <router-link class="btn btn--m btn--red" href="javascript:;" to="/login">登录</router-link>
                        <router-link class="btn btn--m btn--red" href="javascript:;" to="/register">免费注册</router-link>
                  </span>
                   <span v-show="logined">{{userID}}</span>
              </div>
              <div class="navTopContainerRight">
                  <ul>
                      <li>每日签到</li>
                      <li>我的订单</li>
                      <li>个人中心</li>
                      <li>客户服务</li>
                      <li>充值中心</li>
                      <li>消费者告知书</li>
                      <li>更多</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="navBottom">
          <div class="navBottomContainer">
              <div class="logo"><a href="#"><img :src="vnLogo"/></a></div>
              <div class="headerSearch">
                  <input type="text" class="search" placeholder="请输入你要搜索的内容" name="search">
                  <button class="searchBtn">搜索</button>
              </div>
              <div class="headerBottomCart" :style="{backgroundImage: 'url(' + cartIcon + ')' }">
                  <em>购物车</em>
              </div>
          </div>
      </div>
  </header>
</template>
<script>
import {setCookie,getCookie} from './../assets/js/cookie' 
export default {
  name:"NavHeader",
  data(){
      return{
          vnLogo:"../../../static/image/header/vn-logo.png",
          cartIcon:"../../../static/image/header/shopping_17.001360544218px_1156679_easyicon.net.png",
          noregister:true,
          logined:false,
          userID:""
      }
  },
   mounted(){  
    if(getCookie("username")){  
        // this.$router.push('/')  
        this.noregister=false;
        this.logined=true;
        this.userID=getCookie("username")
    }
 }, 
  methods:{
      
  }
}
</script>
<style scoped>
    header{
        width:100%;
        height:100%;
    }
    .navTop{
        width: 100%;
        height:30px;
        background-color: #f2f2f2;
       
    }
    .navTopContainer{
        width:1050px;
        height:30px;
        margin:0 auto;
         clear: both;
    }
    .navTopContainerLeft{
        /* width:100%;  */
        float: left;
    }
    .navTopContainerLeft span{
        padding:0 10px;
        line-height:30px;
        font-size: 12px;
    }
    .navTopContainerLeft span a{
        padding:0 5px;
        /* color:#e5e5e5; */
    }
    .navTopContainerRight{
        float: right;
    }
    .navTopContainerRight ul li{
        float: left;
        padding:0 5px;
         line-height:30px;
         font-size: 12px;
    }
    .navBottom{
        width:100%;
        height:100%;
    }
    .navBottomContainer{
        width: 1050px;
        height:100px;
        clear: both;
        margin:0 auto;
    }
    .logo{
        width:250px;
        height:50px;
        margin-top:29px;
        /* display: inline; */
        float: left;
    }
    .logo a{
        width:100%;
        height:100%;
    }
    .logo a img{
        width:100%;
        height:100%;
    }
    .headerSearch{
        margin-left:100px;
        margin-top:29px;
        float: left; 
    }
    .search{
        float: left;
        width: 460px;
        height: 30px;
        border: 3px solid #000;
        outline: none;
    }
    .searchBtn{
        height: 36px;
        float: left;
        width: 50px;
        padding: 2px 0;
        border: none;
        background: #000;
        color: #fff;
    }
    .headerBottomCart{
        float: right;
        margin-top:29px;
        margin-right:10px;
        width:110px;
        height:36px;
        color:#666;
        line-height: 36px;
        border:1px solid #e5e5e5;
        font-size: 16px;
        font-weight:bold;
        background:10px center no-repeat;
    }
    .headerBottomCart em{
        font:inherit;
        font-size: 14px;
    }
    /* .logo{
        width: 250px;
        height:50px;
    } */
</style>

