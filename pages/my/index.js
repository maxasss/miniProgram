Page({
  data: {
    // 页面数据初始化
  },

  onLoad: function() {
    // 页面加载时的逻辑
  },

  onShow: function() {
    // 页面显示时的逻辑
  },

  logout: function() {
    // 退出登录逻辑
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/login/login' // 跳转到登录页
          });
        }
      }
    });
  }
});
