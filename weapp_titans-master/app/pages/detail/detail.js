var initData = '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。\n\n江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。'
var extraLine = [];
var appInstance = getApp()
Page({

  data: {
    text: initData
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    },
  onShow: function(){
      this.setData({
        text: wx.getStorageSync('poem_text') || initData,
        title:wx.getStorageSync('poem_title') ||"沁园春·雪" + "\n\n"
      })
    //   wx.setNavigationBarTitle({
    //     title: wx.getStorageSync('poem_title')
    //   })
  }  
})