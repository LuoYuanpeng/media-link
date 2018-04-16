// pages/advert/advert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();  
    setTimeout(function() {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();  
    },500)
  },
})