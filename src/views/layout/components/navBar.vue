<template>
  <div class="nav-box">
    <i class="el-icon-s-fold"></i>
    <template v-for="(e, i) in titleArr">
      <router-link :to="e.path" :key="i">
        <span class="s1">{{ e.title }}</span>
      </router-link>
      <span>/</span>
    </template>
    <span class="s3">{{ this.$store.state.title }}</span>
    <div class="nav-log">
      <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg" width="40" height="40" />
      <el-dropdown trigger="click" @command="navCallBack">
        <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon-caret-bottom"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item style="border-top: 1px solid #ebeef5" command="outUser">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      isOpen: 1,
      titleArr: [],
      rotateZ: "",
    };
  },
  mounted() {
    this.$router.options.routes.forEach((elem) => {
      if (elem.title != undefined) {
        this.titleArr.push(elem);
      }
    });
  },
  methods: {
    navCallBack(command) {
      if (command == "outUser") {
        Cookies.remove("loginToken");
        this.$router.push("/login");
      } else {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="scss">
.el-icon-s-fold {
  cursor: pointer;
  transition: 0.3s;
}
a {
  text-decoration: none;
  color: #606266;
  font-weight: 700;
  font-size: 14px;
}
a:hover {
  color: #409eff;
  cursor: pointer;
}
.nav-log {
  float: right;
  margin-right: 12px;
  img {
    border-radius: 10px;
  }
  i {
    font-size: 12px;
    margin-left: 5px;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
}
</style>
