<template>
    <el-main>
      <el-table :data="tableData" stripe  border height="500">
        <el-table-column prop="id" label="项目编号" width="200">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="300">
        </el-table-column>
        <el-table-column prop="type" label="项目类型" width="120">
        </el-table-column>
        <el-table-column prop="host" label="主/协办" width="120">
        </el-table-column>
        <el-table-column prop="system" label="系统" width="120">
        </el-table-column>

        <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
      </template>
        </el-table-column>
      </el-table>
    </el-main>
</template>

<script>
  export default {
    name:'ProjectProfileList',
    data() {
      const item = {
        id: 'kx2021-0342',
        name: '境外核心业务系统OIBS3.0版',
        type: '科项',
        host: '主办',
        system: 'OIBS'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
      methods: {
      handleDetail(index, row) {
        console.log(index, row);
        //处理跳转数据
      },
    }
  };
</script>

<style>
  
  .el-table{
    background-color: #B3C0D1;
  }

</style>

