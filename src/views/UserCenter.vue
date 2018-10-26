/**
* Created By WiFi ON 2018/7/8 9:58
*/
<template>

  <div class="center">
		<div class="nomal_box">
			<div class="flex">
				<div class="flex3">
	          <img class="userPhoto" src='../assets/imgs/userCenter/logo.jpg'/>
       	</div>
       	<div class="flex5">
	          <div class="userName flex">
	          	<div class="flex2 text-align-left">{{userInfo.userName}}</div>
	          	<div class="flex2 borderColor small_font"><i class="iconfont">&#xe6ea;</i>刷新数据</div>
	          	<div class="flex1"></div>
	          </div>
	          <p class="small_font text-align-left">{{userInfo.motto}}</p>
       	</div>
       	<div class="flex2" style="padding-top: 0.09rem;">
       		<router-link to="/editUserInfo">
       			<i class="iconfont editUserInfo">&#xe65e;</i>
	        </router-link>
       	</div>
  		</div>
	  	<div class="flex" style="margin-top: 0.27rem;">
	  		<div class="left flex1">
	        <p class="nomal_font">{{userInfo.userWeekRank}}</p>
	        <p class="small_font">余额</p>
        </div>
        <div class="border"></div>
        <div class="left flex1">
	        <p class="nomal_font">{{userInfo.userWeekRank}}</p>
	        <p class="small_font">冻结</p>
        </div>
        <div class="border"></div>
        <div class="right flex1">
	        <p class="nomal_font">{{userInfo.userWeekRank}}</p>
	        <p class="small_font">可提现</p>
        </div>
		  </div>
    	<div class="center flex">
        <div class="flex1">
	          <div class="button">本周排名
              <span v-if="userInfo.ranking">
                {{userInfo.overRanking}
              </span>
              <span v-else>
                {{userInfo.overRanking}} +
              </span>
            </div>
        </div>
    	</div>
	  </div>
		<div class="model" style="margin-top: 0.32rem;">
			<div class="model_header">
				<div class="flex">
					<div class="flex1 text-align-left">
					<img class="icon" src="../assets/imgs/userCenter/zhanJi.svg" alt="我的战绩"/>
					<span class="model_title">我的战绩</span>
					</div>
					<div class="flex1 text-align-right">
						<router-link to="/retail">
       				<i class="icon iconfont">&#xe65e;</i>
	        	</router-link>
					</div>
				</div>
			</div>
			<div class="flex model_body">
				<div class="flex2 text-align-left">
					<div class="record">{{profit.total}}<span class="small_font black_color">元</span></div>
					<span class="black_color">总战绩</span>
				</div>
				<div class="flex1"></div>
				<div class="flex2">
					<div class="model_content">
						<div class="model_money"><span class="black_color">零售</span> <span class="">{{profit.retail}}</span></div>
						<div class="model_money"><span class="black_color">团队</span> <span class="">{{profit.team}}</span></div>
					</div>
				</div>
			</div>
		</div>
		<!--我的积分-->
		<div class="model" >
			<div class="model_header">
				<div class="flex">
					<div class="flex1 text-align-left">
					<img class="icon" src="../assets/imgs/userCenter/jiFen.svg" alt="我的战绩"/>
					<span class="model_title">我的积分</span>
					</div>
					<div class="flex1 text-align-right">
						<router-link to="/retail">
       				<i class="icon iconfont">&#xe65e;</i>
	        	</router-link>
					</div>
				</div>
			</div>
			<div class="flex model_body">
				<div class="flex2 text-align-left">
					<div class="record">{{score.total}}<span class="small_font black_color">元</span></div>
					<span class="black_color">总积分</span>
				</div>
				<div class="flex1"></div>
				<div class="flex2">
					<div class="model_content">
						<div class="model_money"><span class="black_color">努力</span> <span class="">{{score.direct}}</span></div>
						<div class="model_money"><span class="black_color">躺赚</span> <span class="">{{score.indirect}}</span></div>
					</div>
				</div>
			</div>
		</div>
		<!--我的会员-->
		<div class="model" >
			<div class="model_header">
				<div class="flex">
					<div class="flex1 text-align-left">
					<img class="icon" src="../assets/imgs/userCenter/Group 2.svg" alt="我的战绩"/>
					<span class="model_title">我的会员</span>
					</div>
					<div class="flex1 text-align-right">
						<router-link to="/retail">
       				<i class="icon iconfont">&#xe65e;</i>
	        	</router-link>
					</div>
				</div>
			</div>
			<div class="flex model_body">
				<!--<div class="flex2 text-align-left">
					<div class="record">{{userInfo.record}}<span class="small_font black_color">元</span></div>
					<span class="black_color">总战绩</span>
				</div>
				<div class="flex1"></div>
				<div class="flex2">
					<div class="model_content">
						<div class="model_money"><span class="black_color">零售</span> <span class="">{{userInfo.record}}</span></div>
						<div class="model_money"><span class="black_color">团队</span> <span class="">{{userInfo.record}}</span></div>
					</div>
				</div>-->
			</div>
		</div>
	  <!--渠道信息总览-->
	  <div class="model" style="height: auto;">
			<div class="model_header">
				<div class="flex">
					<div class="flex1 text-align-left">
					<img class="icon" src="../assets/imgs/userCenter/Group 3.svg" alt="我的战绩"/>
					<span class="model_title">渠道信息总览</span>
					</div>
					<div class="flex1 text-align-right">
						<router-link to="/retail">
       				<i class="icon iconfont">&#xe65e;</i>
	        	</router-link>
					</div>
				</div>
			</div>
			<div class="flex model_body flex">
				<div class="data-table flex1" id="dataTable"></div>
			</div>
		</div>


 	</div>
</template>

<script>
  // 引入 echarts 主模块。
  import * as echarts from 'echarts/lib/echarts';
  import { requestData } from '@/js/requestData/index'

  // 引入折线图。
  import 'echarts/lib/chart/line';
    export default {
      name: 'UserCenter',
      data() {
        return {
          userInfo: {
            userName: '',
            userLogo: '../assets/imgs/userCenter/logo.jpg',
            ranking:'',
            overRanking:'',
            userWeekRank: '10.0',
            record:'206.30',
            motto:''
          },
          commissionRankParams: {
            timeUnit:	"week",
            top: 10,
            pattern:  'retail',
          },
          //佣金
          profit: {
            retail: 0,
            team: 0,
            total: 0,
          },
          //积分
          score: {
            indirect: 0,
            direct: 0,
            total: 0,
          }
        }
      },
      mounted() {
        this.init()
      },
      methods : {
        init () {
          let _this = this;
          _this.createTable();
          _this.getUserInfo ();
          _this.getCommissionRank();
          _this.profitOverview();
          _this.scoreOverview();
          _this.nexusOverview();
          _this.channelOverview();
        },
        /**
         * 获取用户信息
         */
        getUserInfo () {
          let _this = this;
          requestData.getUserInfo({}, rsp => {
            _this.userInfo.userName = rsp.nick;
            _this.userInfo.userLogo = rsp.headUrl;
            _this.userInfo.motto = rsp.sign;
          });
        },
        /**
         * 创建统计表
         */
        createTable() {
          let myChart = echarts.init(document.getElementById('dataTable'));
          // 绘制图表
          myChart.setOption({
            color: '#ccc',
            width: '70%',
            title: {text: ''},
            tooltip: {},
            xAxis: {
              data: ["微信", "QQ", "帖子", "线下", "社群"]
            },
            yAxis: {},
            series: [{
              name: '流量',
              type: 'bar',
              data: [5, 20, 36, 10, 10]
            }]
          });

        },

        /**
         *
         * @param n
         */
        goList(n){
        	this.$router.push({name:'Retail',query:{code:n}})
        },
        /**
         * 查询实时佣金排名top
         */
        getCommissionRank(params){
          let _this = this;
          params = params ? params : _this.commissionRankParams;
          requestData.getCommissionRank(params, rsp => {
            _this.userInfo.ranking = rsp.ranking;
            _this.userInfo.overRanking = rsp.overRanking;
          });
        },
        /**
         * 佣金概述
         */
        profitOverview () {
          let _this = this;
          requestData.profitOverview({}, rsp => {
            _this.profit.retail = rsp.retail;
            _this.profit.team = rsp.team;
            _this.profit.total = parseFloat(rsp.retail) + parseFloat(rsp.team)
          });
        },
       /**
        * 积分概述
        */
        scoreOverview () {
          let _this = this;
          requestData.scoreOverview({}, rsp => {
            _this.score.indirect = rsp.indirect;
            _this.score.direct = rsp.direct;
            _this.score.total = parseFloat(rsp.indirect) + parseFloat(rsp.direct);
          });
        },
        /**
         * 人脉概述
         */
        nexusOverview() {
          let _this = this;
          requestData.nexusOverview({}, rsp => {
            console.log(rsp);
          });
        },
        /**
        * 渠道总览
        */
        channelOverview() {
          let _this = this;
          requestData.channelOverview({}, rsp => {
            console.log(rsp);
          });
        },

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/common.scss";
   // @import ".scss";
  .nomal_box{
  	.userPhoto{
  		width:0.64rem;
  		height:0.64rem;
  		border-radius:50%;
  	}
  	.borderColor{
  		border: 1px solid #FFFFFF;
  		border-radius:0.20rem;
  		height: 0.21rem;
  		line-height: 0.19rem;
  		font-size: 0.12rem;
  		margin-top: 0.08rem;
  	}
  	.userName{
  		font-size: 0.20rem;
			}
  	.editUserInfo{
  		font-size: 0.10rem;
    	padding-right: 0.04rem;
    	color: #fff;
    }
    .button{margin-top:0.21rem;}

  }
  .data-table{
  		height: 2.23rem;
    	width: 3.20rem;
    }

</style>
