// pages/tianjiariji/tianjiariji.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    biaoti: '',
     neirong:'',
 },
/*获取心情***/
biaotiInput: function (e) {
   this.setData({
      biaoti: e.detail.value
    })
 },
neirongInput: function (e) {
  this.setData({
     neirong: e.detail.value
   })
},
clickButton: function(e){
  var that=this
  var  nei=that.data.neirong
  var  biaoti=that.data.biaoti
  console.log("你输入的内容：" + nei );
  console.log("你输入的标题：" + biaoti );
  wx.request({

    url: 'http://124.223.208.69:8002/MoodlogController/addMoodlog',
    data:{
     title:biaoti,
     concent:nei,
    },
    method:'GET',
    success: function() {
      console.log('添加成功')
      wx.showToast({
        icon: 'none',//提示图标
        title:'添加成功',
        duration: 2000//提示的时间毫秒
      })

        var pages = getCurrentPages();   //获取小程序页面栈
        var beforePage = pages[pages.length -2];  //获取上个页面的实例对象
        beforePage.setData({      //直接修改上个页面的数据（可通过这种方式直接传递参数）
          txt:'修改数据了'
        })
        beforePage.go_update();   //触发上个页面自定义的go_update方法
        wx.navigateBack({         //返回上一页  
          delta:1
        })

    
    },
    fail(){
      console.log("bai")
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