<template>
    <div>
        <SiswaSidebar v-if="checkType == 'siswa'" />
        <AdminSidebar v-if="checkType == 'admin'" />
    </div>
</template>

<script>
import AdminSidebar from "@/layouts/partials/sidebar/Admin";
import SiswaSidebar from "@/layouts/partials/sidebar/Siswa";

export default {
    components: {
        SiswaSidebar,
        AdminSidebar,
    },

    computed: {
        checkType: function () {
            if (this.$store.getters.isLoggedIn) {
                return JSON.parse(this.$store.getters.user).user_type;
            } else {
                return null;
            }
        },

        sekolah: function () {
            return JSON.parse(localStorage.getItem("sekolah"));
        },
    },
};
</script>

<style>
</style>