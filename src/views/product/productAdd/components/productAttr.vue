<template>
  <div>
    商品属性
    <el-button type="primary" @click="$emit('input', 1)">上一步，填写商品促销</el-button>
    <el-button type="primary" @click="$emit('input', 3)">下一步，填写商品关联</el-button>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>
