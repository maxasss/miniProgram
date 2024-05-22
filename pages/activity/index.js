
Page({
  data: {
    newsList: [
      {
        id: 1,
        cover: "../../assest/image/image_activity/box1.png",
        title: '“青春·非遗·传播”与大学生面对面活动',
        time: '2024年5月10日'
      },
      {
        id: 2,
        cover: "../../assest/image/image_activity/box2.png",
        title: '甘肃省“文化和自然遗产日”非遗宣传展',
        time: '2024年4月29日'
      }
    ]
  },
  // 点击卡片跳转到详情页
  goToDetail: function(event) {
    const id = event.currentTarget.dataset.id
    if (id === 1) {
      wx.navigateTo({
        url: '../scenic_news_detail1/scenic_news_detail1?id=' + id
      })
    } else if (id === 2) {
      wx.navigateTo({
        url: '../scenic_news_detail2/scenic_news_detail2?id=' + id
      })
    } 
  },
  // 点击第二个卡片跳转到第二个详情页
  goToDetail2: function(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '?id=' + id
    })
  },

  onRefresh:function(){
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    wx.showLoading({
      title: 'Loading...',
    })
    console.log("下拉刷新啦");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh:function(){
    this.onRefresh();
  }

})