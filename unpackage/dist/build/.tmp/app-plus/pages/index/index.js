(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"23c9":function(t,e,n){"use strict";var r=n("7c99"),a=n.n(r);a.a},"74fc":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"7c99":function(t,e,n){},"7ce1":function(t,e,n){"use strict";n.r(e);var r=n("abb2"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},abb2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),a=n("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,o,u){try{var i=t[o](u),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)})}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){return n.e("components/swiperDot").then(n.bind(null,"3983"))},l={components:{swiperDot:f},data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,indicatorDots:!1,autoplay:!0,interval:2e3,duration:500,current:0,bannerList:[],popularityProductList:[],hotProductList:[],productList:[],carouselList:[],goodsList:[]}},computed:c({},(0,a.mapState)(["hasLogin","userInfo"])),onLoad:function(){var t=i(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getData();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var t=i(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getData();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=i(r.default.mark(function t(){var e,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,this.$axios(this.$baseUrl.getHomePageData,e);case 3:n=t.sent,console.log("测试一：",n," at pages\\index\\index.vue:127"),this.bannerList=n.data.data.bannerList,this.popularityProductList=n.data.data.popularityProductList,this.productList=n.data.data.productList,this.hotProductList=n.data.data.hotProductList;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),swiperChange:function(t){this.current=t.detail.current},toKeySearch:function(){t.navigateTo({url:"/pages/keySearch/keySearch"})},navToDetailPage:function(e){var n=e.code;t.navigateTo({url:"/pages/product/product?code=".concat(n)})}}};e.default=l}).call(this,n("6e42")["default"])},c5db:function(t,e,n){"use strict";n.r(e);var r=n("74fc"),a=n("7ce1");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("23c9");var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports}},[["c2ba","common/runtime","common/vendor"]]]);