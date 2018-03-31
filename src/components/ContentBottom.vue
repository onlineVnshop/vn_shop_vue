<template>
  <div>
      <div class="content-bottom">
        <a href="#">更多精品好货></a>
        <div class="selfShop">
            <div>
                <p>FRESIS自营 100%正品</p>
                <p>更多品类更多商品></p>
            </div>
        </div>
      </div>
      <div class="fourConfirm clear">
        <ul>
            <li>
                <i></i>
                <div>
                    <p>100%正品</p>
                    <p>正品保证 假一赔十</p>
                </div>
            </li>
            <li>
                <i></i>
                <div>
                    <p>低价保障</p>
                    <p>缩减中间环节 确保低价</p>
                </div>
            </li>
            <li>
                <i></i>
                <div>
                    <p>30天无忧退货</p>
                    <p>国内退货 售后无忧</p>
                </div>
            </li>
            <li>
                <i></i>
                <div>
                    <p>满88包邮</p>
                    <p>部分特殊商品除外</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:"ContentBottom"
}
</script>
<style scoped>
    .content-bottom{
        width:1050px;
        margin:0 auto;
        text-align: center;
    }
    .content-bottom a{
    display: inline-block;
    text-align: center;
    margin:65px 0 65px 0px;
    font-size: 26px;
    font-weight: bold;
    border: 1px solid #000;
    border-radius: 4px;
}
.content-bottom .selfShop{
    width: 100%;
    height:250px;
    background: #D71F45;
    text-align: center;
}
.content-bottom .selfShop div{
    font-size: 26px;
    color:#fff;
    font-weight: bold;
    display: inline-block;
    margin-top:86px;
}
.fourConfirm{
    width:100%;
    text-align: center;
}
.fourConfirm ul{
   
    display: inline-block;
    background: #F3F3F3;
    text-align: center;
    height: 126px;
    
}
.fourConfirm ul li{
    float:left;
    width: 300px;
    text-align: center;
    height: 126px;
    vertical-align: middle;
}
.fourConfirm  ul>li:nth-child(0) i{
    display: inline-block;
    width:40px;
    height:40px;
    /* background: url(../images/header/icon1.png) -750px 0 no-repeat; */
}
.fourConfirm ul li div{
    /*margin-top: 60px;*/
}
.fourConfirm ul li div{
    /* margin:auto 0px;  */
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    font-weight:bold;
    color: darkred;
    line-height: 60px;
}
</style>


