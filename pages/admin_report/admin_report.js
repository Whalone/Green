const util = require("../../utils/util")

// pages/admin_report/admin_report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notSolve:true,
    isSolve:false,
    reportList:[],
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  isSolve:function(e){
    this.setData({
      isSolve:e.detail.value
    })
  },

  // 是否显示没有解决的数据
  notSolve:function(e) {
    this.setData({
      notSolve:e.detail.value,
    })
    console.log(this.data.notSolve)
  },

  // 请求所有report数据
  getReportList:function(){
    util.request('/reports','','GET',(res)=>{
      this.setData({
        reportList:res.data
      })
    })
  },

  updateStatu:function(){

    var data = {};
    data.id = id;
    data.statu = statu === true?1:0
    console.log(data);
    // util.request()
  },

  // 切换状态
  switchStatu:function(e){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确定解决该问题？',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定');

          that.updateStatu();

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getReportList();
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