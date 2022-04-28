<template>
  <el-main v-loading="loading"  element-loading-text="正在生成中，请稍等">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <span style="margin-right: 30px">系统</span>
        <el-select
          v-model="systemName"
          placeholder="请选择"
          style="margin-right: 50px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <span style="margin-right: 30px">交易名称</span>
        <el-input
          class="inputcenter"
          placeholder="输入交易名称"
          prefix-icon="el-icon-search"
          v-model="tradeName"
        >
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-search" type="primary">查询规则</el-button>
      </el-col>
      <el-col :span="2">
        <el-upload
          class="upload-demo"
          action=""
          :on-change="handleChange"
          :on-exceed="handleExceed"
          :on-remove="handleRemove"
          :file-list="fileListUpload"
          :auto-upload="false"
        >
          <el-button icon="el-icon-folder-add" type="success"
            >点击导入</el-button
          >
        </el-upload>
      </el-col>
      <el-col :span="2">
        <el-button
          icon="el-icon-share"
          type="success"
          @click="uploadHmlFile"
          >生成测试用例</el-button
        >
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "GraphGenerateTestCase",
  data() {
    return {
      options: [
        {
          value: "PAIC",
          label: "PAIC",
        },
        {
          value: "AMTP",
          label: "AMTP",
        },
        {
          value: "香港网银",
          label: "香港网银",
        },
        {
          value: "香港掌银",
          label: "香港掌银",
        },
        {
          value: "AAAAAAA",
          label: "AAAAAAA",
        },
      ],
      systemName: "",
      tradeName: "",
      limitUpload: 1,
      fileListUpload: [],
      fileTemp: null, //
      tableData: [],
      tableLoading: false,
      loading:false
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

    uploadHmlFile() {
      var file = this.fileTemp;
      //保存excel文件
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
        formData.append("tradename", this.tradeName);
        this.uploadRequest(formData);
      }
    },

    CreateCase(hmlpath) {
      console.log("开始生成用例");
      let that = this;
      var ip = this.$serverIp + "graphwalkerTestCreate";
      //var formData = new FormData();

      this.$axios({
        methods:"get",
         headers: {
      "content-type": "application/json", // 默认值
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },
    url: ip,
    params: {
      'systemName':that.systemName,
      'tradeName':that.tradeName,
      'uplodahmlPath':hmlpath
    },
    responseType: "blob",
    }).then(function (res) {
      let blob = new Blob([res.data]); // { type: "application/vnd.ms-excel" }
      let url = window.URL.createObjectURL(blob); // 创建一个临时的url指向blob对象
      // 创建url之后可以模拟对此文件对象的一系列操作，例如：预览、下载
      let a = document.createElement("a");
      a.href = url;
      a.download = "测试用例.xlsx";
      a.click();
      // 释放这个临时的对象url
      window.URL.revokeObjectURL(url);
      that.loading=false;
      that.$message.success("用例生成成功，下载中!")
    })
    .catch(function (res) {
      console.log("error", res);
    });

/*
      formData.append("systemName", this.systemName);
      formData.append("tradeName", this.tradeName);
      formData.append("uplodahmlPath", hmlpath);

      this.$axios
        .post(ip, formData, {
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
        });*/
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
          that.loading = true
          that.CreateCase(res.data);
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
  watch: {},
};
</script>

<style>
.el-table {
  background-color: #b3c0d1;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
#exhibitorleft {
  float: left;
  top: 50%;
  width: 30%;
}
#exhibitorright {
  float: left;
  width: 70%;
}

.inputcenter {
  position: relative;
  display: inline-block;
  width: 60%;
}
</style>

