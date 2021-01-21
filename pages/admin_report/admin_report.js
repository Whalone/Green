const util = require("../../utils/util")

// pages/admin_report/admin_report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notSolve: true,
    isSolve: false,
    reportList: [],
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

  isSolve: function (e) {
    this.setData({
      isSolve: e.detail.value
    })
  },

  // 是否显示没有解决的数据
  notSolve: function (e) {
    this.setData({
      notSolve: e.detail.value,
    })
    console.log(this.data.notSolve)
  },

  // 请求所有report数据
  getReportList: function () {
    util.request('/reports', '', 'GET', (res) => {
      this.setData({
        reportList: res.data
      })
    })
  },

  updateStatu: function (id, statu) {
    var data = {};
    data.id = id;
    data.statu = statu === true ? 1 : 0
    console.log(data);
    var url = '/api/reports/' + id;
    return new Promise((resolve, reject) => {
      util.request(url, data, 'PUT', (res) => {
        console.log(res)
        if (res.status === "success") {
          console.log("jin ru resolve")
          resolve(true);
        } else {
          console.log("jin ru resolve")
          resolve(false);
        }
      })
    })
  },

  // 切换状态
  switchStatu: function (e) {

    var that = this;


    wx.showLoading({
      title: '请稍候',
    })

    // 是否更新成功
    var p = that.updateStatu(e.currentTarget.dataset.id, e.detail.value);

    p.then((flag) => {
      console.log(flag)
      wx.hideLoading({
        success: (res) => {
          if (flag == true) {
            e.currentTarget.dataset.item.status = e.detail.value == true ? "1" : "0";
            console.log(that.data.reportList);
            console.log(e.currentTarget.dataset.item);

            var newItem = e.currentTarget.dataset.item;
            console.log(that.data.reportList[e.currentTarget.dataset.idx]);
            var newReportList = that.data.reportList;
            newReportList[e.currentTarget.dataset.idx].status = e.detail.value == true ? "1" : "0";
            that.setData({
              reportList: newReportList
            })

            console.log(that.data.reportList);
          }
        },
      })


    })



    console.log("to end")
    console.log(e);
  },

  test: function () {
    console.log(22222)
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