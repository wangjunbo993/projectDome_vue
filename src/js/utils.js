/**
 *  工具包
 * Created By WiFi ON 2018/7/7 14:50
 *
 */
/***
 * 返回时间
 * 自己想怎么格式就怎么格式。。。。
 * @returns {{year: number, month: number, date: number, day: string, hour: number, minute: number, second: number}}
 */
const getTimeObj = function () {
  let timeObj = {};
  let dayArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  let myDate = new Date();
  let year = myDate.getFullYear(); //获取当前年份
  let month = myDate.getMonth() + 1; //获取当前月份
  let date = myDate.getDate(); //获取当前日
  let day = myDate.getDay(); //获取当前星期几
  let hour = myDate.getHours(); //获取小时
  let minute = myDate.getMinutes(); //获取分钟
  let second = myDate.getSeconds(); //获取秒
  month = timeZeroFill(month);
  date = timeZeroFill(date);
  hour = timeZeroFill(hour);
  minute = timeZeroFill(minute);
  second = timeZeroFill(second); //dayArr[day]
  timeObj = {
    year, month, date, day: dayArr[day], hour, minute, second
  }
  return timeObj;
};
const timeZeroFill = function ( n ) {
  return n > 9 ? n : '0' + n;
}
export default{
  getTimeObj,
  /**
   * webuploader
   * 格式化文件大小, 输出成带单位的字符串
   * @method formatSize
   * @grammar Base.formatSize( size ) => String
   * @grammar Base.formatSize( size, pointLength ) => String
   * @grammar Base.formatSize( size, pointLength, units ) => String
   * @param {Number} size 文件大小
   * @param {Number} [pointLength=2] 精确到的小数点数。
   * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
   * @example
   * console.log( Base.formatSize( 100 ) );    // => 100B
   * console.log( Base.formatSize( 1024 ) );    // => 1.00K
   * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
   * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
   * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
   * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
   */
  formatSize( size, pointLength, units ) {
    let unit;

    units = units || [ 'B', 'K', 'M', 'G', 'TB' ];

    while ( (unit = units.shift()) && size > 1024 ) {
      size = size / 1024;
    }

    return (unit === 'B' ? size : size.toFixed( pointLength || 2 )) +
      unit;
  },
  /**
   *  获取当前时间
   *  params: type  类型
   * 返回时间格式: 不够自己DIY
   * @returns {string}
   */
  getCurrentTime (type = 0) {
    let time = getTimeObj();
    let timeStr = [
      `${time.year}-${ time.month }-${time.date } ${ time.hour}:${ time.minute}:${ time.second }`,//2018-06-15 10:25:58,
      `${time.year}年${ time.month }月${time.date }日  ${ time.hour}:${ time.minute}:${ time.second }  ${ time.day }`, //2018年4月26日 14:09:55 星期四
      `${time.year}${ time.month }${time.date }${ time.hour}${ time.minute}${ time.second }`, //20180615140955
      `${time.year}-${ time.month }-${time.date }`, //2018-04-26
      `${time.year}${ time.month }${time.date }`, //20180426
    ][type];
    return timeStr;
  },
  /**
   * 特殊字符替换
   * */
  CheckIllegalityChar(s) {
    let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？]");
    let rs = "";
    for (let i = 0; i < s.length; i++) {
      rs = rs + s.substr(i, 1).replace(pattern, '_');
    }
    return rs.replace(/\s+/g,"_");
  },
  /**
   * 是否包含特殊字符
   * */
  containSpecial ( s ){
    let regEn = /[`~!@#$%^&()+<>?:"{},.\/;'[\]]/im,
      regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

    if(regEn.test(s) || regCn.test(s)) {
      return true; //包含特殊字符
    } else {
      return false;
    }
    //return regEn.test(s) || regCn.test(s);
  },
  /**
   * 生成二维码
   * @param url
   * @param id
   */
  makeCode(params) {
    if (!params.url) {
      return false;
    }
    if (!params.id) {
      params.id = '#qrcode';
    }
    $(params.id).qrcode({
      render    : params.render ? params.render : "canvas",
      text    : params.url,
      width :  params.width ? params.width : "200",               //二维码的宽度
      height :  params.height ? params.height : "200",              //二维码的高度
      background :  params.background ? params.background : "#ffffff",       //二维码的后景色
      foreground :  params.foreground ? params.foreground : "#000000",        //二维码的前景色
      //src: '../assets/img/common/log.jpg'             //二维码中间的图片
    });
  },
  /**
   * 计算两个时间差
   * @param startTime
   * @param endTime
   * @returns {{days: number, hours: number, minutes: number, seconds: number}}
   */
  timeDiff (startTime, endTime) {
    if(!startTime) {
      alert("请填写开始时间");
    }
    if(!endTime) { //没有结束时间就默认此时
      endTime = new Date();
    }
    let time = new Date(endTime).getTime() - new Date(startTime).getTime();   //时间差的毫秒数

    //------------------------------
    //计算出相差天数
    let days = Math.floor(time/(24*3600*1000));

    //计算出小时数
    let leave1 = time % ( 24 * 3600 * 1000);  //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000));

    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000);       //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000));

    //计算相差秒数
    let leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000);
    return {
      days, hours, minutes, seconds
    }
  },
  //把本地方法挂上去。
  mergeJoinUser,mergeJoin
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

//关于合并数据使用案例，可以把console
(function(){
  let main = [{ userId: 1, orderId: 1, price: 1.5 }
    , { userId: 2, orderId: 2, price: 0.5 }
    , { userId: 1, orderId: 3, price: 11.5 }];
  let users =  [
      {id:1,name:"xzh",nick:"nickxzh"},
      {id:2,name:"xxx",nick:"nickxxx"},
  ];
  console.log(main);
  console.log(users);
  let merge = mergeJoin(main,{"orderId":"orderId",price:"viewPrice"},"userId","id",users,{"name":"viewName"})

  console.log(merge);
  merge = mergeJoinUser(main,"userId",users,["nick","name"])
  console.log(merge);
})();

