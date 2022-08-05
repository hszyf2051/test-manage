<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <Mymenu class="menu" />
    <!-- 右侧内容区域 -->
    <Content class="content" />
  </div>
</template>

<script>
import Mymenu from './Mymenu.vue'
import Content from './Content.vue'
export default {
  components: {
    Mymenu,
    Content,
  },
}
</script>

<style lang="less" scoped>
.layout {
  .menu {
    width: 200px;
    min-height: 500px;
    background-color: rgb(24, 53, 85);
    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content {
    margin-left: 200px;
  }
}
</style>
