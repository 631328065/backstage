<template>
  <el-form ref="form" :model="product" label-width="120px">
    <el-form-item label="关联专题：">
      <el-transfer
        :data="subjectData"
        :props="{ label: 'title', key: 'id' }"
        filterable
        filter-placeholder="请输入专题名称"
        :titles="['待选择', '已选择']"
        v-model="subjectValueList"
        @change="handelSpecial"
      ></el-transfer>
    </el-form-item>
    <el-form-item label="关联优选：">
      <el-transfer
        :data="prefrenceAreaList"
        :props="{ label: 'name', key: 'id' }"
        filterable
        filter-placeholder="请输入优选名称"
        :titles="['待选择', '已选择']"
        v-model="prefrenceAreaValueList"
        @change="handelOptimization"
      ></el-transfer>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('input', 2)"
        >上一步，填写商品信息</el-button
      >
      <el-button type="primary" @click="complete">完成，提交商品</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  getSubjectList,
  getPrefrenceAreaList,
  productCreate,
  productUpdate,
} from "@/api/product.js";
export default {
  props: ["value", "product"],
  data() {
    return {
      subjectData: [],
      subjectValueList: [],
      prefrenceAreaList: [],
      prefrenceAreaValueList: [],
    };
  },
  mounted() {
    //获取关联专题列表
    getSubjectList().then((res) => (this.subjectData = res.data));

    //获取关联优选列表
    getPrefrenceAreaList().then((res) => (this.prefrenceAreaList = res.data));
  },
  methods: {
    //提交商品
    complete() {
      //发送请求添加商品..到底是编辑还是新增
      if (this.product.id != 0) {
        // 编辑/修改商品
        // 转换请求参数（数组 ---> 字符串）
        this.product.serviceIds = this.product.serviceIds.join(",");
        productUpdate(this.product.id, this.product).then((res) => {
          this.$message({
            type: "success",
            message: "修改商品成功",
          });
          this.$router.push("/product/list");
        });
      } else {
        //添加商品
        productCreate(this.product).then((res) => {
          this.$message({
            type: "success",
            message: "添加商品成功",
          });
          this.$router.push("/product/list");
        });
      }
    },

    //专题
    handelSpecial() {
      let specialArr = [];
      this.subjectValueList.forEach((item) => {
        let special = {
          //专题和商品关系
          id: 0,
          productId: 0,
          subjectId: item,
        };
        specialArr.push(special);
      });
      this.product.subjectProductRelationList = specialArr;
    },

    // 优选
    handelOptimization() {
      let optimizationArr = [];
      this.prefrenceAreaValueList.forEach((item) => {
        let optimization = {
          //优选专区和商品的关系
          id: 0,
          prefrenceAreaId: item, //优选区id
          productId: 0, //商品id
        };
        optimizationArr.push(optimization);
      });
      this.product.prefrenceAreaProductRelationList = optimizationArr;
    },
  },
};
</script>

<style lang="scss">
.el-transfer__buttons {
  .el-button {
    text-align: center;
    border-radius: 50%;
  }
}
</style>
