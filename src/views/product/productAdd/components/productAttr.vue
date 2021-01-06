<template>
  <div>
    <el-form ref="form" :model="product" label-width="120px" style="width: 720px">
      <el-form-item label="属性类型：" prop="productAttributeCategoryId">
        <el-select
          placeholder="请选择属性"
          v-model="product.productAttributeCategoryId"
          @change="pAttrCatListChange"
          size="small"
        >
          <el-option
            v-for="item in pAttrCatList"
            :label="item.name"
            :value="item.id"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品规格：">
        <el-row
          style="
            background-color: #f8f9fc;
            border-radius: 5px;
            padding: 10px;
            min-height: 40px;
            border: 1px solid #ccc;
          "
          :gutter="10"
        >
          <template v-for="(item, index) in attrList">
            <el-col :span="6" style="text-align: right">
              <span>{{ item.name }}</span>
            </el-col>
            <el-col :span="18">
              <template v-if="item.inputList">
                <el-checkbox-group v-model="checkList[index]">
                  <template v-for="(item2, index2) in item.inputList.split(',')">
                    <el-checkbox :label="item2" :key="index2"></el-checkbox>
                  </template>
                </el-checkbox-group>
              </template>
              <template v-else>
                <el-checkbox-group v-model="checkList[index]">
                  <template v-for="(item3, index3) in checkList2Items">
                    <el-checkbox :label="item3" :key="index3"></el-checkbox>
                  </template>
                </el-checkbox-group>
                <el-input
                  placeholder="请输入内容"
                  v-model="input"
                  size="mini"
                  style="width: 130px"
                  clearable
                >
                </el-input>
                <el-button @click="handAdd" size="mini">新增</el-button>
              </template>
            </el-col>
          </template>
        </el-row>
        <el-row>
          <el-col
            style="
              background-color: #f8f9fc;
              border-radius: 5px;
              padding: 10px;
              min-height: 40px;
              border: 1px solid #ccc;
              margin-top: 20px;
            "
          >
            <el-table :data="product.skuStockList" border style="width: 100%">
              <!-- 加入属性 -->
              <template v-if="attrList.length > 0">
                <template v-for="(item, index) in attrList">
                  <el-table-column :label="item.name" :key="index">
                    <!-- 当前行sku的值 -->
                    <template v-slot="data">
                      {{ data.row.spData[index].value }}
                    </template>
                    <!-- {{skuData[index].value}} -->
                  </el-table-column>
                </template>
                <el-table-column prop="price" label="销售价格">
                  <template v-slot="data">
                    <el-input v-model="data.row.price"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="stock" label="商品库存">
                  <template v-slot="data">
                    <el-input v-model="data.row.stock"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="lowStock" label="库存预警值">
                  <template v-slot="data">
                    <el-input v-model="data.row.lowStock"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="skuCode" label="SKU编号">
                  <template v-slot="data">
                    <el-input v-model="data.row.skuCode"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </template>
            </el-table>
          </el-col>
        </el-row>
        <el-button type="primary" size="mini" @click="flushList">刷新列表</el-button>
        <el-button type="primary" size="mini">同步价格</el-button>
        <el-button type="primary" size="mini">同步库存</el-button>
      </el-form-item>
      <el-form-item label="商品参数：">
        <template v-for="(item, index) in parameterList">
          <el-row
            :gutter="10"
            :key="index"
            style="background-color: #f8f9fc; border-radius: 5px; padding: 10px"
          >
            <el-col :span="6" style="text-align: right"
              ><span>{{ item.name }}：</span></el-col
            >
            <el-col :span="18"
              ><span
                ><template v-if="item.inputList">
                  <el-select
                    v-model="product.productAttributeValueList[index].value"
                    placeholder="请选择"
                    style="width: 50%"
                  >
                    <el-option
                      v-for="(item2, index2) in item.inputList.split(',')"
                      :key="index2"
                      :label="item2"
                      :value="item2"
                    >
                    </el-option>
                  </el-select>
                </template>
                <template v-else>
                  <el-input
                    style="width: 50%"
                    v-model="product.productAttributeValueList[index].value"
                  ></el-input> </template></span
            ></el-col>
          </el-row>
        </template>
      </el-form-item>
      <el-form-item label="商品相册：">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          ref="upload"
          :on-change="handlechange"
          :file-list="filelist"
          :auto-upload="false"
        >
          <i class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="product.pic" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="规格参数：">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="电脑端详情" name="first" v-model="product.detailHtml">
            <div id="div1"></div>
          </el-tab-pane>
          <el-tab-pane
            label="移动端详情"
            name="second"
            v-model="product.detailMobileHtml"
          >
            <div id="div2"></div>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-button type="primary" @click="$emit('input', 1)"
          >上一步，填写商品促销</el-button
        >
        <el-button type="primary" @click="nextRel">下一步，填写商品关联</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getpAttrCatList, getpAttrList } from "@/api/productAttr.js";
import E from "wangeditor";
export default {
  props: ["value", "product"],
  data() {
    return {
      pAttrCatList: [],
      attrList: [],
      parameterList: [],
      checkList: [[], [], [], [], []],
      checkList2Items: [],
      input: "",
      dialogVisible: false,
      filelist: [],
      disabled: false,
      activeName: "first",
      editor: "",
      editor2: "",
    };
  },
  mounted() {
    this.editor = new E("#div1");
    this.editor.create();
    this.editor.txt.html("电脑端详情");

    this.editor2 = new E("#div2");
    this.editor2.create();
    this.editor2.txt.html("移动端详情");

    getpAttrCatList().then((res) => (this.pAttrCatList = res.data));
  },
  methods: {
    pAttrCatListChange() {
      // 查询该属性分类对应的参数列表或者属性列表
      let cid = this.product.productAttributeCategoryId;

      //获取属性列表
      getpAttrList(cid, { type: 0 }).then((res) => {
        this.attrList = res.data.list;
      });

      //获取参数列表
      this.product.productAttributeValueList = [];
      getpAttrList(cid, { type: 1 }).then((res) => {
        this.parameterList = res.data.list;
        res.data.list.forEach((element) => {
          //商品参数集合
          let pAttrCatListType_1 = {
            id: 0,
            productAttributeId: element.id, //商品参数id
            productId: 0, //商品id
            value: "", //参数内容
          };
          this.product.productAttributeValueList.push(pAttrCatListType_1);
        });
      });
      this.product.skuStockList = [];
    },

    // 刷新列表
    flushList() {
      this.product.skuStockList = [];
      let spDataValueArr = [];
      let n_spDataValueArr = [];
      /**
       * [
       *  [{"颜色":"红色"},{"容量":"12G"}],
       *  [{"颜色":"红色"},{“容量":"24G"}]
       * ]
       */
      //获取选中的属性列表
      //循环选中的属性列表
      //将值添加到skuData中去    product.skuStockList  []

      //返回有数据的checkList
      this.checkList = this.checkList.filter((item) => {
        return item.length > 0;
      });
      this.checkList.forEach((item) => {
        if (spDataValueArr.length == 0) {
          item.forEach((item2) => {
            let skuDataValue = {
              value: item2,
            };
            spDataValueArr.push([skuDataValue]);
          });
        } else {
          item.forEach((item2) => {
            spDataValueArr.forEach((item3) => {
              let skuDataValue = {
                value: item2,
              };
              let new_spDataValueArr = JSON.parse(JSON.stringify(item3));
              new_spDataValueArr.push(skuDataValue);
              n_spDataValueArr.push(new_spDataValueArr);
            });
          });
        }
      });
      n_spDataValueArr.forEach((item) => {
        let skuInfo = {
          //商品的sku库存信息
          id: 0,
          lockStock: 0,
          lowStock: 0,
          pic: "string",
          price: 0,
          productId: 0,
          promotionPrice: 0,
          sale: 0,
          skuCode: "",
          spData: item,
          stock: 0,
        };
        this.product.skuStockList.push(skuInfo);
      });
    },

    //新增
    handAdd() {
      this.checkList2Items.push(this.input);
      this.input = "";
    },

    handlePictureCardPreview(file) {
      this.product.pic = file.url;
      this.dialogVisible = true;
    },

    handleDelete(index, row) {
      this.product.skuStockList.splice(index, 1);
    },

    //相册
    handlechange(file, fileList) {
      let url = "";
      if (fileList.length > 0) {
        this.product.pic = fileList[0].url;
        fileList.forEach((item) => {
          url = url + item.url + ",";
        });
      }
      url = url.substr(0, url.length - 1);
      this.product.albumPics = url;
    },

    //下一步
    nextRel() {
      //在点击下一步的时候，获取富文本编辑器里面的内容，给到product
      this.product.detailHtml = this.editor.txt.html();
      this.product.detailMobileHtml = this.editor2.txt.html();

      this.$emit("input", 3);
    },

    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>
