/**
 * 4.人脉团队/nexus
 * Created By WiFi ON 2018/7/16 20:28
 */
import {API} from '@/js/api/index';
import { Axios } from '@/js/requestData/myAxios';

export const NEXUS = {

  /**
   * 4.1 我的人脉团队概述（待开发）
   */
  nexusOverview(params, successCB, errorCB ){
    let url = API.NEXUS.GET_NEXUS_OVERVIEW;
    let option = {url, params};
    Axios.get(option, successCB, errorCB);
  },
}

