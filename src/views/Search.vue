<template>
  <div>
     <nav-header></nav-header>
     <section>
       <list-nav></list-nav>
       <!-- <list-content></list-content> -->
       <div class="searchContent" >
          <ul>
              <li v-for="(item, index) in items" :key="index">
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
     </section>
     <nav-footer></nav-footer>
   </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import ListNav from '@/components/ListNav'
// import ListContent from '@/components/ListContent'
export default {
  components:{
    NavHeader,
    NavFooter,
    ListNav,
    // ListContent
  },
  data(){
    return{
      items:[],
      searchText:"",
      page:1,
      pagesize:10
    }
  },
  created(){
    
    console.log(this.items)
    // // this.items=items;
    // this.gettext(item)
    // this.$http({
    //         method:"get",
    //         url:"http://h6.duchengjiu.top/shop/api_goods.php?search_text="+this.searchText+"&page="+this.page+"&pagesize="+this.pagesize,
    //         }).then((res)=>{
    //             this.items=res.data.data;
                  
    //         }).catch((error)=>{
    //             console.log(error)
    //         })
    this.gettext();
  },
  methods:{
    
    gettext(item){
      this.searchText = this.$route.query.search_text;
       this.$http({
            method:"get",
            url:"http://h6.duchengjiu.top/shop/api_goods.php?search_text="+this.searchText+"&page="+this.page+"&pagesize="+this.pagesize,
            }).then((res)=>{
                this.items=res.data.data;
                  
            }).catch((error)=>{
                console.log(error)
            })
    }
  },
    watch:{
       '$route'(to,from){
        this.id=this.$route.query.search_text;
        this.gettext();
      }
    
  }
}
</script>
<style scoped>

 .searchContent{
        overflow: hidden;
        width: 1050px;
        height:100%;
        margin:0 auto;

    }
    .searchContent>ul>li{
        width:200px;
        float:left;
        margin-left: 8px;
        margin-top: 10px;
        background: #9f9f9f;
        position: relative;
        height:233px;
    }
    .searchContent>ul>li img{
        width:200px;
    }
    .searchContent>ul>li>a p{
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
    .searchContent>ul>li>a:hover .cover{
        display: block;
    }
</style>
