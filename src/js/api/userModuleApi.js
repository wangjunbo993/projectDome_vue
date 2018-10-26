/**
 * 用户相关模块API
 */
export const USER = {
  /**
   * 获取用户信息
   * type: get
   * */
  GET_USER_INFO: '/user/info',
  /**
  * 修改用户信息
  * type: put
  **/
  EDIT_USER_INFO: '/user/info',
  /**
   * 用户绑定手机
   * type: post
   */
  BIND_PHONE: '/user/phone/bind',
  /**
   * 获取验证码
   * type: get
   */
  GET_VERIFICATION_CODE: '{{host}}/user/phone/valicode',

  Retail_Commission_Record: '/income/retail/record/list',



}
