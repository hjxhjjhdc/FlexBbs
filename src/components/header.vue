<template>
  <div class="backgroundBlur">
  </div>
  <div style="width: 80%">
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="mail">
        <template #icon>
          <HomeOutlined/>
        </template>
        主页
      </a-menu-item>
    </a-menu>
  </div>

</template>

<script lang='ts'>
import {defineComponent, ref} from "vue";
import {MailOutlined, HomeOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    MailOutlined,
    HomeOutlined,
  },
  setup() {
    const current = ref<string[]>(["mail"]);
    return {
      current,
    };
  },
});
</script>

<style lang="less" scoped>
*{
  background-color: transparent !important;
}
.backgroundBlur{
position: absolute;
  width: 100%;
  height: 300px;
  top: -150px;
  background-color: #fff !important;
  filter: blur(70px);

}

</style>