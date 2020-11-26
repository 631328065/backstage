<template>
  <div class="layout">
    <left-box :style="{ overflowY: 'scroll' }"></left-box>

    <div class="right-box" :style="{ overflowY: 'scroll' }">
      <nav-bar></nav-bar>
      <main-box></main-box>
    </div>
  </div>
</template>

<script>
import leftBox from "@/views/layout/components/left_box.vue";
import navBar from "@/views/layout/components/navBar.vue";
import mainBox from "@/views/layout/components/main.vue";

export default {
  components: {
    leftBox,
    navBar,
    mainBox,
  },
};
</script>
<style lang="scss">
body {
  overflow-y: hidden;
}
.layout {
  display: flex;
  box-sizing: border-box;
  .left-box {
    background-color: #294256;
    min-height: 100%;
    overflow: hidden;
    height: 100vh;
    .el-menu {
      border-right: 0;
    }
  }
  .left-box::-webkit-scrollbar {
    display: none;
  }
  .right-box {
    flex: 1;
    height: 100vh;
    .nav-box {
      height: 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #cccccc;
      line-height: 50px;
      padding-left: 5px;
      padding-top: 5px;
      .el-icon-s-fold {
        font-size: 30px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
        font-weight: 400;
      }
      .s1 {
        margin-right: 5px;
      }
      .s2 {
        margin-left: 5px;
      }
      .s3 {
        color: #97a8be;
      }
    }
  }
}
</style>
