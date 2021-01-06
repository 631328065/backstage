<template>
  <el-form
    ref="form"
    :rules="rules"
    :model="product"
    label-width="120px"
    style="width: 600px"
  >
    <el-form-item label="商品分类：" prop="productCategoryId">
      <el-cascader
        v-model="product.productCategoryId"
        :options="catList"
        :props="{ label: 'name', value: 'id' }"
        @change="handleChangeCat"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="商品名称：" prop="name">
      <el-input size="small" v-model="product.name"></el-input>
    </el-form-item>
    <el-form-item label="副标题：" prop="subTitle">
      <el-input size="small" v-model="product.subTitle"></el-input>
    </el-form-item>
    <el-form-item label="商品品牌：" prop="brandId">
      <el-select
        placeholder="请选择品牌"
        v-model="product.brandId"
        size="small"
        @change="handleChangeBrand"
      >
        <el-option
          v-for="item in brandList"
          :label="item.name"
          :value="item.id"
          :key="item.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="商品介绍：" prop="description">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="product.description"
      ></el-input>
    </el-form-item>
    <el-form-item label="商品货号：" prop="productSn">
      <el-input size="small" v-model="product.productSn"></el-input>
    </el-form-item>
    <el-form-item label="商品售价：" prop="price">
      <el-input size="small" v-model="product.price"></el-input>
    </el-form-item>
    <el-form-item label="市场价：" prop="originalPrice">
      <el-input size="small" v-model="product.originalPrice"></el-input>
    </el-form-item>
    <el-form-item label="商品库存：" prop="stock">
      <el-input size="small" v-model="product.stock"></el-input>
    </el-form-item>
    <el-form-item label="计量单位：" prop="unit">
      <el-input v-model="product.unit" size="small"></el-input>
    </el-form-item>
    <el-form-item label="商品重量：" prop="weight">
      <el-input
        v-model="product.weight"
        size="small"
        style="width: 300px; margin-right: 10px"
      ></el-input
      >克
    </el-form-item>
    <el-form-item label="排序" prop="sort">
      <el-input size="small" v-model="product.sort"></el-input>
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-button type="primary" @click="$emit('input', 1)"
        >下一步，填写商品促销</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { getProductCat } from "@/api/productCat.js";
import { getBrand } from "@/api/productBrand.js";
export default {
  props: ["value", "product"],
  data() {
    return {
      catList: [],
      brandList: [],
      rules: {
        productCategoryId: [
          { required: true, message: "请选择商品分类", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请选择商品名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        subTitle: [
          { required: true, message: "请选择商品副标题", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        brandId: [
          { required: true, message: "请选择商品副标题", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    // 得到分类列表
    getProductCat().then((res) => (this.catList = res.data));

    // 得到品牌列表
    getBrand().then((res) => (this.brandList = res.data));
  },
  methods: {
    handleChangeCat(val) {
      this.product.productCategoryId = val[1];

      this.catList.forEach((item) => {
        if (item.id == this.product.productCategoryId) {
          this.product.productCategoryName = item.name;
        } else {
          item.children.forEach((it) => {
            if (it.id == this.product.productCategoryId) {
              this.product.productCategoryName = it.name;
            }
          });
        }
      });
    },
    handleChangeBrand(val) {
      this.product.brandId = val;
      this.brandList.forEach((value) => {
        if (value.id == this.product.brandId) this.product.brandName = value.name;
      });
    },
  },
};
</script>

<style lang="scss">
.el-form {
  .el-form-item {
    margin-bottom: 10px;
  }
}
</style>
