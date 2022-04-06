// pages/tianjiariji/tianjiariji.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    zhitiao: '',

 },
/*获取心情***/
zhitiaoInput: function (e) {
   this.setData({
      zhitiao: e.detail.value
    })
 },

/**查询提交 */
clickButton: function(e){
    console.log("你输入的纸条：" + this.data.zhitiao );
    wx.request({

      url: 'http://124.223.208.69:8002/NoteController/addNote',
      data:{
       title:1,
       id:1
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