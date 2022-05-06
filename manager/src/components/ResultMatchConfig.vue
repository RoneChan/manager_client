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
                <el-select v-model="systemName" placeholder="请选择">
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
              <div id="exhibitorleft">匹配关键字</div>
              <div id="exhibitorright">
                <el-input
                  placeholder="输入key值" prefix-icon="el-icon-search" v-model="matchingResultKey" id="resultMatch_matchingResultKey_input" width="30px">
                </el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <br>
              <div id="exhibitorleft">责任人</div>
              <div id="exhibitorright">
                <el-input
                  placeholder="" prefix-icon="el-icon-search" v-model="userName" id="resultMatch_userName_input" width="20px">
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <div>
<!--          <el-button  type="success" icon="el-icon-edit" v-on:click="addResultDetail">添加映射</el-button>-->
          <el-button  type="success" icon="el-icon-edit" v-on:click="dialogFormVisible = true">添加映射</el-button>
          <el-dialog title="添加映射字典" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="系统" :label-width="formLabelWidth">
                <el-select id="addsys" v-model="form.systemName" placeholder="请选择系统">
                  <el-option label="PAIC" value="PAIC"></el-option>
                  <el-option label="AMTP" value="AMTP"></el-option>
                  <el-option label="香港网银" value="香港网银"></el-option>
                  <el-option label="香港掌银" value="香港掌银"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="匹配关键字" :label-width="formLabelWidth">
                <el-input v-model="form.matchingResultKey" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="预期结果详细描述" :label-width="formLabelWidth">
                <el-input type="textarea"
                          :rows="2" v-model="form.resultDetailDes" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="责任人" :label-width="formLabelWidth">
                <el-input v-model="form.userName" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" v-on:click="addResultDetail" @click="dialogFormVisible = false" >添 加</el-button>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>
          <el-button  type="primary" icon="el-icon-search" v-on:click="getResultDetails">查询映射信息</el-button>
        </div>
        <el-table
          id="showScore_table"
          :data="resultDetail"
          stripe
          style="width: 100%">
          <el-table-column
            prop="systemVersion"
            label="系统"
            width="130">
          </el-table-column>
          <el-table-column
            prop="matchingResultKey"
            label="匹配关键字"
            width="160">
          </el-table-column>
          <el-table-column
            prop="resultDetailDes"
            label="预期结果详细描述"
            width="200">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="责任人"
            width="160">
          </el-table-column>
          <el-table-column
            prop="submitTime"
            label="提交时间"
            width="160">
          </el-table-column>
          <el-table-column
            prop="modifyTime"
            label="修改时间"
            width="160">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>预期结果映射字典维护</el-footer>
    </el-container>
  </div>
</template>

<script>
import {addMatchConfig} from "../api/get";

export default {
  name: "ResultMatchConfig",
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
      systemName: '',//系统名称
      matchingResultKey: '',//待匹配结果关键字
      userName: '',// 规则字典维护人员
      bgc: '', //样式
      resultMatchDictionary: [{
        systemName: '',
        matchingResultKey: '',
        resultDetailDes: '',
        userName: '',
        submitTime: '',
        modifyTime: ''
      }], // 接收查找的数据
      dialogFormVisible: false,
      form: {
        systemName: '',
        matchingResultKey: '',
        resultDetailDes: '',
        userName: ''
      },
      formLabelWidth: '130px'
    }
  },

  methods: {
    addResultDetail() {
      console.log("addResultDetail");
      console.log(this.systemName);
      console.log(this.matchingResultKey);
      console.log(this.userName);
      console.log("YYYYYYYYYYYYY");
      this.$message({
        message:'添加结果映射成功！',
        type: 'success'});
      addMatchConfig(this.form.systemName,this.form.matchingResultKey,this.form.resultDetailDes, this.form.userName).then(res => {
        this.resultMatchDictionary = res.data.data
      })
    },
  },
}
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
.el-button {
  float: right;
  margin-right: 10px;
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
#addsys {
  margin-left: 10px;
}
.el-dialog__footer {
  padding: 10px 20px 50px;
}

.el-dialog__body {
  padding: 30px 50px;
}
</style>
