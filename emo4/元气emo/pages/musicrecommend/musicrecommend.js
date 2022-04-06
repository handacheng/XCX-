var app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay = true
innerAudioContext.loop = true
innerAudioContext.title = "我们"
innerAudioContext.onError((res) => {
  // console.log(res.errMsg)
  // console.log(res.errCode)
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    music: {},
    hidepopup01: true,
      },
      tologs(){
        wx.navigateTo({
          url: '/pages/recommend/recommend',
        })
      },
        // 开启音乐
  play() {
    this.setData({
      userInfo: true,
    })
    innerAudioContext.play()
  },
  // 关闭音乐
  pause() {
    this.setData({
      userInfo: false,
    })
    app.appData.musicid = 0
    innerAudioContext.pause()
  },
  onShowPopup01: function () {
    this.setData({
      hidepopup01: false,
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
    this.setData({
      music: app.appData.music,
      hidepopup01: true
    })
    console.log("11110000")
    console.log(app.appData.music)
    // console.log(this.data.music.data.url)
    this.music();
  },
  music() {
    var that = this
    setTimeout(function () {
      console.log("延迟调用============")
      innerAudioContext.src = app.appData.music.url;
      if (app.appData.musicid == 1) {
        innerAudioContext.play()
        that.setData({
          music: app.appData.music,
          userInfo:true
        })
      }
    }, 1000)

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

  },
  search: function () {
  
  }
})