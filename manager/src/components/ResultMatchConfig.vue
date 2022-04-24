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
          <el-button  type="success" icon="el-icon-edit" v-on:click="addResultDetail">添加映射</el-button>
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
export default {
  name: "ResultMatchConfig"
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
</style>
