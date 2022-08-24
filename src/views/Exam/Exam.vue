<template>
  <div class="goods">
    <!-- 1、搜索区域 -->
    <div class="header">
      <!-- change仅在输入框失去焦点或用户按下回车时触发 -->
      <el-input @change="searchInp" v-model="input" placeholder="请输入试题内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">
        <router-link to="add-Exam" style="color: #fff">添加</router-link>
      </el-button>
    </div>
    <!-- 2、表格区域内容展示视图数据 -->
    <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="content" label="试题内容"> </el-table-column>
        <el-table-column prop="quesType" label="试题类型" width="100"> </el-table-column>
        <el-table-column prop="level" label="试题等级" width="100"> </el-table-column>
        <el-table-column prop="remark" label="试题备注" width="100" :show-overflow-tooltip="true"> </el-table-column>
        <el-table-column prop="analysis" label="试题分析" :show-overflow-tooltip="true"> </el-table-column>
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
      <MyPagination :total="total" :pageSize="pageSize" @changePage="changePage" />
    </div>
  </div>
</template>

<script>
import { findQuestion, findQuestionByContent } from '@/utils/api'
import MyPagination from '@/components/MyPagination.vue'
export default {
  components: { MyPagination },
  data() {
    return {
      input: '',
      total: 10,
      pageSize: 10,
      tableData: [],
      searchType: 1,
    }
  },
  created() {
    this.http(1)
  },
  methods: {
    /**
     * 试题列表
     */
    // http为方法的名字，调用接口直接  接口名字({参数名,参数值}).then((res)) => {具体实现}
    http(pageNo) {
      findQuestion({
        pageNo,
        pageSize: 10,
      }).then((res) => {
        this.tableData = res.records
        this.total = res.total
        this.pageSize = res.size
        this.pageNo = res.current
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    /**
     *  分页跳转页面
     */
    changePage(num) {
      if (this.searchType == 1) {
        this.http(num)
      } else {
        this.http(num)
      }
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
</style>
