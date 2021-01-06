<template>
  <div class="productAdd">
    <el-steps :space="200" align-center :active="active" finish-status="success">
      <el-step title="填写商品信息"></el-step>
      <el-step title="填写商品促销"></el-step>
      <el-step title="填写商品属性"></el-step>
      <el-step title="选择商品关联"></el-step>
    </el-steps>

    <div class="dataInfo">
      <productInfo :product="product" v-show="isShow[0]" v-model="active"></productInfo>
      <productSall :product="product" v-show="isShow[1]" v-model="active"></productSall>
      <productAttr :product="product" v-show="isShow[2]" v-model="active"></productAttr>
      <productRel :product="product" v-show="isShow[3]" v-model="active"></productRel>
    </div>
  </div>
</template>

<script>
import productInfo from "@/views/product/productAdd/components/productInfo.vue";
import productSall from "@/views/product/productAdd/components/productSall.vue";
import productAttr from "@/views/product/productAdd/components/productAttr.vue";
import productRel from "@/views/product/productAdd/components/productRel.vue";
import { productUpdateInfo } from "@/api/product.js";
export default {
  data() {
    return {
      active: 0,
      isShow: [true, false, false, false],
      product: {
        albumPics: "string", //册图片，连产品图片限制为5张，以逗号分割
        brandId: "", //品牌编号
        brandName: "string", //品牌名称
        deleteStatus: 0, //删除状态
        description: "", //商品描述
        detailDesc: "string", //详情描述
        detailHtml: "string", //详情网页内容
        detailMobileHtml: "string", //移动端网页内容
        detailTitle: "", //详情标题
        feightTemplateId: 0, //
        giftGrowth: 0, //赠送的成长值
        giftPoint: 0, //赠送的积分
        id: 0, //产品id,新增的时候不需要有
        keywords: "", //商品关键字
        lowStock: 0, //库存预警值
        memberPriceList: [
          {
            //商品会员价格设置
            id: 0, //会员编号
            memberLevelId: 0, //会员级别编号
            memberLevelName: "string", //会员名称
            memberPrice: 0, //会员价
            productId: 0, //产品id
          },
        ],
        name: "", //商品名称
        newStatus: 0, //新品状态:0->不是新品；1->新品
        note: "", //商品备注
        originalPrice: 0, //市场价
        pic: "string", //商品相册
        prefrenceAreaProductRelationList: [
          {
            //优选专区和商品的关系
            id: 0,
            prefrenceAreaId: 0, //优选区id
            productId: 0, //商品id
          },
        ],
        previewStatus: 0, //是否为预告商品：0->不是；1->是
        price: 0, //商品价格
        productAttributeCategoryId: "", //商品属性分类id
        productAttributeValueList: [
          {
            //商品参数集合
            id: 0,
            productAttributeId: 0, //商品参数id
            productId: 0, //商品id
            value: "", //参数内容
          },
        ],
        productCategoryId: 0, //商品分类id
        productCategoryName: "string", //商品分类名称
        productFullReductionList: [
          {
            //商品满减价格设置
            fullPrice: 0,
            id: 0,
            productId: 0,
            reducePrice: 0,
          },
        ],
        productLadderList: [
          {
            //商品阶梯价格设置
            count: 0,
            discount: 0,
            id: 0,
            price: 0,
            productId: 0,
          },
        ],
        productSn: "", //货号
        promotionEndTime: "2020-11-27T03:47:50.925Z", //促销结束时间
        promotionPerLimit: 0, //活动限购数量
        promotionPrice: 0, //促销价格
        promotionStartTime: "2020-11-27T03:47:50.926Z", //促销开始时间
        promotionType: 0, //促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购
        publishStatus: 0, //上架状态：0->下架；1->上架
        recommandStatus: 0, //推荐状态；0->不推荐；1->推荐
        sale: 0, //销量
        serviceIds: [], //以逗号分割的产品服务：1->无忧退货；2->快速退款；3->免费包邮
        skuStockList: [
          {
            //商品的sku库存信息
            id: 0,
            lockStock: 0,
            lowStock: 0,
            pic: "string",
            price: 0,
            productId: 0,
            promotionPrice: 0,
            sale: 0,
            skuCode: "string",
            spData: "string",
            stock: 0,
          },
        ],
        sort: 0, //排序
        stock: 0, //库存
        subTitle: "", //副标题
        subjectProductRelationList: [
          {
            //专题和商品关系
            id: 0,
            productId: 0,
            subjectId: 0,
          },
        ],
        unit: "", //单位
        usePointLimit: 0, //限制使用的积分数
        verifyStatus: 0, //审核状态：0->未审核；1->审核通过
        weight: 0, //商品重量，默认为克
      },
    };
  },
  components: { productInfo, productSall, productAttr, productRel },
  watch: {
    active(n, o) {
      this.isShow[n] = true;
      this.isShow[o] = false;
    },
  },
  mounted() {
    let pid = this.$route.query.pid;
    if (pid) {
      //根据id查询..说明是编辑页面
      productUpdateInfo(pid).then((res) => {
        this.product = res.data;
        this.product.serviceIds = this.product.serviceIds.split(",");
      });
    }
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
