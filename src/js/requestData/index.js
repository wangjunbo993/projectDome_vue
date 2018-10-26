/**
 * Created By WiFi ON 2018/7/16 20:27
 * 请求数据汇总
 */
import { USER } from "./userModuleReq";
import { PROFIT } from "./profitModuleReq";
import { SCORE } from "./scoreModuleReq";
import { NEXUS } from "./nexusModuleReq";
import { CHANNEL } from "./channelModuleReq";

export const requestData = {
  ...USER,
  ...PROFIT,
  ...SCORE,
  ...NEXUS,
  ...CHANNEL,
};
