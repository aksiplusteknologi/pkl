<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    <h4 class="card-title">Manajemen Instansi / Perusahaan</h4>
                    <p
                        class="text-muted mb-0"
                    >Menampilkan {{ table.rows.length }} Data Instansi / Perusahaan</p>
                </div>
                <div class="float-end">
                    <router-link :to="{ name: 'admin.instansi.add' }" class="btn btn-primary">
                        <i class="fa fa-plus"></i> Tambah Instansi
                    </router-link>
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


                        <template
                            slot="table-row"
                            style="background-color: #c5e1a5"
                            :doc_due_date="doc_due_date"
                            slot-scope="props"
                        >
                            <span v-if="props.column.field == 'aksi'">
                                <span
                                    @click="detailInstansi(props.row)"
                                    class="pointer badge bg-primary"
                                >
                                    <i class="fa fa-info"></i> Detail
                                </span>
                                <span
                                    @click="editInstansi(props.row)"
                                    class="pointer badge bg-warning"
                                >
                                    <i class="fa fa-wrench"></i> Edit
                                </span>
                                <span
                                    v-on:click="deleteInstansi(props.row)"
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
                    label: "Nama Instansi / Perusahaan",
                    field: "nama",
                    sortable: true,
                },
                {
                    label: "Status Kepemilikan",
                    field: "status_kepemilikan",
                    sortable: true,
                },
                {
                    label: "Jenis Perusahaan",
                    field: "jenis_perusahaan",
                    sortable: true,
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

            axios.get("/api/admin/instansi", { params }).then((res) => {
                this.table.rows = res.data.data;
                this.table.totalRows = res.data.total;
            });
        },

        detailInstansi: function(instansi) {
            this.$router.push({ name: 'admin.instansi.detail', params: { instansi_id : instansi.id } });
        },

        deleteInstansi: function(instansi) {
            return false;
            swal({
                title: "Anda akan menghapus Data Instansi " + instansi.nama,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false
            }).then(value => {
                    if (value) {
                        axios
                        .delete("/api/admin/instansi/" + instansi.id)
                        .then(res => {
                                toastr.success(res.data.message, "Berhasil!!")
                                this.initData()
                        });
                }
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