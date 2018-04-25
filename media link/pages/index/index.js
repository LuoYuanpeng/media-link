//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inviteDialog:false,
    animation:true
  },

  onShow: function () {
    console.log(this.data);
    setInterval(this.jud,6000);
  },

  jud:function () {
    console.log(this.data);
    if (this.data.animation == true) {
      this.setData({
        animation:false
      })
      var vx = this;
      setTimeout(function(){
        vx.setData({
          animation:true
        })
      },10)
    } else {
      this.setData({
        animation:true
      })
    }
  },

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
