<template>
  <div class="max-box">
    <el-row :gutter="30" class="row">
      <template v-for="el in 3">
        <el-col :span="6">
          <div class="introduce">
            <p>后天项目</p>
            <p>mall</p>
          </div>
        </el-col>
      </template>
      <el-col :span="6">
        <div class="code">
          <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg" alt="" />
          <p>mall全套学习教程连载中！</p>
          <p><a>关注公号</a>，第一时间获取。</p>
        </div>
      </el-col>
      <template v-for="el in 3">
        <el-col :span="6">
          <div class="total">
            <img
              src="data:image/png;base64,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"
            />
            <div class="total-p">
              <p class="p1">今天订单总数</p>
              <p class="p2">200</p>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>

    <el-row class="overview" :gutter="30">
      <template v-for="el in 2">
        <el-col :span="12">
          <div class="sub">
            <div class="sub-1">
              <span>商品总览</span>
            </div>
            <div class="sub-2">
              <el-row :gutter="30" class="sub-2-top">
                <template v-for="el in 4">
                  <el-col :span="6">
                    <span>100</span>
                  </el-col>
                </template>
              </el-row>
              <el-row :gutter="30" class="sub-2-bto">
                <template v-for="el in 4">
                  <el-col :span="6">
                    <span>已下架</span>
                  </el-col>
                </template>
              </el-row>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="30">
      <el-col :span="24">
        <el-col :span="24" class="affair">
          <div class="sub-1">
            <span>待处理事务</span>
          </div>
          <div class="sub-2">
            <template v-for="(e, i) in 3">
              <el-row :gutter="20" :key="i">
                <template v-for="(e2, i2) in 3">
                  <el-col :span="8" class="sub-2-1" :key="i2">
                    <div>
                      <span>待付款订单</span>
                      <span>(10)</span>
                    </div>
                  </el-col>
                </template>
              </el-row>
            </template>
          </div>
        </el-col>
      </el-col>
    </el-row>

    <el-row :gutter="30">
      <el-col>
        <el-col class="Statistics">
          <div class="sub-1">
            <span>订单统计</span>
          </div>
          <el-row class="sub-2">
            <el-col :span="4" class="sub-2-1">
              <template v-for="el in 4">
                <div class="sub-2-1-1">
                  <div>本月订单总数</div>
                  <div>10000</div>
                  <div><span>+10%</span><span>同比上月</span></div>
                </div>
              </template>
            </el-col>
            <el-col :span="20" class="sub-2-2">
              <div class="sub-2-2-1">
                <el-date-picker v-model="value1" @change="seeDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
              </div>
              <div class="sub-2-2-2">
                <ve-line :data="chartData" :settings="chartSettings" :legend-visible="false"></ve-line>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//导入axios
import axios from "axios";

export default {
  data() {
    this.chartSettings = {
      xAxisType: "time",
      axisSite: { right: ["订单金额"] },
      area: true,
    };
    return {
      value1: "",
      chartData: {
        columns: ["日期", "订单数量", "订单金额"],
        rows: [],
      },
      rows2: [
        { 日期: "2020-11-01", 订单数量: 20, 订单金额: 2000 },
        { 日期: "2020-11-02", 订单数量: 33, 订单金额: 5000 },
        { 日期: "2020-11-03", 订单数量: 50, 订单金额: 10000 },
        { 日期: "2020-11-04", 订单数量: 78, 订单金额: 8000 },
        { 日期: "2020-11-05", 订单数量: 40, 订单金额: 4000 },
        { 日期: "2020-11-06", 订单数量: 25, 订单金额: 2000 },
        { 日期: "2020-11-07", 订单数量: 50, 订单金额: 10000 },
      ],
    };
  },
  mounted() {
    this.chartData.rows = this.rows2;
  },
  methods: {
    seeDate() {
      this.chartData.rows = this.rows2.filter((item) => {
        return new Date(item.日期) >= this.value1[0] && new Date(item.日期) <= this.value1[1];
      });
    },
  },
};
</script>

<style lang="scss">
.max-box {
  padding-top: 60px;
  padding-left: 120px !important;
  padding-right: 120px !important;
}
.row {
  .introduce {
    border: 1px solid #ccc;
    p {
      margin: 0;
      padding: 15px 20px;
      box-sizing: border-box;
    }
    p:nth-child(1) {
      font-weight: 700;
      background-color: #f2f6fc;
      color: #606266;
    }
    p:nth-child(2) {
      font-size: 20px;
      font-weight: 500;
      color: #409eff;
      line-height: 30px;
    }
  }
  .code {
    padding: 20px;
    border: 1px solid #ccc;
    color: #303133;
    text-align: center;
    box-shadow: 0 0 3px #068bc9;
    p {
      margin: 0;
      a {
        color: #068bc9;
        cursor: pointer;
      }
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
  .total {
    margin-top: -100px;
    border: 1px solid #ccc;
    padding: 20px;
    img {
      width: 60px;
      height: 60px;
    }
    .total-p {
      display: inline-block;
      margin-left: 10px;
      .p1 {
        font-size: 16px;
        color: #909399;
      }
      .p2 {
        margin-top: -8px;
        font-size: 20px;
        font-weight: 400;
        color: #606266;
      }
    }
  }
}
.overview {
  margin-top: 20px;
  .el-col-12 {
    .sub {
      border: 1px solid #ccc;
      .sub-1 {
        background-color: #f2f6fc;
        font-weight: 700;
        color: #606266;
        padding: 15px 20px;
      }
      .sub-2 {
        padding: 40px;
        .sub-2-top {
          font-size: 24px;
          text-align: center;
          color: #f56c6c;
        }
        .sub-2-bto {
          margin-top: 10px;
          text-align: center;
          font-size: 16px;
          color: #606266;
        }
      }
    }
  }
}
.affair {
  border: solid 1px #ccc;
  margin-top: 20px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  .sub-1 {
    line-height: 20px;
    color: #606266;
    padding: 15px 20px;
    background: #f2f6fc;
    font-weight: 700;
    box-sizing: border-box;
  }
  .sub-2 {
    padding: 20px 40px;
    .sub-2-1 {
      div {
        border-bottom: 1px solid #ebeef5;
        padding: 10px;
        span:nth-child(1) {
          font-size: 16px;
          color: #606266;
        }
        span:nth-child(2) {
          margin-left: 67%;
          color: #f56c6c;
        }
      }
    }
  }
}
.Statistics {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding-left: 0 !important;
  padding-right: 0 !important;
  .sub-1 {
    color: #606266;
    padding: 15px 20px;
    background: #f2f6fc;
    font-weight: 700;
  }
  .sub-2 {
    .sub-2-1 {
      padding: 20px;
      .sub-2-1-1 {
        margin-top: 20px;
        div:nth-child(1) {
          color: rgb(144, 147, 153);
          font-size: 14px;
        }
        div:nth-child(2) {
          color: rgb(96, 98, 102);
          font-size: 24px;
          padding: 10px 0px;
        }
        div:nth-child(3) {
          span:nth-child(1) {
            font-size: 14px;
            color: #67c23a;
          }
          span:nth-child(2) {
            margin-left: 5px;
            color: rgb(192, 196, 204);
            font-size: 14px;
          }
        }
      }
    }
    .sub-2-2 {
      border-left: 1px solid rgb(220, 223, 230);
      .sub-2-2-1 {
        float: right;
      }
      .sub-2-2-2 {
        padding-top: 40px;
      }
    }
  }
}
</style>
