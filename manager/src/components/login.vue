<template>
  <div>
    <!--ref:表单名字-->
    <el-form ref="loginForm" :rules="rules" :model="user" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    //参数formName：需要验证的表单
    submitForm(formName) {
      /*
            refs[form]:寻找表单名字为form的表单
            validate：做验证
        */
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-box {
  width: 400px;
  margin: 200px auto;
  border: 1px solid #dcdfe6;
  padding: 40px;
  /*边框圆角*/
  border-radius: 10px;
  /*阴影*/
  box-shadow: 0 0 30px#DCDFE6;
}

.login-title {
  text-align: center;
}
</style>