// pages/admin/admin.js
var util = require('../../utils/util')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  jumpBikeChart:function(){
    wx.navigateTo({
      url: '/pages/bikeChart/bikeChart',
    })
  },

  jumpReport:function(){
    wx.navigateTo({
      url: '/pages/admin_report/admin_report',
    })
  },

  jumpAdminReturn:function(){
    wx.navigateTo({
      url: '/pages/admin_return/admin_return',
    })
  },

  jumpAdminPerson:function(){
    wx.navigateTo({
      url: '/pages/admin_person/admin_person',
    })
  },

  jumpAdminStudent:function(){
    wx.navigateTo({
      url: '/pages/admin_student/admin_student',
    })
  },

  jumpAdminRecords:function(){
    wx.navigateTo({
      url: '/pages/admin_records/admin_records',
    })
  },

  jumpAdminFeedBack:function(){
    wx.navigateTo({
      url: '/pages/admin_feedBack/admin_feedBack',
    })
  },

  quit:function(){
    app.globalData.admin_login = false;
    wx.redirectTo({
      url: '/pages/auth/auth',
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