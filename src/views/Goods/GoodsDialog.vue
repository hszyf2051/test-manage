<template>
  <div>
    <!-- 
        title="添加商品" 弹框的标题
        :visible.sync="dialogVisible" 控制弹框的显示隐藏 boolean true提示
        width="70%" 宽度大小

     -->
    <el-dialog title="添加商品" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <!-- 内容区域 -->
      <!-- 添加商品表单 -->
      <div class="goods-form">
        <el-form :model="goodsForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="类目选择" prop="category">
            <el-button type="primary" @click="innerVisible = true">类目选择</el-button>
            <span class="categorySelect">{{ goodsForm.category }}</span>
          </el-form-item>
          <el-form-item label="商品名称" prop="title">
            <el-input v-model="goodsForm.title"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model="goodsForm.price"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="num">
            <el-input v-model="goodsForm.num"></el-input>
          </el-form-item>
          <el-form-item label="商品卖点" prop="sellPoint">
            <el-input v-model="goodsForm.sellPoint"></el-input>
          </el-form-item>
          <el-form-item label="上架时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="goodsForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="goodsForm.date2" style="width: 100%"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="商品图片" prop="image">
            <el-button type="primary" @click="innerVisibleImg = true">上传图片</el-button>
            <img :src="goodsForm.image" height="200px" style="margin-left:20px" alt=""></img>
          </el-form-item>
          <el-form-item label="商品描述" prop="descs">
            <!-- <textarea name="text" id="" cols="30" rows="10"></textarea> -->
            <wangeditor @sendEditor="sendEditor"/>
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item> -->
        </el-form>
      </div>
      <!-- 弹窗底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
      <!-- 1、内弹框  类目选择 -->
      <el-dialog width="40%" title="类目选择" :visible.sync="innerVisible" append-to-body>
        <TreeCategory @sendTreeData="sendTreeData" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" @click="showTreeData">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 2、内弹框  上传图片 -->
      <el-dialog width="40%" title="上传图片" :visible.sync="innerVisibleImg" append-to-body>
        <UploadImg @sendImg="sendImg" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisibleImg = false">取 消</el-button>
          <el-button type="primary" @click="showImg">确 定</el-button>
        </span>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import TreeCategory from './TreeCategory.vue'
import UploadImg from './UploadImg.vue'
import wangeditor from './WangEditor.vue'
export default {
  components: {
    TreeCategory,
    UploadImg,
    wangeditor,
  },
  data() {
    return {
      dialogVisible: false, // 外弹框
      innerVisible: false, // 内弹框
      innerVisibleImg: false, // 图片弹框
      treeData: {}, // 接收子组件传来的tree数据
      imgUrl: "",

      goodsForm: {
        // 表单容器--对象
        title: "", // 商品名称
        price: "",
        num: "",
        sellPoint: "",
        image: "",
        descs: "",
        cid:"",  // 类目的id
        category: "", // 商品类目
        date1: "", //商品时间
        date2: "", //商品时间
        type: [],
      },
      rules: {
        // 校验规则
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '名称在 2 到 10 个字符',
            trigger: 'blur',
          },
        ],
        price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
        num: [{ required: true, message: '请输入商品数量', trigger: 'blur' }],
        // date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        // date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
      },
    }
  },
  methods: {
    /**
     * 获取富文本中的数据
     */
    sendEditor(val) {
      this.goodsForm.descs = val;
    },
    /**
     * 显示图片地址
     */
    sendImg(val) {
      console.log('显示图片地址', val)
      this.imgUrl = val
    },
    /**
     * 显示图片
     */
    showImg() {
      this.innerVisibleImg = false
      this.goodsForm.image = this.imgUrl
    },
    /**
     * 回显tree数据
     */
    showTreeData() {
      this.innerVisible = false
      this.goodsForm.category = this.treeData.name
      this.goodsForm.cid = this.treeData.cid
    },
    /**
     * 获取子组件传来的tree数据，并赋值
     */
    sendTreeData(val) {
      console.log(val, 'tree数据')
      this.treeData = val
    },
    close() {
      // 自定义事件 通知父组件修改变量
      this.$emit('changeDialog')
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          // done()
          this.dialogVisible = false
        })
        .catch((_) => {})
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('获取输入的信息',this.goodsForm)
          let {title,cid,category,sellPoint,price,num,descs,image} = this.goodsForm;
          this.$api.addGoods(
            // params
            this.goodsForm
          ).then(res=>{
            console.log("添加----实现---",res.data)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
.line {
  text-align: center;
}
.categorySelect {
  margin: 10px;
  padding: 10px;
}
</style>
