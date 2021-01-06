<template>
  <el-form
    :model="productCatAdd"
    :rules="rules"
    ref="ruleForm"
    label-width="150px"
    class="demo-ruleForm add-P-Cat"
  >
    <el-form-item label="分类名称：" prop="name">
      <el-input v-model="productCatAdd.name"></el-input>
    </el-form-item>
    <el-form-item label="上级分类：" prop="productAttributeIdList">
      <el-select v-model="productCatAdd.parentId">
        <el-option
          v-for="item in parentIdList"
          :label="item.name"
          :value="item.id"
          :key="item.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="数量单位：" prop="productUnit">
      <el-input v-model="productCatAdd.productUnit"></el-input>
    </el-form-item>
    <el-form-item label="排序：" prop="sort">
      <el-input v-model="productCatAdd.sort"></el-input>
    </el-form-item>
    <el-form-item label="是否显示：" prop="showStatus">
      <el-radio v-model="productCatAdd.showStatus" :label="1">是</el-radio>
      <el-radio v-model="productCatAdd.showStatus" :label="0">否</el-radio>
    </el-form-item>
    <el-form-item label="是否显示在导航栏：" prop="navStatus">
      <el-radio v-model="productCatAdd.navStatus" :label="1">是</el-radio>
      <el-radio v-model="productCatAdd.navStatus" :label="0">否</el-radio>
    </el-form-item>
    <el-form-item label="分类图标：">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="筛选属性：" prop="productAttributeIdList">
      <el-cascader
        v-model="screenList"
        :options="productAttributeIdList"
        @change="handleChangeScreen"
        :props="{ label: 'name', value: 'id' }"
        placeholder="请选择"
        :key="index"
      ></el-cascader>

      <el-button plain style="margin-left: 20px">删除</el-button>
      <br />
      <el-button type="primary" size="small" style="margin-top: 20px"> 新增 </el-button>
    </el-form-item>
    <el-form-item label="关键词：" prop="keywords">
      <el-input v-model="productCatAdd.keywords"></el-input>
    </el-form-item>
    <el-form-item label="分类描述：" prop="description">
      <el-input type="textarea" v-model="productCatAdd.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitCatAdd">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { pCatListId } from "@/api/productCat.js";
import { getProductCat, productCatCreate } from "@/api/productCat.js";

export default {
  data() {
    return {
      productCatAdd: {
        description: "",
        icon: "", //字符串转数组
        keywords: "",
        name: "",
        navStatus: "0",
        parentId: "无上级分类",
        productAttributeIdList: [],
        productUnit: "",
        showStatus: "0",
        sort: 0,
      },
      parentIdList: [],
      productAttributeIdList: [],
      pCatListId: 0,
      screenList: [],
      rules: {
        name: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 2 到 140 个字符",
            trigger: "blur",
          },
        ],
      },
      fileList: [], //数组转字符
      options: [],
      value: "",
    };
  },
  mounted() {
    //得到上级分类
    this.getPCatList();

    // 得到分类列表
    getProductCat().then((res) => (this.productAttributeIdList = res.data));
  },
  methods: {
    //得到分类列表
    getPCatList() {
      pCatListId(this.pCatListId).then((res) => {
        this.parentIdList = res.data.list;
      });
    },
    //提交分类添加
    submitCatAdd() {
      this.productCatAdd.showStatus = Number(this.productCatAdd.showStatus);
      this.productCatAdd.navStatus = Number(this.productCatAdd.navStatus);
      if (this.productCatAdd.parentId == "无上级分类") {
        this.productCatAdd.parentId = 0;
      } else {
        this.productCatAdd.parentId = Number(this.productCatAdd.parentId);
      }
      productCatCreate({ productCategoryParam: this.productCatAdd }).then((res) => {
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "修改商品成功",
          });
          this.$router.push("/product/cat");
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleChangeScreen(value) {
      this.productCatAdd.productAttributeIdList = [];
      this.productCatAdd.productAttributeIdList.push(value[1]);
    },
  },
};
</script>

<style lang="scss">
.add-P-Cat {
  width: 728px;
  border: 1px solid #ebeef5;
  padding: 35px 35px 15px;
  margin: 20px auto;
}
</style>
