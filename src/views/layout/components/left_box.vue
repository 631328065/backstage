<template>
  <div class="left-box">
    <el-menu default-active="0" class="el-menu-vertical-demo" background-color="#294256" text-color="#a7cbd9" active-text-color="#3b9edf">
      <el-menu-item index="0" @click="openHome">
        <i class="el-icon-s-home"></i>
        首页
      </el-menu-item>
      <template v-for="(e, i) in routerData">
        <template v-if="e.meta.isMenu">
          <el-submenu :index="i + 1 + ''" :key="i">
            <template slot="title">
              <i class="el-icon-shopping-bag-1"></i>
              <span>{{ e.title }}</span>
            </template>
            <template v-for="(e2, i2) in e.children">
              <el-menu-item :index="i2 + 1 + '-' + (i2 + 1)" class="menus-list" @click="openProduct(e2, i2)" :key="i2"> <i class="el-icon-s-order"></i> {{ e2.title }} </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerData: [],
      isCollapse: false,
    };
  },
  mounted() {
    this.$store.state.title = this.$router.options.routes[0].title;
    this.routerData = this.$router.options.routes;
  },
  methods: {
    openHome() {
      this.$router.push("/home");
    },
    openProduct(elem, index) {
      if (index == 0) {
        this.$router.push("/product/list");
        this.$store.state.title = elem.title;
      } else if (index == 1) {
        this.$router.push("/product/add");
        this.$store.state.title = elem.title;
      } else if (index == 2) {
        this.$router.push("/product/cat");
        this.$store.state.title = elem.title;
      } else if (index == 3) {
        this.$router.push("/product/type");
        this.$store.state.title = elem.title;
      }
      this.$store.state.menuIndex = index;
    },
  },
};
</script>

<style lang="scss">
.left-box {
  width: 200px;
  height: 100vh;
}
.menus-list {
  background-color: #1f2d3d !important;
}
.menus-list:hover {
  background-color: #001528 !important;
}
</style>
