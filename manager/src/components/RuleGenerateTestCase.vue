<template>
  <div>
    <el-container>
      <el-main>
          <el-row :gutter="20">
            <el-col :span="6">
              <div >
                <br>
                <div id="exhibitorleft" >系统</div>
                <div id="exhibitorright">
              <el-select v-model="systemVersion" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                </div>
            </div>
            </el-col>
            <el-col :span="8">
              <div>
                <br>
                <div id="exhibitorleft">交易名称</div>
                <div id="exhibitorright">
              <el-input
                placeholder="输入交易名称" prefix-icon="el-icon-search" v-model="tradeName" id="testRule_tradeName_input" width="60px">
              </el-input>
                </div>
            </div>
            </el-col>
            <div>
              <br>
              <el-button type="primary" icon="el-icon-search" v-on:click="queryRules">查询规则</el-button>
              <el-button type="success" icon="el-icon-share" v-on:click="testRules">生成测试用例</el-button>
            </div>

          </el-row>
        <el-table :data="testRule" stripe style="width: 100%">
          <el-table-column
            prop="systemVersion"
            label="系统"
            width="100">
          </el-table-column>
          <el-table-column
            prop="tradeName"
            label="交易名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="tradeCode"
            label="交易码"
            width="100">
          </el-table-column>
          <el-table-column
            prop="ruleDescribe"
            label="规则描述"
            width="100">
          </el-table-column>
          <el-table-column
            prop="ioIteam"
            label="输入输出项"
            width="100">
          </el-table-column>
          <el-table-column
            prop="outputEffective"
            label="输出有效性"
            width="100">
          </el-table-column>
          <el-table-column
            prop="testNumber"
            label="测试覆盖编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="testCovItem"
            label="测试覆盖项(TCI)"
            width="100">
          </el-table-column>
          <el-table-column
            prop="designName"
            label="设计者"
            width="100">
          </el-table-column>
          <el-table-column
            prop="submitTime"
            label="提交时间"
            width="100">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>规则生成用例管理</el-footer>
    </el-container>
  </div>




</template>

<script>
//import {RuleGenerateTestCase} from "../api/get";
import {generateTestCaseByPICT, ruleGenerateTestCase} from "../api/get";
import {getTestRules} from "../api/get"

export default {
  name: 'RuleGenerateTestCase',
  data() {
    return {
      options: [{
        value: 'PAIC',
        label: 'PAIC'
      }, {
        value: 'AMTP',
        label: 'AMTP'
      }, {
        value: '香港网银',
        label: '香港网银'
      }, {
        value: '香港掌银',
        label: '香港掌银'
      }, {
        value: 'AAAAAA',
        label: 'AAAAAAA'
      }],
      systemVersion: '',//系统名称
      tradeName: '',//交易名称
      bgc: '', //样式
      testRule: [{
        systemVersion: '',
        tradeName: '',
        tradeCode: '',
        testCharacter: '',
        ruleDescribe: '',
        ruleType: '',
        ioIteam: '',
        outputEffective: '',
        equivalenceClass: '',
        testNumber: '',
        testCovItem: '',
        ruleRepresentation: '',
        caseNumber: '',
        designName: '',
        submitTime: ''
      }], // 接收查找的数据
    }
  },

  // created() {
  //   var url = this.Host + '/'
  // },
  // 在 `methods` 对象中定义方法
  methods: {
    // 返回
    showScore_return () {
      this.$router.back(-1)
    },
    // 鼠标悬停变色
    mouseOver () {
      this.bgc = 'background-color: #cccccc;color: red'
    },
    mouseLeave () {
      this.bgc = ''
    },
    queryRules () {
      console.log("xxxxxxxxxxxxx");
      console.log(this.systemVersion);
      console.log(this.tradeName);
      console.log("YYYYYYYYYYYYY");
      getTestRules(this.systemVersion, this.tradeName).then(res => {
          this.testRule = res.data.data
      })
    },

    testRules() {
      var that = this;
      console.log("begin to generate TestCase");
      console.log(this.systemVersion);
      console.log(this.tradeName);
      console.log("YYYYYYYYYYYYY");
      generateTestCaseByPICT(this.systemVersion, this.tradeName).then(res =>{

         let blob = new Blob([res.data]); // { type: "application/vnd.ms-excel" }
          let url = window.URL.createObjectURL(blob); // 创建一个临时的url指向blob对象
          // 创建url之后可以模拟对此文件对象的一系列操作，例如：预览、下载
          let a = document.createElement("a");
          a.href = url;
          a.download = "测试用例.xls";
          a.click();
          // 释放这个临时的对象url
          window.URL.revokeObjectURL(url);
          that.loading = false;
          
          that.$message.success("用例生成成功，下载中!");

        that.$message({
          showClose: true,
          message: "生成的文件路径:"+res.data,
          type: 'success'
        });
      })
    },

    // queryRule: function (event) {
    //   // `this` 在方法里指当前 Vue 实例
    //   alert('Hello ' + this.name + '!')
    //   // `event` 是原生 DOM 事件
    //   if (event) {
    //     alert(event.target.tagName)
    //   }
    // }
  },
  created() {
    //this.queryRules()
  }


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
