<template>
	<div>
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header">
						<h4 class="card-title">
							Penambahan Siswa pada Prakerin {{ pkl.tahun_ajaran }}
							<br>
							<small>Menampilkan {{ table.rows.length }} siswa / i yang belum Prakerin</small>

						</h4>
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
								:pagination-options="{
									enabled: true,
								}"
								:columns="table.columns"
								:rows="table.rows"
								styleClass="vgt-table condensed pgTble"
							>
								<!-- <div slot="table-actions">
								This will show up on the top right of the table. 
								</div>-->


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
									<span v-if="props.column.field == 'pkl'">
										<span v-if="props.row.pkl">
											<strong><i>{{ props.row.pkl.instansi.nama }}</i></strong>
											<br>
											<span class="badge" v-bind:class="{
												'bg-primary': props.row.pkl.status == 'berlangsung',
												'bg-danger': props.row.pkl.status == 'batal',
												'bg-success': props.row.pkl.status == 'selesai',
											}">
												{{ props.row.pkl.pkl.status.toUpperCase() }}
											</span>
										</span>
										<span v-else class="badge bg-warning">Belum PKL</span>
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
										<span class="badge bg-primary pointer" @click="assignSiswa(props.row)"><i class="fa fa-plus"></i> Tambah</span>
										<!-- {{ props.row.mapel_count }} -->
									</span>
								</template>
							</vue-good-table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Penempatan Instansi untuk Siswa/i {{ selected_siswa.nama }} pada Tahun Ajaran {{ pkl.tahun_ajaran }} </h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="alert alert-primary">
							<div class="alert-body">
								<div class="table-responsive">
									<table>
										<tr>
											<td style="width: 160px;">Nama</td>
											<td style="width: 20px;">:</td>
											<td>{{ selected_siswa.nama }}</td>
										</tr>
										<tr>
											<td style="width: 160px;">Kelas</td>
											<td style="width: 20px;">:</td>
											<td>{{ selected_siswa.rombel.nama }}</td>
										</tr>
										<tr>
											<td style="width: 160px;">TTL</td>
											<td style="width: 20px;">:</td>
											<td>{{ selected_siswa.tempat_lahir }}, {{ selected_siswa.tanggal_lahir | indoDate }}</td>
										</tr>
										<tr>
											<td style="width: 160px;">Alamat</td>
											<td style="width: 20px;">:</td>
											<td>{{ selected_siswa.alamat }}</td>
										</tr>
									</table>
								</div>

							</div>
						</div>
								
						<div class="table-responsive">
							<vue-good-table
								:search-options="{
									enabled: true,
									trigger: 'enter',
									skipDiacritics: true,
									placeholder: 'Type and enter to search'
								}"
								mode="remote"
								:totalRows="table_instansi.rows.length"
								:pagination-options="{
									enabled: true,
								}"
								:columns="table_instansi.columns"
								:rows="table_instansi.rows"
								styleClass="vgt-table condensed pgTble"
							>
								<!-- <div slot="table-actions">
								This will show up on the top right of the table_instansi. 
								</div>-->


								<template
									slot="table-row"
									style="background-color: #c5e1a5"
									:doc_due_date="doc_due_date"
									slot-scope="props"
								>
									<span v-if="props.column.field == 'aksi'">
										<span
											v-on:click="selectInstansi(props.row)"
											class="pointer badge bg-primary pointer"
										>
											<i class="fa fa-check"></i> Pilih
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
		<!-- End Modal -->
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
		pkl: {
			tahun_ajaran: '',
		},

		selected_siswa: {
			agama : "",
			alamat : "",
			id : "",
			jenis_kelamin : "",
			nama : "",
			nis : "",
			nisn : "",
			rombel : {
				nama: ''
			},
			rombel_id: 2,
			tanggal_lahir : "",
			tempat_lahir : "",

		},
		table_instansi: {
            rows: [],
            columns: [
                {
                    label: "Nama Instansi / Perusahaan",
                    field: "nama",
                    sortable: true,
                },
                {
                    label: "Status Kepemilikan",
                    field: "status_kepemilikan",
                    sortable: true,
                },
                {
                    label: "Jenis Perusahaan",
                    field: "jenis_perusahaan",
                    sortable: true,
                },
                {
                    label: "",
                    field: "aksi",
                    sortable: false,
                },
            ],
            totalRows: "",
            serverParams: {
                perPage: 10,
                searchTerm: "",
            },
            perPageDropDown: [10, 25, 50, 100],
            selectedRows: [],
        },
		table: {
            rows: [],
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
                    sortable: false,
                },
                {
                    label: "Status PKL",
                    field: "pkl",
                    sortable: false,
                },
                {
                    label: "JK",
                    field: "jenis_kelamin",
                    sortable: true,
                },
                {
                    label: "TTL",
                    field: "ttl",
                    sortable: false,
                },
                {
                    label: "",
                    field: "aksi",
                    sortable: false,
                },
            ],
            totalRows: "",
            serverParams: {
                perPage: 10,
                searchTerm: "",
            },
            perPageDropDown: [10, 25, 50, 100],
            selectedRows: [],
        },
	}),

	mounted() {
		this.getPkl();
		this.getSiswa();
		this.getInstansi();
	},

	methods: {

		getInstansi: function() {
			axios.get('/api/admin/instansi?dashboard=y')
			.then( res => {
				this.table_instansi.rows = res.data;
			})
		},

		assignSiswa: function(siswa) {
			this.selected_siswa = siswa;
			$('#exampleModal').modal('show');
			toastr.success(siswa.nama, 'ok');
		},

		selectInstansi: function(instansi) {
			swal({
				title: `Anda menginput Siswa/i ${this.selected_siswa.nama} pada ${instansi.nama}`,
				text: "Lanjutkan?",
				icon: "warning",
				buttons: true,
				dangerMode: false
			}).then(value => {
				if (value) {
					$.LoadingOverlay('show');
					let form = {
						siswa_id: this.selected_siswa.id,
						pkl_id: this.$route.params.pkl_id,
						instansi_id: instansi.id
					};
					axios
					.post("/api/admin/pkl/add/siswa", form)
					.then(res => {
						if (res.data.status) {
							this.getSiswa();
							$('#exampleModal').modal('hide');
							swal(res.data.message, "Berhasil", 'success');
						} else {
							this.error_validation = res.data.data;
						}
					})
					.then(() => {
						$.LoadingOverlay('hide');
					});
				}
			});
		},

		getPkl: function() {
			axios.get(`/api/admin/pkl/${this.$route.params.pkl_id}`)
			.then( res => {
				this.pkl = res.data;
			})
		},


		getSiswa: function() {
			
			$.LoadingOverlay("show");
			axios.get(`/api/admin/pkl/get/siswa/${this.$route.params.pkl_id}`)
			.then( res => {
				$('#getSiswaModal').modal('show');
				this.table.rows = res.data;
			})
			.then(() => {
				$.LoadingOverlay('hide');
			});
		},
	}
}
</script>

<style>

</style>