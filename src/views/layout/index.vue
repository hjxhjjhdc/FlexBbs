<template>
  <a-layout class="layout">
    <a-layout-header class="flex myHeader">
      <Header class="content"/>
    </a-layout-header>
    <a-layout-content class="flex layoutContent">
      <MyContent class="content myContent"/>
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
.flex {
  display: flex;
  justify-content: center;

  .content {
    width: 80%;
  }
}

.layoutContent {
  .myContent {
    margin-top: 64px;
  }
}

.myHeader {
  position: fixed;
  z-index: 9;
  width: 100%;
  //background-color:transparent;
  opacity:.8;
  overflow: hidden;
}
.layout{
  min-height: 100vh;
}
</style>