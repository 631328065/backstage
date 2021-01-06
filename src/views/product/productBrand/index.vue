<template>
  <div class="productBrand-box">
    <el-table border stripe :data="tableData" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" align="center" width="60"> </el-table-column>
      <el-table-column prop="id" align="center" label="编号" width="100"> </el-table-column>
      <el-table-column prop="name" align="center" label="品牌名称" width="362"> </el-table-column>
      <el-table-column prop="firstLetter" align="center" label="品牌首字母" width="100"> </el-table-column>
      <el-table-column prop="sort" align="center" label="排序" width="100"> </el-table-column>
      <el-table-column prop="factoryStatus" align="center" label="品牌制造商" width="100">
        <template v-slot="data">
          <el-switch v-model="data.row.factoryStatus" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="showStatus" align="center" label="是否显示" width="100">
        <template v-slot="data">
          <el-switch v-model="data.row.showStatus" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" label="相关" width="220">
        <template v-slot="data">
          商品：<el-link type="primary" :underline="false">{{ data.row.productCount }}</el-link> 评价：<el-link type="primary" :underline="false">{{ data.row.productCommentCount * 10 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template v-slot="data">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="batch">
      <el-select v-model="value" placeholder="请选择" size="small" style="width: 209px; margin-top: 20px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-button type="primary" size="small" style="margin-left: 20px">确定</el-button>
    </div>

    <div class="block">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="4" :page-sizes="[5, 10, 15]" :page-size="11" layout="total, sizes, prev, pager, next, jumper" :total="1"> </el-pagination>
    </div>
  </div>
</template>

<script>
import { getbrandList } from "@/api/productBrand.js";

export default {
  data() {
    return {
      tableData: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  mounted() {
    this.getpBrandList();
  },
  methods: {
    getpBrandList() {
      getbrandList({ pageSize: 10 }).then((res) => {
        this.tableData = res.data.list;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss">
.productBrand-box {
  padding: 20px;
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
