<template>
  <!-- 
      ref="upload" 获取dom元素 --upload  
      action=''    必选参数，上传的地址	string
      :on-preview="handlePreview" 点击文件列表中已上传的文件时的钩子 function(file)
      on-remove	    文件列表移除文件时的钩子	function(file, fileList)
      on-success	文件上传成功时的钩子	function(response, file, fileList)
      on-error	    文件上传失败时的钩子	function(err, file, fileList)
      on-progress	文件上传时的钩子	function(event, file, fileList)
      auto-upload	是否在选取文件后立即进行上传
      file-list	    上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]	array
      :before-upload="beforeUpload"
 -->
  <el-upload
    class="upload-demo"
    ref="upload"
    action="http://localhost:8181/upload/uploadImg"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    list-type="picture"
    :on-success="successUpload"
    :auto-upload="false"
    accept=".jpg,.png,.jpeg"
    :limit="1"
  >
    <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
    <el-button style="margin-left: 10px" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
import { uploadImg } from '../../utils/product'
import base from '../../utils/base'
export default {
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    // 成功上传图片
    successUpload(response, file, fileList) {
      console.log('上传成功', response, file, fileList)
      this.$message({
        showClose: true,
        message: '图片上传成功',
        type: 'success',
      })
      //
      let imgUrl = response.data
      this.$emit('sendImg', imgUrl)
    },
    // 点击上传图片
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
  },
}
</script>

<style lang="scss" scoped></style>
