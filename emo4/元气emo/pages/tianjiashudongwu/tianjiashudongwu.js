// pages/tianjiashudongwu/tianjiashudongwu.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shudongxiaozhitiao: '',
    naaa:'',
    maaa:'',
    
    //用户个人信息
    userInfo:{
      avatarUrl:"",//用户头像
      nickName:"",//用户昵称
    }
  },
/*获取心情***/
shudongxiaozhitiaoInput: function (e) {
  this.setData({
     shudongxiaozhitiao: e.detail.value
   })
},

  /**
   *点击添加地址事件
   */
  // add_address_fun:function(){
  //   wx.navigateTo({
  //     url: 'add_address/add_address',
  //   })
  // },

/**查询提交 */
clickButton: function(e){
   console.log("你输入的纸条：" + this.data.shudongxiaozhitiao );
   wx.request({

     url: 'http://124.223.208.69:8002/NoteController/addNote',
     data:{
      title:this.data.shudongxiaozhitiao,
     },
     method:'GET',
     success(){
      console.log("chengong")
      wx.showToast({
        icon: 'none',//提示图标
        title:'添加成功',
        duration: 2000//提示的时间毫秒
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
    var tou=app.appData.userList.userInfo.avatarUrl
    var ming=app.appData.userList.userInfo.nickName
    console.log(tou)
    this.setData({
      naaa:tou,
      maaa:ming
    })

    // var that=this;
    // /**
    //  * 获取用户信息
    //  */
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res);
    //     var avatarUrl = 'userInfo.avatarUrl';
    //     var nickName = 'userInfo.nickName';
    //     that.setData({
    //       [avatarUrl]: res.userInfo.avatarUrl,
    //       [nickName]:res.userInfo.nickName,
    //     })
    //   }
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