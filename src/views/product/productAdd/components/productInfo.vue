<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="120px" style="width: 600px">
    <el-form-item label="商品分类：" prop="productCat">
      <el-select v-model="form.productCat" placeholder="请选择" size="small">
        <el-option label="区域一" value="shanghai"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动名称：" prop="name">
      <el-input v-model="form.name" size="small"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('input', 1)">下一步，填写商品促销</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      form: {
        name: "",
        productCat: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        productCat: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
};
</script>
