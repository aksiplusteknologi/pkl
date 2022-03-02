<template>
    <div>
        <div class="left-sidebar">
            <!-- LOGO -->
            <div class="brand">
                <a href="index.html" class="logo">
                    <span>
                        <img src="/assets/images/logo-sm.png" alt="logo-small" class="logo-sm" />
                    </span>
                    <span>
                        <img
                            src="/assets/images/logo.png"
                            alt="logo-large"
                            class="logo-lg logo-light"
                        />
                        <img
                            src="/assets/images/logo-dark.png"
                            alt="logo-large"
                            class="logo-lg logo-dark"
                        />
                    </span>
                </a>
            </div>
            <!-- <div class="sidebar-user-pro media border-end">
                <div class="position-relative mx-auto">
                    <img
                        src="/assets/images/users/user-4.jpg"
                        alt="user"
                        class="rounded-circle thumb-md"
                    />
                    <span class="online-icon position-absolute end-0">
                        <i class="mdi mdi-record text-success"></i>
                    </span>
                </div>
                <div class="media-body ms-2 user-detail align-self-center">
                    <h5 class="font-14 m-0 fw-bold">Mr. Michssael Hill</h5>
                    <p class="opacity-50 mb-0">michael.hill@exemple.com</p>
                </div>
            </div>-->
            <!-- <div class="border-end">
                <ul class="nav nav-tabs menu-tab nav-justified" role="tablist">
                    <li class="nav-item">
                        <a
                            class="nav-link active"
                            data-bs-toggle="tab"
                            href="#Main"
                            role="tab"
                            aria-selected="true"
                        >
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#Extra"
                            role="tab"
                            aria-selected="false"
                        >
                            <span>Tahun Ajaran</span>
                        </a>
                    </li>
                </ul>
            </div>-->
            <!-- Tab panes -->

            <!--end logo-->
            <div class="menu-content h-100" data-simplebar>
                <div class="menu-body navbar-vertical">
                    <Sidebar />
                    <!--end sidebarCollapse-->
                </div>
            </div>
        </div>
        <div class="topbar">
            <!-- Navbar -->
            <nav class="navbar-custom" id="navbar-custom">
                <ul class="list-unstyled topbar-nav float-end mb-0">
                    <li class="dropdown">
                        <a
                            class="nav-link dropdown-toggle nav-user"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <div class="d-flex align-items-center">
                                <img
                                    src="/assets/images/blank_user.png"
                                    alt="profile-user"
                                    class="rounded-circle me-2 thumb-sm"
                                />
                                <div>
                                    <small class="d-none d-md-block font-11">Admin</small>
                                    <span class="d-none d-md-block fw-semibold font-12">
                                        Administrator
                                        <i class="mdi mdi-chevron-down"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">
                                <i class="ti ti-user font-16 me-1 align-text-bottom"></i> Profile
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="ti ti-settings font-16 me-1 align-text-bottom"></i> Settings
                            </a>
                            <div class="dropdown-divider mb-0"></div>
                            <a class="dropdown-item" href="#">
                                <i class="ti ti-power font-16 me-1 align-text-bottom"></i> Logout
                            </a>
                        </div>
                    </li>
                    <!--end topbar-profile-->
                    <li class="notification-list">
                        <a
                            class="nav-link arrow-none nav-icon offcanvas-btn"
                            href="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#Appearance"
                            role="button"
                            aria-controls="Rightbar"
                        >
                            <i class="ti ti-settings ti-spin"></i>
                        </a>
                    </li>
                </ul>
                <!--end topbar-nav-->

                <ul class="list-unstyled topbar-nav mb-0">
                    <li>
                        <button class="nav-link button-menu-mobile nav-icon" id="togglemenu">
                            <i class="ti ti-menu-2"></i>
                        </button>
                    </li>
                    <li class="hide-phone app-search">
                        <h4>Tahun Ajaran {{ sekolah.tahun_ajaran }}</h4>
                    </li>
                </ul>
            </nav>
            <!-- end navbar-->
        </div>

        <div class="page-wrapper">
            <!-- Page Content-->
            <div class="page-content-tab">
                <div class="container-fluid">
                    <!-- Page-Title -->
                    <router-view style="margin-top: 15px" />
                    <!-- end page title end breadcrumb -->
                </div>
                <!-- container -->

                <!--Start Rightbar-->
                <!--Start Rightbar/offcanvas-->
                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="Appearance"
                    aria-labelledby="AppearanceLabel"
                >
                    <div class="offcanvas-header border-bottom">
                        <h5 class="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                        <button
                            type="button"
                            class="btn-close text-reset p-0 m-0 align-self-center"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <h6>Account Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="settings-switch1"
                                />
                                <label class="form-check-label" for="settings-switch1">Auto updates</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="settings-switch2"
                                    checked
                                />
                                <label
                                    class="form-check-label"
                                    for="settings-switch2"
                                >Location Permission</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="settings-switch3"
                                />
                                <label
                                    class="form-check-label"
                                    for="settings-switch3"
                                >Show offline Contacts</label>
                            </div>
                            <!--end form-switch-->
                        </div>
                        <!--end /div-->
                        <h6>General Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="settings-switch4"
                                />
                                <label
                                    class="form-check-label"
                                    for="settings-switch4"
                                >Show me Online</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="settings-switch5"
                                    checked
                                />
                                <label
                                    class="form-check-label"
                                    for="settings-switch5"
                                >Status visible to all</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="settings-switch6"
                                />
                                <label
                                    class="form-check-label"
                                    for="settings-switch6"
                                >Notifications Popup</label>
                            </div>
                            <!--end form-switch-->
                        </div>
                        <!--end /div-->
                    </div>
                    <!--end offcanvas-body-->
                </div>
                <!--end Rightbar/offcanvas-->
                <!--end Rightbar-->

                <!--Start Footer-->
                <!-- Footer Start -->
                <Footer />
                <!-- end Footer -->
                <!--end footer-->
            </div>
            <!-- end page content -->
        </div>
    </div>
</template>

<script>
import Sidebar from "@/layouts/partials/sidebar/Index";
import Footer from "@/layouts/partials/Footer";

export default {
    components: {
        Sidebar,
        Footer,
    },
    data: () => ({
        sekolah: {},
    }),

    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn;
        },

        user_type: function () {
            return JSON.parse(localStorage.getItem("user")).user_type;
        },
    },

    mounted() {
        this.setStyle();
        if (this.isLoggedIn == false) {
            // window.location.href = "/";
            this.$router.push({ name: "home" });
        } else {
            this.getSekolah();
        }
    },

    methods: {
        getSekolah: function () {
            axios.get("/api/pub/sekolah").then((res) => {
                this.sekolah = res.data;
            });
        },

        setStyle: function () {
            $("body").addClass("dark-sidebar");
            // $("body").css({
            //     "background-image": "url('/assets/images/p-1.png')",
            //     "background-size": "cover",
            //     "background-position": "center center",
            // });
        },
    },
};
</script>

<style>
</style>