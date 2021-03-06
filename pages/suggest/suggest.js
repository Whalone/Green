// pages/suggest/suggest.js
var util = require('../../utils/util')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false, 
    suggestion:''
  },
  submit(){
    this.setData({
      isLoading:true
    })
    var data = {};
    data.suggestion = this.data.suggestion;
    data.openId = app.globalData.openId;
    // var data = {
    //   suggestion:this.data.suggestion,
    //   openId:app.data.openId
    // }
    console.log(data);

    util.request('/suggestion',data,'POST',(res)=>{
      this.setData({
        isLoading:false
      })

      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    })
  },

  // 双向绑定获取textArea的值
  textareaInput(e){
    this.setData({
      suggestion:e.detail.value
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