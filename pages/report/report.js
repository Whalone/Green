const util = require("../../utils/util");

// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    picker: ['车把', '车轮', '座椅','车链','脚踏板','刹车','其他'],
    imageUrl:'',
    address:'',
    bikeId:'',
    type:'',
    errorInfo:'',
  },

  inputBikeId:function(e){
    this.setData({
      bikeId:e.detail.value
    })
  },

  textareaInput:function(e){
    this.setData({
      errorInfo:e.detail.value
    })
  },

  getLocation() {
    wx.chooseLocation({
      success: (res)=>{
        this.setData({
          address:res.name
        })
      }
    })

  },

  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value,
      type:this.data.picker[e.detail.value],
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除该图片吗？',
      cancelText: '再看看',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  
  submit:function(){
    // var data = {};
    // data.
    // util.request('/api/reports',)
    var data = {};
    data.bikeId = this.data.bikeId;
    data.address = this.data.address;
    data.type = this.data.type;
    data.errorInfo = this.data.errorInfo
    data.imgList = this.data.imgList;
    data.openId = app.data.openId;

    console.log(data)

    util.request('/report',data,'POST',(res)=>{
      console.log(res)
      if(res.status === 'success'){
        wx.showToast({
          title: '提交成功',
        })
      }
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