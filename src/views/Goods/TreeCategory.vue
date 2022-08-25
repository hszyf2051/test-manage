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
    <el-tree :props="props" :load="loadNode" lazy accordion> </el-tree>
  </div>
</template>

<script>
import { findCategoryById } from "@/utils/product.js";
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    // 加载节点
    loadNode(node, resolve) {
      console.log(node, "node");
      if (node.level === 0) {
        findCategoryById({
          id: 1,
        }).then((res) => {
          console.log(res);
          return resolve(res.data);
        });
      }
      if (node.level >= 1) {
        // 请求当前的点击的tree下面的数据
        findCategoryById({
          id: node.data.cid,
        }).then((res) => {
          if(res.code === 200){
          console.log(res.data);
          return resolve(res.data);
          } else{
            return resolve([]);
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
