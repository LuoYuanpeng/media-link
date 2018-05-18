//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inviteDialog:false,
    left:0,
    data:'新店开张，大酬宾，希望客户能够在本店享受到令人愉悦的服务店享受到令人愉悦的服务'
  },

  onShow: function () {
    this.animation();
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
  },

  animation:function() {
    var len = this.data.data.length * 20;
    var time = len / 5;
    this.run1(len,time);
    var that = this;
    var subLen = 530 + len;
    var time2 = subLen / 5;
    setTimeout(function() {
      console.log('doSetTimeOut')
      that.setData({
        left: 530
      })
      setInterval(function() {
        that.run2(that,len)
      },50*(time2+2))
    },50*(time+1))
  },

  run1:function(len,time) {
    var that = this;
    console.log(len);
    var timer = setInterval(function(){
      that.data.left -= 5;
      that.setData({
        left:that.data.left
      })
      if (-that.data.left>len) {
        clearInterval(timer);
      }
    },50)
  },

  run2:function(that,len) {
    var vm = that;
    vm.setData({
      left:530
    })
    var timer2 = setInterval(function() {
      vm.data.left -=5;
      vm.setData({
        left: vm.data.left
      })
      if (-that.data.left > len) {
        vm.setData({
          left:530
        });
        clearInterval(timer2);
      }
    },50)
  }
 })
