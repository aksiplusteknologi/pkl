<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Pengaturan</h4>
                <p class="text-muted mb-0">
                    Lakukan Pengaturan untuk Waktu Mulai, Waktu Selesai untuk Masa Pelaksanaan Prakter Kerja Lapangan Tahun Ajaran
                    <strong>
                        <i>{{ sekolah.tahun_ajaran }}</i>
                    </strong>
                </p>
            </div>
            <!--end card-header-->
            <div class="card-body">
                <!-- Nav tabs -->
                <ul class="nav nav-pills nav-justified" role="tablist">
                    <li class="nav-item waves-effect waves-light">
                        <a
                            class="nav-link active"
                            data-bs-toggle="tab"
                            href="#home-1"
                            role="tab"
                            aria-selected="true"
                        >Home</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#profile-1"
                            role="tab"
                            aria-selected="false"
                        >Profile</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#settings-1"
                            role="tab"
                            aria-selected="false"
                        >Settings</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane p-3 active" id="home-1" role="tabpanel">
                        <div class="row">
                            <div class="col-md-9">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="mulai">Waktu Mulai Pelaksaan</label>
                                                <input
                                                    type="date"
                                                    v-model="sekolah.tanggal_mulai"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="mulai">Waktu Akhir Pelaksaan</label>
                                                <input
                                                    type="date"
                                                    v-model="sekolah.tanggal_mulai"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-3">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fa fa-check"></i> Simpan Pengaturan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-3" id="profile-1" role="tabpanel">
                        <p class="text-muted mb-0">
                            Food truck fixie locavore, accusamus mcsweeney's
                            single-origin coffee squid.
                        </p>
                    </div>
                    <div class="tab-pane p-3" id="settings-1" role="tabpanel">
                        <p
                            class="text-muted mb-0"
                        >Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.</p>
                    </div>
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
        pkl: {},
    }),

    mounted() {
        this.getSekolah();
    },

    methods: {
        getSekolah: function () {
            axios.get("/api/pub/sekolah").then((res) => {
                this.sekolah = res.data;
                this.getPKL(res.data.tahun_ajaran);
            });
        },

        getPKL: function (tahun_ajaran) {
            axios.get("/api/admin/pkl/" + tahun_ajaran).then((res) => {
                this.pkl = res.data;
            });
        },
    },
};
</script>

<style>
</style>