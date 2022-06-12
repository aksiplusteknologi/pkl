"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[211],{9496:(a,e,t)=>{t.d(e,{Z:()=>s});const s=function(a){return!!a&&moment(a).format("Do MMMM YYYY")}},1211:(a,e,t)=>{t.r(e),t.d(e,{default:()=>l});var s,n=t(9496);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}const r={filters:{indoDate:function(a){return(0,n.Z)(a)}},data:function(){return{table:{rows:[],columns:[{label:"Nama Instansi / Perusahaan",field:"nama",sortable:!0},{label:"Status Kepemilikan",field:"status_kepemilikan",sortable:!0},{label:"Jenis Perusahaan",field:"jenis_perusahaan",sortable:!0},{label:"",field:"aksi",sortable:!1}],totalRows:"",serverParams:{perPage:10,searchTerm:""},perPageDropDown:[10,25,50,100],selectedRows:[]}}},mounted:function(){this.initData()},methods:(s={initData:function(){var a=this,e=this.table.serverParams;axios.get("/api/admin/instansi",{params:e}).then((function(e){a.table.rows=e.data.data,a.table.totalRows=e.data.total}))},deleteInstansi:function(a){var e=this;swal({title:"Anda akan menghapus Data Instansi "+a.nama,text:"Lanjutkan?",icon:"warning",buttons:!0,dangerMode:!1}).then((function(t){t&&axios.delete("/api/admin/instansi/"+a.id).then((function(a){toastr.success(a.data.message,"Berhasil!!"),e.initData()}))}))},liveSearch:function(){this.table.serverParams.manual_filter=1,this.initData()},resetFilter:function(){this.table.serverParams.manual_filter=0;var a=this.prodi.map((function(a){return a.id}));this.table.serverParams.prodi=a,this.table.serverParams.tingkat=["X","XI","XII"],this.table.serverParams.jenis_kelamin=["l","p"],this.table.serverParams.searchTerm="",this.initData()},fitlerToggle:function(){0==this.is_filtered?this.is_filtered=!0:this.is_filtered=!1},selectionChanged:function(a){this.selectionRow=a,this.table.selectedRows=[];for(var e=0;e<a.selectedRows.length;e++)this.table.selectedRows.push(a.selectedRows[e].pg_id)},onColumnSearch:function(a){this.updateParams(a),this.updateParams({page:1}),this.initData()},onPageChange:function(a){this.updateParams({page:a.currentPage}),this.initData()},onPerPageChange:function(a){this.updateParams({perPage:a.currentPerPage}),this.initData()},onSortChange:function(a){this.updateParams({sort_type:a[0].type,sort_field:a[0].field}),this.updateParams({page:1}),this.initData()},onColumnFilter:function(a){var e=a.columnFilters,t={page:1,col_ac_reg:e.ac_reg,col_ac_type:e.ac_type,col_ams:e.col_ams_text,col_customer:e.customer,col_main_type:e.main_type,col_status:e.status,col_level:e.lvl,col_gsmart_id:e.gsmart_id,col_report:e.report,col_flag:e.flag};this.updateParams(t),this.initData()}},i(s,"onColumnSearch",(function(a){this.updateParams(a),this.updateParams({page:1}),this.initData()})),i(s,"loadItems",(function(){this.handleDatatableChange(this.table.serverParams).then((function(){}))})),i(s,"updateParams",(function(a){this.table.serverParams=Object.assign({},this.table.serverParams,a)})),s)};const l=(0,t(1900).Z)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"float-start"},[t("h4",{staticClass:"card-title"},[a._v("Manajemen Instansi / Perusahaan")]),a._v(" "),t("p",{staticClass:"text-muted mb-0"},[a._v("Menampilkan "+a._s(a.table.rows.length)+" Data Instansi / Perusahaan")])]),a._v(" "),t("div",{staticClass:"float-end"},[t("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"admin.instansi.add"}}},[t("i",{staticClass:"fa fa-plus"}),a._v(" Tambah Instansi\n                ")])],1)]),a._v(" "),t("div",{staticClass:"card-body"},[t("div",{staticClass:"table-responsive"},[t("vue-good-table",{attrs:{"search-options":{enabled:!0,trigger:"enter",skipDiacritics:!0,placeholder:"Type and enter to search"},mode:"remote",totalRows:a.table.totalRows,"pagination-options":{enabled:!0,mode:"pages",perPage:a.table.serverParams.perPage,position:"bottom",perPageDropdown:a.table.perPageDropDown,dropdownAllowAll:!1,setCurrentPage:a.table.serverParams.page,nextLabel:"Next",prevLabel:"Prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"},columns:a.table.columns,rows:a.table.rows,styleClass:"vgt-table condensed pgTble"},on:{"on-selected-rows-change":a.selectionChanged,"on-search":a.onColumnSearch,"on-page-change":a.onPageChange,"on-sort-change":a.onSortChange,"on-column-filter":a.onColumnFilter,"on-per-page-change":a.onPerPageChange},scopedSlots:a._u([{key:"table-row",fn:function(e){return["aksi"==e.column.field?t("span",[t("span",{staticClass:"pointer badge bg-warning",on:{click:function(t){return a.editInstansi(e.row)}}},[t("i",{staticClass:"fa fa-wrench"}),a._v(" Edit\n                            ")]),a._v(" "),t("span",{staticClass:"pointer badge bg-danger pointer",on:{click:function(t){return a.deleteInstansi(e.row)}}},[t("i",{staticClass:"fa fa-trash"}),a._v(" Hapus\n                            ")])]):a._e()]}}])})],1)])])])}),[],!1,null,null,null).exports}}]);