(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-code/u-code"],{890:function(e,t,n){"use strict";n.r(t);var i=n(891),r=n(893);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n(896);var s,c=n(34),o=Object(c["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"1d88f349",null,!1,i["components"],s);o.options.__file="uni_modules/uview-ui/components/u-code/u-code.vue",t["default"]=o.exports},891:function(e,t,n){"use strict";n.r(t);var i=n(892);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},892:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},u=!1,s=[];r._withStripped=!0},893:function(e,t,n){"use strict";n.r(t);var i=n(894),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},894:function(e,t,n){"use strict";(function(e){var i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(895)),u={name:"u-code",mixins:[e.$u.mpMixin,e.$u.mixin,r.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var t=Number(e.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var n=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>n?(this.secNum=t-n,e.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3),this.setTimeToStorage()},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);e.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=u}).call(this,n(2)["default"])},896:function(e,t,n){"use strict";n.r(t);var i=n(897),r=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},897:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-code/u-code.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-code/u-code-create-component',
    {
        'uni_modules/uview-ui/components/u-code/u-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(890))
        })
    },
    [['uni_modules/uview-ui/components/u-code/u-code-create-component']]
]);
