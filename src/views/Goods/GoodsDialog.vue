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
          <el-form-item label="类目选择" prop="title">
            <el-button type="primary" @click="innerVisible = true">类目选择</el-button>
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
          <el-form-item label="活动时间">
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
            <el-button type="primary">上传图片</el-button>
          </el-form-item>
          <el-form-item label="商品描述" prop="descs">
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 弹窗底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
      <!-- 内弹框  类目选择 -->
      <el-dialog width="40%" title="类目选择" :visible.sync="innerVisible" append-to-body>
        <TreeCategory />
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import TreeCategory from './TreeCategory.vue'
export default {
  components: {
    TreeCategory,
  },
  data() {
    return {
      dialogVisible: false, // 外弹框
      innerVisible: false, // 内弹框
      goodsForm: {
        // 表单容器--对象
        title: '', // 商品名称
        price: '',
        num: '',
        sellPoint: '',
        image: '',
        descs: '',
        category: '', // 商品类目
        data1: '',
        data2: '',
        type: [],
        time: '', // 商品时间
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
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
      },
    }
  },
  methods: {
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
</style>
