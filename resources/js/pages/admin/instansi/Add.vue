<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4>Form Pembuatan Instansi</h4>
          </div>
          <div class="card-body">

            <div class="row">

              <div class="col-6">
                <div class="form-group">
                  <label for="jenis_perusahaan">Jenis Perusahaan <Required /></label>
                  <select name="jenis_perusahaan" id="jenis_perusahaan" v-model="form.jenis_perusahaan" class="form-control">
                    <option value="" disabled>-- Pilih Jenis Perusahaan --</option>
                    <option value="pt">PT</option>
                    <option value="cv">CV</option>
                    <option value="persero">Persero</option>
                    <option value="lainnya">Lain nya</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="form-group">
                  <label for="status_kepemilikan">Status Kepemilikian <Required /></label>
                  <select name="status_kepemilikan" id="status_kepemilikan" v-model="form.status_kepemilikan" class="form-control">
                    <option value="" disabled>-- Pilih Status Kepemilikan --</option>
                    <option value="swasta">swasta</option>
                    <option value="negeri">Negeri</option>
                  </select>
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-group">
                  <label for="nama">Nama Perusahaan <Required /></label>
                  <input type="text" v-model="form.nama" class="form-control" id="nama" placeholder="Masukan Nama Perusahaan">
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-group">
                  <label for="alamat">Alamat <Required /></label>
                  <textarea name="alamat" id="alamat" cols="30" rows="4" v-model="form.alamat" class="form-control" placeholder="Masukan Alamat Lengkap Perusahaan"></textarea>
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label for="text">Keterangan</label>
                  <textarea name="text" id="text" cols="30" rows="4" v-model="form.text" class="form-control" placeholder="Masukan Deskripsi Lengkap Perusahaan"></textarea>
                </div>
              </div>
              
              <div class="col-6">
                <div class="form-group">
                  <label for="latitude">Latitude <Required /></label>
                  <input type="text" v-model="form.latitude" class="form-control" id="latitude" placeholder="Masukan Latitude">
                </div>
              </div>
              
              <div class="col-6">
                <div class="form-group">
                  <label for="longitude">Longitude <Required /></label>
                  <input type="text" v-model="form.longitude" class="form-control" id="longitude" placeholder="Masukan Longitude">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-warning">
          <h4 style="color: orange">
            <i class="fa fa-exclamation-triangle"></i> Perhatian
          </h4>
          <ul style="margin-left: -15px">
            <li>Form dengan Tanda <Required /> adalah wajib diisi / tidak boleh kosong</li>
            <li>Isi setiap Formulir dengan data yang benar dan dapat dipertanggung jawabkan</li>
            <li>Data yang tersimpan akan terekam kedalam Database</li>
            <li>Apabila sudah mengisi formulir tekan tombol Dibawah ini</li>
          </ul>
        </div>

        <div class="d-grid">
          <button class="btn btn-success" @click="saveData"><i class="fa fa-check"></i> Buat Instansi Baru</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Required from '../../../layouts/partials/Required.vue'
export default {
  components: { Required },
  data: () => ({
    error_validation: {},
    form: {
      jenis_perusahaan: '',
      status_kepemilikan: '',
      nama: '',
      text: '',
      alamat: '',
      latitude: '',
      longitude: '',
    }
  }),

  methods: {
    saveData: function () {
      swal({
        title: "Anda akan membuat Data Instansi",
        text: "Lanjutkan?",
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(value => {
        if (value) {
            axios
            .post("/api/admin/instansi", this.form)
            .then(res => {
              if (res.data.status) {
                toastr.success(res.data.message, "Berhasil!!")
                this.$router.push({ name: 'admin.instansi.index' });
              } else {
                this.error_validation = res.data.data;
              }
            });
        }
      });
    },
  }
}
</script>

<style>

</style>