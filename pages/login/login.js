// pages/login/login.js
var util = require('../../utils/util')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    password: '',
    login: false,
  },

  adminLogin: function () {
    var userName = this.data.userName;
    var password = this.data.password;
    var data = {
      userName:userName,
      password:password
    }

    // 验证userName和password合法性
    if(userName === ''){
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    if(password === ''){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    wx.showLoading({
      title: '登录中...',
    })

    console.log(data)

    util.request('/admin/login',data,'POST',(res)=>{

      wx.hideLoading()

      if(res.data.status == "success"){
        this.setData({
          login:true
        })

        var adminInfo = res.data
        app.globalData.admin_login = true;
        app.globalData.adminInfo = adminInfo

        wx.reLaunch({
          url: '/pages/admin/admin',
        })
      } else {
        wx.showToast({
          title: '登陆失败',
          icon: 'none',
        })
      }

    })

  },

  // 捕获userName的值
  userNameInput:function(e) {
    this.setData({
      userName:e.detail.value
    })
  },

  // 捕获password的值
  passwordInput:function(e){
    this.setData({
      password:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 预加载管理员登录状态
    this.setData({
      login:app.globalData.admin_login
    })

    // 如果之前已经登陆过 跳转页面
    if(this.data.login === true){
      wx.reLaunch({
        url: '/pages/admin/admin',
      })
    }
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