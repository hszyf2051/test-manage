<template>
  <!--    :props="props"  props	配置选项，具体看下表
                label	指定节点标签为节点对象的某个属性值
                children	指定子树为节点对象的某个属性值
                isLeaf	指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效

        :load="loadNode"
                加载子树数据的方法，仅当 lazy 属性为true 时生效
                自动执行函数 -- 异步请求数据 
        lazy
            是否懒加载子节点，需与 load 方法结合使用

        show-checkbox 
                show-checkbox	节点是否可被选择
        accordion
            是否每次只打开一个同级树节点展开
        -->
  <div class="tree">
    <el-tree :props="props" :load="loadNode" lazy show-checkbox> </el-tree>
  </div>
</template>

<script>
import { findCategoryById } from '@/utils/product.js'

export default {
  data() {
    return {
      category: [],
      props: {
        label: 'title',
        children: 'zones',
        isLeaf: 'leaf',
      },
    }
  },
  methods: {
    // 根据id查询分类
    Category(id) {
      findCategoryById({
        id,
      }).then((res) => {
        const category = res.data
        console.log(category)
      })
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        // 进入页面 获取第一层的tree数据
        this.Category(1)
        // findProject({
        //   pageNo,
        //   pageSize: 10,
        // }).then((res) => {
        //   this.tableData = res.data.records
        //   this.total = res.data.total
        //   this.pageSize = res.data.size
        //   this.pageNo = res.data.current
        // })
        return resolve([{ title: '一级菜单' }, { title: '一级菜单2' }])
      }
      if (node.level > 1)
        // 请求当前的点击的tree下面的数据
        return resolve([])
    },
  },
}
</script>

<style lang="less" scoped></style>
