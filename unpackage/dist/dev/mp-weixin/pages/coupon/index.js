(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/coupon/index"],{365:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26);r(n(25));var o=r(n(366));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n(1)["default"],n(2)["createPage"])},366:function(e,t,n){"use strict";n.r(t);var r=n(367),o=n(369);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n(371);var i,s=n(34),u=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);u.options.__file="pages/coupon/index.vue",t["default"]=u.exports},367:function(e,t,n){"use strict";n.r(t);var r=n(368);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},368:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return r}));try{r={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,826))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.navList,(function(t,n){var r=e.__get_orig(t),o=!0===t.loaded&&0===t.orderList.length;return{$orig:r,g0:o}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},a=!1,i=[];o._withStripped=!0},369:function(e,t,n){"use strict";n.r(t);var r=n(370),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},370:function(e,t,n){"use strict";(function(e){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(61)),a=r(n(63)),i=r(n(11)),s=n(28),u=n(179);r(n(38));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n(826))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/empty").then(function(){return resolve(n(833))}.bind(null,n)).catch(n.oe)},p={components:{uniLoadMore:l,empty:f},computed:d({},(0,s.mapState)(["hasLogin","userInfo"])),data:function(){return{res:{},serviceNo:"400-988-6868",tabCurrentIndex:0,orderStatus:"",orderList:[],pageNo:1,pageSize:10,totalPage:0,refundDetailVO:[],navList:[{state:0,text:"待使用",orderStatus:0,loadingType:"more",orderList:[]},{state:1,text:"已使用",loadingType:"more",orderStatus:1,orderList:[]},{state:2,text:"已过期",loadingType:"more",orderStatus:-1,orderList:[]}]}},onLoad:function(t){var n=getCurrentPages()[0].route;console.log("当前路由：",n),this.hasLogin||e.reLaunch({url:"/pages/wxAuth/wxAuth?returnUrl="+n}),console.log(t.state),this.tabCurrentIndex=+t.state,0==t.state&&this.loadData()},methods:{navTo:function(t){e.navigateTo({url:t})},getData:function(t,n){var r=this;return(0,a.default)(o.default.mark((function a(){var i,s,c;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r.res={},i={useStatus:t,pageNo:r.pageNo,pageSize:r.pageSize},o.next=4,r.$axios(r.$baseUrl.getCouponList,JSON.stringify(i));case 4:for(c in s=o.sent,s.data.data)s.data.data[c].openDetail=!1;r.res=s,1==r.pageNo&&(r.totalPage=r.res.data.pages),r.orderList=r.res.data.data.filter((function(e){return e.startTime=u.fn.formatTime(e.startTime,"Y-M-D"),e.endTime=u.fn.formatTime(e.endTime,"Y-M-D"),e=Object.assign(e,r.orderStateExp(e.couponTypeCode)),e})),r.orderList.forEach((function(e){n.orderList.push(e)})),console.log("this.orderList",r.orderList),r.$set(n,"loaded",!0),r.pageNo>=r.totalPage?(e.stopPullDownRefresh(),r.pageNo=r.totalPage+1,n.loadingType="noMore"):(r.pageNo=r.pageNo+1,console.log(r.pageNo),r.getData(t,n),n.loadingType="more");case 13:case"end":return o.stop()}}),a)})))()},loadData:function(e){var t=this.tabCurrentIndex,n=this.navList[t],r=n.orderStatus;console.log("来源：",e),"tabChange"===e&&!0===n.loaded&&this.$set(n,"loaded",!1),"loading"!==n.loadingType&&(n.loadingType="loading",this.getData(r,n))},showDatail:function(e){e.openDetail=!e.openDetail,console.log(e.openDetail)},changeTab:function(e){this.tabCurrentIndex=e.target.current,this.orderList=[],this.pageNo=1,this.totalPage=0;var t=this.tabCurrentIndex,n=this.navList[t];n.orderStatus;n.orderList=[],this.loadData("tabChange")},tabClick:function(e){this.tabCurrentIndex=e},orderStateExp:function(e){var t="base-coupons",n="#fa436a";switch(e){case"YDMJQ":t="base-coupons-mj";break;case"YDZKQ":t="base-coupons-zk",n="#339cfe";break;case"YDDKQ ":t="base-coupons",n="#339cfe";break}return{stateTip:t,stateTipColor:n}}}};t.default=p}).call(this,n(2)["default"])},371:function(e,t,n){"use strict";n.r(t);var r=n(372),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},372:function(e,t,n){}},[[365,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/coupon/index.js.map