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
            <li
                class="nav-item"
                :class="{ 'menuitem-active': subIsActive('/admin_area/pengaturan/index') }"
            >
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/pengaturan/index') }"
                    :to="{ name: 'admin.pengaturan.index' }"
                >
                    <i class="ti ti-settings menu-icon"></i>
                    <span>Pengaturan</span>
                </router-link>
            </li>
            <li
                class="nav-item"
                :class="{ 'menuitem-active': subIsActive('/admin_area/pkl/index') }"
            >
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/pkl/index') }"
                    :to="{ name: 'admin.pkl.index' }"
                >
                    <i class="ti ti-folder menu-icon"></i>
                    <span>Pelaksanaan</span>
                </router-link>
            </li>
            <li class="menu-label mt-0 text-primary font-12 fw-semibold">
                <span>Master Data</span>
                <br />
                <span class="font-10 text-secondary fw-normal">Manajemen Data</span>
            </li>
            <li
                class="nav-item"
                :class="{ 'menuitem-active': subIsActive('/admin_area/instansi/index') }"
            >
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/instansi/index') }"
                    :to="{ name: 'admin.instansi.index' }"
                >
                    <i class="ti ti-home menu-icon"></i>
                    <span>Instansi</span>
                </router-link>
            </li>
            <li
                class="nav-item"
                :class="{ 'menuitem-active': subIsActive('/admin_area/siswa/index') }"
            >
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/siswa/index') }"
                    :to="{ name: 'admin.siswa.index' }"
                >
                    <i class="ti ti-user menu-icon"></i>
                    <span>Siswa</span>
                </router-link>
            </li>
            <li
                class="nav-item"
                :class="{ 'menuitem-active': subIsActive('/admin_area/guru/index') }"
            >
                <router-link
                    class="nav-link"
                    :class="{ 'active': subIsActive('/admin_area/guru/index') }"
                    :to="{ name: 'admin.guru.index' }"
                >
                    <i class="fa fa-users menu-icon"></i>
                    <span>Guru / Pembimbing</span>
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