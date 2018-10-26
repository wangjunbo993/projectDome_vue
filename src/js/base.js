/**
 * 基础
 * Created By WiFi ON 2018/7/7 14:58
 */
import Vue from 'vue'
import router from '@/router/index'
import axios from "axios";
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import cn from '@/assets/locales/zh-CN.json'
import en from '@/assets/locales/en-US.json'
//import { store } from '@/store/index'


import { requestData } from '@/js/requestData/index'
import { BASE_CONFIG } from '@/js/baseConfig'
import Config from '@/js/Config';
import Utils from './utils'
import { API } from './api/index'
import VueWechatTitle from 'vue-wechat-title';
//import { Config } from '@/js/config'
Vue.use(VueRouter);
Vue.use(VueI18n);
export {
  Vue, axios, VueRouter, requestData, BASE_CONFIG,
  Config,
  Utils,
  router,
  API,
  VueWechatTitle,
}

