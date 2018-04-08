<template>
   <div>
     <nav-header></nav-header>
     <section>
       <list-nav></list-nav>
       <carousel></carousel>
       <list-content></list-content>
       <content-bottom></content-bottom>
     </section>
     <nav-footer></nav-footer>
   </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import ListNav from '@/components/ListNav'
import ListContent from '@/components/ListContent'
import Carousel from '@/components/Carousel'
import ContentBottom from '@/components/ContentBottom'
import {scroll}from './../assets/js/scroll' 
export default {
  components:{
    NavHeader,
    NavFooter,
    ListNav,
    Carousel,
    ListContent,
    ContentBottom
  },

}
</script>
<style scoped>
section{
  width: 100%;
  /* height:500px; */
  /* background: red; */

}

</style>

