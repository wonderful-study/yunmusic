let startY = 0;  //手指起始坐标
let moveY = 0;   //手指移动坐标
let moveDistance = 0;  //手指移动距离
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coveTransition: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleTouchStart(event) {
    this.setData({
      coveTransition: ''
    });
    //获取手指的起始坐标 
    startY = event.touches[0].clientY;
  },

  handleTouchMove(event) {
    //获取手指的移动坐标 
    moveY = event.touches[0].clientY;
    //手指移动的距离
    moveDistance = moveY - startY;
    if(moveDistance <= 0) {
      return;
    } else if(moveDistance > 80) {
      moveDistance = 80;
    }
    //更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    });
  },

  handleTouchEnd() {
    //更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coveTransition: 'transform 0.5s linear'
    });
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