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
                    <h5 class="modal-title" id="detailInstansiLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Tutup</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
        center: [-7.210662588321085, 107.90741136800098],
        selected_instansi: {},
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
    },

}
</script>

<style>

</style>