(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{0:function(e,t,n){"use strict";(function(e,t,o){var r=n(4),u=r(n(11));n(26);var a=r(n(25)),c=r(n(27)),i=r(n(29)),f=r(n(35)),l=r(n(37)),p=r(n(38)),s=r(n(39));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.__webpack_require_UNI_MP_PLUGIN__=n,a.default.config.productionTip=!1,i.default.mpType="app",a.default.use(s.default);var O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&t.showToast({title:e,duration:n,mask:o,icon:r})},b=function(e){return new Promise((function(t){setTimeout((function(){t(p.default[e])}),500)}))},v=function(){var e=getCurrentPages(),t=e[e.length-2];return console.log("页面：",t),t.$vm},y=function(){var e=getCurrentPages(),t=e[e.length-3];return console.log("页面：",t),t.$vm},m=function(){var e=getCurrentPages(),t=e[e.length-1];return t};a.default.config.productionTip=!1,a.default.prototype.$fire=new a.default,a.default.prototype.$store=c.default,a.default.prototype.$api={msg:O,json:b,prePage:v,preToPage:y,getCurPage:m},a.default.prototype.$util={msg:O},a.default.prototype.$axios=f.default,a.default.prototype.$baseUrl=l.default,i.default.mpType="app";var h=new a.default(g({},i.default));o(h).$mount()}).call(this,n(1)["default"],n(2)["default"],n(2)["createApp"])},29:function(e,t,n){"use strict";n.r(t);var o=n(30);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(32);var u,a,c,i,f=n(34),l=Object(f["default"])(o["default"],u,a,!1,null,null,null,!1,c,i);l.options.__file="App.vue",t["default"]=l.exports},30:function(e,t,n){"use strict";n.r(t);var o=n(31),r=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},31:function(e,t,n){"use strict";(function(e,o){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(11)),a=n(28);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={methods:i({},(0,a.mapMutations)(["login"])),onLaunch:function(){var t=this,n=e.getStorageSync("userInfo")||"";n.token&&e.getStorage({key:"userInfo",success:function(e){t.login(e.data)}})},globalData:{isIphoneX:!1},onShow:function(){console.log("App Show");var e=this;o.getSystemInfo({success:function(t){console.log("手机信息res"+t.model);var n=t.model;-1!=n.search("iPhone X")&&(e.$options.globalData.isIphoneX=!0)}})},onHide:function(){console.log("App Hide")}};t.default=f}).call(this,n(2)["default"],n(1)["default"])},32:function(e,t,n){"use strict";n.r(t);var o=n(33),r=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},33:function(e,t,n){}},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map