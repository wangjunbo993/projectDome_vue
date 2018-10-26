/**
* Created By WiFi ON 2018/7/8 13:28
*/
<template>
    <div class="main">
      <div class="part1">
        <div class="flex tab">
          <div id="days" class="flex1  tab-item"
               @click="tabClick('DAY')"
               :class="currentTable == DAY ? 'tab-focus' : '' ">
            <span>按天</span>
          </div>
          <div id="month" class="flex1 tab-item"
               @click="tabClick('MONTH')"
               :class="currentTable == MONTH ? 'tab-focus' : ''" >
            <span>按月</span>
          </div>
          <div id="total" class="flex1 tab-item"
               @click="tabClick('TOTAL')"
               :class="currentTable == TOTAL ? 'tab-focus' : ''">
            <span>累计</span>
          </div>
        </div>
        <div class="data-table" v-if="currentTable == DAY" id="dayTable"></div>
        <div class="data-table" v-if="currentTable == MONTH"></div>
        <div class="data-table" v-if="currentTable == TOTAL" ></div>
      </div>
      <div class="part2">
        <div class="item">
          <span class="item-title float-left">微信朋友圈</span>
          <span class="inline-block btn  float-right">设置朋友圈海报</span>
        </div>
        <div class="item">
          <span class="item-title float-left">微信好友</span>
          <span class="inline-block btn  float-right">设置好友海报</span>
        </div>
      </div>
      <div class="part3 text-align-left">
        <span> 社交帖子</span>
        <span class="add-url"> +添加地址</span>
        <div>
          <div class="text-align-left">
            <span>帖子地址:</span>
            <span class="">http://www.aaaa.com</span>
          </div>
          <div class="text-align-right">
            <span class="inline-block btn ">帖子修改</span>
          </div>
          <div class="text-align-left">
            <span>帖子地址:</span>
            <span class="">http://www.aaaa.com</span>
          </div>
          <div class="text-align-right">
            <span class="inline-block btn ">帖子修改</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import * as echarts from 'echarts/lib/echarts';
  import MtButton from "../../node_modules/mint-ui/packages/button/src/button.vue";
  const DAY = 'DAY';
  const MONTH = 'MONTH';
  const TOTAL = 'TOTAL';
  export default {
    components: {MtButton},
    name: 'Details',
      data() {
          return {
            DAY: 'DAY',
            MONTH: 'MONTH',
            TOTAL: 'TOTAL',
            myChart: '',
            selected: '',
            tableData: [],
            currentTable: DAY,
            tableItemTitle: ["微信", "QQ", "帖子", "线下", "社群"],
            tableItemDayData: [5, 20, 36, 10, 10],
            tableItemMonthData: [7, 22, 15, 26, 30],
            tableItemTotalData: [10, 40, 46, 30, 40],
            createTableParams: {
              title: "按天累计"
            }
          }
      },
      mounted() {
        this.init()
      },
      methods : {
        init () {
          let _this = this;
          _this.tableData = _this.tableItemDayData;
          _this.myChart = echarts.init(document.getElementById('dayTable'));
          _this.createTable();
        },
        createTable() {
          let _this = this;
          // 绘制图表
          _this.myChart.setOption({
            color: '#ccc',
            width: '80%',
            title: {text: _this.createTableParams.title},
            tooltip: {},
            xAxis: {
              data: _this.tableItemTitle,
            },
            yAxis: {},
            series: [{
              name: '流量',
              type: 'bar',
              data:  _this.tableData,
            }]
          });
        },
        tabClick (type) {
          let _this = this;
          if(type == _this.DAY) {
            _this.tableData = _this.tableItemDayData;
            _this.currentTable = type;
            _this.createTableParams.title = "按天累计";
          }
          if(type == _this.MONTH) {
            _this.tableData = _this.tableItemMonthData;
            _this.createTableParams.title = "按月累计";

          }
          if(type == _this.TOTAL) {
            _this.tableData = _this.tableItemTotalData;
            _this.createTableParams.title = "总计";

          }
          _this.currentTable = type;
          _this.createTable();
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/common.scss";
  .main {
    .part1, .part2, .part3{
      padding: 0 20px;
    }
    .btn {
      text-align: center;
      width: 100px;
      heihgt: 30px;
      line-height: 30px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .tab {
      width: 90%;
      margin: 15px auto;
      border-radius: 3px;
      .tab-item {
        border: 1px solid #0066ff;
      }
      .tab-focus {
        background-color: #0066ff;
        color: #fff;
      }
    }
    .data-table {
      height: 400px;
    }
    .part2 {
      .item {
        width: 100%;
        height: 50px;
        .item-title {
          text-align: left;
        }

      }
    }
    .part3 {
      .add-url {
        color: $mainColor;
      }
    }
  }
</style>
