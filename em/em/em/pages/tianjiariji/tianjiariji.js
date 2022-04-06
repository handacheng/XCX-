// pages/tianjiariji/tianjiariji.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    xinqing: '',

 },
/*获取心情***/
xinqingInput: function (e) {
   this.setData({
      xinqing: e.detail.value
    })
 },

/**查询提交 */
clickButton: function(e){
    console.log("你输入的日记：" + this.data.xinqing );
    wx.request({

      url: 'http://101.200.217.139:8002/MoodlogController/addMoodlog',
      data:{
        id:1,
       title:1,
       concent:this.data.xinqing,
       addtime:1
      },
      method:'GET',

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