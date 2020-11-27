<template>
  <div>
    商品关联
    <el-button type="primary" @click="$emit('input', 2)">上一步，填写商品信息</el-button>
    <el-button type="primary">完成</el-button>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>
