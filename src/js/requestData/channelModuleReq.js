/**
 * 3.推广/渠道
 * Created By WiFi ON 2018/7/16 20:28
 */
import {API} from '@/js/api/index';
import { Axios } from '@/js/requestData/myAxios';

export const CHANNEL = {

  /**
   * 【3.4】查询渠道信息总览（待开发）
   */
  channelOverview(params, successCB, errorCB ){
    let url = API.CHANNEL.GET_CHANNEL_OVERVIEW;
    let option = {url, params};
    Axios.get(option, successCB, errorCB);
  },
}

