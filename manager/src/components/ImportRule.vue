<template>
  <div>
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <br />
              <div id="exhibitorleft">系统</div>
              <div id="exhibitorright">
                <el-select v-model="systemVersion" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <br />
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
              <el-button icon="el-icon-folder-add" type="primary"
                >点击导入</el-button
              >
            </el-upload>
          </el-col>

          <el-col :span="1">
            <br />
            <el-button icon="el-icon-upload" type="success" @click="uploadFile"
              >上传</el-button
            >
          </el-col>
        </el-row>
        <br />
        <el-table
          :data="tableData"
          stripe
          border
          height="600"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="tradeName" label="交易名称" width="120">
          </el-table-column>
          <el-table-column prop="tradeCode" label="交易码" width="120">
          </el-table-column>
          <el-table-column prop="ruleDescribe" label="规则描述" width="150">
          </el-table-column>
          <el-table-column prop="ruleType" label="测试规则类型" width="120">
          </el-table-column>
          <el-table-column prop="ioIteam" label="输入项或输出项" width="120">
          </el-table-column>
          <el-table-column
            prop="outputEffective"
            label="输入输出有效性"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="testCovItem"
            label="测试覆盖项(TCI)"
            width="170"
          >
          </el-table-column>
          <!--
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                >修改</el-button
              >
            </template>
          </el-table-column>
          -->
        </el-table>
      </el-main>
      <el-footer>导入测试规则资产管理</el-footer>
    </el-container>
  </div>
</template>

<script>
import { uploadFilePost } from "../api/post";
export default {
  name: "ImportRule",
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
      systemVersion: "",
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

    formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1);
      time.setYear(time.getFullYear() - 70);
      const year = time.getFullYear() + "";
      const month = time.getMonth() + 1 + "";
      const date = time.getDate() - 1 + "";
      console.log("time:", numb, year);
      if (format && format.length === 1) {
        return year + format + month + format + date;
      }
      return (
        year +
        (month < 10 ? "0" + month : month) +
        (date < 10 ? "0" + date : date)
      );
    },

    importExcelData(obj) {
      let _this = this;
      console.log(this);
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
              // cellDates: true,
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary",
              // cellDates: true,
            });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]]); //outdata为excel的数据

          var excelData = [];
          //处理数据，处理key的值
          for (var i = 1; i < outdata.length; i++) {
            var data = {};
            data["systemVersion"] = "香港掌银";
            data["tradeName"] = outdata[i].__EMPTY;
            data["tradeCode"] = outdata[i].__EMPTY_1;
            data["testCharacter"] = outdata[i].__EMPTY_2;
            data["ruleDescribe"] = outdata[i].__EMPTY_3;
            data["ruleType"] = outdata[i].__EMPTY_4;
            data["ioIteam"] = outdata[i].__EMPTY_5;
            data["outputEffective"] = outdata[i].__EMPTY_6;
            data["equivalenceClass"] = outdata[i].__EMPTY_7;
            data["testNumber"] = outdata[i].__EMPTY_8;
            data["testCovItem"] = outdata[i].__EMPTY_9;
            data["ruleRepresentation"] = outdata[i].__EMPTY_10;
            data["caseNumber"] = outdata[i].__EMPTY_11;
            data["designName"] = outdata[i].__EMPTY_12;
            var date = _this.formatDate(outdata[i].__EMPTY_13, "-");
            data["submitTime"] = date;

            excelData.push(data);
          }
          console.log(outdata, excelData);

          _this.tableData = excelData;
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

    caseCreate() {
      let that = this;
      var ip = this.$serverIp + "CaseCreate";
      var data = this.tableData;
      console.log(data);
      this.$axios
        .post(ip, data)
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

    uploadFile() {
      var file = this.fileTemp;

      //落数据库
      let that = this;
      var name = this.systemName;
      var ip = this.$serverIp + "uploadTestRules" + "?name=" + name; //修改相应的接口
      var data = this.tableData;
      console.log(data);

      this.$axios
        .post(ip, data)
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          that.$message.error("网络请求异常!");
        });

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
        this.uploadRequest(formData);
      }
    },

    uploadRequest(data) {
      let that = this;
      var ip = this.$serverIp + "uploadPICTDoc";

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
    fileTemp(val) {
      //当fileTemp改变了，会执行以下代码
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

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

#exhibitorleft {
  float: left;
  width: 30%;
  height: 100%;
  margin-top: 10px;
}
#exhibitorright {
  float: left;
  width: 70%;
  height: 100%;
}
</style>

