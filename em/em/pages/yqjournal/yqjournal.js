// pages/tianjiariji/tianjiariji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
// moodlog:[],
haha:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */

  // onLoad: function (options) {
  //   wx.request({

  //     url: 'http://localhost:8002/MoodlogController/addMoodlog',
  //     data:{},
  //     method:'GET',
  //     success:(res) => {
  //       this.setData({
  //         moodlog:res
  //       })
  //       console.log(添加成功)
  //     },
  //   })
  // },
  tologs(){
    wx.navigateTo({
      url: '/pages/tianjiariji/tianjiariji',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({

      url: 'http://124.223.208.69:8002/MoodlogController/selectMoodlog',
      data:{
        page:1,
        limit:100000,
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
  shanchu:function(e){
    var r=e.currentTarget.dataset.id
    wx.request({
      url: 'http://124.223.208.69:8002/MoodlogController/deleteMoodlog',
      data:{
        id:r
      },
  success(){
    console.log("删除成功")
    wx.showToast({
      icon: 'none',//提示图标
      title:'删除成功',
      duration: 2000//提示的时间毫秒
    })
  }
    })
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