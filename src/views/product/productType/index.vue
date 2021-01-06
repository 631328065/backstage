<template>
  <div class="productType-box">
    <div class="dataList">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" align="center" label="编号" width="100"> </el-table-column>
      <el-table-column prop="name" align="center" label="类型名称" width="462"> </el-table-column>
      <el-table-column prop="attributeCount" align="center" label="属性数量" width="200"> </el-table-column>
      <el-table-column prop="paramCount" align="center" label="参数数量" width="200"> </el-table-column>
      <el-table-column align="center" label="设置" width="200">
        <template v-slot="data">
          <el-button size="mini">属性列表</el-button>
          <el-button size="mini">参数列表</el-button>
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
import { pAttrCatList } from "@/api/productType.js";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageNum: 0,
      pageSize: 0,
    };
  },
  mounted() {
    this.getpAttrCatList();
  },
  methods: {
    getpAttrCatList() {
      pAttrCatList().then((res) => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.getpAttrCatList();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getpAttrCatList();
    },
  },
};
</script>

<style lang="scss">
.productType-box {
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
