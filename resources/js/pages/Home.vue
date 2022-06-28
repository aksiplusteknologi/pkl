<template>
    <div>
        <AdminDashboard v-if="checkType == 'admin'" />
        <SiswaDashbboard v-if="checkType == 'siswa'" />
    </div>
</template>

<script>
import AdminDashboard from "@/layouts/partials/dashboard/Admin";
import SiswaDashbboard from "@/layouts/partials/dashboard/Siswa";

export default {
    components: {
        AdminDashboard,
        SiswaDashbboard,
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