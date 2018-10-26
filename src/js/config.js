/**
 * 配置文件
 * Created By WiFi ON 2018/7/7 14:59
 */

const SUCCESS = 0;
/**
 *  页面分页基本配置
 * @type {number}
 */
const PAGE_SIZE = 10;
const PAGE_SIZES = [5, 10, 20, 30, 100]; //显示分页
const START_WITH = 1;//默认第一页
const START_WITH_ZERO = 0;//不分页
const PAGE_LAYOUT = 'total, sizes, prev, pager, next';
let TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDA4MjAzMjEzNjksInBheWxvYWQiOiJ7XCJrZXlUeXBlXCI6XCJ1c2VyaWRcIixcInVzZXJLZXlcIjpcIjQ1MFwiLFwic2l0ZUlkXCI6XCIxXCIsXCJleHBpcmVcIjo4NjQwMDAwMDAwLFwib3RoZXJcIjpudWxsLFwidG9rZW5UaW1lXCI6MTUzMjE4MDMyMTM2OX0ifQ.MZLuVS2Pn6kl4wE1LZ7-M925iKAcji2CSApJWeHCjbE';

/**
 * 请求4xx类
 * @type {number}
 */
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;

export default{
  SUCCESS,
  PAGE_SIZE,
  PAGE_SIZES,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  START_WITH,
  START_WITH_ZERO,
  PAGE_LAYOUT,
  TOKEN,
}
