<template>
    <div>
        <h2>Detail Guru {{ guru.nama }}</h2>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body centerize">

                        <div class="profile">
                            <span class="title mb-0">NUPTK</span>
                            <p class="desc mt-0">{{ guru.nuptk }}</p>
                        </div>
                        <div class="profile">
                            <span class="title mb-0">Nama Lengkap</span>
                            <p class="desc mt-0">{{ guru.nama }}</p>
                        </div>
                        <div class="profile">
                            <span class="title mb-0">Jenis Kelamin</span>
                            <p class="desc mt-0">
                                <span v-if="guru.jenis_kelamin == 'p'"><i class="fa fa-venus"></i> Perempuan</span>
                                <span v-else-if="guru.jenis_kelamin == 'l'"><i class="fa fa-mars"></i> Laki-laki</span>
                            </p>
                        </div>
                        <div class="profile">
                            <span class="title mb-0">TTL</span>
                            <p class="desc mt-0">{{ guru.tempat_lahir }}, {{ guru.tanggal_lahir | indoDate }}</p>
                        </div>
                        <div class="profile">
                            <span class="title mb-0">Alamat</span>
                            <p class="desc mt-0">{{ guru.alamat }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-content">
                            Data Bimbingan PKL
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Tahun Ajaran</th>
                                    <th>Jumlah Instansi</th>
                                    <th>Jumlah Siswa</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="p in guru.pkl" :key="p.id">
                                    <td>
                                        {{ p.tahun_ajaran }}
                                    </td>
                                    <td>{{ p.instansi.length }}</td>
                                    <td>{{ p.siswa.length }}</td>
                                    <td>{{ p.status.toUpperCase() }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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
        guru: {
            pkl: [],
        },
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function () {
            $.LoadingOverlay('show')

            axios
                .get("/api/admin/guru/" + this.$route.params.guru_id)
                .then((res) => {
                    this.guru = res.data;
                }).then(() => {
                    $.LoadingOverlay('hide')

                });
        },
    },
};
</script>


<style scoped>
.profile {
  margin-bottom: 6px;
}

.title {
  font-weight: bold;
}

.desc {
  margin-bottom: 0;
}

.centerize {
  text-align: left;
}
</style>