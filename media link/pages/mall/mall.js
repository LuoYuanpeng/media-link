// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:0, //0表示商城，1表示明细
    refreshAnimation:{},
    refreshText:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  mallSelect:function() {
    console.log(0);
    this.setData({
      tab:0
    })
  },

  detailSelect:function() {
    console.log(1);
    this.setData({
      tab:1
    })
  },
 
  toGoods:function() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },

  onPullDownRefresh:function() {
    wx.showNavigationBarLoading();

    setTimeout(function() {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },1000)
  }
})