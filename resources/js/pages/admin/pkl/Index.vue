<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Pelaksanaan Praktek Kerja Lapangan</h4>
                <p class="text-muted mb-0">Menampilkan 3 Data Pelaksanaan Praktek Kerja Lapangan</p>
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
                            <span v-if="props.column.field == 'tahun_ajaran'">
                                <router-link
                                    :to="{ name: 'admin.pkl.detail', params: { pkl_id: props.row.id } }"
                                >
                                    {{ props.row.tahun_ajaran }}
                                    <span
                                        v-if="sekolah.tahun_ajaran == props.row.tahun_ajaran"
                                        class="badge bg-primary"
                                    >Aktif</span>
                                </router-link>
                            </span>
                            <span v-if="props.column.field == 'siswa_count'">{{ 12 }}</span>
                            <span v-if="props.column.field == 'instansi_count'">{{ 12 }}</span>
                            <span
                                v-if="props.column.field == 'ketua_pelaksana'"
                            >{{ props.row.guru.nama }}</span>
                            <span v-if="props.column.field == 'status'">
                                <span class="badge bg-success" v-if="props.row.status == 'selesai'">
                                    <i class="fa fa-check"></i> Selesai
                                </span>
                                <span
                                    class="badge bg-primary"
                                    v-if="props.row.status == 'berlangsung'"
                                >
                                    <i class="fa fa-spinner"></i> Berlangsung
                                </span>
                                <span class="badge bg-warning" v-if="props.row.status == 'belum'">
                                    <i class="fa fa-check"></i> Belum
                                </span>
                            </span>
                            <span v-if="props.column.field == 'aksi'">
                                <span class="pointer badge bg-dark" @click="detail(props.row)">
                                    <i class="fa fa-info"></i> Selengkapnya
                                </span>
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
export default {
    data: () => ({
        sekolah: {},

        table: {
            rows: [],
            columns: [
                {
                    label: "Tahun Ajaran",
                    field: "tahun_ajaran",
                    sortable: true,
                },
                {
                    label: "Jumlah Siswa/i",
                    field: "siswa_count",
                    sortable: false,
                },
                {
                    label: "Jumlah Instansi/Perusahaan",
                    field: "instansi_count",
                    sortable: false,
                },
                {
                    label: "Ketua Pelaksana",
                    field: "ketua_pelaksana",
                    sortable: false,
                },
                {
                    label: "Status Pelaksanaan",
                    field: "status",
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
        this.getSekolah();
    },

    methods: {
        getSekolah: function () {
            axios.get("/api/pub/sekolah").then((res) => {
                this.sekolah = res.data;
            });
        },

        initData: function () {
            let params = this.table.serverParams;

            axios.get("/api/admin/pkl", { params }).then((res) => {
                this.table.rows = res.data.data;
                this.table.totalRows = res.data.total;
            });
        },

        detail: function (data) {
            console.log("Data => ", data);
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