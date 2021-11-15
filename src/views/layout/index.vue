<template>
 <a-layout>
    <a-layout-header><Header /></a-layout-header>
    <a-layout-content><Content /></a-layout-content>
    <a-layout-footer><Footer /></a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/header.vue';
import Content from '@/components/content.vue';
import Footer from '@/components/footer.vue';
export default {
  components:{Header,Content,Footer}
};
</script>

<style lang="less" scoped>

</style>