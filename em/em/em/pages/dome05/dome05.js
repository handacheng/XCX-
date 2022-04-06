// pages/dome05/dome05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // haha: [],
  },
  tologs(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  stologs(){
    wx.navigateTo({
      url: '/pages/yqjournal/yqjournal',
    })
  },
  ctologs(){
    wx.navigateTo({
      url: '/pages/shoucang/shoucang',
    })
  },
  ttologs(){
    wx.navigateTo({
      url: '/pages/xiaozhitiao/xiaozhitiao',
    })
  },
  qtologs(){
    wx.navigateTo({
      url: '/pages/qxknowledge/qxknowledge',
    })
  },
  sftologs(){
    wx.navigateTo({
      url: '/pages/yqbook/yqbook',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// wx.request({

//   url: 'http://sjidjnfnahifiahfi.com',
//   data:{},
//   method:'GET',
//   success:(result) => {
//     this.setData({
//       haha:result.data.list
//     })
//     console.log(result)
//   },
// })
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