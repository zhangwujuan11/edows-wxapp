(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-index-list/u-index-list"],{977:function(t,e,n){"use strict";n.r(e);var i=n(978),r=n(980);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n(983);var u,s=n(34),c=Object(s["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"7e596c49",null,!1,i["components"],u);c.options.__file="uni_modules/uview-ui/components/u-index-list/u-index-list.vue",e["default"]=c.exports},978:function(t,e,n){"use strict";n.r(e);var i=n(979);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},979:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return i}));try{i={uTransition:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-transition/u-transition")]).then(n.bind(null,1083))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$u.addUnit(t.scrollViewHeight)),i=t.$u.addUnit(t.letterInfo.top||100),r={position:"fixed",right:"50px",top:t.$u.addUnit(t.indicatorTop),zIndex:2},o=t.$u.addUnit(t.indicatorHeight),u=t.$u.addUnit(t.indicatorHeight);t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,a0:r,g2:o,g3:u}})},o=!1,u=[];r._withStripped=!0},980:function(t,e,n){"use strict";n.r(e);var i=n(981),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},981:function(t,e,n){"use strict";(function(t){var i=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n(61)),o=i(n(63)),u=i(n(982)),s=function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t},c={name:"u-index-list",mixins:[t.$u.mpMixin,t.$u.mixin,u.default],options:{virtualHost:!0},data:function(){return{activeIndex:-1,touchmoveIndex:1,letterInfo:{height:0,itemHeight:0,top:0},indicatorHeight:50,touching:!1,scrollTop:0,scrollViewHeight:0,sys:t.$u.sys(),scrolling:!1,scrollIntoView:""}},computed:{uIndexList:function(){return this.indexList.length?this.indexList:s()},indicatorTop:function(){var t=this.letterInfo,e=t.top,n=t.itemHeight;return Math.floor(e+n*this.activeIndex+n/2-this.indicatorHeight/2)}},watch:{uIndexList:{immediate:!0,handler:function(){var e=this;t.$u.sleep().then((function(){e.setIndexListLetterInfo()}))}}},created:function(){this.children=[],this.anchors=[],this.init()},mounted:function(){this.setIndexListLetterInfo()},methods:{init:function(){this.scrollViewHeight=this.sys.windowHeight-this.customNavHeight},touchStart:function(t){var e=t.changedTouches[0];if(e){this.touching=!0;var n=e.pageY,i=this.getIndexListLetter(n);this.setValueForTouch(i)}},touchMove:function(t){var e=t.changedTouches[0];if(e){this.touching||(this.touching=!0);var n=e.pageY,i=this.getIndexListLetter(n);this.setValueForTouch(i)}},touchEnd:function(e){var n=this;t.$u.sleep(300).then((function(){n.touching=!1}))},getIndexListLetterRect:function(){var t=this;return new Promise((function(e){t.$uGetRect(".u-index-list__letter").then((function(t){e(t)}))}))},setIndexListLetterInfo:function(){var e=this;this.getIndexListLetterRect().then((function(n){var i=n.height,r=t.$u.sys(),o=r.windowHeight,u=0;u=0==e.customNavHeight?-(r.statusBarHeight+44):t.$u.getPx(e.customNavHeight),e.letterInfo={height:i,top:(o-i)/2+u/2,itemHeight:Math.floor(i/e.uIndexList.length)}}))},getIndexListLetter:function(t){var e=this.letterInfo,n=e.top,i=e.height,r=e.itemHeight;return t<n?0:t>=n+i?this.uIndexList.length-1:Math.floor((t-n)/r)},setValueForTouch:function(t){t!==this.activeIndex&&(this.activeIndex=t,this.scrollTop=this.children[t].top)},getHeaderRect:function(){var t=this;return new Promise((function(e){dom.getComponentRect(t.$refs.header,(function(t){e(t.size)}))}))},scrollHandler:function(e){var n=this;return(0,o.default)(r.default.mark((function i(){var o,u,s,c,a,d;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.touching&&!n.scrolling){i.next=2;break}return i.abrupt("return");case 2:n.scrolling=!0,t.$u.sleep(10).then((function(){n.scrolling=!1})),o=0,u=n.children.length,s=n.children,n.anchors,o=e.detail.scrollTop,c=0;case 10:if(!(c<u)){i.next=28;break}if(a=s[c],d=s[c+1],!(o<=s[0].top||o>=s[u-1].top+s[u-1].height)){i.next=17;break}return n.activeIndex=-1,i.abrupt("break",28);case 17:if(d){i.next=22;break}return n.activeIndex=u-1,i.abrupt("break",28);case 22:if(!(o>a.top&&o<d.top)){i.next=25;break}return n.activeIndex=c,i.abrupt("break",28);case 25:c++,i.next=10;break;case 28:case"end":return i.stop()}}),i)})))()}}};e.default=c}).call(this,n(2)["default"])},983:function(t,e,n){"use strict";n.r(e);var i=n(984),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},984:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-index-list/u-index-list.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-index-list/u-index-list-create-component',
    {
        'uni_modules/uview-ui/components/u-index-list/u-index-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(977))
        })
    },
    [['uni_modules/uview-ui/components/u-index-list/u-index-list-create-component']]
]);
