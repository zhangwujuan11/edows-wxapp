(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customerorder/customerorder"],{549:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26);r(t(25));var o=r(t(550));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},550:function(e,n,t){"use strict";t.r(n);var r=t(551),o=t(553);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(555),t(557);var a,i=t(34),c=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"06196628",null,!1,r["components"],a);c.options.__file="pages/customerorder/customerorder.vue",n["default"]=c.exports},551:function(e,n,t){"use strict";t.r(n);var r=t(552);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},552:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={uSubsection:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-subsection/u-subsection")]).then(t.bind(null,853))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,a=[];o._withStripped=!0},553:function(e,n,t){"use strict";t.r(n);var r=t(554),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},554:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(170)),u={data:function(){return{current:0,markers:[],latitude:"",longitude:"",placeData:{},address:'"福州市台江区茶亭国际"'}},onShow:function(){this.current=parseInt(e.getStorageSync("orderIndex")||0),e.setStorageSync("orderIndex","0")},onLoad:function(e){var n=this,t=new o.default.BMapWX({ak:"LA26lnRd6tMIlCFP3Ce3H6otX5g5Gd0e"}),r=function(e){console.log(e)},u=function(e){var t=e.wxMarkerData;n.markers=t,n.latitude=t[0].latitude,n.longitude=t[0].longitude};t.geocoding({address:n.address,fail:r,success:u})},methods:{sectionChange:function(e){this.current=e},goEvaluate:function(){e.navigateTo({url:"/page_order/orderEvaluate/orderEvaluate"})},goDetails:function(){e.navigateTo({url:"/page_order/orderDetails/orderDetails"})},Call:function(){e.makePhoneCall({phoneNumber:"13188888888"})},goMap:function(){e.openLocation({latitude:Number(this.latitude),longitude:Number(this.longitude),address:this.address,name:"茶亭国际艾盈店（易道大咖）"})}}};n.default=u}).call(this,t(2)["default"])},555:function(e,n,t){"use strict";t.r(n);var r=t(556),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},556:function(e,n,t){},557:function(e,n,t){"use strict";t.r(n);var r=t(558),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},558:function(e,n,t){}},[[549,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/customerorder/customerorder.js.map