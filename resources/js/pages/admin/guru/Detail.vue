<template>
    <div>Detail Guru {{ guru.nama }}</div>
</template>

<script>
export default {
    data: () => ({
        guru: {},
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function () {
            axios
                .get("/api/admin/guru/" + this.$route.params.guru_id)
                .then((res) => {
                    this.guru = res.data;
                });
        },
    },
};
</script>

<style>
</style>