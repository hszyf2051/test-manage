<template>
  <div>
    <el-menu
      :default-active="$router.path"
      class="el-menu-vertical-demo"
      background-color="rgb(24, 53, 85)"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <!-- <span slot="title">后台管理系统</span> -->
        <span slot="title">{{ $t('menu.title') }}</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <!-- <span slot="title">首页</span> -->
        <span slot="title">{{ $t('menu.data') }}</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-document"></i>
        <!-- <span slot="title">商品管理</span> -->
        <span slot="title">{{ $t('menu.goods') }}</span>
      </el-menu-item>
      <el-menu-item index="/params">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">规格参数</span> -->
        <span slot="title">{{ $t('menu.params') }}</span>
      </el-menu-item>
      <el-menu-item index="/advert">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">广告分类</span> -->
        <span slot="title">{{ $t('menu.advert') }}</span>
      </el-menu-item>
      <el-menu-item index="/exam">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">试题管理</span> -->
        <span slot="title">{{ $t('menu.exam') }}</span>
      </el-menu-item>
      <!-- 下拉导航 -->
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <!-- <span>订单管理</span> -->
          <span>{{ $t('menu.order') }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-setting"></i>
            <!-- <span slot="title">订单列表</span> -->
            <span slot="title">{{ $t('menu.orderList') }}</span>
          </el-menu-item>
          <el-menu-item index="/order/order-back">
            <i class="el-icon-setting"></i>
            <!-- <span slot="title">退货管理</span> -->
            <span slot="title">{{ $t('menu.orderBack') }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['isCollapse'],
  data() {
    return {
      // isCollapse: true,
    }
  },
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
  .is-active {
    background: #1e78bf;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
