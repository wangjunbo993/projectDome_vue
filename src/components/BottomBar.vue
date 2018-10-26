/**
* Created By WiFi ON 2018/7/7 16:38
*/
<template>
    <div class="main">
      <ul class="flex">
        <li class="flex1 item" v-for="item in barList">
          <router-link :to="item.link" class="center nav-title">
	          <div class="center">
	            <img class="" :src="item.icon">
	          </div>{{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import home from '@/assets/imgs/home.svg'
  import msg from '@/assets/imgs/msg.svg'
  import order from '@/assets/imgs/order.svg'
  import userCenter from '@/assets/imgs/userCenter.svg'
    export default {
        name: 'BottomBar',
        data() {
            return {
              barList: [
                {
                  icon: home,
                  link: '/index',
                  title: '首页',
                },{
                  icon: order,
                  link: '/orders',
                  title: '订单',
                }, {
                  icon: msg,
                  link: '/messages',
                  title: '消息',
                }, {
                  icon: userCenter,
                  link: '/userCenter',
                  title: '个人中心',
                }
              ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/common.scss";
  .main {
    width: 100%;
    height: 0.48rem;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    .flex{
    	border-top:0.01rem solid #A5A5A5;
    }
    .nav-title {
      font-size: 0.12rem;
      color: #A5A5A5;
      text-decoration: none;
    }
    .item {
      padding-top: 0.07rem;
    }
  }
</style>
