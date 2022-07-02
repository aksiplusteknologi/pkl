"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[781],{9496:(a,t,s)=>{s.d(t,{Z:()=>i});const i=function(a){return!!a&&moment(a).format("Do MMMM YYYY")}},5335:(a,t,s)=>{s.d(t,{Z:()=>e});var i=s(3645),n=s.n(i)()((function(a){return a[1]}));n.push([a.id,".info-header[data-v-230178cb]{font-weight:700}",""]);const e=n},781:(a,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(9496);const n={data:function(){return{table:{columns:[{label:"NISN",field:"nisn"},{label:"Nama Siswa/i",field:"nama",sortable:!0},{label:"Kelas",field:"rombel.nama",sortable:!0},{label:"Instansi",field:"pkl.instansi.nama",sortable:!0},{label:"Status",field:"pkl.status",sortable:!0}]},instansi:{status_kepemilikan:"",jenis_perusahaan:""},edit_mode:!1,list_pkl:[],selected_pkl:{id:"",tahun_ajaran:""},siswa:[]}},filters:{indoDate:function(a){return(0,i.Z)(a)}},mounted:function(){this.initData(),this.getPklList()},methods:{initData:function(){var a=this;axios.get("/api/admin/instansi/"+this.$route.params.instansi_id).then((function(t){a.instansi=t.data})).catch((function(a){console.log(a)})).then((function(){console.log("Always executed")}))},getPKL:function(){var a=this;$.LoadingOverlay("show"),axios.get("/api/admin/instansi/get_siswa/"+this.selected_pkl.id+"/"+this.instansi.id).then((function(t){console.log(t.data),a.siswa=t.data})).catch((function(a){console.log(a)})).then((function(){$.LoadingOverlay("hide")}))},editJarak:function(){this.edit_mode=!0},saveJarak:function(){var a=this;swal({title:"Anda akan memperbaharui Jarak instansi ke sekolah",text:"Lanjutkan?",icon:"warning",buttons:!0,dangerMode:!1}).then((function(t){t&&($.LoadingOverlay("show"),axios.put("/api/admin/instansi/".concat(a.$route.params.instansi_id),a.instansi).then((function(t){t.data.status&&(a.initData(),a.edit_mode=!1,swal(t.data.message,"Berhasil","success"))})).then((function(){$.LoadingOverlay("hide")})))}))},getPklList:function(){var a=this;axios.get("/api/admin/pkl/create").then((function(t){a.list_pkl=t.data,a.list_pkl.length>0&&(a.selected_pkl=a.list_pkl[0],a.getPKL())}))},changePKL:function(){this.getPKL()}}};var e=s(3379),l=s.n(e),o=s(5335),r={insert:"head",singleton:!1};l()(o.Z,r);o.Z.locals;const c=(0,s(1900).Z)(n,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("div",{staticClass:"card"},[a._m(0),a._v(" "),s("div",{staticClass:"card-body"},[s("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/building.jpg",alt:"Logo "+a.instansi.nama}}),a._v(" "),s("div",{staticClass:"info-list mb-1 mt-1"},[s("p",{staticClass:"info-header mb-0"},[a._v("Nama Instansi")]),a._v(" "),s("span",{staticClass:"info-content mt-0"},[a._v(a._s(a.instansi.nama))])]),a._v(" "),s("div",{staticClass:"info-list mb-1 mt-1"},[s("p",{staticClass:"info-header mb-0"},[a._v("Alamat")]),a._v(" "),s("span",{staticClass:"info-content mt-0"},[a._v(a._s(a.instansi.alamat))])]),a._v(" "),s("div",{staticClass:"info-list mb-1 mt-1"},[s("p",{staticClass:"info-header mb-0"},[a._v("Status Kepemilikan")]),a._v(" "),s("span",{staticClass:"info-content mt-0"},[a._v(a._s(a.instansi.status_kepemilikan.toUpperCase()))])]),a._v(" "),s("div",{staticClass:"info-list mb-1 mt-1"},[s("p",{staticClass:"info-header mb-0"},[a._v("Jenis Perusahaan")]),a._v(" "),s("span",{staticClass:"info-content mt-0"},[a._v(a._s(a.instansi.jenis_perusahaan.toUpperCase()))])]),a._v(" "),s("div",{staticClass:"info-list mb-1 mt-1"},[s("p",{staticClass:"info-header mb-0"},[a._v("Titik Kordinat")]),a._v(" "),s("a",{staticClass:"info-content mt-0",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-map-marker"}),a._v(" "+a._s(a.instansi.latitude+", "+a.instansi.longitude))])]),a._v(" "),s("div",{staticClass:"info-list mb-1 mt-1"},[s("p",{staticClass:"info-header mb-0"},[a._v("Jarak (meter)")]),a._v(" "),a.edit_mode?s("div",[s("form",{on:{submit:function(t){return t.preventDefault(),a.saveJarak.apply(null,arguments)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.instansi.jarak,expression:"instansi.jarak"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:a.instansi.jarak},on:{input:function(t){t.target.composing||a.$set(a.instansi,"jarak",t.target.value)}}})]),a._v(" "),a._m(1)])]):s("a",{staticClass:"info-content mt-0",attrs:{href:"javascript:void(0)"},on:{click:a.editJarak}},[s("em",{staticClass:"fa fa-map-marker"}),a._v(" "+a._s(a.instansi.jarak?a.instansi.jarak+" meter":"Ganti Jarak"))])])])])]),a._v(" "),s("div",{staticClass:"col-9"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("h4",{staticClass:"card-title"},[a._v("\n                Tahun Ajaran "+a._s(a.selected_pkl.tahun_ajaran)+"\n              ")]),a._v(" "),s("span",{staticClass:"mt-0"},[a._v("Menampilkan "+a._s(a.siswa.length)+" data siswa/i")])]),a._v(" "),s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pkl"}},[a._v("Pilih Tahun Ajaran")]),a._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:a.selected_pkl,expression:"selected_pkl"}],staticClass:"form-control",attrs:{name:"pkl",id:"pkl"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.selected_pkl=t.target.multiple?s:s[0]},a.changePKL]}},a._l(a.list_pkl,(function(t){return s("option",{key:t.id,domProps:{value:t}},[a._v(a._s(t.tahun_ajaran)+" - "+a._s(t.status.toUpperCase()))])})),0)])])])]),a._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("vue-good-table",{attrs:{"search-options":{enabled:!0,trigger:"enter",skipDiacritics:!0,placeholder:"Type and enter to search"},totalRows:a.table.totalRows,"pagination-options":{enabled:!0,mode:"pages",position:"bottom",dropdownAllowAll:!1,nextLabel:"Next",prevLabel:"Prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"},columns:a.table.columns,rows:a.siswa,styleClass:"vgt-table condensed pgTble"},scopedSlots:a._u([{key:"table-row",fn:function(t){return["nisn"==t.column.field?s("span",[a._v("\n                        "+a._s(t.row.nisn)+"\n                    ")]):a._e(),a._v(" "),"nama"==t.column.field?s("span",[s("router-link",{attrs:{to:{name:"admin.siswa.detail",params:{siswa_id:t.row.id}},"data-toggle":"tooltip","data-placement":"top",title:"Klik Untuk Melihat Detail "+t.row.nama}},[a._v(a._s(t.row.nama))])],1):a._e(),a._v(" "),"pkl.instansi.nama"==t.column.field?s("span",[t.row.pkl?s("span",[s("router-link",{attrs:{to:{name:"admin.instansi.detail",params:{instansi_id:t.row.pkl.instansi.id}}}},[a._v("\n                                "+a._s(t.row.pkl.instansi.nama)+"\n                            ")])],1):s("span",{staticClass:"badge bg-warning"},[a._v("Belum PKL")])]):a._e(),a._v(" "),"pkl.status"==t.column.field?s("span",[s("span",{staticClass:"badge",class:{"bg-primary":"berlangsung"==t.row.pkl.status,"bg-danger":"batal"==t.row.pkl.status,"bg-success":"selesai"==t.row.pkl.status}},[a._v("\n                            "+a._s(t.row.pkl.pkl.status.toUpperCase())+"\n                        ")])]):a._e(),a._v(" "),"jenis_kelamin"==t.column.field?s("span",["l"==t.row.jenis_kelamin?s("span",{staticClass:"badge bg-success"},[s("i",{staticClass:"fa fa-mars"}),a._v(" L\n                        ")]):s("span",{staticClass:"badge bg-danger"},[s("i",{staticClass:"fa fa-venus"}),a._v(" P\n                        ")])]):a._e(),a._v(" "),"rombel.nama"==t.column.field?s("span",[a._v("\n                        "+a._s(t.row.rombel.nama)+"\n                    ")]):a._e(),a._v(" "),"ttl"==t.column.field?s("span",[s("i",[a._v(a._s(t.row.tempat_lahir))]),a._v("\n                        , "+a._s(a._f("indoDate")(t.row.tanggal_lahir))+"\n                    ")]):a._e(),a._v(" "),"aksi"==t.column.field?s("span",[s("span",{staticClass:"pointer badge bg-warning",on:{click:function(s){return a.editsiswa(t.row.id)}}},[s("i",{staticClass:"fa fa-wrench"}),a._v(" Edit\n                        ")]),a._v(" "),s("span",{staticClass:"pointer badge bg-danger pointer",on:{click:function(s){return a.deletesiswa(t.row.id)}}},[s("i",{staticClass:"fa fa-trash"}),a._v(" Hapus\n                        ")])]):a._e()]}}])},[s("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[s("span",{staticClass:"badge badge-danger pointer",on:{click:function(t){return a.massDeleteGuru()}}},[s("i",{staticClass:"fa fa-trash"}),a._v(" Hapus Masal Guru\n                    ")])])])],1)])])])])])}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[a._v("Detail Instansi")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-check"}),a._v(" Simpan")])}],!1,null,"230178cb",null).exports}}]);