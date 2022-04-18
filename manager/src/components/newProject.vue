<template>
  <div id="Temp_NewProject">
    <el-container style="margin: 20px auto">
      <el-main>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark">新建项目</div></el-col
          >
        </el-row>
        <el-form
          model="projectFile"
          label-position="right"
          label-width="auto"
          size="mini"
        >
          <el-row :gutter="30">
            <el-col :span="12" class="grid-cell">
              <el-form-item label="编号">
                <el-input
                  v-model="projectFile.id"
                  placeholder="编号"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" class="grid-cell">
              <el-form-item label="项目名称">
                <el-input
                  v-model="projectFile.name"
                  placeholder="项目名称"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="系统">
                <el-input
                  v-model="projectFile.test_system"
                  placeholder="系统"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" class="grid-cell">
              <el-form-item label="测试经理">
                <el-input
                  v-model="projectFile.test_manager"
                  placeholder="测试经理"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="项目类型">
                <el-select
                  v-model="projectFile.project_type"
                  placeholder="项目类型"
                >
                  <el-option label="科项" value="0"></el-option>
                  <el-option label="科维" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="主办/协办">
                <el-select v-model="projectFile.host" placeholder="主办/协办">
                  <el-option label="主办" value="1"></el-option>
                  <el-option label="协办" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="境内/外项目">
                <el-select
                  v-model="projectFile.abroad"
                  placeholder="境内/外项目"
                >
                  <el-option label="境内项目" value="0"></el-option>
                  <el-option label="境外项目" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="涉及主、协办系统">
                <el-input
                  v-model="projectFile.involved"
                  placeholder="涉及主、协办系统"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="开发部门">
                <el-input
                  v-model="projectFile.department"
                  placeholder="开发部门"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12" class="grid-cell">
              <el-form-item label="FP(功能点)">
                <el-input
                  v-model="projectFile.FP"
                  placeholder="FP(功能点)"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" class="grid-cell">
              <el-form-item label="工作量">
                <el-input
                  v-model="projectFile.worklaod"
                  placeholder="工作量"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <el-row>
          <el-col :span="24"><div class="bg-purple-dark">简介</div></el-col>
          <el-col
            ><el-input
              type="textarea"
              :rows="2"
              :autosize="{ minRows: 3, maxRows: 4 }"
              placeholder="请输入简介"
              v-model="projectFile.description"
            >
            </el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark">项目时间</div></el-col
          >
          <el-form
            model="projectFile"
            label-position="right"
            label-width="auto"
            size="mini"
          >
            <el-row :gutter="30">
              <el-col :span="12" class="grid-cell">
                <el-form-item label="测试准入时间">
                  <el-date-picker
                    v-model="projectFile.test_access_time"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="12" class="grid-cell">
                <el-form-item label="测试准出时间">
                  <el-date-picker
                    v-model="projectFile.test_exit_time"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="12" class="grid-cell">
                <el-form-item label="UAT时间">
                  <el-date-picker
                    v-model="projectFile.UAT_time"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="12" class="grid-cell">
                <el-form-item label="投产时间">
                  <el-date-picker
                    v-model="projectFile.production_time"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="12" class="grid-cell">
                <el-form-item label="实际测试准备时间">
                  <el-date-picker
                    v-model="projectFile.actual_test_time"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-row>

        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark">
              非功能承接情况
            </div></el-col
          >
          <el-form
            model="projectFile"
            label-position="right"
            label-width="auto"
            size="mini"
          >
            <el-row :gutter="30">
              <el-col :span="8" class="grid-cell">
                <el-form-item label="性能测试">
                  <el-select
                    v-model="projectFile.performance_test"
                    placeholder="性能测试"
                  >
                    <el-option label="不承接" value="0"></el-option>
                    <el-option label="承接" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="8" class="grid-cell">
                <el-form-item label="安全测试">
                  <el-select
                    v-model="projectFile.security_test"
                    placeholder="安全测试"
                  >
                    <el-option label="不承接" value="0"></el-option>
                    <el-option label="承接" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="8" class="grid-cell">
                <el-form-item label="接口测试">
                  <el-select
                    v-model="projectFile.interface_test"
                    placeholder="接口测试"
                  >
                    <el-option label="不承接" value="0"></el-option>
                    <el-option label="承接" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-row>

        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark">测试人员</div></el-col
          >
        </el-row>

        <el-row style="margin-bottom: 15px">
          <el-col :span="20"
            ><div style="text-align: left">测试人员添加</div></el-col
          >
          <el-col :span="4" size="mini"><el-button>点击新增</el-button></el-col>
        </el-row>
        <el-row>
          <el-col
            :span="6"
            v-for="(tester, index) in projectFile.tester"
            :key="index"
            class="table_cell"
            ><div>{{ tester }}</div></el-col
          >
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>



<script>
export default {
  name: "newProject",
  data() {
    var checkBlank = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      projectFile: {
        id: "",
        name: "",
        test_system: "",
        test_manager: "",
        project_type: "",
        host: "",
        abroad: "",
        involved: "",
        department: "",
        FP: "",
        worklaod: "",
        description: "sdfsfsdf",
        test_access_time: "",
        test_exit_time: "",
        UAT_time: "",
        production_time: "",
        actual_test_time: "",
        performance_test: "",
        interface_test: "",
        security_test: "",
        tester: ["sdf", "addsf", "asasd", "asdad", "sdfsdf"],
      },
    };
  },
};
</script>

<style scoped>
.bg-purple-dark {
  background: #2669a0;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  padding: 8px;
}
.grid-content {
  margin-bottom: 15px;
}

.table_cell {
  border: 1px solid #dcdfe6;
  padding: 8px;
}
.grid-cell {
  text-align: left;
  margin-bottom: -5px;
}
</style>