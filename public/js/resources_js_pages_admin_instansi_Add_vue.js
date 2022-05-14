"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_instansi_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Add.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_partials_Required_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/partials/Required.vue */ "./resources/js/layouts/partials/Required.vue");
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
  components: {
    Required: _layouts_partials_Required_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      error_validation: {},
      form: {
        jenis_perusahaan: '',
        status_kepemilikan: '',
        nama: '',
        text: '',
        alamat: '',
        latitude: '',
        longitude: ''
      }
    };
  },
  methods: {
    saveData: function saveData() {
      var _this = this;

      swal({
        title: "Anda akan membuat Data Instansi",
        text: "Lanjutkan?",
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(function (value) {
        if (value) {
          axios.post("/api/admin/instansi", _this.form).then(function (res) {
            if (res.data.status) {
              toastr.success(res.data.message, "Berhasil!!");

              _this.$router.push({
                name: 'admin.instansi.index'
              });
            } else {
              _this.error_validation = res.data.data;
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/instansi/Add.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/instansi/Add.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_ccf44338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=ccf44338& */ "./resources/js/pages/admin/instansi/Add.vue?vue&type=template&id=ccf44338&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/instansi/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_ccf44338___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_ccf44338___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/instansi/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/instansi/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/instansi/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/instansi/Add.vue?vue&type=template&id=ccf44338&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/instansi/Add.vue?vue&type=template&id=ccf44338& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_ccf44338___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_ccf44338___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_ccf44338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=ccf44338& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Add.vue?vue&type=template&id=ccf44338&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Add.vue?vue&type=template&id=ccf44338&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Add.vue?vue&type=template&id=ccf44338& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "jenis_perusahaan" } },
                    [_vm._v("Jenis Perusahaan "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.jenis_perusahaan,
                          expression: "form.jenis_perusahaan",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "jenis_perusahaan",
                        id: "jenis_perusahaan",
                      },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "jenis_perusahaan",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("-- Pilih Jenis Perusahaan --"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "pt" } }, [_vm._v("PT")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "cv" } }, [_vm._v("CV")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "persero" } }, [
                        _vm._v("Persero"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "lainnya" } }, [
                        _vm._v("Lain nya"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "status_kepemilikan" } },
                    [_vm._v("Status Kepemilikian "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.status_kepemilikan,
                          expression: "form.status_kepemilikan",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "status_kepemilikan",
                        id: "status_kepemilikan",
                      },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "status_kepemilikan",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("-- Pilih Status Kepemilikan --"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "swasta" } }, [
                        _vm._v("swasta"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "negeri" } }, [
                        _vm._v("Negeri"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "nama" } },
                    [_vm._v("Nama Perusahaan "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nama,
                        expression: "form.nama",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nama",
                      placeholder: "Masukan Nama Perusahaan",
                    },
                    domProps: { value: _vm.form.nama },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "nama", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "alamat" } },
                    [_vm._v("Alamat "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.alamat,
                        expression: "form.alamat",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "alamat",
                      id: "alamat",
                      cols: "30",
                      rows: "4",
                      placeholder: "Masukan Alamat Lengkap Perusahaan",
                    },
                    domProps: { value: _vm.form.alamat },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "alamat", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "text" } }, [
                    _vm._v("Keterangan"),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.text,
                        expression: "form.text",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "text",
                      id: "text",
                      cols: "30",
                      rows: "4",
                      placeholder: "Masukan Deskripsi Lengkap Perusahaan",
                    },
                    domProps: { value: _vm.form.text },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "text", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "latitude" } },
                    [_vm._v("Latitude "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.latitude,
                        expression: "form.latitude",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "latitude",
                      placeholder: "Masukan Latitude",
                    },
                    domProps: { value: _vm.form.latitude },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "latitude", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "longitude" } },
                    [_vm._v("Longitude "), _c("Required")],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.longitude,
                        expression: "form.longitude",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "longitude",
                      placeholder: "Masukan Longitude",
                    },
                    domProps: { value: _vm.form.longitude },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "longitude", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "alert alert-warning" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("ul", { staticStyle: { "margin-left": "-15px" } }, [
            _c(
              "li",
              [
                _vm._v("Form dengan Tanda "),
                _c("Required"),
                _vm._v(" adalah wajib diisi / tidak boleh kosong"),
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Isi setiap Formulir dengan data yang benar dan dapat dipertanggung jawabkan"
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Data yang tersimpan akan terekam kedalam Database"),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Apabila sudah mengisi formulir tekan tombol Dibawah ini"),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-grid" }, [
          _c(
            "button",
            { staticClass: "btn btn-success", on: { click: _vm.saveData } },
            [
              _c("i", { staticClass: "fa fa-check" }),
              _vm._v(" Buat Instansi Baru"),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Form Pembuatan Instansi")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticStyle: { color: "orange" } }, [
      _c("i", { staticClass: "fa fa-exclamation-triangle" }),
      _vm._v(" Perhatian\n        "),
    ])
  },
]
render._withStripped = true



/***/ })

}]);