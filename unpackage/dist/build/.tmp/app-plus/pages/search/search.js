(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"242a":function(e,t,a){"use strict";a.r(t);var r=a("b8d7"),n=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);t["default"]=n.a},"2a09":function(e,t,a){"use strict";var r=a("d850"),n=a.n(r);n.a},"364c":function(e,t,a){"use strict";a.r(t);var r=a("f380"),n=a("242a");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("2a09");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},b8d7:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,r,n,i,o){try{var s=e[i](o),c=s.value}catch(u){return void a(u)}s.done?t(c):Promise.resolve(c).then(r,n)}function o(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function s(e){i(o,r,n,s,c,"next",e)}function c(e){i(o,r,n,s,c,"throw",e)}s(void 0)})}}var s=function(){return a.e("components/uni-load-more/uni-load-more").then(a.bind(null,"b9eb"))},c=function(){return a.e("components/empty").then(a.bind(null,"b1eb"))},u={components:{uniLoadMore:s,empty:c},data:function(){return{classId:"",kw:"",pageSize:10,popularityOrder:"",priceOrder:"",saleOrder:"",searchModel:101,page:0,totalPage:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,cateList:[],goodsList:[]}},onLoad:function(e){this.kw=e.kw?e.kw:"",this.classId=e.classId?e.classId:"",this.page=1,this.loadData()},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.page=1,this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{toKeySearch:function(){e.navigateTo({url:"/pages/keySearch/keySearch"})},loadCateList:function(){var e=o(r.default.mark(function e(t,a){var n,i;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.json("cateList");case 2:n=e.sent,i=n.filter(function(e){return e.pid==t}),i.forEach(function(e){var t=n.filter(function(t){return t.pid==e.id});e.child=t}),this.cateList=i;case 6:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}(),loadData:function(){var t=o(r.default.mark(function t(){var a,n,i,o,s,c=this,u=arguments;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=u.length>0&&void 0!==u[0]?u[0]:"add",n=u.length>1?u[1]:void 0,"add"!==a){t.next=8;break}if("nomore"!==this.loadingType){t.next=5;break}return t.abrupt("return");case 5:this.loadingType="loading",t.next=9;break;case 8:this.loadingType="more";case 9:return i={classId:this.classId,kw:this.kw,pageNo:this.page,pageSize:this.pageSize,popularityOrder:this.popularityOrder,priceOrder:this.priceOrder,saleOrder:this.saleOrder,searchModel:this.searchModel},t.next=12,this.$axios(this.$baseUrl.searchProduct,i);case 12:o=t.sent,1==this.page&&(this.totalPage=o.data.data.pages),s=o.data.data.data,console.log("商品列表：",s," at pages\\search\\search.vue:176"),"refresh"===a&&(this.goodsList=[]),1===this.filterIndex&&s.sort(function(e,t){return t.sales-e.sales}),2===this.filterIndex&&s.sort(function(e,t){return 1==c.priceOrder?e.price-t.price:t.price-e.price}),this.goodsList=this.goodsList.concat(s),this.page>=this.totalPage?(e.stopPullDownRefresh(),this.page=this.totalPage+1,this.loadingType="noMore"):(this.page=this.page+1,console.log(this.page," at pages\\search\\search.vue:205"),this.loadData(),this.loadingType="more"),"refresh"===a&&(1==n?e.hideLoading():e.stopPullDownRefresh());case 22:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),tabClick:function(t){this.page=1,this.filterIndex=t,this.popularityOrder=1===t?"asc"===this.popularityOrder?"desc":"asc":"",this.saleOrder=2===t?"asc"===this.saleOrder?"desc":"asc":"",this.priceOrder=3===t?"asc"===this.priceOrder?"desc":"asc":"",e.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),e.showLoading({title:"正在加载"})},toggleCateMask:function(e){var t=this,a="show"===e?10:300,r="show"===e?1:0;this.cateMaskState=2,setTimeout(function(){t.cateMaskState=r},a)},changeCate:function(t){this.cateId=t.id,this.toggleCateMask(),e.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),e.showLoading({title:"正在加载"})},navToDetailPage:function(t){var a=t.code;e.navigateTo({url:"/pages/product/product?code=".concat(a)})},stopPrevent:function(){}}};t.default=u}).call(this,a("6e42")["default"])},d850:function(e,t,a){},f380:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})}},[["9a7e","common/runtime","common/vendor"]]]);