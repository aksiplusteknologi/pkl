<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    <h4 class="card-title">Manajemen Data Siswa / Peserta PKL</h4>
                    <p
                        class="text-muted mb-0"
                    >Menampilkan {{ table.rows.length }} Data Siswa / Peserta PKL</p>
                </div>
                <div class="float-end">
                    <button class="btn btn-primary">
                        <i class="fa fa-plus"></i> Tambah Siswa
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


                        <template
                            slot="table-row"
                            style="background-color: #c5e1a5"
                            :doc_due_date="doc_due_date"
                            slot-scope="props"
                        >
                            <span v-if="props.column.field == 'nisn'">
                                {{
                                props.row.nisn
                                }}
                            </span>
                            <span v-if="props.column.field == 'nis'">
                                {{
                                props.row.nis
                                }}
                            </span>
                            <span v-if="props.column.field == 'nama'">
                                <router-link
                                    :to="{
                                        name: 'admin.siswa.detail',
                                        params: { siswa_id: props.row.id }
                                    }"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    :title="
                                        'Klik Untuk Melihat Detail ' +
                                            props.row.nama
                                    "
                                >{{ props.row.nama }}</router-link>
                            </span>
                            <span v-if="props.column.field == 'pkl'">
                                <span v-if="props.row.pkl">
                                    <strong><i>{{ props.row.pkl.instansi.nama }}</i></strong>
                                    <br>
                                    <span class="badge" v-bind:class="{
                                        'bg-primary': props.row.pkl.status == 'berlangsung',
                                        'bg-danger': props.row.pkl.status == 'batal',
                                        'bg-success': props.row.pkl.status == 'selesai',
                                    }">
                                        {{ props.row.pkl.pkl.status.toUpperCase() }}
                                    </span>
                                </span>
                                <span v-else class="badge bg-warning">Belum PKL</span>
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
                            
                            <span v-if="props.column.field == 'rombel'">
                                {{ props.row.rombel.nama }}
                            </span>
                            <span v-if="props.column.field == 'ttl'">
                                <i>{{ props.row.tempat_lahir }}</i>
                                , {{ props.row.tanggal_lahir | indoDate }}
                            </span>
                            <span v-if="props.column.field == 'aksi'">
                                <span
                                    @click="editsiswa(props.row.id)"
                                    class="pointer badge bg-warning"
                                >
                                    <i class="fa fa-wrench"></i> Edit
                                </span>
                                <span
                                    v-on:click="deletesiswa(props.row.id)"
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
                    label: "NIS",
                    field: "nis",
                },
                {
                    label: "NISN",
                    field: "nisn",
                },
                {
                    label: "Nama Siswa/i",
                    field: "nama",
                    sortable: true,
                },
                {
                    label: "Kelas",
                    field: "rombel",
                    sortable: false,
                },
                {
                    label: "Status PKL",
                    field: "pkl",
                    sortable: false,
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

            axios.get("/api/admin/siswa", { params }).then((res) => {
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

            // Set rombel Options
            let data = this.rombel;
            let arr = data.map((a) => a.id);

            this.table.serverParams.rombel = arr;

            // End Set rombel
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