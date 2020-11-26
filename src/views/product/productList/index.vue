<template>
  <div class="main-box">
    <div class="search">
      <div class="search-title">
        <i class="el-icon-search"></i>
        筛选搜索
      </div>
      <div class="search-content">
        <el-form ref="form" :model="form" label-width="140px">
          <el-form-item label="输入搜索：" class="item">
            <el-input v-model="form.name" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品货号：" class="item">
            <el-input v-model="form.number" placeholder="商品货号"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：" class="item">
            <el-cascader v-model="form.type" :options="typeOptions"></el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌：" class="item">
            <el-select v-model="form.brand" placeholder="请选择品牌">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态：" class="item">
            <el-select v-model="form.upState" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：" class="item">
            <el-select v-model="form.examine" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="formBtn">
            <el-button size="small">重置</el-button>
            <el-button size="small" type="primary">查询结果</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="dataList">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini">添加</el-button>
    </div>

    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%; margin-top: 20px" border>
      <el-table-column type="selection" align="center" width="40"> </el-table-column>
      <el-table-column prop="id" label="编号" width="100" align="center"> </el-table-column>
      <el-table-column label="商品图片" width="120" align="center">
        <template v-slot="data">
          <img :src="data.row.pic" width="80" height="80" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="262" align="center"> </el-table-column>
      <el-table-column label="价格/货号" width="120" align="center">
        <template v-slot="data">
          <p>价格:{{ data.row.price }}</p>
          <p>货号:{{ data.row.productSn }}</p>
        </template>
      </el-table-column>
      <el-table-column label="标签" align="center" width="140">
        <template v-slot="data">
          <el-switch v-model="data.row.publishStatus" inactive-text="上架:" @change="publishStatus(data.row.id, data.row.publishStatus)" :active-value="1" :inactive-value="0"></el-switch>
          <el-switch v-model="data.row.newStatus" inactive-text="新品:" @change="newStatus(data.row.id, data.row.publishStatus)" :active-value="1" :inactive-value="0"></el-switch>
          <el-switch v-model="data.row.recommandStatus" inactive-text="推荐:" @change="recommendStatus(data.row.id, data.row.publishStatus)" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="100" align="center"> </el-table-column>
      <el-table-column label="SKU库存" width="100" align="center">
        <template v-slot="data">
          <el-button type="primary" icon="el-icon-edit" @click="openSkuEdit(data.row)" circle></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="sale" label="销量" width="100" align="center"> </el-table-column>
      <el-table-column label="审核状态" width="100" align="center">
        <template v-slot="data">
          <p>{{ data.row.verifyStatus == 0 ? "未审核" : "已审核" }}</p>
          <a class="details">审核详情</a>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template v-slot="data">
          <p class="operation">
            <el-button size="mini">查看</el-button>
            <el-button size="mini">编辑</el-button>
          </p>
          <p class="operation">
            <el-button size="mini">日志</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </p>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑货品信息" :visible.sync="dialogVisible" width="40%">
      <span>商品货号：</span><span>{{ productSn }}</span>
      <el-input placeholder="按SKU编号搜索" v-model="skuCode" class="input-with-select" size="small" style="width: 50%; margin-left: 10px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="skuDataFilter" border style="width: 100%; margin-top: 20px">
        <el-table-column label="SKU编号">
          <template v-slot="data">
            <el-input v-model="data.row.skuCode"></el-input>
          </template>
        </el-table-column>

        <template v-if="skuData.length > 0">
          <template v-for="(item, index) in JSON.parse(skuData[0].spData)">
            <el-table-column :label="item.key" :key="index">
              <template v-slot="data">
                {{ JSON.parse(data.row.spData)[index].value }}
              </template>
            </el-table-column>
          </template>
        </template>

        <el-table-column label="销售价格">
          <template v-slot="data">
            <el-input v-model="data.row.price"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="商品库存">
          <template v-slot="data">
            <el-input v-model="data.row.stock"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="库存预警值">
          <template v-slot="data">
            <el-input v-model="data.row.lowStock"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="skuEdit">确 定</el-button>
      </span>
    </el-dialog>

    <div class="batch">
      <el-select v-model="batch" placeholder="批量操作" style="min-width: 209px; margin-top: 20px" size="small">
        <el-option v-for="item in batchArr" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-button type="primary" size="small" style="margin-left: 20px">确定</el-button>
    </div>

    <div class="block">
      <el-pagination background :page-sizes="[5, 10, 15]" :page-size="11" layout="total, sizes, prev, pager, next, jumper" :total="11"> </el-pagination>
    </div>
  </div>
</template>

<script>
import { getProductList, productPublishStatus, productNewStatus, productRecommendStatus } from "@/api/product.js";
import { querySku, editSku } from "@/api/productSku.js";
export default {
  data() {
    return {
      form: {
        name: "",
        number: "",
        type: "",
        brand: "",
        upState: "",
        examine: "",
      },
      typeOptions: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "cexiangdaohang",
              label: "侧向导航",
            },
            {
              value: "dingbudaohang",
              label: "顶部导航",
            },
          ],
        },
      ],
      tableData: [],
      dialogVisible: false,
      skuData: [],
      productSn: "",
      pid: "",
      skuCode: "",

      total: "",

      batch: "",
      batchArr: [
        {
          value: "选项1",
          label: "商品上架",
        },
      ],
    };
  },
  computed: {
    skuDataFilter() {
      return this.skuData.filter((item) => {
        if (this.skuCode == "") {
          return item;
        }
        return item.skuCode.toString().includes(this.skuCode);
      });
    },
  },
  mounted() {
    getProductList().then((res) => {
      this.tableData = res.data.list;
    });
  },
  methods: {
    // 上架
    publishStatus(id, status) {
      productPublishStatus({ ids: id, publishStatus: status }).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        }
      });
    },
    // 新品
    newStatus(id, status) {
      productNewStatus({ ids: id, newStatus: status }).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        }
      });
    },
    //推荐
    recommendStatus(id, status) {
      productRecommendStatus({ ids: id, recommendStatus: status }).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        }
      });
    },

    // sku编辑
    openSkuEdit(row) {
      querySku(row.id, { keyword: null }).then((res) => {
        this.skuData = res.data;
        this.dialogVisible = true;
        this.productSn = row.productSn;
        this.pid = row.id;
      });
    },
    //修改
    skuEdit() {
      let skuEditData = JSON.parse(JSON.stringify(this.skuData));
      editSku(this.pid, skuEditData).then((res) => {
        if (res.code == 200) {
          this.dialogVisible = false;
          this.$message({
            message: "sku库存修改成功",
            type: "success",
          });
          this.skuCode = "";
        }
      });
    },
  },
};
</script>

<style lang="scss">
.main-box {
  padding: 10px;
  .search {
    position: relative;
    border: 1px solid #ebeef5;
    color: #303133;
    transition: 0.3s;
    padding: 20px;
    border-radius: 4px;
    overflow: hidden;
    .search-content {
      margin-top: 10px;
      .item {
        display: inline-block;
        input {
          width: 203px;
          height: 32px;
        }
      }
      .formBtn {
        position: absolute;
        top: 5%;
        right: 1%;
      }
    }
  }
  .details {
    color: #66b1ff !important;
    font-size: 14px !important;
    font-weight: 500 !important;
  }
  .dataList {
    border: 1px solid #ccc;
    margin-top: 20px;
    padding: 20px;
    color: #303133;
    button {
      float: right;
    }
  }

  .operation {
    margin-right: 16px;
  }
  .batch {
    display: inline-block;
  }
  .block {
    display: inline-block;
    float: right;
    margin-top: 20px;
  }
}
</style>
