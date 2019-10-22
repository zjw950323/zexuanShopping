const API_BASE_URL = 'http://192.168.0.174:8081/freeter-api/';
module.exports = {
  IndexUrlBanner:           API_BASE_URL + 'index/bannerlist',         // 首页banner图
  IndexUrlQuick:            API_BASE_URL + 'index/categoryindex',      // 首页快捷频道
  IndexUrlOrder:            API_BASE_URL + 'index/goodsindex',         // 首页全部商品
  SecondIndexUrlCommodity:  API_BASE_URL + 'goods/page',           // 二级商品页
  MineUrlLogin:             API_BASE_URL + 'login/login',          // 个人中心登陆
  MineUrlBackground:        API_BASE_URL + 'icon/background',      // 个人中心背景图
  MineUrlIconFirst:         API_BASE_URL + 'icon/first',           // 个人中心第一排icon
  MineUrlIconSecond:        API_BASE_URL + 'icon/second',          // 个人中心第二排icon
  MineUrlIconThird:         API_BASE_URL + 'icon/third',           // 个人中心第三排icon
  CartPage:                 API_BASE_URL + 'cart/page',            // 购物车
  AddressPage:              API_BASE_URL + 'address/page',         // 地址管理
  AddressSave:              API_BASE_URL + 'address/save/json',    // 添加新地址
  AddressUpdate:            API_BASE_URL + 'address/update/json',  // 添加新地址
  AddressDelete:            API_BASE_URL + 'address/delete',       // 删除地址

  // 订单
  OrderConfirm:    API_BASE_URL + 'order/confirm/goods',  //  确认收货
  OrderRemove:     API_BASE_URL + 'order/deleteorder',    //  删除订单
  OrderSave:       API_BASE_URL + 'order/save/order',     //  直接从商品添加
  OrderCartSave:   API_BASE_URL + 'order/save/all',       //  从购物车添加
  OrderRefund:     API_BASE_URL + 'order/refund',         //  退款
  OrderList:       API_BASE_URL + 'order/page',           //  订单列表，分布查询   GET
  OrderDetail:     API_BASE_URL + 'order/info',           //  订单详情
  OrderPackage:    API_BASE_URL + 'order/selectcourier',  //  订单快递查询 参数：shippingNo   GET
};
