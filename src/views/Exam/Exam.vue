<template>
  <div class="goods">
    <!-- 1、搜索区域 -->
    <div class="header">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </div>
    <!-- 2、表格区域内容展示视图数据 -->
    <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="content" label="试题内容"> </el-table-column>
        <el-table-column prop="quesType" label="试题类型" width="100"> </el-table-column>
        <el-table-column prop="level" label="试题等级" width="100"> </el-table-column>
        <el-table-column prop="remark" label="试题备注" width="100"> </el-table-column>
        <el-table-column prop="analysis" label="试题分析"> </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 3、分页 -->
    <div class="page">
      <el-pagination
        :hide-on-single-page="value"
        :total="total"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      input: '',
      total: null,
      tableData: null,
    }
  },
  created() {
    const _this = this
    axios.get('http://localhost:8181/question/findQuestion').then(function (resp) {
      _this.tableData = resp.data.records
      _this.total = resp.data.total
      // console.log(resp)
    })
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handleCurrentChange(currentPage) {
      const _this = this
      axios
        .get('http://localhost:8181/question/findQuestion', {
          params: {
            pageNo: currentPage,
          },
        })
        .then(function (resp) {
          _this.tableData = resp.data.records
          _this.total = resp.data.total
        })
    },
  },
}
</script>

<style lang="less" scoped>
.goods {
  margin: 20px;
}
.header {
  display: flex;
  button {
    margin-left: 15px;
  }
}
.wrapper {
  margin: 20px 0;
}
.page {
  margin: 20px 0;
}
</style>
