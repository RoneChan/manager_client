<template>
  <el-main>
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
      :file-list="fileListUpload"
      :limit="limitUpload"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">点击导入</el-button>
      <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
    <el-button size="small" type="primary" @click="uploadFile">上传</el-button>
    <el-table :data="tableData" stripe border height="600">
      <el-table-column prop="name" label="交易名称" width="120">
      </el-table-column>
      <el-table-column prop="tradecode" label="交易码" width="120">
      </el-table-column>
      <el-table-column prop="describe" label="规则描述" width="150">
      </el-table-column>
      <el-table-column prop="type" label="测试规则类型" width="80">
      </el-table-column>
      <el-table-column prop="scene" label="输入项或输出项" width="300">
      </el-table-column>
      <el-table-column prop="validity" label="输入输出有效性" width="100">
      </el-table-column>
      <el-table-column prop="tci" label="测试覆盖项(TCI)" width="400">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  name: "ImportRule",
  data() {
    return {
      limitUpload: 1,
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
    importExcelData(obj) {
      let _this = this;
      // 通过DOM取文件数据
      this.file = obj;
      let rABS = false; //是否将文件读取为二进制字符串
      let f = this.file;
      let reader = new FileReader();
      FileReader.prototype.readAsBinaryString = function (f) {
        let binary = "";
        let rABS = false; //是否将文件读取为二进制字符串
        let wb; //读取完成的数据
        let outdata;
        let reader = new FileReader();
        reader.onload = function (e) {
          let bytes = new Uint8Array(reader.result);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          let XLSX = require("xlsx");
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              //手动转化
              type: "base64",
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary",
            });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]]); //outdata为excel的数据

          var excelData = [];
          //处理数据，处理key的值
          for (var i = 1; i < outdata.length; i++) {
            var data = {};
            data["name"] = outdata[i].__EMPTY;
            data["tradecode"] = outdata[i].__EMPTY_1;
            data["describe"] = outdata[i].__EMPTY_3;
            data["type"] = outdata[i].__EMPTY_4;
            data["scene"] = outdata[i].__EMPTY_5;
            data["validity"] = outdata[i].__EMPTY_6;
            data["tci"] = outdata[i].__EMPTY_9;
            excelData.push(data);
          }

          _this.tableData = excelData;
          _this.tableLoading = true;
          //console.log(_this.tableData);
          return excelData;
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
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
      var ip = this.$serverIp + "uploadDoc";
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
          /*
          if (res.data.result == "ok") {
            that.$message.success("上传成功!");
          }
          */
        })
        .catch(function (err) {
          that.$message.error("网络请求异常!");
        });
    },
  },
  watch: {  
    fileTemp(val) {  //当fileTemp改变了，会执行以下代码
      console.log(val);
      if (val) {
        if (
          val.type ==
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          val.type == "application/vnd.ms-excel"
        ) {
          this.importExcelData(val);
        } else {
          this.$message({
            type: "warning",
            message: "附件格式错误，请删除后重新上传！",
          });
        }
      }
    },
  },
};
</script>

<style>
.el-table {
  background-color: #b3c0d1;
}
</style>

