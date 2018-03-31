<template>
   <div>
     <nav-header></nav-header>
     <section>
       <list-nav></list-nav>
     </section>
     <nav-footer></nav-footer>
   </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import ListNav from '@/components/ListNav'
export default {
  components:{
    NavHeader,
    NavFooter,
    ListNav
  }
}
</script>
<style scoped>
section{
  width: 100%;
  height:500px;
  background: red;

}
</style>

