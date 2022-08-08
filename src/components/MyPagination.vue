<template>
  <div class="page">
    <el-pagination
      :hide-on-single-page="value"
      background
      layout="total,prev, pager, next,jumper"
      :total="total"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
}
</script>

<style lang="less" scoped>
.page {
  text-align: center;
  margin: 20px;
}
</style>
