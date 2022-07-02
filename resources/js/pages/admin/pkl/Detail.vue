<template>
    <div>

        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                            role="tab" aria-controls="home" aria-selected="true">Geografis ({{ pkl.instansi.length }} data)</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="table-tab" data-bs-toggle="tab" data-bs-target="#table" type="button"
                            role="tab" aria-controls="table" aria-selected="false">Data Peserta Prakerin ({{ pkl.siswa.length }} data)</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <br>
                        <Map :instansi="instansi" class="mt-2" style="height: 600px;" />
                    </div>
                    <div class="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab">
                        <br>
                        <div class="table-responsive mt-2">
                            <vue-good-table
                                :search-options="{
                                    enabled: true,
                                    trigger: 'enter',
                                    skipDiacritics: true,
                                    placeholder: 'Type and enter to search'
                                }"
                                :totalRows="table.totalRows"
                                :pagination-options="{
                                    enabled: true,
                                    mode: 'pages',
                                    position: 'bottom',
                                    dropdownAllowAll: false,
                                    nextLabel: 'Next',
                                    prevLabel: 'Prev',
                                    rowsPerPageLabel: 'Rows per page',
                                    ofLabel: 'of',
                                    pageLabel: 'page', // for 'pages' mode
                                    allLabel: 'All'
                                }"
                                :columns="table.columns"
                                :rows="pkl.siswa"
                                styleClass="vgt-table condensed pgTble"
                            >
                                <div slot="table-actions">
                                    <div v-if="isAdmin">
                                        <router-link :to="{ name: 'admin.pkl.add', params: { pkl_id: $route.params.pkl_id } }" class="btn btn-primary btn-sm"><i class="fa fa-user-plus"></i> Tambah Siswa</router-link>
                                        <a href="javascript:void(0)" @click="exportReport" class="btn btn-success btn-sm"><i class="fa fa-excel-o"></i> Unduh Laporan</a>
                                    </div>
                                </div>

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
                                    <span v-if="props.column.field == 'nis'">
                                        {{
                                        props.row.nis
                                        }}
                                    </span>
                                    <span v-if="props.column.field == 'nisn'">
                                        {{
                                        props.row.nisn
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
                                    <span v-if="props.column.field == 'pkl.instansi.nama'">
                                        <span v-if="props.row.pkl">
                                            <router-link :to="{ name: 'admin.instansi.detail', params: { instansi_id: props.row.pkl.instansi.id } }">
                                                {{ props.row.pkl.instansi.nama }}
                                            </router-link>
                                        </span>
                                        <span v-else class="badge bg-warning">Belum PKL</span>
                                    </span>
                                    <span v-if="props.column.field == 'pkl.status'">
                                        <span class="badge" v-bind:class="{
                                            'bg-primary': props.row.pkl.status == 'berlangsung',
                                            'bg-danger': props.row.pkl.status == 'batal',
                                            'bg-success': props.row.pkl.status == 'selesai',
                                        }">
                                            {{ props.row.pkl.pkl.status.toUpperCase() }}
                                        </span>
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
                                    
                                    <span v-if="props.column.field == 'rombel.nama'">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Map from "@/layouts/partials/dashboard/components/Map.vue";
import indonesianDate from "@/library/date.js";

export default {

    components: {
        Map,
    },

    computed: {
        isAdmin: function() {
            let user = JSON.parse(this.$store.getters.user);

            if(user.user_type == 'admin') {
                return true;

            } else {
                return false;
                
                }
        },
        instansi: function() {
            return this.pkl.instansi.map((el) => {
                return {
                    ...el,
                    latlang: [el.latitude, el.longitude]
                }
            });
        },
    },

    data: () => ({
        pkl: {
            instansi: [],
            siswa: [],
            guru: {
                nama: '',
                nuptk: '',
            }
        },
        table: {
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
                    field: "rombel.nama",
                    sortable: true,
                },
                {
                    label: "Instansi",
                    field: "pkl.instansi.nama",
                    sortable: true,
                },
                {
                    label: "Status",
                    field: "pkl.status",
                    sortable: true,
                },
            ],
        }
    }),
    filters: {
        indoDate: function (value) {
            return indonesianDate(value);
        },
    },


    mounted() {
        this.initData();
    },

    methods: {
        initData: function() {
            console.log("loading...")
            $.LoadingOverlay("show");
            axios.get(`/api/admin/pkl/${this.$route.params.pkl_id}`)
            .then( res => {
                this.pkl = res.data;
            })
            .catch( error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                console.error("Error => " + error);
            })
            .then(() => {
                $.LoadingOverlay("hide");
                console.log('always executed');
            })
        },

        exportReport: function(){
            console.log('export');
        },
    }
};
</script>

<style scoped>
.nav-link {
    font-weight: bold;
}
</style>