<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    <h4 class="card-title">Manajemen Data Guru / Pembimbing Sekolah</h4>
                    <p
                        class="text-muted mb-0"
                    >Menampilkan {{ table.rows.length }} Data Pelaksanaan Praktek Kerja Industri</p>
                </div>
                <div class="float-end">
                    <button
                        class="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#importExcelModal"
                    >
                        <i class="fa fa-table"></i> Import Excel
                    </button>
                    <button class="btn btn-primary">
                        <i class="fa fa-plus"></i> Tambah Guru
                    </button>
                </div>
            </div>
            <!--end card-header-->
            <div class="card-body">
                <div class="table-responsive">
                    <vue-good-table
                        :search-options="{
                            enabled: true,
                            trigger: 'enter',
                            skipDiacritics: true,
                            placeholder: 'Type and enter to search'
                        }"
                        mode="remote"
                        @on-selected-rows-change="selectionChanged"
                        @on-search="onColumnSearch"
                        @on-page-change="onPageChange"
                        @on-sort-change="onSortChange"
                        @on-column-filter="onColumnFilter"
                        @on-per-page-change="onPerPageChange"
                        :totalRows="table.totalRows"
                        :pagination-options="{
                            enabled: true,
                            mode: 'pages',
                            perPage: table.serverParams.perPage,
                            position: 'bottom',
                            perPageDropdown: table.perPageDropDown,
                            dropdownAllowAll: false,
                            setCurrentPage: table.serverParams.page,
                            nextLabel: 'Next',
                            prevLabel: 'Prev',
                            rowsPerPageLabel: 'Rows per page',
                            ofLabel: 'of',
                            pageLabel: 'page', // for 'pages' mode
                            allLabel: 'All'
                        }"
                        :columns="table.columns"
                        :rows="table.rows"
                        styleClass="vgt-table condensed pgTble"
                    >
                        <!-- <div slot="table-actions">
                        This will show up on the top right of the table. 
                        </div>-->

                        <div slot="selected-row-actions">
                            <span v-on:click="massDeleteGuru()" class="badge badge-danger pointer">
                                <i class="fa fa-trash"></i> Hapus Masal Guru
                            </span>
                        </div>

                        <template
                            slot="table-row"
                            style="background-color: #c5e1a5"
                            :doc_due_date="doc_due_date"
                            slot-scope="props"
                        >
                            <span v-if="props.column.field == 'nuptk'">
                                {{
                                props.row.nuptk
                                }}
                            </span>
                            <span v-if="props.column.field == 'nama'">
                                <router-link
                                    :to="{
                                        name: 'admin.guru.detail',
                                        params: { guru_id: props.row.id }
                                    }"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    :title="
                                        'Klik Untuk Melihat Detail ' +
                                            props.row.nama
                                    "
                                >{{ props.row.nama }}</router-link>
                            </span>
                            <span v-if="props.column.field == 'jenis_kelamin'">
                                <span
                                    class="badge bg-success"
                                    v-if="props.row.jenis_kelamin == 'l'"
                                >
                                    <i class="fa fa-mars"></i> L
                                </span>
                                <span class="badge bg-danger" v-else>
                                    <i class="fa fa-venus"></i> P
                                </span>
                            </span>
                            <span v-if="props.column.field == 'ttl'">
                                <i>{{ props.row.tempat_lahir }}</i>
                                , {{ props.row.tanggal_lahir | indoDate }}
                            </span>
                            <span v-if="props.column.field == 'aksi'">
                                <span
                                    @click="editGuru(props.row.id)"
                                    class="pointer badge bg-warning"
                                >
                                    <i class="fa fa-wrench"></i> Edit
                                </span>
                                <span
                                    v-on:click="deleteGuru(props.row.id)"
                                    class="pointer badge bg-danger pointer"
                                >
                                    <i class="fa fa-trash"></i> Hapus
                                </span>
                                <!-- {{ props.row.mapel_count }} -->
                            </span>
                        </template>
                    </vue-good-table>
                </div>
            </div>
            <!--end card-body-->
        </div>

        <!-- Start Import Modal -->
        <div
            class="modal fade"
            id="importExcelModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="importExcelModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6
                            class="modal-title m-0"
                            id="importExcelModalLabel"
                        >Import Data Guru dengan File Excel</h6>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <!--end modal-header-->
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-3 text-center align-self-center">
                                <img
                                    src="https://cdn0.iconfinder.com/data/icons/upload-download-files/128/file_xls_excel_document_upload-02-512.png"
                                    alt
                                    class="img-fluid"
                                />
                            </div>
                            <!--end col-->
                            <div class="col-lg-9">
                                <h5>Unduh Template</h5>
                                <span class="badge bg-soft-secondary">Terakhir Update</span>
                                <small class="text-muted ml-2">20 Februari 2022</small>
                                <br />
                                <p class="mt-3 mb-0">
                                    Gunakan Template terbaru sebelum melakukan Proses Import. Unduh
                                    <a
                                        href="/template_xlsx/TEMPLATE_IMPORT_GURU.xlsx"
                                        target="_blank"
                                    >disini</a>
                                </p>
                            </div>
                            <div class="col-lg-12">
                                <hr />
                                <form>
                                    <input type="file" class="form-control" />
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-primary position-relative mt-3">
                                            <i class="fa fa-upload"></i> Unggah Sekarang
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end modal-body-->
                </div>
                <!--end modal-content-->
            </div>
            <!--end modal-dialog-->
        </div>
        <!--end modal-->
        <!-- End Import Modal -->
    </div>
</template>

<script>
import indonesianDate from "@/library/date.js";

export default {
    filters: {
        indoDate: function (value) {
            return indonesianDate(value);
        },
    },

    data: () => ({
        table: {
            rows: [],
            columns: [
                {
                    label: "NUPTK",
                    field: "nuptk",
                },
                {
                    label: "Nama Guru",
                    field: "nama",
                    sortable: true,
                },
                {
                    label: "JK",
                    field: "jenis_kelamin",
                    sortable: true,
                },
                {
                    label: "TTL",
                    field: "ttl",
                    sortable: false,
                },
                {
                    label: "",
                    field: "aksi",
                    sortable: false,
                },
            ],
            totalRows: "",
            serverParams: {
                perPage: 10,
                searchTerm: "",
            },
            perPageDropDown: [10, 25, 50, 100],
            selectedRows: [],
        },
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function () {
            let params = this.table.serverParams;

            axios.get("/api/admin/guru", { params }).then((res) => {
                this.table.rows = res.data.data;
                this.table.totalRows = res.data.total;
            });
        },
        // Datatable Methods
        liveSearch: function () {
            this.table.serverParams.manual_filter = 1;
            this.initData();
        },

        resetFilter: function () {
            this.table.serverParams.manual_filter = 0;

            // Set Prodi Options
            let data = this.prodi;
            let arr = data.map((a) => a.id);

            this.table.serverParams.prodi = arr;

            // End Set Prodi
            (this.table.serverParams.tingkat = ["X", "XI", "XII"]),
                (this.table.serverParams.jenis_kelamin = ["l", "p"]),
                (this.table.serverParams.searchTerm = "");

            this.initData();
        },

        fitlerToggle: function () {
            if (this.is_filtered == false) {
                this.is_filtered = true;
            } else {
                this.is_filtered = false;
            }
        },
        // Start of Vue Good Table Handler
        selectionChanged(params) {
            this.selectionRow = params;

            this.table.selectedRows = [];

            for (let i = 0; i < params.selectedRows.length; i++) {
                this.table.selectedRows.push(params.selectedRows[i].pg_id);
            }
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.initData();
        },

        onPageChange(params) {
            this.updateParams({ page: params.currentPage });
            this.initData();
        },

        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.initData();
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field,
            });
            this.updateParams({ page: 1 });
            this.initData();
        },

        onColumnFilter(params) {
            let col_filter = params.columnFilters;
            // this.updateParams(params)
            let new_params = {
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
                col_flag: col_filter.flag,
                // new
            };
            this.updateParams(new_params);
            this.initData();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.initData();
        },

        // load items is what brings back the rows from server
        loadItems() {
            this.handleDatatableChange(this.table.serverParams).then(() => {
                // this.loading.isLoading = false
            });
        },

        updateParams(newProps) {
            this.table.serverParams = Object.assign(
                {},
                this.table.serverParams,
                newProps
            );
        },
        // End Datatable Methods
    },
};
</script>

<style>
</style>