<template>
  <div class="goods">
    <!-- 1、搜索区域 -->
    <div class="header">
      <!-- change仅在输入框失去焦点或用户按下回车时触发 -->
      <el-input
        @change="searchInp"
        v-model="input"
        placeholder="请输入物品名称"
      ></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">
        <router-link to="add-Goods" style="color: #fff">页面添加</router-link>
      </el-button>
      <el-button type="primary">
        <router-link to="add-Goods" style="color: #fff">添加</router-link>
      </el-button>
    </div>
    <!-- 2、表格区域内容展示视图数据 -->
    <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="商品ID" width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="商品名称"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="100">
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="category" label="规格类目">
        </el-table-column>
        <el-table-column
          prop="image"
          label="商品图片"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="sellPoint"
          label="商品卖点"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="descs"
          label="商品描述"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column prop="options" label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--  3、分页 -->
    <div class="page">
      <MyPagination
        :total="total"
        :pageSize="pageSize"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script>
import { findProject, findProjectByTitle } from "@/utils/product.js";
import MyPagination from "../../components/MyPagination.vue";
export default {
  components: {
    MyPagination,
  },
  data() {
    return {
      input: "",
      total: 10,
      pageSize: 10,
      tableData: [],
      searchType: 1,
    };
  },
  created() {
    this.http(1);
  },
  methods: {
    /**
     * 商品列表
     */
    http(pageNo) {
      findProject({
        pageNo,
        pageSize: 10,
      }).then((res) => {
        this.tableData = res.data.records;
        this.total = res.data.total;
        this.pageSize = res.data.size;
        this.pageNo = res.data.current;
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    /**
     *  分页跳转页面
     */
    changePage(num) {
      if (this.searchType == 1) {
        this.http(num);
      } else {
        this.http(num);
      }
    },
    /**
     * 搜索查询数据
     */
    searchInp(title) {
      console.log(title);
      findProjectByTitle({
        title,
      }).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.tableData = res.data.records;
          this.total = res.data.total;
          this.pageSize = res.data.size;
          this.pageNo = res.data.current;
          this.searchType = 2;
        } else {
          this.tableData = [];
        }
      });
    },
  },
};
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
