(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/accumulate/createOrder"],{525:function(e,t,r){"use strict";(function(e,t){var a=r(4);r(26);a(r(25));var n=a(r(526));e.__webpack_require_UNI_MP_PLUGIN__=r,t(n.default)}).call(this,r(1)["default"],r(2)["createPage"])},526:function(e,t,r){"use strict";r.r(t);var a=r(527),n=r(529);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r(531);var c,s=r(34),u=Object(s["default"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],c);u.options.__file="pages/accumulate/createOrder.vue",t["default"]=u.exports},527:function(e,t,r){"use strict";r.r(t);var a=r(528);r.d(t,"render",(function(){return a["render"]})),r.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),r.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),r.d(t,"components",(function(){return a["components"]}))},528:function(e,t,r){"use strict";var a;r.r(t),r.d(t,"render",(function(){return n})),r.d(t,"staticRenderFns",(function(){return c})),r.d(t,"recyclableRender",(function(){return o})),r.d(t,"components",(function(){return a}));var n=function(){var e=this,t=e.$createElement,r=(e._self._c,JSON.stringify(e.facdureData));e.$mp.data=Object.assign({},{$root:{g0:r}})},o=!1,c=[];n._withStripped=!0},529:function(e,t,r){"use strict";r.r(t);var a=r(530),n=r.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},530:function(e,t,r){"use strict";(function(e){var a=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(61)),o=a(r(63)),c=a(r(11)),s=r(28);r(179);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,c.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={data:function(){return{showCoupon:!1,orderData:"",subFlag:!0,total:0,goodsPrice:0,goodsList:[],maskState:0,remarks:"",payType:1,addressData:{code:""},facdureData:{code:"",payable:"不开发票"},couponData:{useCoupon:0,couponTypeCode:"",couponCode:"",minPoint:0,couponAmount:0,payable:"不使用优惠券"}}},computed:i({},(0,s.mapState)(["hasLogin","userInfo"])),onLoad:function(t){var r=getCurrentPages()[0].route;console.log("当前路由：",r),this.hasLogin||e.reLaunch({url:"/pages/wxAuth/wxAuth?returnUrl="+r});var a=e.getStorageSync("scoreOrderData")||"";console.log("临时数据：",a),this.orderData=t.data,this.goodsList=a,t.addressData?this.addressData=JSON.parse(t.addressData):this.getAddrData(),this.calcTotal()},methods:{getAddrData:function(){var e=this;return(0,o.default)(n.default.mark((function t(){var r,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={pageNo:1,pageSize:1},t.next=3,e.$axios(e.$baseUrl.getContactsList,JSON.stringify(r));case 3:a=t.sent,200==a.data.code&&a.data.data.length&&(e.addressData=a.data.data[0]);case 5:case"end":return t.stop()}}),t)})))()},calcTotal:function(){var e=this.goodsList,t=0;e.forEach((function(e){t+=e.scoreNumber*e.productNum})),this.total=Number(t.toFixed(2)),this.goodsPrice=Number(t.toFixed(2))},submit:function(){var t=this;return(0,o.default)(n.default.mark((function r(){var a,o;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.addressData.code){r.next=3;break}return t.$api.msg("收货地址不能为空"),r.abrupt("return");case 3:if(!t.subFlag){r.next=11;break}return a={goodsCode:t.goodsList[0].productCode,num:t.goodsList[0].productNum,remarks:t.remarks,shopContactsCode:t.addressData.code},console.log("参数详情：1111",a),r.next=8,t.$axios(t.$baseUrl.scoreGoodsCreate,a);case 8:o=r.sent,console.log(o.data,"11111"),200==o.data.code&&(t.subFlag=!0,t.$api.msg(o.data.message),e.removeStorage({key:"scoreOrderData"}),setTimeout((function(){e.redirectTo({url:"/pages/accumulate/order"})}),1500));case 11:case"end":return r.stop()}}),r)})))()},stopPrevent:function(){}}};t.default=d}).call(this,r(2)["default"])},531:function(e,t,r){"use strict";r.r(t);var a=r(532),n=r.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},532:function(e,t,r){}},[[525,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/accumulate/createOrder.js.map