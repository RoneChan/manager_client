<template>
  <el-main>
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
      :file-list="fileListUpload"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">点击导入</el-button>
      <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
    <el-button size="small" type="primary" @click="uploadFile">上传</el-button>
  </el-main>
</template>

<script>
export default {
  name: "GraphwalkerImport",
  data() {
    return {
      fileListUpload: [],
      fileTemp: null, // 存放组件上传的excel file 用于实现读取数据
      tableData: [],
      tableLoading: false,
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      //处理跳转数据
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
      this.fileTemp = file.raw; // file.raw 及上传的excel
    },
    handleExceed(file, fileList) {
      console.log(file, fileList);
      this.$message({
        type: "warning",
        message: "只能读取一个文件,请删除后再重传",
      });
    },
    handleRemove(file, fileList) {
      this.fileTemp = null;
    },
  
    uploadFile() {
      var file = this.fileTemp;
      if (file == null) {
        this.$message({
          type: "warning",
          message: "请选择一个文件",
        });
        console.log("请选择一个文件");
      } else {
        console.log("开始 upload");
        var formData = new FormData();
        //后端需要接受multipart请求，所以前端需要使用form表单提交信息，因此需要用FormData类进行表单涉及
        formData.append("file", this.fileTemp);
        this.uploadRequest(formData);
      }
    },
    uploadRequest(data) {
      let that = this;
      var ip = this.$serverIp + "uploadGraphwalkerDoc";
      this.$axios
        .post(ip, data, { 
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (res) {
          console.log(res);
          if (res.status == 200) {
            that.$message.success("上传成功!");
          }
        
        })
        .catch(function (err) {
          that.$message.error("网络请求异常!");
        });
    },
  },
  watch: {  
    fileTemp(val) {  //当fileTemp改变了，会执行以下代码
      console.log(val);
    
    },
  },
};
</script>

<style>
.el-table {
  background-color: #b3c0d1;
}
</style>

