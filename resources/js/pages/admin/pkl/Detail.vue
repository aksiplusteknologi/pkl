<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow mb-2">
                    <div class="card-body">
                        <div class="card-header">
                            <p class="mb-0" style="font-weight: bold;">
                                Perusahaan / Instansi ({{ pkl.instansi.length }} data)
                            </p>
                            <span class="mt-0">Pilih Salah Satu Perusahaan</span>
                        </div>
                    </div>

                </div>

                
                    <div v-for="instansi in pkl.instansi" :key="instansi.id">
                        <div class="card shadow">
                            <div class="card-body">
                                <h4 class="mb-0">
                                    {{ instansi.nama }}
                                </h4>
                                <hr>
                                <p class="mt-0 mb-0">Status Kepemilikan : {{ instansi.status_kepemilikan.toUpperCase() }}</p>
                                <p class="mt-0 mb-0">Jenis Perusahaan : {{ instansi.status_kepemilikan.toUpperCase() }}</p>
                                <p class="mt-0 mb-0">Deskripsi : {{ instansi.deskripsi ? instansi.deskripsi : '' }}</p>
                                <p class="mt-0 mb-0">Alamat : {{ instansi.alamat ? instansi.alamat : '' }}</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-md-4">

            </div>
            <div class="col-md-4">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        pkl: {
            instansi: [],
            siswa: [],
            guru: {
                nama: '',
                nuptk: '',
            }
        },
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function() {
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
                console.log('always executed');
            })
        },
    }
};
</script>

<style>
</style>