<template>
    <div>
        <div class="carousel clear">
            <div class="smallCarousel" id="smallCarousel">
                <div class="small-cover">
                    <a class="select" href="#"><img :src="oneBp" alt=""></a>
                    <a href="#"><img :src="twoBp" alt=""></a>
                </div>
                <div class="circle">
                    <span id="leftBtn" :style="{backgroundImage:+'url('+oneBg+')'}"></span>
                    <span id="rightBtn" :style="{backgroundImage:+'url('+twoBg+')'}"></span>
                </div>
            </div>
            <div class="bigCarousel" id="bigCarousel">
                <div class="bigCover">
                    <a href="#"><img :src="oneSp" alt=""></a>
                    <a href="#"><img :src="twoSp" alt=""></a>
                </div>
            </div>
            <div class="userLogin">
                <img class="userImg" :src="userImage" alt="">
                <!-- <p>立刻登录，立即省钱</p> -->
                <div class="userLogin-bottom">
                    <!-- <span>用户登录</span>
                    <span>新用户注册</span> -->
                    <div>
                        <img class="img-one" :src="oneEwm" alt="">
                        <img class="img-two" :src="twoEwm" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {carousel} from './../assets/js/carousel'
export default {

  name:"Carousel",
  data(){
      return{
          oneBp:"../../../static/image/carousel/TB1QG1rSXXXXXb_XpXXXXXXXXXX-440-680.jpg",
          twoBp:"../../../static/image/carousel/TB10EaoSXXXXXcqXpXXXXXXXXXX-440-680.jpg",    
          oneSp:"../../../static/image/carousel/TB1zo5pSXXXXXXZXXXXXXXXXXXX-750-340.jpg",
          twoSp:"../../../static/image/carousel/TB1zZX9SXXXXXcxXVXXXXXXXXXX-750-340.jpg",
          userImage:"../../../static/image/carousel/TB1oaisOFXXXXatXVXXXXXXXXXX-70-70.png",
          oneEwm:"../../../static/image/carousel/TB1tvcJPXXXXXcVXVXXXXXXXXXX-316-36.png",
          twoEwm:"../../../static/image/carousel/TB1vTZ3PXXXXXayXXXXXXXXXXXX-212-212.png",
          oneBg:"../../../static/image/carousel/TB1Uac1OFXXXXa.XFXXXXXXXXXX-44-88.png",
          twoBg:"../../../static/image/carousel/TB1Uac1OFXXXXa.XFXXXXXXXXXX-44-88.png",
      }
  },
  mounted(){
     carousel()
  }
}

</script>
<style scoped>
.carousel{
  /* width: 100%; */
  width:1300px;
  /* height: 340px; */
  margin:0 auto;
}
 .carousel .smallCarousel{
   margin-left: 80px;
   width: 220px;
   height: 340px;
   float:left;
   position:relative;
}
.carousel .smallCarousel .small-cover{
  width:550px;
}
.carousel .smallCarousel a{
  position:absolute;
  left:0;
  top:0;
  display: none;
}
.carousel .smallCarousel a.select{
  display: block;
}

.carousel .smallCarousel a img{
  width: 220px;
  height:340px;
}
.smallCarousel .circle span{
  display: inline-block;
  width: 22px;
  height: 20px;
  position:absolute;
  cursor: pointer;
}
#leftBtn{
  background: no-repeat  0 0/20px 40px ;
  left:4px;
  top:136px;
}
#rightBtn{
  background:  no-repeat   0 -20px/20px 40px ;
  right:4px;
  top:136px;
}
 .carousel .bigCarousel{
   width: 750px;
   background: none;
   height: 340px;
   float:left;
   position:relative;
   overflow: hidden;
}
.bigCarousel .bigCover{
  width:4000px;
  position:absolute;
  left:0;
  top:0;
}
.bigCarousel .bigCover a{
  float:left;
}
 .carousel .userLogin{
   width:220px;
   background:none;
   height: 340px;
   float:left;
}
 /* .carousel , */
 .userLogin-bottom div img{
  width:70%;
}
</style>

