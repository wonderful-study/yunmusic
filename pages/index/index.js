// pages/index/index.js
import request from '../../utils/request' ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据
    bannerList: [],
    //推荐歌单数据
    recommendList: [],
    //排行榜数据
    topList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //发送请求推荐歌曲数据
    //async/await组合：异步请求，result会等待await后面的函数执行完成，通过resolve（）返回promise对象的值
    let bannerListData = await request('/banner',{type:2});
    this.setData({
      bannerList: bannerListData.banners
    });

    let recommendListData = await request('/personalized',{limit:10});
    this.setData({
      recommendList: recommendListData.result
    });

    //获取排行榜数据
    let index = 0;
    let resultArr = [];
    while(index < 5){
      let topListData = await request('/top/list',{idx: index++});
      let topListItem = {name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0,3)};
      resultArr.push(topListItem);
      this.setData({
        topList: resultArr
      });
    }
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