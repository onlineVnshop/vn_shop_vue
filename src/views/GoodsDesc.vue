<template>
  <div>
     <nav-header></nav-header>
     <div class="content">
        <div class="goods clear" id="goods">
            <img :src="items.goods_thumb">
            <div class="goods-right">
                <h2 style="font-size: 14px;">{{items.goods_name}}</h2>
                <p style="font-size: 14px;">
                    <br>{{items.goods_desc}}<br>
                </p><div class="goods-price">
                    <span class="price">价格 <em> ￥ {{items.price}}</em></span>
                    <br>
                    <span>折扣价<em> ￥260.00</em> <a href="#">降价通知</a> </span>
                    </div>
                    <ul class="goods-right-ul">
                        <li>
                            <em>活动</em>
                            <span>新人专享</span>
                            <a href="#">进口爆款至一折</a>
                        </li>
                        <li>
                            <em>运费</em>
                            <span>至</span>
                        </li>
                        <li class="goods-count">
                            <em>数量</em>
                            <a href="javascript:;" id="sub">-</a>
                                <input type="text" value="1" id="goods_count">
                            <a href="javascript:;" id="sum">+</a>
                        </li>
                        <li class="goods-buy">
                            <span id="purchase" class="goods-buy-span">立即购买</span>
                            <span id="addCart" class="goods-buy-cart">加入购物车</span>
                            </li>
                    
                    </ul>
                </div>
            </div>
       </div>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
export default {
  components:{
      NavHeader,
  },
  data(){
      return{
          items:""
      }
  },
  created(){
      this.goodsId = this.$route.query.goods_id;
      console.log(this.goodsId)
      this.$http({
          method:"get",
          url:"http://h6.duchengjiu.top/shop/api_goods.php?goods_id="+this.goodsId
      }).then((res)=>{
        console.log(res)
        this.items=res.data.data[0];
        console.log(this.items)
      }).catch((error)=>{
          console.log(error)
      })
  },
}
</script>
<style scoped>
.content{
    width:1050px;
    margin: 0 auto;
}
.goods{
    margin-top:20px;
    clear: both;
}
.goods img{
    float: left;
    width: 400px;
}
.goods-right{
    display: inline-block;
    width:630px;
    margin-left:20px;
    margin-top:20px;
}
.goods-right h2{
    font-size: 14px;
    text-align: left
}
.goods-right>p{
    font-size:14px;
    color:red;
    margin-top:10px;
    text-align: left
}
.goods-price{
    height:104px;
    background:#f9f9f9;
    margin-top:20px;
    line-height:50px;
    border:1px dashed grey;
    text-align: left
}
.goods-price span{
    margin-left: 10px;
}
.price{
    
    font-size:16px;
}
.price em{
    text-decoration: line-through;
    margin-left: 20px;
    color:darkred;
}
.price a{
    color:red;
    font-size: 14px;
}
.goods-right-ul{
    margin-top:20px;
    margin-left:10px;
}
.goods-right-ul li{
    margin-top:10px;
    font-size: 14px;
    text-align: left;
}
.goods-right-ul li em{
    margin-left:20px;
}
.goods-right-ul li span{
    margin-right:10px;
    margin-left:10px;
}
.goods-right-ul li a{
    color: #000;
}
.goods-count em{
    margin-left:20px;
    font-style:normal; 
}
.goods-count a{
    display: inline-block;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    background: #F3F3F3;
}
.goods-count input{
    width: 20px;
    text-align: center;
}
.goods-buy{
    margin-top:40px;
}
.goods-buy span{
    display: inline-block;
    width: 160px;
    height: 50px;
    background: #E31436;
    margin-right: 20px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}
</style>
