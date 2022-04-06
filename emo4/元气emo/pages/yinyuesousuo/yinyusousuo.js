// pages/yinyuesou/yinyuesou.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:'',
    music:[],
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
   wx.navigateTo({
    url: '../musicrecommend/musicrecommend'
   })
  },
  sousuo(){
    wx.showLoading({
      title: '搜索中',
      mask: true
    });
    wx.request({
      url: 'http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword='+this.data.search+'&page=1&pagesize=20&showtype=1',
      success: (res) => {
        console.log("成功")
        console.log(res.data.data.info)
        this.setData({
          music: res.data.data.info
        })
        wx.hideLoading();
      }
    })
  },
  handleinput(e) {
    console.log(e.detail.value)
    this.setData({
       search: e.detail.value,
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