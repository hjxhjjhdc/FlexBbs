<template>
  <div style=" padding: 20px">
    <a-row :gutter="16">
<!--      left-->
      <a-col :span="5">
        <a-card  :bordered="false">
          <myAside></myAside>
        </a-card>
      </a-col>
<!--      center-->
      <a-col :span="14">
        <a-card  :bordered="false">
          <p style="height: 1000px">card content</p>
        </a-card>
      </a-col>
<!--      right-->
      <a-col :span="5">
        <a-card  :bordered="false">
          <p>card content</p>
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