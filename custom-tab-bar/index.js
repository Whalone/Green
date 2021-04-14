const util = require("../utils/util");
const app = getApp();

// custom-tab-bar/index.js
Component({
  properties: {},
  data: {
    //当前高亮项
    selected: 0,
    // 单车ID
    bikeId:"",
    //tabBar页面数据
    tabList: [
          {
            "pagePath": "pages/index/index",
            "text": "首页"
          },
          
         
          {
            "pagePath": "pages/user/user",
            "text": "我的"
          }
    ]
  },
  attached: function() {},
  methods: {
    //底部切换
    switchTab(e) {
      let key = Number(e.currentTarget.dataset.index);
      let tabList = this.data.tabList;
      let selected= this.data.selected;
      console.log("click:"+key);
      //console.log(tabList);
      console.log("selected:"+selected);
      if(selected !== key){
        this.setData({
          selected:key
        });
        console.log("now selected:"+this.data.selected);
        wx.switchTab({
          url: `/${tabList[key].pagePath}`,
        })
        console.log("now selected:"+this.data.selected);
      }
    },
    scanBike(){
      var that = this;
      wx.scanCode({
        success (res) {
          // console.log(res);
          that.setData({
            bikeId:res.result
          })
          that.updateBikeStatus()
        }
      })

    },

    updateBikeStatus(){
      var bikeId  = this.data.bikeId;
      var url = 'bike/'+bikeId;

      wx.chooseLocation({
        success: (res)=>{
          util.request(url, {address:res.name, openId: app.globalData.openId}, 'PUT', (res)=>{
            console.log(res);
            wx.showLoading({
              title: '开锁中',
            })
    
            if(res.data.status == "open-success"){
              wx.hideLoading({
                success: (res) => {
                  wx.showToast({
                    title: '开锁成功',
                  })
                },
              })
            } else if (res.data.status == "close-success") {
              wx.hideLoading({
                success: (res) => {
                  wx.showToast({
                    title: '关锁成功',
                  })
                },
              })
            } else {
              wx.showToast({
                title: '出现异常',
              })
            }
          })
        }
      })
    }
  }
})
