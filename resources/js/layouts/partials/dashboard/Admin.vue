<template>
    <div>
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="media">
                            <span class="me-3 thumb-md align-self-center rounded">
                                <i class="fa fa-2x fa-building" style="color: #388e3c"></i>
                            </span>
                            <div class="media-body align-self-center">
                                <div class="coin-bal">
                                    <h4 class="mt-0 mb-1 font-22 fw-bold">{{ dashboard.instansi_count }}</h4>
                                    <p class="text-muted mb-0 fw-semibold">
                                        Total Instansi
                                        <span class="text-success">
                                            2.5%
                                            <i class="mdi mdi-arrow-up"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <!--end media body-->
                        </div>
                        <!--end media-->
                    </div>
                    <!--end card-body-->
                </div>
                <!--end card-->
            </div>
            <!--end col-->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="media">
                            <span class="me-3 thumb-md align-self-center rounded">
                                <i class="fa fa-2x fa-users" style="color: #1976d2;"></i>
                            </span>
                            <div class="media-body align-self-center">
                                <div class="coin-bal">
                                    <h4 class="mt-0 mb-1 font-22 fw-bold">{{ dashboard.siswa_count }}</h4>
                                    <p class="text-muted mb-0 ml-3 fw-semibold">
                                        Siswa Terdaftar
                                        <span class="text-success">
                                            1.2%
                                            <i class="mdi mdi-arrow-up"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <!--end media body-->
                        </div>
                        <!--end media-->
                    </div>
                    <!--end card-body-->
                </div>
                <!--end card-->
            </div>
            <!--end col-->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="media">
                            <span class="me-3 thumb-md align-self-center rounded">
                                <i class="fa fa-2x fa-user" style="color: #f57c00"></i>
                            </span>
                            <div class="media-body align-self-center">
                                <div class="coin-bal">
                                    <h4 class="mt-0 mb-1 font-22 fw-bold">{{ dashboard.guru_count }}</h4>
                                    <p class="text-muted mb-0 fw-semibold">
                                        Guru
                                        <!-- <span class="text-success">
                                            0.5%
                                            <i class="mdi mdi-arrow-up"></i>
                                        </span>-->
                                    </p>
                                </div>
                            </div>
                            <!--end media body-->
                        </div>
                        <!--end media-->
                    </div>
                    <!--end card-body-->
                </div>
                <!--end card-->
            </div>
            <!--end col-->
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-header">Identitas Sekolah</div>
                    <div class="card-body">
                        <center class="mt-3">
                            <img
                                src="/images/logo_sekolah.png"
                                style="width: 220px;"
                                alt
                                class="img-fluid"
                            />
                            <br />
                            <br />
                            <span style="color: #37474f; margin-top: 15px">{{ sekolah.alamat }}</span>
                        </center>
                        <div class="table-responsive mt-3">
                            <table class>
                                <tr>
                                    <td style="padding-right: 10px">NPSN</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ sekolah.npsn }}</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 10px">Nama Sekolah</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ sekolah.nama_sekolah }}</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 10px">SK Pendirian</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ sekolah.sk_pendirian_sekolah }}</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 10px">Tgl. SK Pendirian</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ sekolah.tanggal_sk_pendirian }}</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 10px">SK Izin Operasional</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ sekolah.sk_izin_operasional }}</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 10px">Tgl. SK Izin Operasional</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ sekolah.tanggal_sk_izin_operasional }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 overflow-hidden">
                    <div class="card-body">
                        <div class="pt-3">
                            <h3 class="text-dark text-center font-24 fw-bold line-height-lg">
                                Tahun Ajaran
                                <br />
                                {{ sekolah.tahun_ajaran }}
                            </h3>
                            <div
                                class="text-center text-muted font-16 fw-bold pt-3 pb-1"
                            >Pengaturan yang dilakukan akan tersimpan pada Tahun Ajaran {{ sekolah.tahun_ajaran }}. Hati-hati dalam merubah pengaturan</div>

                            <div class="text-center py-3 mb-3">
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#selectTahunAjaran" class="btn btn-primary">
                                    <i class="fa fa-calendar"></i> Ubah Tahun Ajaran
                                </a>
                            </div>
                            <img
                                src="/assets/images/small/business.png"
                                alt
                                class="img-fluid px-3 mb-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card h-100">
                    <div class="card-header">
                        Peta Sebaran Lokasi Prakerin
                        <!-- TODO : Dynamic tahun ajaran -->
                        <br />Tahun Ajaran 2021/2022
                    </div>
                    <div class="card-body">
                        <Map :instansi="instansi" />
                    </div>
                    <div class="card-footer">
                        <span
                            class="badge bg-primary"
                            style="margin-right: 5px"
                            v-for="(i, index) in instansi"
                            :key="index"
                        >{{ i.nama }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="selectTahunAjaran" tabindex="-1" aria-labelledby="selectTahunAjaranLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="selectTahunAjaranLabel">Ubah Tahun Ajaran</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <select name="pilih_tahun_ajaran" id="tahun_ajaran" class="form-control">
                                <option value="2019/2022">2019/2022</option>
                                <option value="2019/2022">2020/2021</option>
                                <option value="2019/2022">2021/2022</option>
                                <option value="2019/2022">2022/2023</option>
                            </select>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Modal -->
    </div>
</template>

<script>

import Map from "./components/Map.vue";

export default {
    components: {
        Map
    },

    data: () => ({
        dashboard: {
            instansi_count: 0,
            siswa_count: 0,
            guru_count: 0,
        },
        sekolah: {},

        instansi: [
            {
                nama: "PT. Mobidu",
                data: "Ok",
                latlang: [-7.208959547325653, 107.91041544191225],
            },
            {
                nama: "PT Jaya Abadi",
                data: "Ok",
                latlang: [-7.211003195586779, 107.91608026713703],
            },
            {
                nama: "Kerkoff",
                data: "Ok",
                latlang: [-7.205894057646849, 107.90337732572387],
            },
            {
                nama: "Nurhayati",
                data: "Ok",
                latlang: [-7.21645287918694, 107.92140176962093],
            },
            {
                nama: "RSUD Slamet",
                data: "Ok",
                latlang: [-7.218666794404613, 107.89702585501728],
            },
        ],
    }),

    mounted() {
        this.getSekolah();
        this.getDashboard();
        this.getInstansi();
    },

    methods: {
        getDashboard: function() {
            axios.get('/api/admin/dashboard')
            .then( res => {
                this.dashboard = res.data;
            })
        },

        getSekolah: function () {
            axios.get("/api/pub/sekolah").then((res) => {
                this.sekolah = res.data;
            });
        },
        getInstansi: function () {
            axios.get("/api/admin/instansi?dashboard=y")
            .then(res => {
                this.instansi = res.data.map((el) => {
                    return {
                        ...el,
                        latlang: [el.latitude, el.longitude]
                    }
                });
            });
        },
    },
};
</script>

<style>
</style>