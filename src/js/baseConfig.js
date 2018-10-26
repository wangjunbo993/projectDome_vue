/**
 *  基础配置文件
 *  (上线部署等配置)
 *  配置服务器地址、网络请求协议等
 * Created By WiFi ON 2018/7/7 14:48
 */

/************后台地址配置****************************/
const DEBUG = 0; //
const PROTOCOL_DEBUG = 0; //网络请求协议    0 https, 1 http
const PORT_DEBUG = 0; //后端端口   0: 8080  1:8088

const PROTOCOL = ['', 'http:', 'https:'][PROTOCOL_DEBUG];
const PORT = ['', ':8080', ':8088'][PORT_DEBUG];//; //后台端口
const SERVER_URL = [ 'api-tdt.devaqk.com',//开发服务器
                      '190.0.0.1',//测试服务器
                      '190.0.0.1',//生产服务器
                    ][DEBUG];
const ADDR_URL = `${PROTOCOL}//${SERVER_URL}${PORT}`;

export const BASE_CONFIG = {
  ADDR_URL,
};
