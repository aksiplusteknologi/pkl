"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_instansi_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          label: "Nama Instansi / Perusahaan",
          field: "nama",
          sortable: true
        }, {
          label: "Status Kepemilikan",
          field: "status_kepemilikan",
          sortable: true
        }, {
          label: "Jenis Perusahaan",
          field: "jenis_perusahaan",
          sortable: true
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
      axios.get("/api/admin/instansi", {
        params: params
      }).then(function (res) {
        _this.table.rows = res.data.data;
        _this.table.totalRows = res.data.total;
      });
    },
    detailInstansi: function detailInstansi(instansi) {
      this.$router.push({
        name: 'admin.instansi.detail',
        params: {
          instansi_id: instansi.id
        }
      });
    },
    deleteInstansi: function deleteInstansi(instansi) {
      var _this2 = this;

      return false;
      swal({
        title: "Anda akan menghapus Data Instansi " + instansi.nama,
        text: "Lanjutkan?",
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(function (value) {
        if (value) {
          axios["delete"]("/api/admin/instansi/" + instansi.id).then(function (res) {
            toastr.success(res.data.message, "Berhasil!!");

            _this2.initData();
          });
        }
      });
    },
    // Datatable Methods
    liveSearch: function liveSearch() {
      this.table.serverParams.manual_filter = 1;
      this.initData();
    },
    resetFilter: function resetFilter() {
      this.table.serverParams.manual_filter = 0; // Set Prodi Options

      var data = this.prodi;
      var arr = data.map(function (a) {
        return a.id;
      });
      this.table.serverParams.prodi = arr; // End Set Prodi

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
        page: 1,
        col_ac_reg: col_filter.ac_reg,
        col_ac_type: col_filter.ac_type,
        col_ams: col_filter.col_ams_text,
        col_customer: col_filter.customer,
        col_main_type: col_filter.main_type,
        col_status: col_filter.status,
        col_level: col_filter.lvl,
        col_gsmart_id: col_filter.gsmart_id,
        col_report: col_filter.report,
        col_flag: col_filter.flag // new

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

/***/ "./resources/js/pages/admin/instansi/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/instansi/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5e4dcf55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5e4dcf55& */ "./resources/js/pages/admin/instansi/Index.vue?vue&type=template&id=5e4dcf55&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/instansi/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5e4dcf55___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5e4dcf55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/instansi/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/instansi/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/instansi/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/instansi/Index.vue?vue&type=template&id=5e4dcf55&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/instansi/Index.vue?vue&type=template&id=5e4dcf55& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5e4dcf55___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5e4dcf55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5e4dcf55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5e4dcf55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Index.vue?vue&type=template&id=5e4dcf55&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Index.vue?vue&type=template&id=5e4dcf55&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/instansi/Index.vue?vue&type=template&id=5e4dcf55& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Manajemen Instansi / Perusahaan"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted mb-0" }, [
            _vm._v(
              "Menampilkan " +
                _vm._s(_vm.table.rows.length) +
                " Data Instansi / Perusahaan"
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "float-end" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary",
                attrs: { to: { name: "admin.instansi.add" } },
              },
              [
                _c("i", { staticClass: "fa fa-plus" }),
                _vm._v(" Tambah Instansi\n                "),
              ]
            ),
          ],
          1
        ),
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
                      props.column.field == "aksi"
                        ? _c("span", [
                            _c(
                              "span",
                              {
                                staticClass: "pointer badge bg-primary",
                                on: {
                                  click: function ($event) {
                                    return _vm.detailInstansi(props.row)
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "fa fa-info" }),
                                _vm._v(" Detail\n                            "),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "pointer badge bg-warning",
                                on: {
                                  click: function ($event) {
                                    return _vm.editInstansi(props.row)
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
                                    return _vm.deleteInstansi(props.row)
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);