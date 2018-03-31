<template>
  <footer>
      <div>
          <p class="about">About NetEase - 公司简介 - 联系方法 - 招聘信息 - 客户服务 - 隐私政策 - 网络营销 - 网站地图</p>
          <p>
            <span>网路文化经营许可证：密网文[2016]0111号</span>
            <span>出版物经营许可证：新出发vn-shop经零字第00136号</span>
            <span>自营经营者信息</span>
        </p>
          <p>
            <i class="firstIcon" :style="{backgroundImage: 'url(' + police + ')' }"></i>
            <a href="#">网安备331号 </a>
            <span>FRESIS公司版权所有©2017-2017</span>
        </p>
          <p>
            <i class="secondIcon" :style="{backgroundImage: 'url(' +policeTwo + ')' }"></i>
            <i class="thirdIcon" :style="{backgroundImage: 'url(' + policethree + ')' }"></i>
        </p>
      </div>
  </footer>
</template>

<script>

export default {
  name:"NavFooter",
  data(){
      return{
          police:'../../../static/image/header/police.png',
          policeTwo:'../../../static/image/header/police2.png',
          policethree:'../../../static/image/header/police3.gif',
      }
  }
}
</script>
<style scoped>
    footer{
        height: 152px;
        width: 100%;
        background: #000;
        color: #C2C2C2;
        padding-top: 1px;
    }
    footer div{
        margin:0 auto;
        width:1050px;
        height:152px;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
    }
    footer div p.about{
        margin-top:14px;
    }
    footer div p{
        height: 30px;
        line-height: 30px;
    }
    .firstIcon {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: text-bottom;
        background: no-repeat;
    }
    .secondIcon {
        display: inline-block;
        width: 80px;
        height: 30px;
        background:no-repeat center center/80px 30px;
    }
    .thirdIcon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: no-repeat center center/30px 30px;
    }
</style>
