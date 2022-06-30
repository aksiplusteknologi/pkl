"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[381],{9496:(a,t,e)=>{e.d(t,{Z:()=>s});const s=function(a){return!!a&&moment(a).format("Do MMMM YYYY")}},2381:(a,t,e)=>{e.r(t),e.d(t,{default:()=>r});var s,l=e(9496);function i(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}const n={filters:{indoDate:function(a){return(0,l.Z)(a)}},data:function(){return{table:{rows:[],columns:[{label:"NUPTK",field:"nuptk"},{label:"Nama Guru",field:"nama",sortable:!0},{label:"JK",field:"jenis_kelamin",sortable:!0},{label:"TTL",field:"ttl",sortable:!1},{label:"",field:"aksi",sortable:!1}],totalRows:"",serverParams:{perPage:10,searchTerm:""},perPageDropDown:[10,25,50,100],selectedRows:[]}}},mounted:function(){this.initData()},methods:(s={initData:function(){var a=this,t=this.table.serverParams;axios.get("/api/admin/guru",{params:t}).then((function(t){a.table.rows=t.data.data,a.table.totalRows=t.data.total}))},liveSearch:function(){this.table.serverParams.manual_filter=1,this.initData()},resetFilter:function(){this.table.serverParams.manual_filter=0;var a=this.prodi.map((function(a){return a.id}));this.table.serverParams.prodi=a,this.table.serverParams.tingkat=["X","XI","XII"],this.table.serverParams.jenis_kelamin=["l","p"],this.table.serverParams.searchTerm="",this.initData()},fitlerToggle:function(){0==this.is_filtered?this.is_filtered=!0:this.is_filtered=!1},selectionChanged:function(a){this.selectionRow=a,this.table.selectedRows=[];for(var t=0;t<a.selectedRows.length;t++)this.table.selectedRows.push(a.selectedRows[t].pg_id)},onColumnSearch:function(a){this.updateParams(a),this.updateParams({page:1}),this.initData()},onPageChange:function(a){this.updateParams({page:a.currentPage}),this.initData()},onPerPageChange:function(a){this.updateParams({perPage:a.currentPerPage}),this.initData()},onSortChange:function(a){this.updateParams({sort_type:a[0].type,sort_field:a[0].field}),this.updateParams({page:1}),this.initData()},onColumnFilter:function(a){var t=a.columnFilters,e={page:1,col_ac_reg:t.ac_reg,col_ac_type:t.ac_type,col_ams:t.col_ams_text,col_customer:t.customer,col_main_type:t.main_type,col_status:t.status,col_level:t.lvl,col_gsmart_id:t.gsmart_id,col_report:t.report,col_flag:t.flag};this.updateParams(e),this.initData()}},i(s,"onColumnSearch",(function(a){this.updateParams(a),this.updateParams({page:1}),this.initData()})),i(s,"loadItems",(function(){this.handleDatatableChange(this.table.serverParams).then((function(){}))})),i(s,"updateParams",(function(a){this.table.serverParams=Object.assign({},this.table.serverParams,a)})),s)};const r=(0,e(1900).Z)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"float-start"},[e("h4",{staticClass:"card-title"},[a._v("Manajemen Data Guru / Pembimbing Sekolah")]),a._v(" "),e("p",{staticClass:"text-muted mb-0"},[a._v("Menampilkan "+a._s(a.table.rows.length)+" Data Pelaksanaan Praktek Kerja Industri")])]),a._v(" "),a._m(0)]),a._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("vue-good-table",{attrs:{"search-options":{enabled:!0,trigger:"enter",skipDiacritics:!0,placeholder:"Type and enter to search"},mode:"remote",totalRows:a.table.totalRows,"pagination-options":{enabled:!0,mode:"pages",perPage:a.table.serverParams.perPage,position:"bottom",perPageDropdown:a.table.perPageDropDown,dropdownAllowAll:!1,setCurrentPage:a.table.serverParams.page,nextLabel:"Next",prevLabel:"Prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"},columns:a.table.columns,rows:a.table.rows,styleClass:"vgt-table condensed pgTble"},on:{"on-selected-rows-change":a.selectionChanged,"on-search":a.onColumnSearch,"on-page-change":a.onPageChange,"on-sort-change":a.onSortChange,"on-column-filter":a.onColumnFilter,"on-per-page-change":a.onPerPageChange},scopedSlots:a._u([{key:"table-row",fn:function(t){return["nuptk"==t.column.field?e("span",[a._v("\n                            "+a._s(t.row.nuptk)+"\n                        ")]):a._e(),a._v(" "),"nama"==t.column.field?e("span",[e("router-link",{attrs:{to:{name:"admin.guru.detail",params:{guru_id:t.row.id}},"data-toggle":"tooltip","data-placement":"top",title:"Klik Untuk Melihat Detail "+t.row.nama}},[a._v(a._s(t.row.nama))])],1):a._e(),a._v(" "),"jenis_kelamin"==t.column.field?e("span",["l"==t.row.jenis_kelamin?e("span",{staticClass:"badge bg-success"},[e("i",{staticClass:"fa fa-mars"}),a._v(" L\n                            ")]):e("span",{staticClass:"badge bg-danger"},[e("i",{staticClass:"fa fa-venus"}),a._v(" P\n                            ")])]):a._e(),a._v(" "),"ttl"==t.column.field?e("span",[e("i",[a._v(a._s(t.row.tempat_lahir))]),a._v("\n                            , "+a._s(a._f("indoDate")(t.row.tanggal_lahir))+"\n                        ")]):a._e(),a._v(" "),"aksi"==t.column.field?e("span",[e("span",{staticClass:"pointer badge bg-warning",on:{click:function(e){return a.editGuru(t.row.id)}}},[e("i",{staticClass:"fa fa-wrench"}),a._v(" Edit\n                            ")]),a._v(" "),e("span",{staticClass:"pointer badge bg-danger pointer",on:{click:function(e){return a.deleteGuru(t.row.id)}}},[e("i",{staticClass:"fa fa-trash"}),a._v(" Hapus\n                            ")])]):a._e()]}}])},[e("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[e("span",{staticClass:"badge badge-danger pointer",on:{click:function(t){return a.massDeleteGuru()}}},[e("i",{staticClass:"fa fa-trash"}),a._v(" Hapus Masal Guru\n                        ")])])])],1)])]),a._v(" "),a._m(1)])}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"float-end"},[e("button",{staticClass:"btn btn-primary"},[e("i",{staticClass:"fa fa-plus"}),a._v(" Tambah Guru\n                ")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:"importExcelModal",tabindex:"-1",role:"dialog","aria-labelledby":"importExcelModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h6",{staticClass:"modal-title m-0",attrs:{id:"importExcelModalLabel"}},[a._v("Import Data Guru dengan File Excel")]),a._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3 text-center align-self-center"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://cdn0.iconfinder.com/data/icons/upload-download-files/128/file_xls_excel_document_upload-02-512.png",alt:""}})]),a._v(" "),e("div",{staticClass:"col-lg-9"},[e("h5",[a._v("Unduh Template")]),a._v(" "),e("span",{staticClass:"badge bg-soft-secondary"},[a._v("Terakhir Update")]),a._v(" "),e("small",{staticClass:"text-muted ml-2"},[a._v("20 Februari 2022")]),a._v(" "),e("br"),a._v(" "),e("p",{staticClass:"mt-3 mb-0"},[a._v("\n                                Gunakan Template terbaru sebelum melakukan Proses Import. Unduh\n                                "),e("a",{attrs:{href:"/template_xlsx/TEMPLATE_IMPORT_GURU.xlsx",target:"_blank"}},[a._v("disini")])])]),a._v(" "),e("div",{staticClass:"col-lg-12"},[e("hr"),a._v(" "),e("form",[e("input",{staticClass:"form-control",attrs:{type:"file"}}),a._v(" "),e("div",{staticClass:"d-grid gap-2 d-md-flex justify-content-md-end"},[e("button",{staticClass:"btn btn-primary position-relative mt-3"},[e("i",{staticClass:"fa fa-upload"}),a._v(" Unggah Sekarang\n                                    ")])])])])])])])])])}],!1,null,null,null).exports}}]);