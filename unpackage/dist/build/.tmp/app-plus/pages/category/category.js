(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{1440:function(t,e,n){},"15ab":function(t,e,n){"use strict";var r=n("1440"),a=n.n(r);a.a},"532b":function(t,e,n){"use strict";n.r(e);var r=n("bf97"),a=n("c567");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("15ab");var u=n("2877"),c=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},bf97:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},c15f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),a=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,i,u){try{var c=t[i](u),o=c.value}catch(s){return void n(s)}c.done?e(o):Promise.resolve(o).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function c(t){u(i,r,a,c,o,"next",t)}function o(t){u(i,r,a,c,o,"throw",t)}c(void 0)})}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:0,flist:[],slist:[],sTitle:""}},computed:o({},(0,a.mapState)(["hasLogin","userInfo"])),onLoad:function(){var t=c(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loadData();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var t=c(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loadData();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{loadData:function(){var t=c(r.default.mark(function t(){var e,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,this.$axios(this.$baseUrl.getProductFirstGroup,e);case 3:n=t.sent,this.flist=n.data.data,this.tabtap(this.flist[0]),this.sTitle=this.flist[0].name,this.currentId=this.flist[0].id;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabtap:function(){var t=c(r.default.mark(function t(e){var n,a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.sTitle=e.name,this.currentId=e.id,n={parentId:e.id},t.next=5,this.$axios(this.$baseUrl.getProductSecondGroup,n);case 5:a=t.sent,this.slist=a.data.data;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,n=this.slist.filter(function(t){return t.top<=e}).reverse();n.length>0&&(this.currentId=n[0].pid)},calcSize:function(){var e=0;this.slist.forEach(function(n){var r=t.createSelectorQuery().select("#main-"+n.id);r.fields({size:!0},function(t){n.top=e,e+=t.height,n.bottom=e}).exec()}),this.sizeCalcState=!0},navToList:function(e){t.navigateTo({url:"/pages/product/list?classId=".concat(e.id)})}}};e.default=l}).call(this,n("6e42")["default"])},c567:function(t,e,n){"use strict";n.r(e);var r=n("c15f"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a}},[["e2b2","common/runtime","common/vendor"]]]);