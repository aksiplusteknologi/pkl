"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_pkl_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/pkl/Detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/pkl/Detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      pkl: {
        instansi: [],
        siswa: [],
        guru: {
          nama: '',
          nuptk: ''
        }
      }
    };
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      axios.get("/api/admin/pkl/".concat(this.$route.params.pkl_id)).then(function (res) {
        _this.pkl = res.data;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }

        console.error("Error => " + error);
      }).then(function () {
        console.log('always executed');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/pkl/Detail.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/admin/pkl/Detail.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_0fdbd318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=0fdbd318& */ "./resources/js/pages/admin/pkl/Detail.vue?vue&type=template&id=0fdbd318&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/pkl/Detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_0fdbd318___WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_vue_vue_type_template_id_0fdbd318___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/pkl/Detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/pkl/Detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/admin/pkl/Detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/pkl/Detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/pkl/Detail.vue?vue&type=template&id=0fdbd318&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/admin/pkl/Detail.vue?vue&type=template&id=0fdbd318& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_0fdbd318___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_0fdbd318___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_0fdbd318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=template&id=0fdbd318& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/pkl/Detail.vue?vue&type=template&id=0fdbd318&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/pkl/Detail.vue?vue&type=template&id=0fdbd318&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/pkl/Detail.vue?vue&type=template&id=0fdbd318& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-4" },
        [
          _c("div", { staticClass: "card shadow mb-2" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "card-header" }, [
                _c(
                  "p",
                  {
                    staticClass: "mb-0",
                    staticStyle: { "font-weight": "bold" },
                  },
                  [
                    _vm._v(
                      "\n                            Perusahaan / Instansi (" +
                        _vm._s(_vm.pkl.instansi.length) +
                        " data)\n                        "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "mt-0" }, [
                  _vm._v("Pilih Salah Satu Perusahaan"),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._l(_vm.pkl.instansi, function (instansi) {
            return _c("div", { key: instansi.id }, [
              _c("div", { staticClass: "card shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h4", { staticClass: "mb-0" }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(instansi.nama) +
                        "\n                            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-0 mb-0" }, [
                    _vm._v(
                      "Status Kepemilikan : " +
                        _vm._s(instansi.status_kepemilikan.toUpperCase())
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-0 mb-0" }, [
                    _vm._v(
                      "Jenis Perusahaan : " +
                        _vm._s(instansi.status_kepemilikan.toUpperCase())
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-0 mb-0" }, [
                    _vm._v(
                      "Deskripsi : " +
                        _vm._s(instansi.deskripsi ? instansi.deskripsi : "")
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-0 mb-0" }, [
                    _vm._v(
                      "Alamat : " +
                        _vm._s(instansi.alamat ? instansi.alamat : "")
                    ),
                  ]),
                ]),
              ]),
            ])
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);