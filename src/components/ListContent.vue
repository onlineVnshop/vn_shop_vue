<template>
  <div class="listContent">
      <ul>
          <li v-for="item in items">
              <router-link :to="{path:'/goodsDesc',query: {goods_id: item.goods_id}}">
                  <img :src="item.goods_thumb">
                  <p>{{item.goods_name}}</p>
                  <div class="cover">
                      <br>{{item.goods_desc}}<br>
                  </div>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"ListContent",
  data(){
      return{
          items:[],
          page:1,
          pagesize:20,
          pageAsize:10,
        //   goodsId:''
      }
  },
//   mounted(){
//       this.$http({
//           method:"get",
//           url:"http://h6.duchengjiu.top/shop/api_goods.php?page="+this.page+"&pagesize="+this.pagesize,
//         //   data:{
//         //       page:this.page,
//         //       pagesize:this.pagesize,
//         //   },
//         //  transformRequest:[function(data){
//         //               let ret='';
//         //               for(let it in data){
//         //                   ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
//         //               }
//         //               return ret
//         //           }]
//       }).then((res)=>{
//           console.log(res.data.data);
//           this.items=res.data.data;
//           this.goodsId=res.data.data.goods_id
//         //   this.goods_id=res.data.data.goods_id;
//       }).catch((error)=>{
//           console.log(error)
//       })
  
//   },
  created(){
      this.fetchData()
  },
  methods:{
      
      fetchData(){
        this.catId = this.$route.query.cat_id;
        // console.log(this.catId)
        this.$http({
            method:"get",
            url:"http://h6.duchengjiu.top/shop/api_goods.php?cat_id="+this.catId+"&page="+this.page+"&pagesize="+this.pageAsize,
        }).then((res)=>{
            this.items=res.data.data;
            // console.log(this.items)
            
        }).catch((error)=>{
            console.log(error)
        })
        
      }
  },
  watch:{
       '$route'(to,from){
        this.id=this.$route.query.id;
        this.fetchData();
      }
    
  }
}
</script>
<style scoped>
    .listContent{
        overflow: hidden;
        width: 1050px;
        height:100%;
        margin:0 auto;

    }
    .listContent>ul>li{
        width:200px;
        float:left;
        margin-left: 8px;
        margin-top: 10px;
        background: #9f9f9f;
        position: relative;
        height:233px;
    }
    .listContent>ul>li img{
        width:200px;
    }
    .listContent>ul>li>a p{
        text-align: center;
        height:18px;
        margin:5px 0;
        color: orange;
        overflow: hidden;
    }
    .cover{
        width:200px;
        height:200px;
        position: absolute;
        left:0;
        top:0;
        background: rgba(0,0,0, 0.3);
        display:none;   
        text-align: center;
        line-height: 54px;
        font-size: 16px;
    }
    .cover>br{
        color: darkred;
        text-align: center;
        line-height: 54px;
        font-size: 16px;
    }
    .listContent>ul>li>a:hover .cover{
        display: block;
    }
</style>

