<template>
  <div class="productAdd">
    <el-steps :space="200" align-center :active="active" finish-status="success">
      <el-step title="填写商品信息"></el-step>
      <el-step title="填写商品促销"></el-step>
      <el-step title="填写商品属性"></el-step>
      <el-step title="选择商品关联"></el-step>
    </el-steps>

    <div class="dataInfo">
      <productInfo v-show="isShow[0]" v-model="active"></productInfo>
      <productSall v-show="isShow[1]" v-model="active"></productSall>
      <productAttr v-show="isShow[2]" v-model="active"></productAttr>
      <productRel v-show="isShow[3]" v-model="active"></productRel>
    </div>
  </div>
</template>

<script>
import productInfo from "@/views/product/productAdd/components/productInfo.vue";
import productSall from "@/views/product/productAdd/components/productSall.vue";
import productAttr from "@/views/product/productAdd/components/productAttr.vue";
import productRel from "@/views/product/productAdd/components/productRel.vue";
export default {
  data() {
    return {
      active: 0,
      isShow: [true, false, false, false],
    };
  },
  components: { productInfo, productSall, productAttr, productRel },
  watch: {
    active(n, o) {
      this.isShow[n] = true;
      this.isShow[o] = false;
    },
  },
};
</script>

<style lang="scss">
.productAdd {
  width: 800px;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 35px 35px 15px;
  .dataInfo {
    margin-top: 50px;
  }
}
</style>
