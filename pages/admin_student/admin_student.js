// pages/admin_student/admin_student.js
var util = require('../../utils/util')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu_id: "",
    student: {},
    status: false,
  },

  idSearch: function () {
    var url = 'user/';

    util.request(url, {userId: this.data.stu_id}, 'POST', (res) => {
      if (res.status === 'success') {
        this.setData({
          student: res.data
        })
        this.setData({
          status: true
        })
      }
    })

  },

  idInput: function (e) {
    this.setData({
      stu_id: e.detail.value
    })
  },

  jumpRecord: function () {
    wx.navigateTo({
      url: '../record/record?id='+this.data.stu_id,
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