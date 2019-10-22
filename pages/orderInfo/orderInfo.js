// pages/orderInfo/orderInfo.js

const util = require('./../../utils/util.js');
const api = require('./../../config/url.js');

Page({
  data: {
    order: Object,
    timeCreate: String,
    timePayed: String,
    timeShipping: String,
    expressInfo: Object,
    lastExpressInfo: Object,
  },

  // 获取快递信息
  getPackageInfo(packageId) {
    let that = this;
    util.request(api.OrderPackage, {
      shippingNo: packageId
    }, "GET").then(res => {
      if (res.code === 0){
        let info = JSON.parse(res.courierInfo);
        console.log(info);
        let lastInfo = info.list.length > 0? info.list[info.list.length - 1]: null;
        that.setData({
          expressInfo: info,
          lastExpressInfo: lastInfo
        })
      }
    })
  },

  // 跳转物流信息页面
  goToShippingInfoPage(){
    wx.navigateTo({
      url: '/pages/ucenter/express/express',
    })
  },

  onLoad: function(options) {
    // 载入订单信息
    let currentOrder = wx.getStorageSync('currOrder');
    this.setData({
      order: currentOrder
    });
    console.log(currentOrder);

    // 请求订单数据
    let that = this;
    util.request(api.OrderDetail, {
      id: currentOrder.id
    }, "POST").then(res => {
      console.log(typeof res.code);
      if (res.code === 0) {
        let tempOrder = res.orderInfoVO;
        let timeCreate = util.formatTime(new Date(tempOrder.createTime));
        let timePayed = util.formatTime(new Date(tempOrder.payTime));
        let timeShipping = util.formatTime(new Date(tempOrder.deliveryTime));

        // 保存订单信息
        wx.setStorageSync("currOrder", tempOrder);

        that.setData({
          timeCreate: timeCreate,
          timePayed: timePayed,
          timeShipping: timeShipping,
          order: tempOrder
        });

        // 获取快递信息
        // that.getPackageInfo(tempOrder.shippingNo)

        /*
        let data = {
          "userName": "邴新科",
          "mobile": null,
          "address": "山东省济南市",
          "street": "高新万达",
          "shopName": "屈蜂堂官方商城",
          "label": "自营",
          "list": [{
              "name": "安守本分卡号",
              "type": "",
              "money": 200,
              "num": 20,
              "url": "https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png"
            },
            {
              "name": null,
              "type": "",
              "money": 20,
              "num": 20,
              "url": null
            }
          ],
          "remark": "",
          "payMoney": 5000,
          "actualPrice": 5000,
          "freight": 0,
          "orderNum": "2019101909340001",
          "createTime": "2019-10-19T01:37:47.000+0000",
          "payTime": "2019-10-21T08:07:42.000+0000",
          "deliveryTime": "2019-10-21T08:07:44.000+0000",
          "shippingNo": "9830000829665"
        }
        */
      }
    })
  },


  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});
