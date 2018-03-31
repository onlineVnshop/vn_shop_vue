<template>
    <div class="listNavContainer">
         <ul>
            <li v-for="items in catList"><router-link to="/search:cat_id">{{items.cat_name}}</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
  name:"ListNav",
  data(){
      return{
          catList:[],
      }
  },
  
   created(){
      this.$http({
          method:"get",
          url:"http://h6.duchengjiu.top/shop/api_cat.php",

      }).then((res)=>{
        //   console.log(res)
          this.catList=res.data.data
        //   console.log(this.catList)
      }).catch((error)=>{
          console.log(error)
      })
  }
}
</script>
<style scoped>
    .listNavContainer{
        width:100%;
       
        height:30px;
        background-color: #bf0524;
    }
    .listNavContainer ul{
         width:1050px;
        margin:0 auto;
        height:30px;
    }
    .listNavContainer ul li{
        float: left;
        width:105px;
        height:30px;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
        background-color: #bf0524;
    }
    .listNavContainer ul li a{
        color:black
    }
    .listNavContainer ul li:hover{
        background: red;
       
    }
    .listNavContainer ul li:hover a{
        color:white;
    }
</style>

