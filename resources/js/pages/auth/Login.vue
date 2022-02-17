<template>
    <div class="container">
        <div class="row vh-100 d-flex justify-content-center">
            <div class="col-12 align-self-center">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4 mx-auto">
                            <div class="card">
                                <div class="card-body p-0 auth-header-box">
                                    <div class="text-center p-3">
                                        <a href="index.html" class="logo logo-admin">
                                            <img
                                                src="/assets/images/logo-sm.png"
                                                height="50"
                                                alt="logo"
                                                class="auth-logo"
                                            />
                                        </a>
                                        <h4
                                            class="mt-3 mb-1 fw-semibold text-white font-18"
                                        >Sistem Praktek Kerja Lapangan</h4>
                                        <p class="text-muted mb-0">SMK Darussalam Tarogong Kaler.</p>
                                    </div>
                                </div>
                                <div class="card-body pt-0">
                                    <form class="my-4" @submit.prevent="doLogin">
                                        <div class="form-group mb-2">
                                            <label class="form-label" for="username">Username</label>
                                            <input
                                                v-model="form.username"
                                                type="text"
                                                class="form-control"
                                                id="username"
                                                name="username"
                                                placeholder="Enter username"
                                            />
                                        </div>
                                        <!--end form-group-->

                                        <div class="form-group">
                                            <label class="form-label" for="userpassword">Password</label>
                                            <input
                                                type="password"
                                                v-model="form.password"
                                                class="form-control"
                                                name="password"
                                                id="userpassword"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <!--end form-group-->

                                        <div class="form-group row mt-3">
                                            <!-- <div class="col-sm-6">
                                                <div
                                                    class="form-check form-switch form-switch-success"
                                                >
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        id="customSwitchSuccess"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="customSwitchSuccess"
                                                    >Remember me</label>
                                                </div>
                                            </div>-->
                                            <!--end col-->
                                            <div class="col-sm-6 text-end">
                                                <!-- <a
                                                    href="auth-recover-pw.html"
                                                    class="text-muted font-13"
                                                >
                                                    <i class="dripicons-lock"></i> Forgot password?
                                                </a>-->
                                            </div>
                                            <!--end col-->
                                        </div>
                                        <!--end form-group-->

                                        <div class="form-group mb-0 row">
                                            <div class="col-12">
                                                <div class="d-grid mt-3">
                                                    <button class="btn btn-primary" type="submit">
                                                        Log In
                                                        <i class="fas fa-sign-in-alt ms-1"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <!--end col-->
                                        </div>
                                        <!--end form-group-->
                                    </form>
                                    <!--end form-->
                                </div>
                            </div>
                            <!--end card-->
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->
                </div>
                <!--end card-body-->
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            username: "",
            password: "",
        },
    }),

    mounted() {
        console.log("login page mounted");

        this.setStyle();
    },

    methods: {
        async doLogin() {
            if (this.form.username == "") {
                alert("Username can't be empty");
            } else if (this.form.password == "") {
                alert("Password can't be empty");
            } else {
                this.$store
                    .dispatch("login", this.form)
                    .then((res) => {
                        if (res.data.status == 1) {
                            swal(res.data.message, "Selamat Datang");

                            // window.location = "/";
                            this.$router.push({ name: "home" });
                        } else if (res.data.status == 0) {
                            swal({
                                title: "Gagal Masuk",
                                text: res.data.message,
                                icon: "warning",
                                button: "Ok",
                            });
                        }
                    })
                    .catch((err) => {});
            }
        },

        setStyle: function () {
            // class="auth-page" style="background-image: url('assets/images/p-1.png'); background-size: cover; background-position: center center;"
            console.log("set styles");
            $("body").addClass("auth-page");
            $("body").css({
                "background-image": "url('/assets/images/p-1.png')",
                "background-size": "cover",
                "background-position": "center center",
            });
        },
    },
};
</script>

<style scoped>
</style>