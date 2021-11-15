<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <template #icon>
        <HomeOutlined />
      </template>
      主页
    </a-menu-item>
  </a-menu>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { MailOutlined, HomeOutlined } from "@ant-design/icons-vue";
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

<style>
</style>