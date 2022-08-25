<template>
  <div class="page" style="text-align: center; margin: 20px">
    <el-pagination
      :hide-on-single-page="value"
      background
      layout="total,prev, pager, next,jumper"
      :total="total"
      :page-size="pageSize"
      @current-change="changePage"
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
  data() {
    return {
      value: false,
    }
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
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
