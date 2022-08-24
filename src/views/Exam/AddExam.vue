<template>
  <div class="add-exam">
    <!-- 面包屑导航 -->
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/exam' }"
          >试题管理</el-breadcrumb-item
        >
        <el-breadcrumb-item>添加考试</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 添加考试表单 -->
    <div class="exam-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="题目内容" prop="content">
          <el-input v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item label="题目类型" prop="quesType">
          <el-select v-model="ruleForm.quesType" placeholder="请选择题目类型">
            <el-option label="单选题" value="1"></el-option>
            <el-option label="多选题" value="2"></el-option>
            <el-option label="判断题" value="3"></el-option>
            <el-option label="主观题" value="4"></el-option>
            <el-option label="音频题" value="5"></el-option>
            <el-option label="视频题" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="题目等级" prop="level">
          <el-radio-group v-model="ruleForm.level">
            <el-radio label="普通" value="1"></el-radio>
            <el-radio label="中等" value="2"></el-radio>
            <el-radio label="困难" value="3"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="整题解析" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        content: "",
        quesType: "",
        delivery: false,
        type: [],
        level: "",
        desc: "",
      },
      rules: {
        content: [
          { required: true, message: "请输入题目内容", trigger: "blur" },
        ],
        quesType: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        level: [
          { required: true, message: "请选择试题难度", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写整题分析", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.add-exam {
  margin: 15px;
}
.title {
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
</style>
