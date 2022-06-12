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
          <div class="card-header">
            <div class="row">
              <div class="col-8">
                <h4 class="card-title">
                  Tahun Ajaran {{ selected_pkl.tahun_ajaran }}
                </h4>
                <span class="mt-0">Menampilkan {{ siswa.length }} data siswa/i</span>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="pkl">Pilih Tahun Ajaran</label>
                  <select name="pkl" id="pkl" class="form-control" v-model="selected_pkl" @change="changePKL">
                    <option v-for="pkl in list_pkl" :key="pkl.id" :value="pkl">{{ pkl.tahun_ajaran }} - {{ pkl.status.toUpperCase() }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
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
                  :rows="siswa"
                  styleClass="vgt-table condensed pgTble"
              >
                  <!-- <div slot="table-actions">
                  This will show up on the top right of the table. 
                  </div>-->

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
import indonesianDate from "@/library/date.js";
export default {
  data: () => ({

    table: {
        columns: [
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
    },
    instansi: {
      status_kepemilikan: '',
      jenis_perusahaan: '',
    },

    list_pkl: [],

    selected_pkl: {
      id: '',
      tahun_ajaran: '',
    },

    siswa: [],
  }),
  filters: {
      indoDate: function (value) {
          return indonesianDate(value);
      },
  },


  mounted() {
    this.initData();
    this.getPklList();
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

    getPKL: function() {
      $.LoadingOverlay("show");
      axios.get('/api/admin/instansi/get_siswa/' + this.selected_pkl.id + '/' + this.instansi.id)
      .then( res => {
        console.log(res.data);
        this.siswa = res.data;
      }).catch( e => {
        console.log(e);
      }).then(() => {
        $.LoadingOverlay("hide");
      });
    },

    getPklList: function() {
      axios.get('/api/admin/pkl/create')
      .then( res => {
        this.list_pkl = res.data;
        if(this.list_pkl.length > 0) {
          this.selected_pkl = this.list_pkl[0];
          this.getPKL();
        }
      });
    },

    changePKL: function() {
      this.getPKL();
    },
  }
}
</script>

<style scoped>
.info-header {
  font-weight: bold;
}

</style>