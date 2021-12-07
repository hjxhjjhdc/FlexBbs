<template>
<!--  userInfo-->
  <a-card :bordered="false" size="small">
    <a-avatar >
      <template #icon>
        <UserOutlined />
      </template>
    </a-avatar>
  </a-card>
</template>

<script>
import {UserOutlined} from '@ant-design/icons-vue';

export default {
  name: "aside",
  components: {UserOutlined}
}
</script>

<style scoped>

</style>