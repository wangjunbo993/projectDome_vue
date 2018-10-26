
<template>
    <div>
	    <div class="box">
			<div class="flex">
				<div class="flex1"> 
			          <p class="small_font">总战绩 (元)</p>
			          <p class="big_font">{{money.frozen}}</p>
		       	</div>
	      	</div>
	      	<div class="flex" style="margin-top: 0.07rem;">
		        <div class="left flex1"> 
			        <p class="nomal_font">{{money.frozen}}</p>
			        <p class="small_font">冻结佣金<i class="iconfont">&#xe645;</i></p>
		        </div>
		        <div class="border"></div>
		        <div class="right flex1">
			        <p class="nomal_font">{{money.frozen}}</p>
			        <p class="small_font">可提现佣金</p>
		        </div>
		    </div>
		    <div class="center flex">
		        <div class="flex1">
			          <div class="button">提现</div>			   
		        </div>
		      <!--</div>-->
		    </div>
	    </div>
	    
	    <div class="nav-wrap">
	    	
			    <mt-navbar v-model="selected" class="flex">
			    	<div class="flex1"></div>
			    	<div class="flex1">
			          		<mt-tab-item id="1" :class="selected==1?'is-selected':''">零售佣金</mt-tab-item>	   
		        	</div>
		        	<div class="flex1"></div>
		        	<div class="flex1">
			          	<mt-tab-item id="2" :class="selected==2?'is-selected':''" >团队佣金</mt-tab-item>		   
		        	</div>
				  	<div class="flex1"></div>
				  	
				</mt-navbar>
				<hr/>
			<!-- tab-container -->
			<p class="blacl_font">零售总佣金：{{money.totalFee}}</p>
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
			    
			    <ul>
			    	<li class="flex nav-title">
			    		<div class="flex1 skyBlue">姓名</div>
			    		<div class="flex1 waterBlue">编号</div>
			    		<div class="flex1 skyBlue">时间</div>
			    		<div class="flex1 waterBlue">订单价格</div>
			    		<div class="flex1 skyBlue">佣金</div>			    		
			    	</li>
			    	<li class="flex nav-title" v-for="(item, index) in listData">
			    		<div class="flex1">{{ item.nick }}</div>
			    		<div class="flex1">{{item.no }}</div>
			    		<div class="flex1">时间1</div>
			    		<div class="flex1">订单价格</div>
			    		<div class="flex1">佣金</div>			    		
			    	</li>
			    	<!--<li v-for="(item, index) in listData">{{ index }} - {{item.id }}-</li>-->
			    </ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			  	asdasd
			    <!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
    </div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	import { requestData } from '@/js/requestData'
//	Vue.component(Navbar.name, Navbar);
//	Vue.component(TabItem.name, TabItem);
    export default {
        name: 'Retail',
        data() {
            return {
            	code:'',
            	selected:'2',
            	money:{
		            totalFee: '10000',
		            frozen: '50.00',
		            userWeekRank: '10.0'
		        },
		        listData:[]
            }
        },
        components:{
        	[Navbar.name]:Navbar,
        	[TabItem.name]:TabItem,
        },
        mounted(){
        	let _this = this
        	this.code=this.$route.query.code;
        	this.selected = this.code;
//      	console.log(this.list);
        	requestData.RetailCommission('',function(e){
        		let sel = e;
//      		alert(sel)
        		_this.listData =sel
        		console.log(_this.listData.data);
        		
        	})
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/common.scss";
   // @import ".scss";
    .nav-wrap{height: 0.52rem; color: #000;}
    .mint-tab-item{color:#000000;font-weight:bolder;}
    .is-selected{color:#009688 !important;}
    .mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 4px solid #009688;
	    color: #009688 !important;
	    height: 0.07rem;
	    margin-bottom: -3px;
	    border-radius:3px;
	}
	hr{margin-top: -0.04rem}
	.nav-title{margin-top: 0.1rem; height: 0.32rem; line-height: 0.32rem;}
</style>