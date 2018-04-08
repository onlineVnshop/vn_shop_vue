<template>
  <div>
      <nav-header></nav-header>
      <section>
          <list-nav></list-nav>
          <list-content></list-content>
      </section>
      <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import ListNav from '@/components/ListNav'
import ListContent from '@/components/ListContent'
export default {
  components:{
      NavHeader,
      NavFooter,
      ListNav,
      ListContent
  }
}
</script>
<style scoped>

</style>

