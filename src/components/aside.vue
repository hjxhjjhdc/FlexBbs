<template>
  <!--  userInfo-->
  <a-card :bordered="false" size="small">
   <div class="userInfo">
     <a-avatar>
       <template #icon>
         <UserOutlined/>
       </template>
     </a-avatar>
     <p>
     <span>Wine</span>
     <span>Web前端工程师</span>
     </p>
   </div>
  </a-card>
  <a-card :bordered="false" class="banner">
<!--    <menu-list></menu-list>-->
    menulist...
    <br>
    文章、帖子、唠叨、书籍、个人说明
  </a-card>
  <a-card :bordered="false" class="banner">
    设置
  </a-card>
</template>

<script>
import {UserOutlined} from '@ant-design/icons-vue';


export default {
  name: "aside",
  components: {UserOutlined}
}
</script>

<style scoped lang="less">
.userInfo{
  display: flex;
  justify-content: space-between;
}
.banner{
  margin-top: 15px;
}
</style>