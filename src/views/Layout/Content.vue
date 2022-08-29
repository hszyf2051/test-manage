<template>
  <div>
    <div class="header">
      <i v-if="isCollapse" @click="changeMenu" class="iconfont icon-yousuojin"></i>
      <i v-else @click="changeMenu" class="iconfont icon-zuosuojin"></i>
      <div class="header-right">
        <el-dropdown @command="clickLang">
          <span class="el-dropdown-link"> 选择语言 <i class="el-icon-arrow-down el-icon--right"></i> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user">
          欢迎：XXX
          <span>退出登录</span>
        </div>
      </div>
    </div>
    <!-- 内容区域，路由出口 -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  props: ['isCollapse'],
  data() {
    return {}
  },
  methods: {
    clickLang(command) {
      console.log('1111', command)
      this.$i18n.locale = command
    },
    changeMenu() {
      // 点击按钮 修改父组件的数据 isCollapse
      this.$emit('changeCollapse')
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #1e78bf;
  .iconfont {
    font-size: 24px;
  }
}
.header-right {
  float: right;
  padding-right: 20px;
  display: flex;
  .user {
    margin-left: 20px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
