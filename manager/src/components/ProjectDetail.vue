<template>
<el-main >
  <span>
    {{projectName}}
  </span>
    <el-divider></el-divider>
  <el-table
    :data="tableData"
    border
    stripe
    style="width: 100%"
    height="500">
    <el-table-column
      prop="name"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="Jan"
      label="1"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Feb"
      label="2"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Mar"
      label="3"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Apr"
      label="4"
      width="70">
    </el-table-column>
    <el-table-column
      prop="May"
      label="5"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Jun"
      label="6"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Jul"
      label="7"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Agu"
      label="8"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Sep"
      label="9"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Oct"
      label="10"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Nov"
      label="11"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Dec"
      label="12"
      width="70">
    </el-table-column>
  </el-table>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        projectName:"境外核心系统香港3.0",
        tableData: [{
          name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
          name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
          name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
          name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
         name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
         name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34,
          May: 0.22
        }, {
         name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34,
          May: 0.98
        }, {
          name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
          name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
         name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34
        }, {
         name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34,
          May: 0.22
        }, {
         name: '王小虎',
          Jan: 1,
          Feb: 1.2,
          Mar: 0.3,
          Apr: 0.34,
          May: 0.98
        }]
      }
    }
  }
</script>