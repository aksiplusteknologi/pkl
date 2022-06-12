<template>
  <div>
    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Detail Instansi</h4>
          </div>
          <div class="card-body">
            <img src="/assets/images/building.jpg" :alt="'Logo ' + instansi.nama" class="img-fluid">
            <div class="info-list mb-1 mt-1">
              <p class="info-header mb-0">Nama Instansi</p>
              <span class="info-content mt-0">{{ instansi.nama }}</span>
            </div>
            <div class="info-list mb-1 mt-1">
              <p class="info-header mb-0">Alamat</p>
              <span class="info-content mt-0">{{ instansi.alamat }}</span>
            </div>
            <div class="info-list mb-1 mt-1">
              <p class="info-header mb-0">Status Kepemilikan</p>
              <span class="info-content mt-0">{{ instansi.status_kepemilikan.toUpperCase() }}</span>
            </div>
            <div class="info-list mb-1 mt-1">
              <p class="info-header mb-0">Jenis Perusahaan</p>
              <span class="info-content mt-0">{{ instansi.jenis_perusahaan.toUpperCase() }}</span>
            </div>
            <div class="info-list mb-1 mt-1">
              <p class="info-header mb-0">Titik Kordinat</p>
              <a href="#" class="info-content mt-0"><i class="fa fa-map-marker"></i> {{ `${instansi.latitude}, ${instansi.longitude}` }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            ok
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    instansi: {
      status_kepemilikan: '',
      jenis_perusahaan: '',
    },
  }),

  mounted() {
    this.initData();
  },

  methods: {
    initData: function() {
      axios.get('/api/admin/instansi/' + this.$route.params.instansi_id)
      .then( res => {
        this.instansi = res.data;
      })
      .catch(e=> {
        console.log(e);
      })
      .then(() => {
        console.log('Always executed');
      });
    },
  }
}
</script>

<style scoped>
.info-header {
  font-weight: bold;
}

</style>