(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{3653:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var a={methods:r({},(0,o.mapMutations)(["login"])),onLaunch:function(){var t=this,e=n.getStorageSync("userInfo")||"";e.token&&n.getStorage({key:"userInfo",success:function(n){t.login(n.data)}})},onShow:function(){console.log("App Show"," at App.vue:26")},onHide:function(){console.log("App Hide"," at App.vue:29")}};t.default=a}).call(this,e("6e42")["default"])},4716:function(n,t,e){"use strict";e.r(t);var o=e("3653"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=r.a},"62d3":function(n,t,e){"use strict";e.r(t);var o=e("4716");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("6d43");var u,a,c=e("2877"),i=Object(c["a"])(o["default"],u,a,!1,null,null,null);t["default"]=i.exports},"6d43":function(n,t,e){"use strict";var o=e("cad0"),r=e.n(o);r.a},cad0:function(n,t,e){}},[["a6fa","common/runtime","common/vendor"]]]);