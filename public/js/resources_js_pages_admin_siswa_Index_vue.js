"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_siswa_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/siswa/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/siswa/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _library_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/library/date.js */ "./resources/js/library/date.js");
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  filters: {
    indoDate: function indoDate(value) {
      return (0,_library_date_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    }
  },
  data: function data() {
    return {
      table: {
        rows: [],
        columns: [{
          label: "NISN",
          field: "nisn"
        }, {
          label: "Nama Siswa/i",
          field: "nama",
          sortable: true
        }, {
          label: "Kelas",
          field: "rombel",
          sortable: false
        }, {
          label: "Status PKL",
          field: "pkl",
          sortable: false
        }, {
          label: "JK",
          field: "jenis_kelamin",
          sortable: true
        }, {
          label: "TTL",
          field: "ttl",
          sortable: false
        }, {
          label: "",
          field: "aksi",
          sortable: false
        }],
        totalRows: "",
        serverParams: {
          perPage: 10,
          searchTerm: ""
        },
        perPageDropDown: [10, 25, 50, 100],
        selectedRows: []
      }
    };
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: (_methods = {
    initData: function initData() {
      var _this = this;

      var params = this.table.serverParams;
      axios.get("/api/admin/siswa", {
        params: params
      }).then(function (res) {
        _this.table.rows = res.data.data;
        _this.table.totalRows = res.data.total;
      });
    },
    // Datatable Methods
    liveSearch: function liveSearch() {
      this.table.serverParams.manual_filter = 1;
      this.initData();
    },
    resetFilter: function resetFilter() {
      this.table.serverParams.manual_filter = 0; // Set rombel Options

      var data = this.rombel;
      var arr = data.map(function (a) {
        return a.id;
      });
      this.table.serverParams.rombel = arr; // End Set rombel

      this.table.serverParams.tingkat = ["X", "XI", "XII"], this.table.serverParams.jenis_kelamin = ["l", "p"], this.table.serverParams.searchTerm = "";
      this.initData();
    },
    fitlerToggle: function fitlerToggle() {
      if (this.is_filtered == false) {
        this.is_filtered = true;
      } else {
        this.is_filtered = false;
      }
    },
    // Start of Vue Good Table Handler
    selectionChanged: function selectionChanged(params) {
      this.selectionRow = params;
      this.table.selectedRows = [];

      for (var i = 0; i < params.selectedRows.length; i++) {
        this.table.selectedRows.push(params.selectedRows[i].pg_id);
      }
    },
    onColumnSearch: function onColumnSearch(params) {
      this.updateParams(params);
      this.updateParams({
        page: 1
      });
      this.initData();
    },
    onPageChange: function onPageChange(params) {
      this.updateParams({
        page: params.currentPage
      });
      this.initData();
    },
    onPerPageChange: function onPerPageChange(params) {
      this.updateParams({
        perPage: params.currentPerPage
      });
      this.initData();
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort_type: params[0].type,
        sort_field: params[0].field
      });
      this.updateParams({
        page: 1
      });
      this.initData();
    },
    onColumnFilter: function onColumnFilter(params) {
      var col_filter = params.columnFilters; // this.updateParams(params)

      var new_params = {
        page: 1 // new

      };
      this.updateParams(new_params);
      this.initData();
    }
  }, _defineProperty(_methods, "onColumnSearch", function onColumnSearch(params) {
    this.updateParams(params);
    this.updateParams({
      page: 1
    });
    this.initData();
  }), _defineProperty(_methods, "loadItems", function loadItems() {
    this.handleDatatableChange(this.table.serverParams).then(function () {// this.loading.isLoading = false
    });
  }), _defineProperty(_methods, "updateParams", function updateParams(newProps) {
    this.table.serverParams = Object.assign({}, this.table.serverParams, newProps);
  }), _methods)
});

/***/ }),

/***/ "./resources/js/library/date.js":
/*!**************************************!*\
  !*** ./resources/js/library/date.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function indonesianDate(my_date) {
  // return my_date
  // return my_date[2] + my_date[1] + my_date[0];
  if (!my_date) {
    return false;
  }

  var str = my_date;
  var date = moment(str);
  return date.format('Do MMMM YYYY');
}

function getTimeZone() {
  var raw_data = localStorage.getItem('sekolah');
  var sekolah = JSON.parse(raw_data);
  return sekolah.timezone.toUpperCase();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indonesianDate);

/***/ }),

/***/ "./resources/js/pages/admin/siswa/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/siswa/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_ec46199e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=ec46199e& */ "./resources/js/pages/admin/siswa/Index.vue?vue&type=template&id=ec46199e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/siswa/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_ec46199e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_ec46199e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/siswa/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/siswa/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/siswa/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/siswa/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/siswa/Index.vue?vue&type=template&id=ec46199e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/siswa/Index.vue?vue&type=template&id=ec46199e& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_ec46199e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_ec46199e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_ec46199e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=ec46199e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/siswa/Index.vue?vue&type=template&id=ec46199e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/siswa/Index.vue?vue&type=template&id=ec46199e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/siswa/Index.vue?vue&type=template&id=ec46199e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "float-start" }, [
          _c("h4", { staticClass: "card-title" }, [
            _vm._v("Manajemen Data Siswa / Peserta PKL"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted mb-0" }, [
            _vm._v(
              "Menampilkan " +
                _vm._s(_vm.table.rows.length) +
                " Data Siswa / Peserta PKL"
            ),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          { staticClass: "table-responsive" },
          [
            _c("vue-good-table", {
              attrs: {
                "search-options": {
                  enabled: true,
                  trigger: "enter",
                  skipDiacritics: true,
                  placeholder: "Type and enter to search",
                },
                mode: "remote",
                totalRows: _vm.table.totalRows,
                "pagination-options": {
                  enabled: true,
                  mode: "pages",
                  perPage: _vm.table.serverParams.perPage,
                  position: "bottom",
                  perPageDropdown: _vm.table.perPageDropDown,
                  dropdownAllowAll: false,
                  setCurrentPage: _vm.table.serverParams.page,
                  nextLabel: "Next",
                  prevLabel: "Prev",
                  rowsPerPageLabel: "Rows per page",
                  ofLabel: "of",
                  pageLabel: "page", // for 'pages' mode
                  allLabel: "All",
                },
                columns: _vm.table.columns,
                rows: _vm.table.rows,
                styleClass: "vgt-table condensed pgTble",
              },
              on: {
                "on-selected-rows-change": _vm.selectionChanged,
                "on-search": _vm.onColumnSearch,
                "on-page-change": _vm.onPageChange,
                "on-sort-change": _vm.onSortChange,
                "on-column-filter": _vm.onColumnFilter,
                "on-per-page-change": _vm.onPerPageChange,
              },
              scopedSlots: _vm._u([
                {
                  key: "table-row",
                  fn: function (props) {
                    return [
                      props.column.field == "nisn"
                        ? _c("span", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(props.row.nisn) +
                                "\n                        "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      props.column.field == "nama"
                        ? _c(
                            "span",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "admin.siswa.detail",
                                      params: { siswa_id: props.row.id },
                                    },
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title:
                                      "Klik Untuk Melihat Detail " +
                                      props.row.nama,
                                  },
                                },
                                [_vm._v(_vm._s(props.row.nama))]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      props.column.field == "pkl"
                        ? _c("span", [
                            props.row.pkl
                              ? _c("span", [
                                  _c("strong", [
                                    _c("i", [
                                      _vm._v(
                                        _vm._s(props.row.pkl.instansi.nama)
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "badge",
                                      class: {
                                        "bg-primary":
                                          props.row.pkl.status == "berlangsung",
                                        "bg-danger":
                                          props.row.pkl.status == "batal",
                                        "bg-success":
                                          props.row.pkl.status == "selesai",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            props.row.pkl.pkl.status.toUpperCase()
                                          ) +
                                          "\n                                "
                                      ),
                                    ]
                                  ),
                                ])
                              : _c(
                                  "span",
                                  { staticClass: "badge bg-warning" },
                                  [_vm._v("Belum PKL")]
                                ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      props.column.field == "jenis_kelamin"
                        ? _c("span", [
                            props.row.jenis_kelamin == "l"
                              ? _c(
                                  "span",
                                  { staticClass: "badge bg-success" },
                                  [
                                    _c("i", { staticClass: "fa fa-mars" }),
                                    _vm._v(" L\n                            "),
                                  ]
                                )
                              : _c("span", { staticClass: "badge bg-danger" }, [
                                  _c("i", { staticClass: "fa fa-venus" }),
                                  _vm._v(" P\n                            "),
                                ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      props.column.field == "rombel"
                        ? _c("span", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(props.row.rombel.nama) +
                                "\n                        "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      props.column.field == "ttl"
                        ? _c("span", [
                            _c("i", [_vm._v(_vm._s(props.row.tempat_lahir))]),
                            _vm._v(
                              "\n                            , " +
                                _vm._s(
                                  _vm._f("indoDate")(props.row.tanggal_lahir)
                                ) +
                                "\n                        "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      props.column.field == "aksi"
                        ? _c("span", [
                            _c(
                              "span",
                              {
                                staticClass: "pointer badge bg-warning",
                                on: {
                                  click: function ($event) {
                                    return _vm.editsiswa(props.row.id)
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "fa fa-wrench" }),
                                _vm._v(" Edit\n                            "),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "pointer badge bg-danger pointer",
                                on: {
                                  click: function ($event) {
                                    return _vm.deletesiswa(props.row.id)
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "fa fa-trash" }),
                                _vm._v(" Hapus\n                            "),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ]
                  },
                },
              ]),
            }),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-end" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fa fa-plus" }),
        _vm._v(" Tambah Siswa\n                "),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);