<template>
  <div style=" padding: 20px">
    <a-row :gutter="16">
<!--      left-->
      <a-col :span="5">
          <myAside></myAside>
      </a-col>
<!--      center-->
      <a-col :span="14">
        <a-card  :bordered="false" style="min-height: 80vh">
          <router-view >
          </router-view>
        </a-card>
      </a-col>
<!--      right-->
      <a-col :span="5">
        <a-card  :bordered="false">
          唠叨、音乐盒
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import myAside from "./aside.vue";
export default {
name:'content',
  components:{myAside}

}
</script>

<style>

</style>