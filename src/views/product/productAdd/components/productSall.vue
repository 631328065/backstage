<template>
  <div>
    商品促销
    <el-button type="primary" @click="$emit('input', 0)">上一步，填写商品信息</el-button>
    <el-button type="primary" @click="$emit('input', 2)">下一步，填写商品属性</el-button>
  </div>
</template>
<script>
export default {
  props: ["value"],
};
</script>
