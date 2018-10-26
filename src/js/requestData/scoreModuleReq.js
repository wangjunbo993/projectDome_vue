/**
 * 积分请求模块
 * Created By WiFi ON 2018/7/16 20:28
 */
import {API} from '@/js/api/index';
import { Axios } from '@/js/requestData/myAxios';

export const SCORE = {

  /**
   * 6.1 查询自己的积分概述
   */
  scoreOverview(params, successCB, errorCB ){
    let url = API.SCORE.GET_SCORE_OVERVIEW;
    let option = {url, params};
    Axios.get(option, successCB, errorCB);
  },

}

