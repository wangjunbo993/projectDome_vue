/**
 * Created By WiFi ON 2018/7/16 20:28
 */
import {API} from '@/js/api/index';
import { Axios } from '@/js/requestData/myAxios';
import Utils from '../utils'

export const USER = {
  /**
   * 获取用户信息
   * @param params
   * @param successCallback
   * @param errorCallback
   */
  getUserInfo(params, successCB, errorCB ){
    let url = API.USER.GET_USER_INFO;
    let option = {url, params};
    Axios.get(option, successCB, errorCB);
  },
  /**
   * 修改个人信息
   * @param params
   * @param successCB
   * @param errorCB
   */
  editUserInfo(params, successCB, errorCB ){
    let url = API.USER.EDIT_USER_INFO;
    let option = {url, params};
    Axios.put(option, successCB, errorCB);
  },
  /**
   * 请加注释
   * @param params
   * @param successCallback
   * @param errorCallback
   * @constructor
   */
  RetailCommission (params, successCB, errorCB ) {
    var thisSuccessCB = function(result){
      let data = Utils.mergeJoinUser(result.list,"incomeUserId",result.users,["nick","headUrl"]);
      successCB({data});
    }

    let url = API.USER.Retail_Commission_Record;
    let option = {url, params};
    Axios.get(option, thisSuccessCB, errorCB );
  },
}



/**
 * 合并用户信息
 * @param main 主数据，array
 * @param userKey 用户id对应的字段名。string
 * @param libKey 被查询数据库中查询数据的依据。string
 * @param users 被查询用户数据库 array; 允许是object形式，会被自动变成array
 * @param dataCloumn 查询到的用户数据要取的字段   ["nick","headUrl"]形式
 *
*/
function mergeJoinUser(main,userKey,users,dataCloumn){
  let dataCloumnAlias = dataCloumn.reduce((result,value)=>{result[value] = value;return result;},{});
  return mergeJoin(main,undefined,userKey,"id",users,dataCloumnAlias);
}


/**
 * 合并两个集合的数据
 * @param main 主数据，array
 * @param cloumnAlias 需要保留的数据以及key的重命名alias object形式
 * @param mainKey 主数据中要去查询数据的依据。string
 * @param libKey 被查询数据库中查询数据的依据。string
 * @param dataLib 被查询数据库 array; 允许是object形式，会被自动变成array kibKey为'id'
 * @param dataCloumnAlias 查询到的数据中要重写名字的数据  object形式
 *
*/
function mergeJoin(main,cloumnAlias,mainKey,libKey,dataLib,dataCloumnAlias){
  let dataLibTemp = [];
  //TODO 这里判断它是map不是list好像有点问题
  if(typeof dataLib === "object" &&1==2){
    for(var key in dataLib){
      let data = dataLib[key];
      data["id"] = key;
      dataLibTemp.push();
    }
    dataLib = dataLibTemp;
  }

  return main.map(item =>{
    let newItem = {};
    if(cloumnAlias){
      for(var key in cloumnAlias){
        let value = cloumnAlias[key];
        newItem[value] = item[key];
      }
    }else{
      newItem = item;
    }

    let found = dataLib.find(data=>data[libKey]===item[mainKey]);
    for(var key in dataCloumnAlias){
      let value = dataCloumnAlias[key];
      newItem[value] = found && found[key];
    }
    return newItem;
  });
}



/**
 * 合并用户信息
 * @param main 主数据，array
 * @param userKey 用户id对应的字段名。string
 * @param libKey 被查询数据库中查询数据的依据。string
 * @param users 被查询用户数据库 array; 允许是object形式，会被自动变成array
 * @param dataCloumn 查询到的用户数据要取的字段   ["nick","headUrl"]形式
 * 
*/
function mergeJoinUser(main,userKey,users,dataCloumn){
  let dataCloumnAlias = dataCloumn.reduce((result,value)=>{result[value] = value;return result;},{});
  return mergeJoin(main,undefined,userKey,"id",users,dataCloumnAlias);
}


/**
 * 合并两个集合的数据
 * @param main 主数据，array
 * @param cloumnAlias 需要保留的数据以及key的重命名alias object形式
 * @param mainKey 主数据中要去查询数据的依据。string
 * @param libKey 被查询数据库中查询数据的依据。string
 * @param dataLib 被查询数据库 array; 允许是object形式，会被自动变成array kibKey为'id'
 * @param dataCloumnAlias 查询到的数据中要重写名字的数据  object形式
 * 
*/
function mergeJoin(main,cloumnAlias,mainKey,libKey,dataLib,dataCloumnAlias){
  let dataLibTemp = [];
  //TODO 这里判断它是map不是list好像有点问题
  if(typeof dataLib === "object" &&1==2){
    for(var key in dataLib){
      let data = dataLib[key];
      data["id"] = key;
      dataLibTemp.push();
    }
    dataLib = dataLibTemp;
  }

  return main.map(item =>{
    let newItem = {};
    if(cloumnAlias){
      for(var key in cloumnAlias){
        let value = cloumnAlias[key];
        newItem[value] = item[key];
      }
    }else{
      newItem = item;
    }

    let found = dataLib.find(data=>data[libKey]===item[mainKey]);
    for(var key in dataCloumnAlias){
      let value = dataCloumnAlias[key];
      newItem[value] = found && found[key];
    }
    return newItem;
  });
}
