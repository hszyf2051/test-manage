<template>
  <div>
    <div class="login-box">
      <h3 class="title">登录页面</h3>
      <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ validator: validateUser, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
      },
    }
  },
  methods: {
    ...mapMutations('loginModule', ['setUser']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('校验通过', this.loginForm)
          let { username, password } = this.loginForm
          // 请求登录接口
          this.$api
            .login({
              username,
              password,
            })
            .then((res) => {
              console.log('111', res)

              // 登录成功
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '恭喜你，登录成功',
                  duration: 1500,
                  type: 'success',
                })
                // 登录成功后： 1。存储登录信息 2.跳转网页 3. 顶部区域显示用户信息 4.持久化
                let obj = {
                  user: res.data.userInfoVo.username,
                  token: res.data.token,
                }
                this.setUser(obj)
                // 存储本地 将对象转化为json字符串
                localStorage.setItem('user', JSON.stringify(obj))
                // 跳转后台页面
                this.$router.push('/')
              } else {
                // 登录失败
                console.log('错误信息为:', res.msg)
                this.$notify.error({
                  title: '错误信息',
                  duration: 2000,
                  message: res.msg,
                })
              }
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
.title {
  margin-bottom: 30px;
  text-align: center;
  color: #666;
}
.login-box {
  width: 400px;
  height: 300px;
  margin: 150px auto;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
}
</style>
