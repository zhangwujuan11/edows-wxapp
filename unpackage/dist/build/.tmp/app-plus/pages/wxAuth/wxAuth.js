(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wxAuth/wxAuth"],{"68d3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=(n("665d"),n("2f62"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n,r,a,u,o){try{var s=e[u](o),i=s.value}catch(c){return void n(c)}s.done?t(i):Promise.resolve(i).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function o(e){i(u,r,a,o,s,"next",e)}function s(e){i(u,r,a,o,s,"throw",e)}o(void 0)})}}var l={data:function(){return{returnUrl:"",SessionKey:"",isShowMask:!1,openId:"",nickName:null,avatarUrl:null,encryptedData:"",iv:"",isCanUse:!1}},onLoad:function(){var t=c(r.default.mark(function t(n){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("参数：",n," at pages\\wxAuth\\wxAuth.vue:78"),this.returnUrl=n.returnUrl?"/"+n.returnUrl:"/pages/index/index",this.isCanUse=!!e.getStorageSync("isCanUse"),this.openId=e.getStorageSync("openId")?e.getStorageSync("openId"):"",this.authLogin(),console.log("isCanUse：",e.getStorageSync("isCanUse")," at pages\\wxAuth\\wxAuth.vue:84");case 5:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),methods:o({},(0,a.mapMutations)(["login"]),{wxGetUserInfo:function(){var t=this;e.getUserInfo({provider:"weixin",success:function(){var n=c(r.default.mark(function n(a){var u,o,s,i;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return console.log("用户信息：",a," at pages\\wxAuth\\wxAuth.vue:93"),a.userInfo.nickName,a.userInfo.avatarUrl,u=a.encryptedData,o=a.iv,n.prev=5,e.setStorageSync("isCanUse",!0),t.isCanUse=e.getStorageSync("isCanUse"),s={encryptedData:u,iv:o,openId:t.openId},n.next=11,t.$axios(t.$baseUrl.xcxDoAuth,s);case 11:i=n.sent,console.log("resInfo：",i," at pages\\wxAuth\\wxAuth.vue:111"),n.next=17;break;case 15:n.prev=15,n.t0=n["catch"](5);case 17:case"end":return n.stop()}},n,this,[[5,15]])}));function a(e){return n.apply(this,arguments)}return a}(),fail:function(e){}})},authLogin:function(){var t=this;e.login({provider:"weixin",success:function(){var n=c(r.default.mark(function n(a){var u,o,s;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return u=a.code,o={code:u},n.next=4,t.$axios(t.$baseUrl.getXcxAuth,o);case 4:s=n.sent,t.openId=s.data.data,e.setStorageSync("openId",s.data.data),t.isCanUse&&e.getUserInfo({provider:"weixin",success:function(){var e=c(r.default.mark(function e(n){var a,u,o,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n.userInfo.nickName,n.userInfo.avatarUrl,a=n.encryptedData,u=n.iv,console.log("用户信息2：",n," at pages\\wxAuth\\wxAuth.vue:151"),o={encryptedData:a,iv:u,openId:t.openId},console.log("params：",o," at pages\\wxAuth\\wxAuth.vue:158"),e.next=9,t.$axios(t.$baseUrl.xcxDoAuth,o);case 9:s=e.sent,console.log("resInfo：",s," at pages\\wxAuth\\wxAuth.vue:160");case 11:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()});case 8:case"end":return n.stop()}},n,this)}));function a(e){return n.apply(this,arguments)}return a}()})},navBack:function(){e.navigateBack()},toAuthLogin:function(){var t=c(r.default.mark(function t(n){var a,u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("person"!==n){t.next=8;break}return a={loginType:0,openId:this.openId,password:"",redirectUrl:"",userName:""},t.next=4,this.$axios(this.$baseUrl.mallMemberLogin,a);case 4:u=t.sent,200===u.data.code&&(this.login(u.data.data),e.reLaunch({url:this.returnUrl})),t.next=9;break;case 8:"shop"===n&&e.navigateTo({url:"/pages/public/login?loginType=1&opeinId="+this.openId+"&returnUrl="+this.returnUrl});case 9:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()})};t.default=l}).call(this,n("6e42")["default"])},8115:function(e,t,n){"use strict";var r=n("8654"),a=n.n(r);a.a},"83f8":function(e,t,n){"use strict";n.r(t);var r=n("68d3"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},8654:function(e,t,n){},c60e:function(e,t,n){"use strict";n.r(t);var r=n("e355"),a=n("83f8");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("8115");var o=n("2877"),s=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},e355:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})}},[["d5fb","common/runtime","common/vendor"]]]);