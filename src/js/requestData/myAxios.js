/**
 * Created By WiFi ON 2018/7/16 20:23
 *
 */
import axios from "axios";
const errorFun = function (error) {
  console.log(error);
}
const successFun = function (error) {
  console.log(error);
}
const myAxios = function (options, successCallback = successFun, errorCallback = errorFun) {
  axios(options)
    .then( rsp => {
      successCallback(rsp);
    })
    .catch( error => {
      errorCallback(error);
    });
};
const post = function (options, successCallback, errorCallback) {
  options.method = 'post';
  myAxios(options, successCallback, errorCallback);
};
const get  = function (options, successCallback, errorCallback) {
  options.method = 'get';
  myAxios(options, successCallback, errorCallback);
};
const put  = function (options, successCallback, errorCallback) {
  options.method = 'put';
  myAxios(options, successCallback, errorCallback);
};
const myDelete  = function (options, successCallback, errorCallback) {
  options.method = 'delete';
  myAxios(options, successCallback, errorCallback);
};
export const Axios= {
  myAxios, post, get, put, myDelete
};
