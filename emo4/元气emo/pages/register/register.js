// pages/wode/wode.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: "",
    user: []
  },

  getUserProfile() {
    let url = 'https://api.weixin.qq.com/sns/jscode2session?';
    // 登录
    wx.login({
      success(resu) {
        wx.request({
          url: url + 'appid=wxcc29d36a4ca6face&secret=0958f11e75050be4ff5fc34d7078e1b2&js_code=' + resu.code +
            '&grant_type=authorization_code',
          success(suce) {
             console.log(suce)
            if (suce.statusCode == 200) {
              app.appData.openid = suce.data.openid
               //console.log(app.appData.openid)
              // _this.sessionkey = suce.data.session_key
            }
          },
          fail(fail) {
            console.log('fail', fail)
          }
        })
      }
    })
    // 获取用户信息
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.selectUserId();
         //console.log("获取用户信息成功", res)
         app.appData.userList = res
          this.setData({
            user: app.appData.userList.userInfo,
            userInfo: true,
          })
        // this.getUserList();
      },
    })
  },
  // 通过id查询用户
  selectUserId() {
    wx.request({
      url: 'http://124.223.208.69:8002/EuserController/selectEuserid',
      data: {
        vx_id: app.appData.openid,
      },
      success: (res) => {
         console.log(res.data)
        if (res.data == "") {
          //this.getUserList();
          console.log(res.data)
          console.log("用户不存在")
          this.UserOn();
        } else {
          console.log("用户已存在")
          app.appData.userList = res.data.data,
          console.log(app.appData.userList)
          this.setData({
            user: res.data.data,
          })
        }
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },
  // 用户不存在执行
  UserOn(){
    wx.request({
      url: 'http://124.223.208.69:8002/EuserController/selectEuserid',
      data: {
        vx_id: app.appData.openid,
      },
      success: (res) => {
        //console.log(res)
        //console.log(res.data)
        if (res.data == "") {
          this.getUserList();
          console.log("用户不存在")
          console.log(res.data)
        } else {
          console.log("用户已存在")
          app.appData.userList = res.data.data,
          console.log(app.appData.userList)
          this.setData({
            user: res.data.data,
          })
        }
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },
    // 添加用户
    getUserList() {
      wx.request({
        url: 'http://124.223.208.69:8002/EuserController/addEuser',
        data: {
          e_username: app.appData.userList.userInfo.nickName,
          vx_id: app.appData.openid,
          e_head: app.appData.userList.userInfo.avatarUrl,
        },
        success: (res) => {
          console.log("添加成功")
          // console.log(res)
        }
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})