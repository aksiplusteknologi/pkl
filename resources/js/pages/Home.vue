<template>
    <div>
        <AdminDashboard v-if="checkType == 'admin'" />
    </div>
</template>

<script>
import AdminDashboard from "@/layouts/partials/dashboard/Admin";

export default {
    components: {
        AdminDashboard,
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