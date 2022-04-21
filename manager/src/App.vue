<template>
  <div id="app">
    <!--展示路由组件-->
    <el-container>
      <el-aside width="200px"  style="background-color: rgb(68, 100, 140)">
        <!--:default-openeds="['1', '2', '3']"-->
        <el-menu
          default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          background-color="#44648C"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/ProjectProfileList">项目总概要</el-menu-item>
          <el-submenu index="1">
            <template slot="title"
            ><i class="el-icon-message"></i>人员管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="/ProjectProfileList">人员信息</el-menu-item>
              <el-menu-item index="/HelloWorld">查看工作量</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>项目管理</template>
            <el-menu-item-group>
              <el-menu-item index="/newProject">新增项目</el-menu-item>
              <el-menu-item index="2-2">编辑项目</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>测试规则维护</template>
            <el-menu-item-group>
              <el-menu-item index="/ImportRule">测试规则导入</el-menu-item>
              <el-menu-item index="/ImportRule1">测试规则更新</el-menu-item>
              <el-menu-item index="/ImportRule2">测试规则查询</el-menu-item>
              <el-menu-item index="/ImportRule3">测试规则导出</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>测试用例生成</template>
            <el-menu-item-group>
              <el-menu-item index="/RuleGenerateTestCase">规则资产生成用例</el-menu-item><!--通过调用PICT生成用例-->
              <el-menu-item index="3-2">流程状态图生成用例</el-menu-item><!--通过调用Graphwalker生成用例-->
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>我的</template>
            <el-menu-item-group>
              <el-menu-item index="/Login">我的项目</el-menu-item>
              <el-menu-item index="4-2">我的信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span style="height=250">管理系统</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <!-- 跳转标签 -->
        <router-view />
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeTitle() {
      console.log("选中菜单");
    },
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.el-header {
  background-color:#b3c0d1;

  color: #333;
  line-height: 60px;
}
</style>
