<template>
    <div>
        <AdminSidebar v-if="checkType == 'admin'" />
    </div>
</template>

<script>
import AdminSidebar from "@/layouts/partials/sidebar/Admin";

export default {
    components: {
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