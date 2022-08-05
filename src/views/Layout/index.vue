<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <!-- :isCollapse="isCollapse" 父传子-->
    <Mymenu class="menu" :isCollapse="isCollapse" />
    <!-- 右侧内容区域 -->
    <Content
      class="content"
      :class="{ isActive: isCollapse }"
      @changeCollapse="changeCollapse"
      :isCollapse="isCollapse"
    />
  </div>
</template>

<script>
import Mymenu from './Mymenu.vue'
import Content from './Content.vue'
export default {
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    changeCollapse() {
      // 取反
      this.isCollapse = !this.isCollapse
    },
  },
  components: {
    Mymenu,
    Content,
  },
}
</script>

<style lang="less" scope>
// .layout {
//   .content {
//     margin-left: 200px;
//     // 过渡动画平滑
//     transition: margin-left ease-in-out 0.3s;
//   }
//   .menu {
//     background-color: rgb(24, 53, 85);
//     position: fixed;
//     top: 0;
//     bottom: 0;
//   }

//   .isActive {
//     margin-left: 64px;
//   }
// }
.layout {
  .menu {
    // width: 200px;
    // min-height: 500px;
    background: #112f50;
    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content {
    margin-left: 200px;
    transition: all 0.3s;
  }
  .isActive {
    margin-left: 64px;
  }
}
</style>
