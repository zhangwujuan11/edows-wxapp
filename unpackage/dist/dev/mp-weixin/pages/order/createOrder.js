(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/createOrder"],{

/***/ 186:
/*!**********************************************************************************!*\
  !*** D:/XM/edow微信小程序/edows-wxapp/main.js?{"page":"pages%2Forder%2FcreateOrder"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _createOrder = _interopRequireDefault(__webpack_require__(/*! ./pages/order/createOrder.vue */ 187));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_createOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 187:
/*!***************************************************************!*\
  !*** D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createOrder.vue?vue&type=template&id=354cd270& */ 188);
/* harmony import */ var _createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOrder.vue?vue&type=script&lang=js& */ 190);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createOrder.vue?vue&type=style&index=0&lang=scss& */ 192);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/createOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 188:
/*!**********************************************************************************************!*\
  !*** D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue?vue&type=template&id=354cd270& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createOrder.vue?vue&type=template&id=354cd270& */ 189);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_template_id_354cd270___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 189:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue?vue&type=template&id=354cd270& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = JSON.stringify(_vm.facdureData)
  var g1 = _vm.couponList.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 190:
/*!****************************************************************************************!*\
  !*** D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createOrder.vue?vue&type=script&lang=js& */ 191);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 191:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 45));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 47));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 28);
var _common = __webpack_require__(/*! @/util/common.js */ 56);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      showCoupon: false,
      arrProCode: [],
      arrProTypes: [],
      orderData: "",
      subFlag: true,
      total: 0,
      //总价格
      goodsPrice: 0,
      //商品价格
      goodsList: [],
      maskState: 0,
      //优惠券面板显示状态
      remarks: '',
      //备注
      payType: 1,
      //1微信 2支付宝
      couponList: [],
      addressData: {
        code: ''
      },
      facdureData: {
        code: '',
        payable: '不开发票'
      },
      couponData: {
        useCoupon: 0,
        couponTypeCode: "",
        couponCode: '',
        minPoint: 0,
        couponAmount: 0,
        payable: '不使用优惠券'
      },
      securityData: {
        shopBalance: 0,
        securityBalance: 0,
        couponAmount: 0,
        couponPrice: 0,
        payable: '不使用余额',
        useBalance: 0,
        balanceMany: 0,
        classN: 'blue',
        limitedBalance: 0,
        payabled: '不使用限时余额'
      },
      usesecurityBalance: false,
      //是否使用了样板余额
      usedisnshi: false,
      //是否使用了限时余额
      savecouponAmount: 0,
      savecouponPrice: 0,
      tresscaod: 0
    };
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(['hasLogin', 'userInfo'])),
  onLoad: function onLoad(option) {
    var _this = this;
    var returnUrl = getCurrentPages()[0].route;
    if (!this.hasLogin) {
      uni.reLaunch({
        url: '/pages/wxAuth/wxAuth?returnUrl=' + returnUrl
      });
    }
    var tmpOrderData = uni.getStorageSync('tmpOrderData') || '';
    // console.log('临时数据：', tmpOrderData)
    this.orderData = option.data;
    //商品数据
    this.goodsList = tmpOrderData;
    for (var i in tmpOrderData) {
      this.arrProCode.push(tmpOrderData[i].productList.productCode);
      this.arrProTypes.push(tmpOrderData[i].productList.productType);
    }
    var couponAmounts = 0;
    var couponPrice = 0;
    tmpOrderData.forEach(function (item) {
      if (item.productList.useSecurityBalance == 1) {
        _this.securityData.shopBalance = item.productList.useSecurityBalance;
        couponAmounts += item.productList.price * item.productNum;
      } else {
        couponPrice += item.productList.price * item.productNum;
      }
    });
    this.securityData.couponAmount = couponAmounts;
    this.securityData.couponPrice = couponPrice;
    this.savecouponAmount = couponAmounts;
    this.savecouponPrice = couponPrice;
    this.getCouponList();
    this.getShopBalance();
    if (option.addressData) {
      this.addressData = JSON.parse(option.addressData);
    } else {
      this.getAddrData();
    }
    this.calcTotal(); //计算总价
  },

  methods: {
    getShopBalance: function getShopBalance() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$axios(_this2.$baseUrl.getShopSecurityBalance);
              case 2:
                res = _context.sent;
                if (res.data.code == 200) {
                  _this2.securityData.securityBalance = Number(res.data.data.securityBalance);
                  _this2.securityData.limitedBalance = res.data.data.limitedBalance;
                }
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //得到优惠券列表
    getCouponList: function getCouponList() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var params, res, i;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  productCodes: _this3.arrProCode.join(','),
                  pageNo: 1,
                  pageSize: 999
                };
                _context2.next = 3;
                return _this3.$axios(_this3.$baseUrl.getCouponProductList, params);
              case 3:
                res = _context2.sent;
                if (res.data.code == 200) {
                  if (res.data.data.length) {
                    _this3.couponList = res.data.data;
                    for (i in _this3.couponList) {
                      _this3.couponList[i].startTime = _common.fn.formatTime(_this3.couponList[i].startTime, "Y-M-D");
                      _this3.couponList[i].endTime = _common.fn.formatTime(_this3.couponList[i].endTime, "Y-M-D");
                      if (_this3.couponList[i].couponTypeCode == 'YDMJQ') {
                        _this3.couponList[i].stateTip = "base-coupons-mj";
                      }
                      if (_this3.couponList[i].couponTypeCode == 'YDZKQ') {
                        _this3.couponList[i].stateTip = "base-coupons-zk";
                      }
                      if (_this3.couponList[i].couponTypeCode == 'YDDKQ') {
                        _this3.couponList[i].stateTip = "base-coupons";
                      }
                    }
                  }
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //使用余额
    showBalance: function showBalance() {
      var that = this;
      wx.showModal({
        cancelText: '取消',
        confirmText: '确定',
        content: '是否使用余额支付',
        success: function success(res) {
          if (res.confirm) {
            var totals = 0; //临时需支付
            if (that.securityData.couponAmount <= Number(that.securityData.securityBalance)) {
              // 商品合计小于样板余额
              if (that.securityData.balanceMany == 0) {
                if (that.securityData.couponAmount >= Number(that.couponData.couponAmount)) {
                  that.securityData.payable = "-￥" + (Number(that.goodsPrice) - Number(that.couponData.couponAmount));
                  totals = 0;
                  that.total = Number(totals.toFixed(2)) < 0 ? 0 : Number(totals.toFixed(2));
                  that.securityData.classN = "red";
                  that.securityData.useBalance = 1;
                  that.securityData.balanceMany = 1;
                  that.usesecurityBalance = true;
                } else {
                  that.securityData.payable = "-￥" + that.securityData.couponAmount;
                  totals = that.securityData.couponAmount - that.couponData.couponAmount < 0 ? 0 : that.total - that.securityData.couponAmount + that.securityData.couponPrice;
                  that.total = Number(totals.toFixed(2)) < 0 ? 0 : Number(totals.toFixed(2));
                  that.securityData.classN = "red";
                  that.securityData.useBalance = 1;
                  that.securityData.balanceMany = 1;
                  that.usesecurityBalance = true;
                }
              }
            } else if (that.securityData.securityBalance != '0.00' && that.goodsPrice != that.securityData.couponAmount) {
              // 样板余额有钱
              totals = that.goodsPrice - that.securityData.securityBalance - that.couponData.couponAmount;
              that.total = Number(totals.toFixed(2)) < 0 ? 0 : Number(totals.toFixed(2));
              that.securityData.payable = "-￥" + that.securityData.securityBalance;
              that.securityData.classN = "red";
              that.securityData.useBalance = 1;
              that.securityData.balanceMany = 1;
              that.usesecurityBalance = true;
            } else if (that.securityData.securityBalance != '0.00' && that.goodsPrice == that.securityData.couponAmount) {
              // 样板余额有钱
              var abc = that.securityData.couponAmount - Number(that.couponData.couponAmount) > Number(that.securityData.securityBalance) ? Number(that.securityData.securityBalance) : that.securityData.couponAmount - Number(that.couponData.couponAmount);
              totals = that.securityData.couponAmount - that.couponData.couponAmount - abc;
              that.total = Number(totals.toFixed(2));
              that.securityData.payable = "-￥" + abc;
              that.securityData.classN = "red";
              that.securityData.useBalance = 1;
              that.securityData.balanceMany = 1;
              that.usesecurityBalance = true;
            } else {
              // 样板余额没钱
              that.$api.msg('余额不足');
              that.usesecurityBalance = false;
            }
          } else if (res.cancel) {
            var _totals = 0;
            if (that.securityData.balanceMany == 1) {
              _totals = Number(that.securityData.couponAmount) + Number(that.securityData.couponPrice);
              that.total = Number(_totals.toFixed(2));
              that.securityData.payable = "不使用余额";
              that.securityData.useBalance = 0;
              that.securityData.balanceMany = 0;
              that.securityData.classN = "blue";
              that.usesecurityBalance = false;
            }
          }
        }
      });
    },
    //使用限时余额
    showBalancexianshi: function showBalancexianshi() {
      var that = this;
      wx.showModal({
        cancelText: '取消',
        confirmText: '确定',
        content: '是否使用限时余额支付',
        success: function success(res) {
          if (res.confirm) {
            var totals = 0; //临时需支付
            var _nota = that.securityData.couponAmount || that.securityData.couponPrice;
            if (_nota <= Number(that.securityData.limitedBalance)) {
              // 商品合计小于限时余额
              if (that.securityData.balanceMany == 0) {
                if (that.securityData.limitedBalance >= that.goodsPrice) {
                  totals = that.securityData.limitedBalance - (_nota - that.couponData.couponAmount - (_nota - Number(that.couponData.couponAmount))) < 0 ? 0 : _nota - that.couponData.couponAmount - (_nota - Number(that.couponData.couponAmount));
                  that.total = Number(totals.toFixed(2)) < 0 ? 0 : Number(totals.toFixed(2));
                  that.securityData.payabled = "-￥" + (Number(that.goodsPrice) - Number(that.couponData.couponAmount)).toFixed(2);
                  that.securityData.classN = "red";
                  that.securityData.useBalance = 2;
                  that.securityData.balanceMany = 1;
                  that.usedisnshi = true;
                } else {
                  console.log(999);
                  that.securityData.payabled = "-￥" + that.securityData.limitedBalance.toFixed(2);
                  totals = that.goodsPrice - that.securityData.limitedBalance < 0 ? 0 : that.goodsPrice - that.securityData.limitedBalance;
                  that.total = Number(totals.toFixed(2)) < 0 ? 0 : Number(totals.toFixed(2));
                  that.securityData.classN = "red";
                  that.securityData.useBalance = 2;
                  that.securityData.balanceMany = 1;
                  that.usedisnshi = true;
                }
              }
            } else if (that.securityData.limitedBalance != '0.00' && that.goodsPrice != _nota) {
              // 样板余额有钱
              console.log(777);
              totals = that.goodsPrice - that.securityData.limitedBalance - that.couponData.couponAmount;
              that.total = Number(totals.toFixed(2)) < 0 ? 0 : Number(totals.toFixed(2));
              that.securityData.payabled = "-￥" + Number(that.securityData.limitedBalance) - Number(that.couponData.couponAmount) || "-￥" + Number(that.securityData.limitedBalance);
              that.securityData.classN = "red";
              that.securityData.useBalance = 2;
              that.securityData.balanceMany = 1;
              that.usedisnshi = true;
            } else if (that.securityData.limitedBalance != '0.00' && that.goodsPrice == _nota) {
              console.log(666);
              // 样板余额有钱
              var abc = _nota - Number(that.couponData.couponAmount) > Number(that.securityData.limitedBalance) ? Number(that.securityData.limitedBalance) : _nota - Number(that.couponData.couponAmount);
              totals = _nota - Number(that.couponData.couponAmount) - abc;
              that.total = Number(totals.toFixed(2));
              that.securityData.payabled = "-￥" + abc;
              that.securityData.classN = "red";
              that.securityData.useBalance = 2;
              that.securityData.balanceMany = 1;
              that.usedisnshi = true;
            } else {
              // 样板余额没钱
              that.$api.msg('限时余额不足');
              that.usedisnshi = false;
            }
          } else if (res.cancel) {
            var _totals2 = 0;
            _totals2 = Number(nota);
            that.total = Number(_totals2.toFixed(2));
            that.securityData.payabled = "不使用限时余额";
            that.securityData.useBalance = 0;
            that.securityData.balanceMany = 0;
            that.securityData.classN = "blue";
            that.usedisnshi = false;
          }
        }
      });
    },
    //显示、隐藏可用优惠券列表
    showCouponList: function showCouponList() {
      this.showCoupon = !this.showCoupon;
      if (this.showCoupon) {
        if (this.securityData.balanceMany == 1) {
          this.total = Number(this.total) + Number(this.securityData.couponAmount);
          this.total = Number(this.total.toFixed(2));
          this.securityData.payable = "不使用余额";
          this.securityData.useBalance = 0;
          this.securityData.balanceMany = 0;
          this.securityData.classN = "blue";
          this.securityData.payabled = "不使用限时余额";
          this.usesecurityBalance = false; //是否使用了样板余额
          this.usedisnshi = false; //是否使用了限时余额
        }

        this.calcTotal();
      } else {
        if (this.couponData.couponAmount) {
          this.total = this.total - this.couponData.couponAmount;
          this.total = Number(this.total.toFixed(2));
        }
      }
    },
    //选择优惠券
    selCoupon: function selCoupon(e) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var selProTypeLists, couponPrice, arrProductTypes, subArr, i, j, params, res, _res, _res2;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!e.couponCode) {
                  _context3.next = 100;
                  break;
                }
                _this4.couponData.couponCode = e.couponCode;
                _this4.couponData.couponTypeCode = e.couponTypeCode;
                _this4.couponData.useCoupon = 1;
                _this4.calcTotal();
                _this4.securityData.couponAmount = _this4.savecouponAmount;
                _this4.securityData.couponPrice = _this4.savecouponPrice;
                //商品满减券
                if (!(e.couponTypeCode == "YDMJQ")) {
                  _context3.next = 38;
                  break;
                }
                if (!(e.coupon.useType == 0)) {
                  _context3.next = 12;
                  break;
                }
                if (_this4.total >= e.coupon.minPoint) {
                  _this4.couponData.payable = '( 满' + e.coupon.minPoint + '减' + e.denomination + ' 元券 )';
                  _this4.total = _this4.total - e.denomination;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('商品总价不满' + e.coupon.minPoint + '元，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 38;
                break;
              case 12:
                if (!(e.coupon.useType == 1)) {
                  _context3.next = 25;
                  break;
                }
                selProTypeLists = [];
                couponPrice = 0;
                arrProductTypes = e.coupon.productTypes.split(',');
                selProTypeLists = _common.fn.getArrEqual(_this4.arrProTypes, arrProductTypes);
                subArr = [];
                for (i in _this4.goodsList) {
                  for (j in selProTypeLists) {
                    if (_this4.goodsList[i].productList.productType == selProTypeLists[j]) {
                      subArr.push(i);
                    }
                  }
                }
                subArr = _common.fn.unique(subArr);
                for (i in subArr) {
                  couponPrice += _this4.goodsList[subArr[i]].productList.price * _this4.goodsList[subArr[i]].productNum;
                }
                couponPrice = Number(couponPrice.toFixed(2));
                if (couponPrice >= e.coupon.minPoint) {
                  _this4.couponData.payable = '指定分类商品( 满' + e.coupon.minPoint + '减' + e.denomination + ' 元券 )';
                  console.log(e.denomination);
                  _this4.total = _this4.total - e.denomination;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.tresscaod = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = e.denomination;
                  _this4.securityData.couponAmount = couponPrice - e.denomination;
                  _this4.securityData.couponPrice = couponPrice - e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('指定分类商品总价不满' + e.coupon.minPoint + '元，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 38;
                break;
              case 25:
                if (!(e.coupon.useType == 2)) {
                  _context3.next = 32;
                  break;
                }
                couponPrice = 0;
                for (i in _this4.goodsList) {
                  if (_this4.goodsList[i].productList.productCode == e.coupon.productCode) {
                    couponPrice += _this4.goodsList[i].productList.price * _this4.goodsList[i].productNum;
                  }
                }
                couponPrice = Number(couponPrice.toFixed(2));
                if (couponPrice >= e.coupon.minPoint) {
                  _this4.couponData.payable = '指定商品( 满' + e.coupon.minPoint + '减' + e.denomination + ' 元券 )';
                  _this4.total = _this4.total - e.denomination;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = e.denomination;
                  _this4.securityData.couponAmount = couponPrice - e.denomination;
                  _this4.securityData.couponPrice = couponPrice - e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('指定商品总价不满' + e.coupon.minPoint + '元，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 38;
                break;
              case 32:
                if (!(e.coupon.useType == 3)) {
                  _context3.next = 38;
                  break;
                }
                params = {
                  couponCode: e.couponCode,
                  productCodes: _this4.arrProCode.join(',')
                };
                _context3.next = 36;
                return _this4.$axios(_this4.$baseUrl.getCouponCheckUse, JSON.stringify(params));
              case 36:
                res = _context3.sent;
                if (res.data.code == 200) {
                  if (_this4.total >= e.coupon.minPoint) {
                    _this4.couponData.payable = '( 满' + e.coupon.minPoint + '减' + e.denomination + ' 元券 )';
                    _this4.total = _this4.total - e.denomination;
                    _this4.total = Number(_this4.total.toFixed(2));
                    _this4.couponData.couponAmount = e.denomination;
                    _this4.showCoupon = false;
                  } else {
                    _this4.$api.msg('商品总价不满' + e.coupon.minPoint + '元，请重新选择！');
                    _this4.couponData.useCoupon = 0;
                  }
                }
              case 38:
                if (!(e.couponTypeCode == "YDZKQ")) {
                  _context3.next = 69;
                  break;
                }
                if (!(e.coupon.useType == 0)) {
                  _context3.next = 43;
                  break;
                }
                if (_this4.total >= e.coupon.minPoint) {
                  _this4.couponData.payable = '全场商品( ' + e.denomination / 10 + ' 折优惠券 )';
                  _this4.total = _this4.goodsPrice * e.denomination / 100;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = _this4.goodsPrice - _this4.goodsPrice * e.denomination / 100;
                  _this4.couponData.couponAmount = Number(_this4.couponData.couponAmount.toFixed(2));
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('商品总价不符合折扣条件，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 69;
                break;
              case 43:
                if (!(e.coupon.useType == 1)) {
                  _context3.next = 56;
                  break;
                }
                selProTypeLists = [];
                couponPrice = 0;
                arrProductTypes = e.coupon.productTypes.split(',');
                selProTypeLists = _common.fn.getArrEqual(_this4.arrProTypes, arrProductTypes);
                subArr = [];
                for (i in _this4.goodsList) {
                  for (j in selProTypeLists) {
                    if (_this4.goodsList[i].productList.productType == selProTypeLists[j]) {
                      subArr.push(i);
                    }
                  }
                }
                subArr = _common.fn.unique(subArr);
                for (i in subArr) {
                  couponPrice += _this4.goodsList[subArr[i]].productList.price * _this4.goodsList[subArr[i]].productNum;
                }
                couponPrice = Number(couponPrice.toFixed(2));
                if (couponPrice >= e.coupon.minPoint) {
                  console.log("couponPrice：", e.coupon.minPoint);
                  _this4.couponData.payable = '指定分类商品( ' + e.denomination / 10 + ' 折优惠券 )';
                  _this4.total = _this4.total - couponPrice * ((100 - e.denomination) / 100);
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = couponPrice * ((100 - e.denomination) / 100);
                  _this4.couponData.couponAmount = Number(_this4.couponData.couponAmount.toFixed(2));
                  _this4.securityData.couponAmount = couponPrice - e.denomination;
                  _this4.securityData.couponPrice = couponPrice - e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('指定分类商品总价不符合折扣条件，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 69;
                break;
              case 56:
                if (!(e.coupon.useType == 2)) {
                  _context3.next = 63;
                  break;
                }
                couponPrice = 0;
                for (i in _this4.goodsList) {
                  if (_this4.goodsList[i].productList.productCode == e.coupon.productCode) {
                    couponPrice += _this4.goodsList[i].productList.price * _this4.goodsList[i].productNum;
                  }
                }
                couponPrice = Number(couponPrice.toFixed(2));
                if (couponPrice >= e.coupon.minPoint) {
                  _this4.couponData.payable = '指定商品( ' + e.denomination / 10 + ' 折优惠券 )';
                  _this4.total = _this4.total - couponPrice * ((100 - e.denomination) / 100);
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = couponPrice * ((100 - e.denomination) / 100);
                  _this4.couponData.couponAmount = Number(_this4.couponData.couponAmount.toFixed(2));
                  _this4.securityData.couponAmount = couponPrice - e.denomination;
                  _this4.securityData.couponPrice = couponPrice - e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('指定商品总价不符合折扣条件，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 69;
                break;
              case 63:
                if (!(e.coupon.useType == 3)) {
                  _context3.next = 69;
                  break;
                }
                params = {
                  couponCode: e.couponCode,
                  productCodes: _this4.arrProCode.join(',')
                };
                _context3.next = 67;
                return _this4.$axios(_this4.$baseUrl.getCouponCheckUse, JSON.stringify(params));
              case 67:
                _res = _context3.sent;
                if (_res.data.code == 200) {
                  if (_this4.total >= e.coupon.minPoint) {
                    _this4.couponData.payable = '全场商品( ' + e.denomination / 10 + ' 折优惠券 )';
                    _this4.total = _this4.total * e.denomination / 100;
                    _this4.total = Number(_this4.total.toFixed(2));
                    _this4.couponData.couponAmount = _this4.goodsPrice - _this4.goodsPrice * e.denomination / 100;
                    _this4.couponData.couponAmount = Number(_this4.couponData.couponAmount.toFixed(2));
                    _this4.securityData.couponPrice = couponPrice - e.denomination;
                    _this4.showCoupon = false;
                  } else {
                    _this4.$api.msg('商品总价不符合折扣条件，请重新选择！');
                    _this4.couponData.useCoupon = 0;
                  }
                }
              case 69:
                if (!(e.couponTypeCode == "YDDKQ")) {
                  _context3.next = 100;
                  break;
                }
                if (!(e.coupon.useType == 0)) {
                  _context3.next = 74;
                  break;
                }
                if (_this4.total >= e.denomination && _this4.total >= e.coupon.minPoint) {
                  _this4.couponData.payable = '( 抵扣' + e.denomination + ' 元券 )';
                  _this4.total = _this4.total - e.denomination;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('商品总价不符合抵扣条件，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 100;
                break;
              case 74:
                if (!(e.coupon.useType == 1)) {
                  _context3.next = 87;
                  break;
                }
                selProTypeLists = [];
                couponPrice = 0;
                arrProductTypes = e.coupon.productTypes.split(',');
                selProTypeLists = _common.fn.getArrEqual(_this4.arrProTypes, arrProductTypes);
                subArr = [];
                for (i in _this4.goodsList) {
                  for (j in selProTypeLists) {
                    if (_this4.goodsList[i].productList.productType == selProTypeLists[j]) {
                      subArr.push(i);
                    }
                  }
                }
                subArr = _common.fn.unique(subArr);
                for (i in subArr) {
                  couponPrice += _this4.goodsList[subArr[i]].productList.price * _this4.goodsList[subArr[i]].productNum;
                }
                couponPrice = Number(couponPrice.toFixed(2));
                if (couponPrice >= e.denomination && couponPrice >= e.coupon.minPoint) {
                  _this4.couponData.payable = '指定分类商品( 抵扣' + e.denomination + ' 元券 )';
                  _this4.total = _this4.total - e.denomination;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = e.denomination;
                  _this4.securityData.couponAmount = couponPrice - e.denomination;
                  _this4.securityData.couponPrice = couponPrice - e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('指定分类商品总价不符合抵扣条件，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 100;
                break;
              case 87:
                if (!(e.coupon.useType == 2)) {
                  _context3.next = 94;
                  break;
                }
                couponPrice = 0;
                for (i in _this4.goodsList) {
                  if (_this4.goodsList[i].productList.productCode == e.coupon.productCode) {
                    couponPrice += _this4.goodsList[i].productList.price * _this4.goodsList[i].productNum;
                  }
                }
                couponPrice = Number(couponPrice.toFixed(2));
                if (couponPrice >= e.denomination && couponPrice >= e.coupon.minPoint) {
                  _this4.couponData.payable = '指定商品( 抵扣' + e.denomination + ' 元券 )';
                  _this4.total = _this4.total - e.denomination;
                  _this4.total = Number(_this4.total.toFixed(2));
                  _this4.couponData.couponAmount = e.denomination;
                  _this4.securityData.couponAmount = couponPrice - e.denomination;
                  _this4.securityData.couponPrice = couponPrice - e.denomination;
                  _this4.showCoupon = false;
                } else {
                  _this4.$api.msg('指定商品总价不符合抵扣条件，请重新选择！');
                  _this4.couponData.useCoupon = 0;
                }
                _context3.next = 100;
                break;
              case 94:
                if (!(e.coupon.useType == 3)) {
                  _context3.next = 100;
                  break;
                }
                params = {
                  couponCode: e.couponCode,
                  productCodes: _this4.arrProCode.join(',')
                };
                _context3.next = 98;
                return _this4.$axios(_this4.$baseUrl.getCouponCheckUse, JSON.stringify(params));
              case 98:
                _res2 = _context3.sent;
                if (_res2.data.code == 200) {
                  if (_this4.total >= e.denomination && _this4.total >= e.coupon.minPoint) {
                    _this4.couponData.payable = '( 抵扣' + e.denomination + ' 元券 )';
                    _this4.total = _this4.total - e.denomination;
                    _this4.total = Number(_this4.total.toFixed(2));
                    _this4.couponData.couponAmount = e.denomination;
                    _this4.showCoupon = false;
                  } else {
                    _this4.$api.msg('商品总价不符合抵扣条件，请重新选择！');
                    _this4.couponData.useCoupon = 0;
                  }
                }
              case 100:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    //获取地址
    getAddrData: function getAddrData() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var params, res;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //uni.showNavigationBarLoading();
                params = {
                  pageNo: 1,
                  pageSize: 1
                };
                _context4.next = 3;
                return _this5.$axios(_this5.$baseUrl.getContactsList, JSON.stringify(params));
              case 3:
                res = _context4.sent;
                if (res.data.code == 200) {
                  if (res.data.data.length) {
                    _this5.addressData = res.data.data[0];
                  }
                }
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    //计算总价
    calcTotal: function calcTotal() {
      var list = this.goodsList;
      var total = 0;
      list.forEach(function (item) {
        total += item.productList.price * item.productNum;
      });
      this.total = Number(total.toFixed(2));
      this.goodsPrice = Number(total.toFixed(2));
    },
    //显示优惠券面板
    toggleMask: function toggleMask(type) {
      var _this6 = this;
      var timer = type === 'show' ? 10 : 300;
      var state = type === 'show' ? 1 : 0;
      this.maskState = 2;
      setTimeout(function () {
        _this6.maskState = state;
      }, timer);
    },
    //显示支付方式面板
    toggleMaskPay: function toggleMaskPay(type) {
      var _this7 = this;
      var timer = type === 'show' ? 10 : 300;
      var state = type === 'show' ? 1 : 0;
      this.maskState = 2;
      setTimeout(function () {
        _this7.maskState = state;
      }, timer);
    },
    numberChange: function numberChange(data) {
      this.number = data.number;
    },
    changePayType: function changePayType(type) {
      this.payType = type;
    },
    submit: function submit() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var list, productList, params, res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this8.addressData.code) {
                  _context5.next = 3;
                  break;
                }
                _this8.$api.msg('收货地址不能为空');
                return _context5.abrupt("return");
              case 3:
                list = _this8.goodsList;
                productList = [];
                list.forEach(function (item) {
                  productList.push({
                    attrValues: item.productList.attrValueVOList,
                    cartId: item.productList.id ? item.productList.id : "",
                    num: item.productNum,
                    productCode: item.productList.productCode,
                    productName: item.productList.productName
                  });
                });
                if (!_this8.subFlag) {
                  _context5.next = 13;
                  break;
                }
                //this.subFlag = false;
                params = {
                  "invoiceCode": _this8.facdureData.code,
                  "invoiceType": 0,
                  "isInvoice": _this8.facdureData.code ? 1 : 0,
                  "productList": productList,
                  "shopContactsCode": _this8.addressData.code,
                  "yf": 0,
                  "remarks": _this8.remarks,
                  "useCoupon": _this8.couponData.useCoupon,
                  "couponAmount": _this8.couponData.couponAmount,
                  "couponCode": _this8.couponData.couponCode,
                  "useSecurityBalance": _this8.securityData.useBalance
                };
                console.log("参数详情：", params);
                _context5.next = 11;
                return _this8.$axios(_this8.$baseUrl.submitOrder, params);
              case 11:
                res = _context5.sent;
                if (res.data.code == 200) {
                  //this.subFlag = true;
                  uni.removeStorage({
                    key: 'tmpOrderData'
                  });
                  uni.redirectTo({
                    url: '/pages/money/pay?data=' + JSON.stringify({
                      orderData: res.data.data
                    })
                  });
                }
              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    stopPrevent: function stopPrevent() {}
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 192:
/*!*************************************************************************************************!*\
  !*** D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createOrder.vue?vue&type=style&index=0&lang=scss& */ 193);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XM/edow微信小程序/edows-wxapp/pages/order/createOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[186,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/createOrder.js.map