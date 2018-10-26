/**
* Created By WiFi ON 2018/7/8 12:20
*/
<template>
    <div class="main">
      <div>
        <div>
          <div class="nick-logo center">
            <div class="logo inline-block">
            </div>
            <div class="center">
              <span >编辑头像</span>
            </div>
            <!--<input type="file" >-->
          </div>
          <div class="userInfo">
            <input class="input" type="text" v-model="userInfo.nick" placeholder="输入/修改名字">
            <input  class="input" type="textarea" v-model="userInfo.sign" placeholder="输入/修改个性签名"/>
          </div>
          <div class="wx-logo">
            <div class="inline-block">
              <span class="block logo-tips first">点击上传</span>
              <span class="block logo-tips">微信名片二维码</span>
            </div>
          </div>
          <div class="tips text-align-left">
            <p>
              <span class="block">提示：</span>
               上传自己的微信名片二维码方便别人找到自己 我们只会把你二维码显示给你的团队查询
            </p>
          </div>
          <div>
            <mt-button @click="save">保存</mt-button>
          </div>
        </div>
      </div>
      <!--<input type="file" class="hidden" >-->
    </div>
</template>

<script>
  import { requestData } from '@/js/requestData/index'
  export default {
      name: 'EditUserInfo',
      mounted() {
        this.init();
      },
      data() {
        return {
          userInfo: {
            nick: '',
            sex: '',
            sign:	'',
            headUrl: '',
          }
        }
      },
      methods: {
        init () {
          this.getUserInfo ()
        },
        /**
         * 获取用户信息
         */
        getUserInfo () {
          let _this = this;
          requestData.getUserInfo({}, rsp => {
            _this.userInfo = rsp;
          });
        },
        /**
         * 保存
         */
        save () {
          let _this = this;
          let params = {
            nick: _this.userInfo.nick,
            sex: _this.userInfo.sex,
            sign: _this.userInfo.sign,
            headUrl: _this.userInfo.headUrl
          }
          requestData.editUserInfo(params, rsp => {
            //_this.userInfo = rsp;
            alert("修改成功！");
          });
        }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/common.scss";
  .main {
    $mainWidthSize: 220px;
   /* margin: 20px;*/
    border-radius: 4px;
    background-color: $mainColor;
    .nick-logo {
      color: #fff;
      margin-bottom: 15px;
      .logo {
        $size: 64px;
        width: $size;
        height: $size;
        margin-top: 24px;
        background-color: #D8D8D8;
        border-radius: 50%;
        border: #fff solid 4px;
      }
    }
    .userInfo {
      .input {
        width: 220px;
        height: 40px;
        background-color: #fff;
        margin-bottom: 8px;
        border-radius: 4px;
        border: none;
        color: #ccc;
        text-indent: 12px;
      }
    }
    .wx-logo {
      $size: 220px;
      width: $size;
      height: $size;
      margin: 10px auto;
      background-color: #F3F3F3;
      color: #000;
      font-size: 16px;
      .logo-tips {
        font-weight: 500;
      }
      .first {
         margin-top: 30px;
       }
    }
    .tips {
      color: #fff;
      width: $mainWidthSize;
      margin: 0 auto;
    }
  }
</style>
