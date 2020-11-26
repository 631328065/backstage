<template>
  <div class="login-main">
    <div class="mall-admin">
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item>
            <i class="el-icon-s-shop"></i>
          </el-form-item>
          <h2>mall-admin-web</h2>
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名">
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" show-password placeholder="请输入密码">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
            <el-button type="primary">获取体验账号</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <img src="http://www.macrozheng.com/admin/static/img/login_center_bg.5307896.png" alt="" />
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "macro123",
      },
      rules: {
        username: [
          { required: true, message: "请输入正确用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入正确密码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((is) => {
        if (is) {
          axios.post("http://8.129.43.113:8080/admin/login", this.ruleForm).then((res) => {
            if (res.data.code == 200) {
              // 将正确的内容保存到cookie中   Authorization
              let loginToken = res.data.data.tokenHead + res.data.data.token;
              Cookies.set("loginToken", loginToken);
              this.$router.push("/home");
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login-main {
  overflow-x: hidden;
  .mall-admin {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    height: 400px;
    margin: 140px auto;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
    border-top: 10px solid #409eff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .form {
      padding: 20px;
      text-align: center;
      h2 {
        color: rgb(64, 158, 255);
      }
      .el-form-item__content {
        margin-left: 0 !important;
        i {
          color: rgb(64, 158, 255);
        }
        .el-icon-s-shop {
          font-size: 70px;
        }
        button {
          width: 45%;
        }
      }
    }
  }
  img {
    background: #409eff;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
}
</style>
