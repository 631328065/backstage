<template>
  <div class="productCat-box">
    <div class="dataList">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini" @click="openProductCatAdd">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" align="center" label="编号" width="100"> </el-table-column>
      <el-table-column prop="name" align="center" label="分类名称" width="262"> </el-table-column>
      <el-table-column prop="level" align="center" label="级别" width="100"></el-table-column>
      <el-table-column prop="productCount" align="center" label="商品数量" width="100"> </el-table-column>
      <el-table-column prop="productUnit" align="center" label="商品单位" width="100"> </el-table-column>
      <el-table-column align="center" label="导航栏" width="100">
        <template v-slot="data">
          <el-switch v-model="data.row.navStatus" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否显示" width="100">
        <template v-slot="data">
          <el-switch v-model="data.row.showStatus" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="sort" align="center" label="排序" width="100"> </el-table-column>
      <el-table-column align="center" label="设置" width="200">
        <template v-slot="data">
          <el-button size="mini" @click="seeSub(data.row)" :disabled="isDisabled">查看下级</el-button>
          <el-button size="mini">转移商品</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template v-slot="data">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
  </div>
</template>

<script>
import { pCatListId } from "@/api/productCat.js";

export default {
  data() {
    return {
      tableData: [],
      pCatListId: 0,
      total: 0,
      pageNum: 0,
      pageSize: 0,
      isDisabled: false,
    };
  },
  mounted() {
    this.getPCatList();
  },
  methods: {
    //渲染列表
    getPCatList() {
      pCatListId(this.pCatListId).then((res) => {
        this.total = res.data.total;
        this.tableData = res.data.list;
      });
    },

    handleSizeChange(val) {
      this.pageSize = val;
      console.log(val);
      this.getPCatList();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(val);
      this.getPCatList();
    },

    //查看下级
    seeSub(row) {
      this.pCatListId = row.id;
      this.isDisabled = !this.isDisabled;
      this.getPCatList();
    },

    //跳转添加商品分类
    openProductCatAdd() {
      this.$router.push("/product/cat/add");
    },
  },
};
</script>

<style lang="scss">
.productCat-box {
  padding: 20px;
  .dataList {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    padding: 20px;
    button {
      float: right;
    }
  }
  .el-table {
    margin-top: 20px;
    .el-table__header {
      width: 100% !important;
    }
    .el-table__body {
      width: 100% !important;
    }
  }
  .el-pagination {
    margin-top: 20px;
    float: right;
  }
}
</style>
