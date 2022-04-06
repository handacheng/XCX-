// pages/chaxunshudongwu/chaxunshudongwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haha:[],
  },
  tologs(){
    wx.navigateTo({
      url: '/pages/shudongwu/shudongwu',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({

      url: 'http://124.223.208.69:8002/NoteController/selectVerifyNote',
      data:{
        statecode:1,
      },
      method:'GET',
      success:(result) => {
        this.setData({
          haha:result.data.data
        })
        console.log(result)
      },
    })
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