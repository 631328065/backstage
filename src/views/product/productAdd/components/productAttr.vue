<template>
  <div>
    <el-form ref="form" :model="product" label-width="120px" style="width: 600px">
      <el-form-item label="属性类型：" prop="productAttributeCategoryId">
        <el-select placeholder="请选择属性" v-model="product.productAttributeCategoryId" @change="pAttrCatListChange" size="small">
          <el-option v-for="item in pAttrCatList" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品参数：">
        <template v-for="item in pAttrList">
          {{ item.name }}
          <template v-if="item.inputList != ''">
            
          </template>
          <template v-else>
            <el-input v-model="item.inputList" :key="item.id" size="small"></el-input>
          </template>
        </template>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-button type="primary" @click="$emit('input', 1)">上一步，填写商品促销</el-button>
        <el-button type="primary" @click="$emit('input', 3)">下一步，填写商品关联</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getpAttrCatList, getpAttrList } from "@/api/productAttr.js";
export default {
  props: ["value", "product"],
  data() {
    return {
      pAttrCatList: [],
      pAttrList: [],
      inputList: [],
    };
  },
  mounted() {
    getpAttrCatList().then((res) => (this.pAttrCatList = res.data));
  },
  methods: {
    pAttrCatListChange() {
      // 查询该属性分类对应的参数列表或者属性列表
      let cid = this.product.productAttributeCategoryId;

      //获取属性列表
      getpAttrList(cid, { type: 1 }).then((res) => {
        this.pAttrList = res.data.list;
        this.pAttrList.forEach((item) => {
          this.inputList.push(item.inputList.split(","));
          console.log(this.inputList);
        });
      });
    },
  },
};
</script>
