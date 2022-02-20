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
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tahun Ajaran</th>
                                <th>Jumlah Siswa/i</th>
                                <th>Jumlah Instansi/Perusahaan</th>
                                <th>Ketua Pelaksana</th>
                                <th>Status Pelaksanaan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(pkl, index) in table.rows" :key="pkl.id">
                                <td>{{ index+1 }}</td>
                                <td>
                                    <router-link
                                        :to="{ 
                                            name: 'admin.pkl.detail', 
                                            params: { pkl_id: pkl.id } 
                                        }"
                                        style="color: blue"
                                    >{{ pkl.tahun_ajaran }}</router-link>
                                </td>
                                <td>{{ pkl.siswa_count }}</td>
                                <td>{{ pkl.instansi_count }}</td>
                                <td>{{ pkl.ketua_pelaksana.nama }}</td>
                                <td>
                                    <span class="badge bg-primary" v-if="pkl.status == 'y'">
                                        <i class="fa fa-check"></i> Selesai
                                    </span>
                                    <span class="badge bg-warning" v-else>
                                        <i class="fa fa-spinner"></i> Sedang Berlangsung
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--end card-body-->
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        table: {
            rows: [
                {
                    id: 1,
                    tahun_ajaran: "2019/2020",
                    siswa_count: 462,
                    instansi_count: 32,
                    ketua_pelaksana: {
                        nama: "Jajang Suhendar, S.Pd",
                    },
                    status: "y",
                },
                {
                    id: 2,
                    tahun_ajaran: "2020/2021",
                    siswa_count: 344,
                    instansi_count: 29,
                    ketua_pelaksana: {
                        nama: "Jajang Suhendar, S.Pd",
                    },
                    status: "y",
                },
                {
                    id: 3,
                    tahun_ajaran: "2021/2022",
                    siswa_count: 298,
                    instansi_count: 17,
                    ketua_pelaksana: {
                        nama: "Jajang Suhendar, S.Pd",
                    },
                    status: "n",
                },
            ],
        },
    }),
};
</script>

<style>
</style>