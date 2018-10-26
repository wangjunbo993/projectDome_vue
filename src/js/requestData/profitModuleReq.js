/**
 * 佣金请求模块
 * Created By WiFi ON 2018/7/16 20:28
 */
import {API} from '@/js/api/index';
import { Axios } from '@/js/requestData/myAxios';

export const PROFIT = {

  /**
   * 6.1 查询自己的佣金概述
   */
  profitOverview(params, successCB, errorCB ){
    let url = API.PROFIT.GET_PROFIT_OVERVIEW;
    let option = {url, params};
    Axios.get(option, successCB, errorCB);
  },
  /**
   * 6.2 查询实时佣金排名top
   * @param params
   * @param successCB
   * @param errorCB
   */
  getCommissionRank(params, successCB, errorCB ){
    let url = API.PROFIT.GET_COMMISSION_RANK;
    let option = {url, params};
    Axios.get(option, successCB, errorCB);
  },
  /*

   */
}

