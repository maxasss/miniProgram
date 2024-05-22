
Page({
    data: {
      newsList: [
        {
          id: 1,
          cover: "../../assest/image/image_news/box1.png",
          title: '有理数|非遗里的山东传统舞蹈',
          time: '2024年5月2日'
        },
        {
          id: 2,
          cover: "../../assest/image/image_news/box2.png",
          title: '文化自信崛起下的“非遗新造”',
          time: '2024年3月30日'
        },
        {
          id: 3,
          cover: "../../assest/image/image_news/box3.png",
          title: '全国首创，就在广州！“不到北京路，不是广州城”',
          time: '2023年6月12日' 
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
      } else if (id === 3) {
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