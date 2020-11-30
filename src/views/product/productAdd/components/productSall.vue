<template>
  <div>
    <el-form ref="form" :model="product" label-width="120px" style="width: 600px">
      <el-form-item label="赠送积分：" prop="giftPoint">
        <el-input v-model="product.giftPoint" size="small"></el-input>
      </el-form-item>
      <el-form-item label="赠送成长值：" prop="giftGrowth">
        <el-input v-model="product.giftGrowth" size="small"></el-input>
      </el-form-item>
      <el-form-item label="积分购买限制：" prop="usePointLimit">
        <el-input v-model="product.usePointLimit" size="small"></el-input>
      </el-form-item>
      <el-form-item label="预告商品：" prop="previewStatus">
        <el-switch v-model="previewStatus"></el-switch>
      </el-form-item>
      <el-form-item label="商品上架：">
        <el-switch v-model="publishStatus"></el-switch>
      </el-form-item>
      <el-form-item label="商品推荐："> 新品<el-switch v-model="newStatus" style="margin-right: 20px; margin-left: 10px"> </el-switch> 推荐 <el-switch v-model="recommandStatus" style="margin-left: 10px"></el-switch> </el-form-item>
      <el-form-item label="服务保证：">
        <el-checkbox-group v-model="serviceIds">
          <el-checkbox label="1">无忧退货</el-checkbox>
          <el-checkbox label="2">快速退款</el-checkbox>
          <el-checkbox label="3">免费包邮</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="详细页标题：">
        <el-input v-model="product.detailTitle" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品关键字：">
        <el-input v-model="product.keywords" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品备注：" prop="note">
        <el-input type="textarea" placeholder="请输入内容" v-model="product.note"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$emit('input', 0)">上一步，填写商品信息</el-button>
        <el-button type="primary" @click="$emit('input', 2)">下一步，填写商品属性</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["value", "product"],
  data() {
    return {
      previewStatus: 0, //是否为预告商品：0->不是；1->是
      publishStatus: 0, //上架状态：0->下架；1->上架
      newStatus: 0, //新品状态:0->不是新品；1->新品
      recommandStatus: 0, //推荐状态；0->不推荐；1->推荐
      serviceIds: [], //以逗号分割的产品服务：1->无忧退货；2->快速退款；3->免费包邮
    };
  },
  watch: {
    //是否为预告商品：0->不是；1->是
    previewStatus() {
      this.product.previewStatus = Number(this.previewStatus);
    },
    //上架状态：0->下架；1->上架
    publishStatus() {
      this.product.publishStatus = Number(this.publishStatus);
    },
    //新品状态:0->不是新品；1->新品
    newStatus() {
      this.product.newStatus = Number(this.newStatus);
    },
    //推荐状态；0->不推荐；1->推荐
    recommandStatus() {
      this.product.recommandStatus = Number(this.recommandStatus);
    },
    //以逗号分割的产品服务：1->无忧退货；2->快速退款；3->免费包邮
    serviceIds() {
      this.product.serviceIds = this.serviceIds.join(",");
    },
  },
};
</script>
