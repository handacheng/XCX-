// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  appData: {
    musicid:0,
    // music:{
    //    data:{
    //      url:' '
    //     // url: 'http://r7ozq9kqt.hd-bkt.clouddn.com/FqGG3T23xaP4o8XVl5Z62sZmDojz' 
    //    }
    //  },
     music:{
      url: 'http://r7ozq9kqt.hd-bkt.clouddn.com/FqGG3T23xaP4o8XVl5Z62sZmDojz',
      songName:'海浪声',
     },
    musicList:[],
    URL: 'http://39.103.153.104:8090',
    // http://39.103.153.104:8090
    userInfo: null,
    userid:1,
    userList:{},
    openid:null,
  },







})
