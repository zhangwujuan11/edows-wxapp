(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"2ab8":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("a34a")),n=(a("277a"),a("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a,s,n,r,o){try{var i=e[r](o),u=i.value}catch(c){return void a(c)}i.done?t(u):Promise.resolve(u).then(s,n)}function i(e){return function(){var t=this,a=arguments;return new Promise(function(s,n){var r=e.apply(t,a);function i(e){o(r,s,n,i,u,"next",e)}function u(e){o(r,s,n,i,u,"throw",e)}i(void 0)})}}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){c(e,t,a[t])})}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={data:function(){return{orderData:"",subFlag:!0,specClass:"none",isShowDel:!1,contactsId:"",addressData:{id:"",name:"",mobile:"",addressName:"在地图选择",address:"在地图选择",roomNum:"",isDefult:0}}},computed:u({},(0,n.mapState)(["hasLogin","userInfo"])),onLoad:function(){var t=i(s.default.mark(function t(a){var n,r;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=getCurrentPages()[0].route,console.log("当前路由：",n," at pages\\address\\addressManage.vue:82"),this.hasLogin||e.reLaunch({url:"/pages/wxAuth/wxAuth?returnUrl="+n}),this.orderData=a.orderData,r="新增收货地址","edit"===a.type&&(r="编辑收货地址",this.addressData=JSON.parse(a.data),this.contactsId=this.addressData.id,this.isShowDel=!0),this.manageType=a.type,e.setNavigationBarTitle({title:r});case 8:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}(),methods:{switchChange:function(e){console.log(e.detail.value," at pages\\address\\addressManage.vue:106"),e.detail.value?this.addressData.isDefult=1:this.addressData.isDefult=0,console.log(this.addressData.isDefult," at pages\\address\\addressManage.vue:113")},chooseLocation:function(){var t=this;e.getSetting({success:function(a){a.authSetting["scope.userLocation"]?e.chooseLocation({success:function(e){console.log("地址：",e," at pages\\address\\addressManage.vue:143"),t.addressData.addressName=e.address+" "+e.name,t.addressData.address=e.address+" "+e.name}}):e.authorize({scope:"scope.userLocation",success:function(){e.chooseLocation({success:function(e){console.log("地址：",e," at pages\\address\\addressManage.vue:133"),t.addressData.addressName=e.address+" "+e.name,t.addressData.address=e.address+" "+e.name}})}})}})},surDel:function(){var t=i(s.default.mark(function t(){var a,n,r=this;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a={contactsId:this.contactsId},t.next=3,this.$axios(this.$baseUrl.delContacts,a);case 3:n=t.sent,200==n.data.code&&(this.$api.msg("地址删除成功"),setTimeout(function(){e.navigateTo({url:"/pages/address/address?orderData=".concat(r.orderData)})},800));case 5:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),confirm:function(){var t=i(s.default.mark(function t(){var a,n,r,o=this;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.addressData,a.name){t.next=4;break}return this.$api.msg("请填写收货人姓名"),t.abrupt("return");case 4:if(/(^1[3|4|5|7|8][0-9]{9}$)/.test(a.mobile)){t.next=7;break}return this.$api.msg("请输入正确的手机号码"),t.abrupt("return");case 7:if(a.address){t.next=10;break}return this.$api.msg("请在地图选择所在位置"),t.abrupt("return");case 10:if(a.roomNum){t.next=13;break}return this.$api.msg("请填写门牌号信息"),t.abrupt("return");case 13:if(n=this.addressData,console.log(n," at pages\\address\\addressManage.vue:187"),!this.subFlag){t.next=21;break}return this.subFlag=!1,t.next=19,this.$axios(this.$baseUrl.upDataContacts,n);case 19:r=t.sent,200==r.data.code&&(this.subFlag=!0,this.$api.msg("地址".concat("edit"==this.manageType?"修改":"添加","成功")),setTimeout(function(){e.navigateTo({url:"/pages/address/address?orderData=".concat(o.orderData)})},800));case 21:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),toggleSpec:function(){var e=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){e.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},stopPrevent:function(){}}};t.default=d}).call(this,a("6e42")["default"])},"54bc":function(e,t,a){"use strict";a.r(t);var s=a("2ab8"),n=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,function(){return s[e]})}(r);t["default"]=n.a},"5b6d":function(e,t,a){"use strict";a.r(t);var s=a("ff76"),n=a("54bc");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("a587");var o=a("2877"),i=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=i.exports},a587:function(e,t,a){"use strict";var s=a("e6c2"),n=a.n(s);n.a},e6c2:function(e,t,a){},ff76:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})}},[["0791","common/runtime","common/vendor"]]]);