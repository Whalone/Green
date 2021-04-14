// pages/admin_feedBack/admin_feedBack.js
var util = require('../../utils/util')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedBack_list:[],
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
    util.request("/api/suggestion","","GET",(res)=>{
      this.setData({
        feedBack_list:res.data
      })
    })

    // var res = {"data":[{"detail":"圣诞节傲娇拉拉裤数据的卡拉胶临时冻结，大声疾呼大家看","date":"2020-02-01"},{"detail":"沙口路几点啦，毒经啊空间立刻，京东卡三六九等","date":"2020-04-01"}]}
    // this.setData({
    //   feedBack_list:res.data
    // })
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