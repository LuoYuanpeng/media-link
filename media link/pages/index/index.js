//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inviteDialog:false
  },

  onLoad: function () {},

  showDialog:function() {
    this.setData({
      inviteDialog:true
    })
  },
  
  hideDialog:function() {
    this.setData({
      inviteDialog:false
    })
  },

  useDirect:function() {
    wx.showModal({
      content:"确定直接使用？",
      success:function() {
        wx.navigateTo({
          url: '/pages/user/user'
        })
      }
    })
  }
 })
