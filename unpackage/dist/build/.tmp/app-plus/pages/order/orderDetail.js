(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderDetail"],{"315d":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a})},"48ec":function(e,t,r){"use strict";r.r(t);var n=r("315d"),a=r("c696");for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);r("b5be");var i=r("2877"),u=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},a0a5:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("a34a")),a=r("2f62"),o=r("277a");function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,s,"next",e)}function s(e){u(o,n,a,i,s,"throw",e)}i(void 0)})}}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){d(e,t,r[t])})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={data:function(){return{orderSn:"",serviceNo:"400-988-6868",orderInfo:{},maskState:0,desc:"",payType:1,couponList:[{title:"新用户专享优惠券",price:5},{title:"庆五一发一波优惠券",price:10},{title:"优惠券优惠券优惠券优惠券",price:15}],addressData:{name:"许小星",mobile:"13853989563",addressName:"金九大道",address:"山东省济南市历城区",area:"149号",default:!1},facdureData:{companyName:"不开发票"}}},computed:c({},(0,a.mapState)(["hasLogin","userInfo"])),onLoad:function(t){var r=getCurrentPages()[0].route;console.log("当前路由：",r," at pages\\order\\orderDetail.vue:208"),this.hasLogin||e.reLaunch({url:"/pages/wxAuth/wxAuth?returnUrl="+r}),this.orderSn=t.orderSn,this.getData()},methods:{getData:function(){var e=s(n.default.mark(function e(){var t,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={orderSn:this.orderSn},console.log(t," at pages\\order\\orderDetail.vue:224"),e.next=4,this.$axios(this.$baseUrl.getOrderDetail,t);case 4:r=e.sent,this.orderInfo=r.data.data,this.orderInfo.createDate=o.fn.formatTime(this.orderInfo.createDate,"Y-M-D h:m:s"),this.orderInfo.payTime&&(this.orderInfo.payTime=o.fn.formatTime(this.orderInfo.payTime,"Y-M-D h:m:s"));case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),navToDetailPage:function(t){var r=t.productCode;t.isExpire?this.$api.msg("商品已下架"):e.navigateTo({url:"/pages/product/product?code=".concat(r)})},toPay:function(){var t=s(n.default.mark(function t(r){var a,o=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,e.login({provider:"weixin",success:function(){var t=s(n.default.mark(function t(i){var u,s;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return u={orderSn:r.orderSn,openId:e.getStorageSync("openId")?e.getStorageSync("openId"):""},console.log(u," at pages\\order\\orderDetail.vue:256"),t.next=4,o.$axios(o.$baseUrl.orderPayer,u);case 4:s=t.sent,console.log("返回数据：",s.data.data," at pages\\order\\orderDetail.vue:258"),e.requestPayment({provider:"wxpay",appId:s.data.data.appId,timeStamp:s.data.data.timeStamp,nonceStr:s.data.data.nonceStr,package:s.data.data.packageValue,signType:s.data.data.signType,paySign:s.data.data.paySign,success:function(t){e.redirectTo({url:"/pages/money/paySuccess?totalPrice="+r.totalPrice})},fail:function(e){a.$api.msg("支付失败"),console.log("fail:"+JSON.stringify(e)," at pages\\order\\orderDetail.vue:274")}});case 7:case"end":return t.stop()}},t,this)}));function i(e){return t.apply(this,arguments)}return i}()});case 2:case"end":return t.stop()}},t,this)}));function r(e){return t.apply(this,arguments)}return r}(),confirm:function(){var t=s(n.default.mark(function t(){var r=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this,e.showModal({content:"确认已收货？",success:function(){var t=s(n.default.mark(function t(a){var o;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=6;break}return o={orderSn:r.orderSn},t.next=4,r.$axios(r.$baseUrl.orderConfirmation,o);case 4:t.sent,e.redirectTo({url:"/pages/order/order?state=3"});case 6:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}()});case 2:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),refundOrder:function(){e.navigateTo({url:"/pages/order/refund?orderSn="+this.orderSn})},refundOrderDetail:function(){e.navigateTo({url:"/pages/order/refundDetail?orderSn="+this.orderSn})},toEvalu:function(){e.navigateTo({url:"/pages/evaluate/evaluate?orderSn="+this.orderSn})},makePhoneCall:function(){e.makePhoneCall({phoneNumber:this.serviceNo,success:function(){console.log("成功拨打电话"," at pages\\order\\orderDetail.vue:326")}})},cancelOrder:function(){var t=s(n.default.mark(function t(){var r,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoading({title:"请稍后"}),r={orderSn:this.orderSn},t.next=4,this.$axios(this.$baseUrl.cancelOrder,r);case 4:a=t.sent,200==a.data.code&&(this.getData(),e.hideLoading());case 6:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),deleteOrder:function(){var t=s(n.default.mark(function t(){var r=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.showModal({content:"确认删除此订单？",success:function(){var t=s(n.default.mark(function t(a){var o,i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=6;break}return o={orderSn:r.orderSn},t.next=4,r.$axios(r.$baseUrl.deleteOrder,o);case 4:i=t.sent,200==i.data.code&&(r.$api.msg("删除订单成功！"),setTimeout(function(){e.navigateTo({url:"/pages/order/order?state=0"})},1e3));case 6:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}()});case 1:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),toggleMask:function(e){var t=this,r="show"===e?10:300,n="show"===e?1:0;this.maskState=2,setTimeout(function(){t.maskState=n},r)},toggleMaskPay:function(e){var t=this,r="show"===e?10:300,n="show"===e?1:0;this.maskState=2,setTimeout(function(){t.maskState=n},r)},numberChange:function(e){this.number=e.number},changePayType:function(e){this.payType=e},submit:function(){e.redirectTo({url:"/pages/money/pay"})},stopPrevent:function(){}}};t.default=f}).call(this,r("6e42")["default"])},b0b2:function(e,t,r){},b5be:function(e,t,r){"use strict";var n=r("b0b2"),a=r.n(n);a.a},c696:function(e,t,r){"use strict";r.r(t);var n=r("a0a5"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o);t["default"]=a.a}},[["ba08","common/runtime","common/vendor"]]]);