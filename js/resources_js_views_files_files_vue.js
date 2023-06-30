(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_files_files_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      list: [],
      expanded: true,
      atRight: false,
      size: null,
      type: null
    };
  },
  computed: {},
  created: function created() {
    this.getList();
  },
  methods: {
    getList: function getList() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("files").then(function (res) {
        console.log(res);
        _this.list = res.data;
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.getList();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=template&id=61322530&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=template&id=61322530& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("b-tabs", {
    attrs: {
      position: _vm.atRight ? "is-right" : "",
      size: _vm.size,
      type: _vm.type,
      vertical: "",
      expanded: _vm.expanded,
      animated: true
    }
  }, [_c("b-tab-item", {
    attrs: {
      label: "Folders",
      icon: "google-photos"
    }
  }, [_c("div", {
    staticClass: "document success"
  }, [_c("div", {
    staticClass: "document-body"
  }, [_c("i", {
    staticClass: "fa fa-file-excel-o text-success"
  })]), _vm._v(" "), _c("div", {
    staticClass: "document-footer"
  }, [_c("span", {
    staticClass: "document-name"
  }, _vm._l(_vm.list, function (row) {
    return _c("tr", {
      key: row.file_id
    }, [_c("td", [_vm._v(_vm._s(row.file_id))])]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "document-description"
  }, [_vm._v(" 1.2 MB ")])])]), _vm._v(" "), _c("div", {
    staticClass: "document"
  }, [_c("div", {
    staticClass: "document-body"
  }, [_c("i", {
    staticClass: "fa fa-file-excel-o text-success"
  })]), _vm._v(" "), _c("div", {
    staticClass: "document-footer"
  }, [_c("span", {
    staticClass: "document-name"
  }, [_vm._v(" Excel database 2016 ")]), _vm._v(" "), _c("span", {
    staticClass: "document-description"
  }, [_vm._v(" 1.1 MB ")])])])]), _vm._v(" "), _c("b-tab-item", {
    attrs: {
      label: "Music",
      icon: "library-music"
    }
  }, [_vm._v("\r\n                What light is light, if Silvia be not seen? "), _c("br"), _vm._v("\r\n                What joy is joy, if Silvia be not by— "), _c("br"), _vm._v("\r\n                Unless it be to think that she is by "), _c("br"), _vm._v("\r\n                And feed upon the shadow of perfection? "), _c("br"), _vm._v("\r\n                Except I be by Silvia in the night, "), _c("br"), _vm._v("\r\n                There is no music in the nightingale.\r\n            ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody{\r\n    margin-top:20px;\r\n    background:#eee;\n}\n.type-document{\r\n    width:100%; \r\n    margin-bottom:20px;\n}\n.documents {\r\n    padding:20px;\n}\n.tabs {\r\n  margin-bottom: 20px;\n}\n.tabs .nav-tabs {\r\n  border-bottom: 1px solid #dce2e9;\n}\n.tabs .nav-tabs > li > a {\r\n  font-size: 15px;\r\n  padding: 10px 20px;\n}\n.tabs .nav-tabs > li.active > a {\r\n  border: 1px solid #dce2e9;\r\n  border-bottom-color: #fff;\n}\n.tabs-panel .panel-heading {\r\n  padding: 3px 10px 2px 10px;\n}\n.tabs-panel .panel-heading > .nav.nav-tabs {\r\n  padding: 0;\n}\n.tabs-panel .panel-heading:after {\r\n  padding-bottom: 3px;\n}\n.tabs-panel .panel-heading .panel-options {\r\n  margin-top: 10px;\n}\n.tabs-panel .panel-body {\r\n  padding: 20px 15px 15px 15px;\r\n  font-size: 14px;\n}\n.tabs-panel .nav-tabs {\r\n  border: none;\n}\n.tabs-panel .nav-tabs > li {\r\n  float: left;\r\n  margin-bottom: -1px;\n}\n.tabs-panel .nav-tabs > li > a {\r\n  margin-right: 2px;\r\n  line-height: 1.42857143;\r\n  font-weight: 600;\r\n  font-size: 15px;\r\n  color: #555;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px 4px 0 0;\n}\n.tabs-panel .nav-tabs > li > a > i {\r\n  font-size: 13px;\r\n  margin-right: 2px;\n}\n.tabs-panel .nav-tabs > li > a:hover {\r\n  border-color: #eee #eee #ddd;\r\n  background-color: rgba(0,0,0,0);\r\n  border: 1px solid rgba(0,0,0,0);\r\n  color: #000;\n}\n.tabs-panel .nav-tabs > li.active > a,\r\n.tabs-panel .nav-tabs > li.active > a:hover,\r\n.tabs-panel .nav-tabs > li.active > a:focus {\r\n  color: #4a4d56;\r\n  cursor: default;\r\n  background-color: inherit;\r\n  border: none;\r\n  border-bottom-color: transparent;\n}\n.tabs-panel .nav-tabs > li.active > a:after,\r\n.tabs-panel .nav-tabs > li.active > a:hover:after,\r\n.tabs-panel .nav-tabs > li.active > a:focus:after {\r\n  display: block;\r\n  position: absolute;\r\n  width: calc(100% - 4px);\r\n  left: 2px;\r\n  content: \"\";\r\n  padding-bottom: 12px;\r\n  border-bottom: 4px solid #314557;\n}\n.tabs-panel .tab-content {\r\n  background-color: #fff;\r\n  border: none;\n}\n.tabs-panel.panel-success .panel-heading:after,\r\n.tabs-panel.panel-info .panel-heading:after,\r\n.tabs-panel.panel-danger .panel-heading:after,\r\n.tabs-panel.panel-warning .panel-heading:after,\r\n.tabs-panel.panel-dark .panel-heading:after {\r\n  display: none;\n}\n.tabs-panel.panel-success-outline .nav-tabs > li.active > a:after,\r\n.tabs-panel.panel-success-outline .nav-tabs > li.active > a:hover:after,\r\n.tabs-panel.panel-success-outline .nav-tabs > li.active > a:focus:after {\r\n  border-bottom: 4px solid #0ec8a2;\n}\n.tabs-panel.panel-info-outline .nav-tabs > li.active > a:after,\r\n.tabs-panel.panel-info-outline .nav-tabs > li.active > a:hover:after,\r\n.tabs-panel.panel-info-outline .nav-tabs > li.active > a:focus:after {\r\n  border-bottom: 4px solid #2da9e9;\n}\n.tabs-panel.panel-warning-outline .nav-tabs > li.active > a:after,\r\n.tabs-panel.panel-warning-outline .nav-tabs > li.active > a:hover:after,\r\n.tabs-panel.panel-warning-outline .nav-tabs > li.active > a:focus:after {\r\n  border-bottom: 4px solid #ff9e2a;\n}\n.tabs-panel.panel-danger-outline .nav-tabs > li.active > a:after,\r\n.tabs-panel.panel-danger-outline .nav-tabs > li.active > a:hover:after,\r\n.tabs-panel.panel-danger-outline .nav-tabs > li.active > a:focus:after {\r\n  border-bottom: 4px solid #f95858;\n}\n.tabs-panel.panel-success .panel-heading .nav.nav-tabs > li > a,\r\n.tabs-panel.panel-info .panel-heading .nav.nav-tabs > li > a,\r\n.tabs-panel.panel-danger .panel-heading .nav.nav-tabs > li > a,\r\n.tabs-panel.panel-warning .panel-heading .nav.nav-tabs > li > a,\r\n.tabs-panel.panel-dark .panel-heading .nav.nav-tabs > li > a {\r\n  color: #fff;\n}\n.tabs-panel.panel-success .panel-heading li.active > a:after,\r\n.tabs-panel.panel-success .panel-heading li.active > a:hover:after,\r\n.tabs-panel.panel-success .panel-heading li.active > a:focus:after {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #0ec8a2;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  margin-top: 4px;\r\n  left:40%;\n}\n.tabs-panel.panel-info .panel-heading li.active > a:after,\r\n.tabs-panel.panel-info .panel-heading li.active > a:hover:after,\r\n.tabs-panel.panel-info .panel-heading li.active > a:focus:after {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #2da9e9;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  margin-top: 4px;\r\n  left:40%;\n}\n.tabs-panel.panel-warning .panel-heading li.active > a:after,\r\n.tabs-panel.panel-warning .panel-heading li.active > a:hover:after,\r\n.tabs-panel.panel-warning .panel-heading li.active > a:focus:after {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #ff9e2a;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  margin-top: 4px;\r\n  left:40%;\n}\n.tabs-panel.panel-danger .panel-heading li.active > a:after,\r\n.tabs-panel.panel-danger .panel-heading li.active > a:hover:after,\r\n.tabs-panel.panel-danger .panel-heading li.active > a:focus:after {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #f95858;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  margin-top: 4px;\r\n  left:40%;\n}\n.tabs-panel.panel-dark .panel-heading li.active > a:after,\r\n.tabs-panel.panel-dark .panel-heading li.active > a:hover:after,\r\n.tabs-panel.panel-dark .panel-heading li.active > a:focus:after {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #314557;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  margin-top: 4px;\r\n  left:40%;\n}\n.nav-tabs {\r\n  border-bottom: 1px solid #98a3af;\n}\n.nav-tabs > li {\r\n  float: left;\r\n  margin-bottom: -1px;\r\n  opacity: 0.5;\n}\n.nav-tabs > li > a {\r\n  margin-right: 2px;\r\n  line-height: 1.42857143;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  color: #555;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\r\n  border-color: #eee #eee #ddd;\r\n  background-color: rgba(0,0,0,0);\r\n  border: 1px solid rgba(0,0,0,0);\r\n  color: #000;\n}\n.nav-tabs > li.active {\r\n  opacity: 1;\n}\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:hover,\r\n.nav-tabs > li.active > a:focus {\r\n  color: #555;\r\n  cursor: default;\r\n  background-color: #fff;\r\n  border: 1px solid #dce2e9;\r\n  border-bottom-color: transparent;\n}\n.tabs-panel .nav-tabs > li.active > a,\r\n.tabs-panel .nav-tabs > li.active > a:hover,\r\n.tabs-panel .nav-tabs > li.active > a:focus {\r\n  margin-top: -1px;\r\n  border: 1px solid rgba(0,0,0,0) !important;\r\n  border-bottom: none;\n}\n.tab-content {\r\n  background-color: #fff;\r\n  border: 1px solid #dce2e9;\r\n  border-radius: 4px;\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n  border-top: none;\n}\n.tab-content > .tab-pane {\r\n  display: none;\n}\n.tab-content > .active {\r\n  display: block;\n}\n.nav-tabs.nav-justified {\r\n  width: 100%;\r\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\r\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\r\n  margin-bottom: 5px;\r\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\n}\n.nav-tabs.nav-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\r\n.nav-tabs.nav-justified > .active > a:hover,\r\n.nav-tabs.nav-justified > .active > a:focus {\r\n  border: 1px solid #dce2e9;\n}\n@media (min-width: 768px) {\n.nav-tabs.nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\n}\n.nav-tabs.nav-justified > li > a {\r\n    margin-bottom: 0;\r\n    border-bottom: 1px solid #98a3af;\r\n    border-radius: 4px 4px 0 0;\n}\n.nav-tabs.nav-justified > .active > a,\r\n  .nav-tabs.nav-justified > .active > a:hover,\r\n  .nav-tabs.nav-justified > .active > a:focus {\r\n    border-bottom-color: #fff;\n}\n}\n@media (max-width: 767px) {\n.nav-justified > li > a {\r\n    border: 1px solid #98a3af;\n}\n.nav-justified + .tab-content {\r\n    border: 1px solid #dce2e9;\n}\n}\n.document {\r\n  float: left;\r\n  width: calc(33% - 20px);\r\n  max-width: 240px;\r\n  margin: 0px 10px 20px;\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  border: 1px solid #dce2e9;\n}\n.document .document-body {\r\n  height: 130px;\r\n  text-align: center;\r\n  border-radius: 3px 3px 0 0;\r\n  background-color: #fdfdfe;\n}\n.document .document-body i {\r\n  font-size: 45px;\r\n  line-height: 120px;\n}\n.document .document-body img {\r\n  width: 100%;\r\n  height: 100%;\n}\n.document .document-footer {\r\n  border-top: 1px solid #ebf1f5;\r\n  height: 46px;;\r\n  padding: 5px 12px;\r\n  border-radius: 0 0 2px 2px;\n}\n.document .document-footer .document-name {\r\n  display: block;\r\n  margin-bottom: 0;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  width: 100%;\r\n  line-height: normal;\r\n  overflow-x: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\n}\n.document .document-footer .document-description {\r\n  display: block;\r\n  margin-top: -1px;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  color: #8998a6;\r\n  width: 100%;\r\n  line-height: normal;\r\n  overflow-x: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\n}\n.document.info .document-footer >*, .document.success .document-footer >*,\r\n.document.danger .document-footer >*, .document.warning .document-footer >*,\r\n.document.dark .document-footer >* {\r\n  color: #fff;\n}\n.document.info .document-footer {\r\n  background-color: #2da9e9;\n}\n.document.success .document-footer {\r\n  background-color: #0ec8a2;\n}\n.document.warning .document-footer {\r\n  background-color: #ff9e2a;\n}\n.document.danger .document-footer {\r\n  background-color: #f95858;\n}\n.document.dark .document-footer {\r\n  background-color: #314557;\n}\n.folders {\r\n  width: 100%;\n}\n.folders li {\r\n  font-size: 14px;\r\n  padding: 3px 4px 3px 12px;\n}\n.folders li a {\r\n  text-decoration: none;\r\n  color: #4a4d56;\n}\n.folders li a i {\r\n  color: #5e6168;\r\n  font-size: 16px;\r\n  margin-right: 5px;\n}\n@media screen and (max-width: 600px) {\n.document  {\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    max-width: none;\n}\n}\r\n\r\n\r\n/* Drag and drop */\n.dropzone {\r\n  border: 2px dashed #cfdbe2;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 5%;\n}\n.dropzone-image {\r\n  display: block;\r\n  margin: 0 auto 5%;\r\n  width: 100%;\r\n  max-width: 190px;\r\n  height: auto;\r\n  opacity: 0.75;\n}\n.dropzone a.btn {\r\n  padding: 9px 28px 8px;\n}\n.dropzone-thin {\r\n  width: 100%;\n}\n.dropzone-thin .dropzone-image {\r\n  min-width: 35px;\r\n  width: 10%;\r\n  max-width: 80px;\r\n  display: inline-block;\r\n  margin: 0 10px 0 0;\n}\n.dropzone-thin .dz-message > span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  font-size: 15px;\r\n  font-weight: 600;\n}\n.dz-preview {\r\n  padding: 10px 0;\r\n  border-bottom: 1px solid #edf2f4;\n}\n.dz-preview:nth-child(2) {\r\n  margin-top: 30px;\n}\n.dz-preview:last-child {\r\n  border-bottom: none;\n}\n.dz-image {\r\n  display: inline-block;\n}\n.dz-image img {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 5px;\n}\n.dz-details {\r\n  display: inline-block;\r\n  width: calc(100% - 60px);\r\n  text-align: left;\r\n  vertical-align: middle;\r\n  padding-left: 20px;\n}\n.dz-error-message {\r\n  display: none;\n}\n.dz-success-mark, .dz-error-mark {\r\n  display: none;\n}\n.dropzone:hover {\r\n  background-color: #fbfdff;\r\n  cursor: pointer;\n}\n.dropzone:hover .dropzone-image {\r\n  opacity: 1;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_style_index_0_id_61322530_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./files.vue?vue&type=style&index=0&id=61322530&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_style_index_0_id_61322530_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_style_index_0_id_61322530_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/files/files.vue":
/*!********************************************!*\
  !*** ./resources/js/views/files/files.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _files_vue_vue_type_template_id_61322530___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files.vue?vue&type=template&id=61322530& */ "./resources/js/views/files/files.vue?vue&type=template&id=61322530&");
/* harmony import */ var _files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files.vue?vue&type=script&lang=js& */ "./resources/js/views/files/files.vue?vue&type=script&lang=js&");
/* harmony import */ var _files_vue_vue_type_style_index_0_id_61322530_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files.vue?vue&type=style&index=0&id=61322530&lang=css& */ "./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _files_vue_vue_type_custom_index_0_blockType_link_href_https_3A_2F_2Fmaxcdn_bootstrapcdn_com_2Ffont_awesome_2F4_3_0_2Fcss_2Ffont_awesome_min_css_rel_stylesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files.vue?vue&type=custom&index=0&blockType=link&href=https%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Ffont-awesome%2F4.3.0%2Fcss%2Ffont-awesome.min.css&rel=stylesheet */ "./resources/js/views/files/files.vue?vue&type=custom&index=0&blockType=link&href=https%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Ffont-awesome%2F4.3.0%2Fcss%2Ffont-awesome.min.css&rel=stylesheet");
/* harmony import */ var _files_vue_vue_type_custom_index_0_blockType_link_href_https_3A_2F_2Fmaxcdn_bootstrapcdn_com_2Ffont_awesome_2F4_3_0_2Fcss_2Ffont_awesome_min_css_rel_stylesheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_files_vue_vue_type_custom_index_0_blockType_link_href_https_3A_2F_2Fmaxcdn_bootstrapcdn_com_2Ffont_awesome_2F4_3_0_2Fcss_2Ffont_awesome_min_css_rel_stylesheet__WEBPACK_IMPORTED_MODULE_4__);



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _files_vue_vue_type_template_id_61322530___WEBPACK_IMPORTED_MODULE_0__.render,
  _files_vue_vue_type_template_id_61322530___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */
;
if (typeof (_files_vue_vue_type_custom_index_0_blockType_link_href_https_3A_2F_2Fmaxcdn_bootstrapcdn_com_2Ffont_awesome_2F4_3_0_2Fcss_2Ffont_awesome_min_css_rel_stylesheet__WEBPACK_IMPORTED_MODULE_4___default()) === 'function') _files_vue_vue_type_custom_index_0_blockType_link_href_https_3A_2F_2Fmaxcdn_bootstrapcdn_com_2Ffont_awesome_2F4_3_0_2Fcss_2Ffont_awesome_min_css_rel_stylesheet__WEBPACK_IMPORTED_MODULE_4___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/files/files.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/files/files.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/files/files.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./files.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/files/files.vue?vue&type=template&id=61322530&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/files/files.vue?vue&type=template&id=61322530& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_template_id_61322530___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_template_id_61322530___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_template_id_61322530___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./files.vue?vue&type=template&id=61322530& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=template&id=61322530&");


/***/ }),

/***/ "./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_type_style_index_0_id_61322530_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./files.vue?vue&type=style&index=0&id=61322530&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/files/files.vue?vue&type=style&index=0&id=61322530&lang=css&");


/***/ }),

/***/ "./resources/js/views/files/files.vue?vue&type=custom&index=0&blockType=link&href=https%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Ffont-awesome%2F4.3.0%2Fcss%2Ffont-awesome.min.css&rel=stylesheet":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/views/files/files.vue?vue&type=custom&index=0&blockType=link&href=https%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Ffont-awesome%2F4.3.0%2Fcss%2Ffont-awesome.min.css&rel=stylesheet ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ })

}]);