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
          欢迎：{{ userinfo.user }}
          <i class="iconfont icon-tuichu" @click="loginout"></i>
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
import { mapState, mapMutations } from 'vuex'
export default {
  props: ['isCollapse'],
  computed: {
    ...mapState('loginModule', ['userinfo']),
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations('loginModule', ['clearUser']),
    clickLang(command) {
      this.$i18n.locale = command
    },
    changeMenu() {
      // 点击按钮 修改父组件的数据 isCollapse
      this.$emit('changeCollapse')
    },
    loginout() {
      // 退出登录
      // 清空vuex数据
      this.clearUser()
      // 清空本地存储
      localStorage.removeItem('user')
      // 返回登录
      this.$router.push('/login')
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
    font-size: 20px;
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
.icon-tuichu {
  font-size: 10px;
  padding: 10px;
}
</style>
