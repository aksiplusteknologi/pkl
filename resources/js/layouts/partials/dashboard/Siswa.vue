<template>
    <div>
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
                                Tahun Ajaran {{ sekolah.tahun_ajaran }}
                                <br />
                                <span class="badge bg-primary">{{ pkl.status.toUpperCase() }}</span>
                            </h3>
							<hr>
							<center>
								<h4>
									Lokasi PKL Anda
								</h4>
							</center>
							
							<div class="table-responsive mt-3">
								<table class>
									<tr>
										<td style="padding-right: 10px">Nama</td>
										<td style="width: 5%">:</td>
										<td>{{ pkl.instansi.nama }}</td>
									</tr>
									<tr>
										<td style="padding-right: 10px">Alamat</td>
										<td style="width: 5%">:</td>
										<td>{{ pkl.instansi.alamat }}</td>
									</tr>
									<tr>
										<td style="padding-right: 10px">Jenis</td>
										<td style="width: 5%">:</td>
										<td>{{ pkl.instansi.jenis_perusahaan.toUpperCase() }}</td>
									</tr>
									<tr>
										<td style="padding-right: 10px">Status</td>
										<td style="width: 5%">:</td>
										<td>{{ pkl.instansi.status_kepemilikan.toUpperCase() }}</td>
									</tr>
									<tr>
										<td style="padding-right: 10px">Lokasi</td>
										<td style="width: 5%">:</td>
										<td>{{ pkl.instansi.latitude }}, {{ pkl.instansi.longitude }}</td>
									</tr>
								</table>
							</div>
							
							<Map :instansi="[pkl.instansi]" />
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
                        >{{ i.nama }} (5 orang)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Map from "./components/Map.vue";

export default {
    components: {
        Map
    },

    data: () => ({
		pkl: {
			status: '',
			pkl: {
				tahun_ajaran: '',
				instansi: {
					latlang: [
						'', ''
					],
					nama: '',
					alamat: '',
					latitude: '',
					longitude: '',
				}
			},
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
        this.getDashboard();
        this.getSekolah();
        this.getInstansi();
    },

    methods: {

		getDashboard: function() {
			axios.get('/api/siswa/dashboard')
			.then( res => {
				this.pkl = res.data.siswa.pkl;
				this.pkl.instansi.latlang = [res.data.siswa.pkl.instansi.latitude, res.data.siswa.pkl.instansi.longitude];
			});
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