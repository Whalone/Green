// pages/person/person.js
var util = require('../../utils/util')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    person:{},

  },
  jumpRecord:function(){
    wx.navigateTo({
      url: '../record/record',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var openId = app.globalData.openId;
    var url = "/user/"+openId;
    console.log(url)

    wx.showLoading({
      title: '加载中',
    })

    util.request(url,'','GET',(res)=>{
      this.setData({
        person:res.data
      })

      console.log(this.data.person)
      
      wx.hideLoading();
    })

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