<template>
  <div>
    <el-container>
      <el-main>
        <el-row :gutter="25">
          <el-col :span="6">
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

          <el-col :span="7">
            <div>
              <br />
              <div id="exhibitorleft">交易名称</div>
              <div id="exhibitorright">
                <el-input
                  placeholder="输入交易名称"
                  prefix-icon="el-icon-search"
                  v-model="tradeName"
                  id="testRule_tradeName_input"
                  width="60px"
                >
                </el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div>
              <br />
              <div id="exhibitorleft">文件类型</div>
              <div id="exhibitorright">
                <el-select v-model="fileTypeChoose" placeholder="请选择">
                  <el-option
                    v-for="item in fileType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <br />
              <el-button
                type="primary"
                icon="el-icon-search"
                v-on:click="queryFile"
                >查询文件</el-button
              >
            </div>
          </el-col>
        </el-row>
        <el-table :data="fileData" stripe style="width: 100%">
          <el-table-column prop="systemVersion" label="系统名称" width="150">
          </el-table-column>
          <el-table-column prop="tradeName" label="交易名称" width="150">
          </el-table-column>
          <el-table-column prop="fileName" label="文件名称" width="250">
          </el-table-column>
          <el-table-column prop="saveTime" label="生成时间" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="downloadFile(scope.$index)"
                >下载</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getDownloadFile } from "../api/get";

export default {
  name: "TestCaseExcDownload",
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
      ],
      fileType: [
        {
          value: 0,
          label: "PICT用例文件",
        },
        {
          value: 1,
          label: "GraphWalker用例文件",
        },
        {
          value: 2,
          label: "PICT规则文件",
        },
        {
          value: 3,
          label: "Graphml图文件",
        },
      ],
      systemVersion: "", //系统名称
      tradeName: "", //交易名称
      bgc: "", //样式
      fileTypeChoose: "", //文件类型
      fileData: [
        /*
        {
          systemVersion: "OIBS",
          tradeName: "sdfs",
          fileName: "文件名称1",
          saveTime: "20220102",
          savePath: "http://127.0.0.1:8086/TC_PICT/20220426105505205.xls",
        },
        {
          systemVersion: "dsfs",
          tradeName: "sdffbfs",
          fileName: "文件名称2",
          saveTime: "20210102",
          savePath: "http://127.0.0.1:8086/TC_GW/20220427112650749.graphml",
        },*/
      ], // 接收查找的数据
    };
  },

  methods: {
    // 返回
    showScore_return() {
      this.$router.back(-1);
    },
    // 鼠标悬停变色
    mouseOver() {
      this.bgc = "background-color: #cccccc;color: red";
    },
    mouseLeave() {
      this.bgc = "";
    },
    queryFile() {
      var type = this.fileTypeChoose;
      if ((type == undefined || type == null || type == "") && type != "0") {
        type = -1;
      }
      getDownloadFile(this.systemVersion, this.tradeName, type).then((res) => {
        this.fileData = res.data;
      });
    },
    downloadFile(index) {
      //TODO-mucheng
      let url = this.fileData[index].savePath;
      console.log(url);
      const a = document.createElement("a");
      a.href = url;
      a.click(); // 点击下载
      // document.body.removeChild(a) // 下载完成移除元素=
      this.$alert('文件路径：'+url,'文件下载成功',{
        confirmButtonText: '确定',
      });
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #1111bf;
}
.bg-purple {
  background: #1111bf6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 2px;
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
