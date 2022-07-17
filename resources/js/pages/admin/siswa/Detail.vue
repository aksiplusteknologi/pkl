<template>
  <div>
    <h2>Detail Profil {{ siswa.nama }}</h2>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body centerize">
            
            <div class="profile">
              <span class="title mb-0">NIS / NISN</span>
              <p class="desc mt-0">{{ siswa.nis }} / {{ siswa.nisn }}</p>
            </div>
            <div class="profile">
              <span class="title mb-0">Nama Lengkap</span>
              <p class="desc mt-0">{{ siswa.nama }}</p>
            </div>
            <div class="profile">
              <span class="title mb-0">Jenis Kelamin</span>
              <p class="desc mt-0">
                <span v-if="siswa.jenis_kelamin == 'p'"><i class="fa fa-venus"></i> Perempuan</span>
                <span v-else-if="siswa.jenis_kelamin == 'l'"><i class="fa fa-mars"></i> Laki-laki</span>
              </p>
            </div>
            <div class="profile">
              <span class="title mb-0">Kelas</span>
              <p class="desc mt-0">{{ siswa.rombel.nama }}</p>
            </div>
            <div class="profile">
              <span class="title mb-0">TTL</span>
              <p class="desc mt-0">{{ siswa.tempat_lahir }}, {{ siswa.tanggal_lahir | indoDate }}</p>
            </div>
            <div class="profile">
              <span class="title mb-0">Alamat</span>
              <p class="desc mt-0">{{ siswa.alamat }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <div v-if="siswa.pkl">
              <div class="alert alert-success" v-if="siswa.pkl.status == 'berlangsung'">
                <div class="alert-content">
                  Siswa Sedang PKL di <strong>{{ siswa.pkl.instansi.nama }}</strong> pada Tahun Ajaran <strong>{{ siswa.pkl.pkl.tahun_ajaran }}</strong>
                </div>
              </div>
              <div v-else class="alert alert-warning">
                <div class="alert-content">
                  Status PKL Siswa saat ini adalah <strong>{{ siswa.pkl.status.toUpperCase() }}</strong> pada Tahun Ajaran <strong>{{ siswa.pkl.pkl.tahun_ajarana }}</strong>
                </div>
              </div>
              <Map :instansi="[siswa.pkl.instansi]" class="mt-2" style="height: 450px;" />
            </div>
            <div v-else class="alert alert-danger">
              <div class="alert-content">
                <center>
                  <h2>Siswa belum PKL</h2>
                </center>
              </div>
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
    filters: {
        indoDate: function (value) {
            return indonesianDate(value);
        },
    },


  components: {
    Map
  },

  data: () => ({
    siswa: {
      pkl: {},
      rombel: {
        nama: '',
      }
    },
  }),

  mounted(){
    this.initData();
  },

  methods: {
    initData: function() {
      axios.get(`/api/admin/siswa/${this.$route.params.siswa_id}`)
      .then( res => {
        this.siswa = res.data;
        if(res.data.pkl.instansi) {
          this.siswa.pkl.instansi.latlang = [
            this.siswa.pkl.instansi.latitude, this.siswa.pkl.instansi.longitude
          ];
        }
      })
    }
  },
}
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