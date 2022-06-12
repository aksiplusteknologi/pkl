<template>
  <div>
    <l-map
        style="border-radius: 9px; min-height: 300px"
        :zoom="zoom"
        :center="center"
    >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker
            v-for="(i, index) in instansi"
            :key="index"
            :lat-lng="i.latlang"
            @click="detailInstansi(i)"
        >
            <l-icon
                :icon-size="dynamicSize"
                :icon-anchor="dynamicAnchor"
                icon-url="/assets/images/marker.png"
            />
        </l-marker>
    </l-map>


    <!-- Modal Detail Instansi -->
    <div class="modal fade" id="detailInstansi" tabindex="-1" aria-labelledby="detailInstansiLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="detailInstansiLabel">Detail Instansi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-2">
                      <img src="/assets/images/building.jpg" :alt="'Logo ' + selected_instansi.nama" class="img-fluid">
                    </div>
                    <div class="col-10">
                      <div class="info-list mb-1 mt-1">
                        <p class="info-header mb-0">Nama Instansi</p>
                        <span class="info-content mt-0">{{ selected_instansi.nama }}</span>
                      </div>
                      <div class="info-list mb-1 mt-1">
                        <p class="info-header mb-0">Alamat</p>
                        <span class="info-content mt-0">{{ selected_instansi.alamat }}</span>
                      </div>
                      <div class="info-list mb-1 mt-1">
                        <p class="info-header mb-0">Status Kepemilikan</p>
                        <span class="info-content mt-0">{{ selected_instansi.status_kepemilikan.toUpperCase() }}</span>
                      </div>
                      <div class="info-list mb-1 mt-1">
                        <p class="info-header mb-0">Jenis Perusahaan</p>
                        <span class="info-content mt-0">{{ selected_instansi.jenis_perusahaan.toUpperCase() }}</span>
                      </div>
                      <div class="info-list mb-1 mt-1">
                        <p class="info-header mb-0">Titik Kordinat</p>
                        <a :href="'https://www.google.com/maps/@' + selected_instansi.latitude + ',' + selected_instansi.longitude" target="_blank" class="info-content mt-0"><i class="fa fa-map-marker"></i> {{ `${selected_instansi.latitude}, ${selected_instansi.longitude}` }}</a>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Tutup</button>
                    <button @click="goToInstansi(selected_instansi)" class="btn btn-success" >Selengkapnya</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Detail Instansi -->
  </div>
</template>

<script>

import { L, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
export default {

    props: ['instansi'],

    components: {
        LIcon,
        icon,
        LMap,
        LTileLayer,
        LMarker,
    },

    data: () => ({
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "123",
        zoom: 11,
        center: [-7.172403790397669, 107.88385944491856],
        selected_instansi: {
          status_kepemilikan: '',
          jenis_perusahaan: '',
        },
    }),
    
    computed: {
        dynamicSize() {
            return [this.iconSize, this.iconSize * 1.15];
        },
        dynamicAnchor() {
            return [this.iconSize / 2, this.iconSize * 1.15];
        }
    },

    methods: {
        detailInstansi: function(instansi) {
          this.selected_instansi = instansi;
            console.log(instansi);

          $('#detailInstansi').modal('show');
        },

        goToInstansi: function(instansi) {
          $('#detailInstansi').modal('hide');
          this.$router.push({ name: 'admin.instansi.detail', params: { instansi_id : instansi.id } });
        }
    },

}
</script>

<style>

</style>