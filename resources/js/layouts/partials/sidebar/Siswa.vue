<template>
    <div class="collapse navbar-collapse tab-content" id="sidebarCollapse">
        <!-- Navigation -->
        <ul class="navbar-nav tab-pane active" id="Main" role="tabpanel">
            <li class="nav-item" :class="{ 'menuitem-active': subIsActive('/dashboard') }">
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/dashboard') }"
                    :to="{ name: 'home' }"
                >
                    <i class="ti ti-stack menu-icon"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <!-- <li
                class="nav-item"
                :class="{ 'menuitem-active': subIsActive('/admin_area/pengaturan') }"
            >
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/pengaturan') }"
                    :to="{ name: 'admin.pengaturan.index' }"
                >
                    <i class="ti ti-settings menu-icon"></i>
                    <span>Pengaturan</span>
                </router-link>
            </li>-->
            <li class="nav-item" :class="{ 'menuitem-active': subIsActive('/admin_area/pkl') }">
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/pkl') }"
                    :to="{ name: 'admin.pkl.index' }"
                >
                    <i class="ti ti-folder menu-icon"></i>
                    <span>Pelaksanaan</span>
                </router-link>
            </li>
        </ul>
        <!--end navbar-nav--->
    </div>
</template>

<script>
export default {
    methods: {
        subIsActive(input) {
            $(".nav-item").removeClass("active");

            const paths = Array.isArray(input) ? input : [input];
            return paths.some((path) => {
                return this.$route.path.indexOf(path) === 0; // current path starts with this path string
            });
        },
    },
};
</script>

<style>
</style>