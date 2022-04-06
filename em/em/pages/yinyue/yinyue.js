// pages/yinyue/yinyue.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: [],
  },
tiao: function (id){
  console.log(id.currentTarget.dataset.id),
  wx.request({
    url: 'http://m.kugou.com/app/i/getSongInfo.php',
    data: {
      cmd: 'playInfo',
      hash: id.currentTarget.dataset.id,
    },
    success: (res) => {
      // console.log("成功01")
      console.log(res.data)
      // app.appData.music.data.url = res.data.url
      app.appData.music = res.data
      app.appData.musicid = 1
      // this.setData({
      //   note: res.data.data
      // })
    }
  })
  wx.switchTab({
    url: '../../pages/musicrecommend/musicrecommend.wxml'
  })
},
search: function () {

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://m.kugou.com/plist/list/3793631?json=true',
      success: (res) => {
        console.log("成功0002")
        console.log(res)
        this.setData({
          music: res.data.list.list.info
        })
      }
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