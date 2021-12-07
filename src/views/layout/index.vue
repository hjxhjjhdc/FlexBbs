<template>
  <a-layout>
    <a-layout-header class="layoutContent">
      <Header class="myContent"/>
    </a-layout-header>
    <a-layout-content class="layoutContent">
      <MyContent class="myContent"/>
    </a-layout-content>
    <a-layout-footer>
      <Footer/>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/header.vue';
import MyContent from '@/components/content.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {Header, MyContent, Footer}
};
</script>

<style lang="less" scoped>
.layoutContent {
  display: flex;
  justify-content: center;

  .myContent {
    width: 80%;
  }
}

</style>