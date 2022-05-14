let admin_router = {
    path: "/admin_area/",
    component: () => import("@/pages/Blank"),
    children: [
        {
            path: "pengaturan/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.pengaturan.index",
                    component: () => import("@/pages/admin/pengaturan/Index"),
                },
            ]
        },
        {
            path: "pkl/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.pkl.index",
                    component: () => import("@/pages/admin/pkl/Index"),
                },
                {
                    path: "detail/:pkl_id",
                    name: "admin.pkl.detail",
                    component: () => import("@/pages/admin/pkl/Detail"),
                },
            ]
        },
        {
            path: "rombel/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.rombel.index",
                    component: () => import("@/pages/admin/rombel/Index"),
                },
                {
                    path: "detail/:rombel_id",
                    name: "admin.rombel.detail",
                    component: () => import("@/pages/admin/rombel/Detail"),
                },
                {
                    path: "edit/:rombel_id",
                    name: "admin.rombel.detail",
                    component: () => import("@/pages/admin/rombel/Detail"),
                },
                {
                    path: "add",
                    name: "admin.rombel.add",
                    component: () => import("@/pages/admin/rombel/Add"),
                },
            ]
        },
        {
            path: "prodi/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.prodi.index",
                    component: () => import("@/pages/admin/prodi/Index"),
                },
                {
                    path: "detail/:prodi_id",
                    name: "admin.prodi.detail",
                    component: () => import("@/pages/admin/prodi/Detail"),
                },
                {
                    path: "edit/:prodi_id",
                    name: "admin.prodi.detail",
                    component: () => import("@/pages/admin/prodi/Detail"),
                },
                {
                    path: "add",
                    name: "admin.prodi.add",
                    component: () => import("@/pages/admin/prodi/Add"),
                },
            ]
            },
        {
            path: "guru/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.guru.index",
                    component: () => import("@/pages/admin/guru/Index"),
                },
                {
                    path: "detail/:guru_id",
                    name: "admin.guru.detail",
                    component: () => import("@/pages/admin/guru/Detail"),
                },
            ]
        },
        {
            path: "siswa/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.siswa.index",
                    component: () => import("@/pages/admin/siswa/Index"),
                },
                {
                    path: "detail/:siswa_id",
                    name: "admin.siswa.detail",
                    component: () => import("@/pages/admin/siswa/Detail"),
                },
            ]
        },
        {
            path: "instansi/",
            component: () => import("@/pages/Blank"),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "index",
                    name: "admin.instansi.index",
                    component: () => import("@/pages/admin/instansi/Index"),
                },
                {
                    path: "detail/:instansi_id",
                    name: "admin.instansi.detail",
                    component: () => import("@/pages/admin/instansi/Detail"),
                },
                {
                    path: "add",
                    name: "admin.instansi.add",
                    component: () => import("@/pages/admin/instansi/Add"),
                },
            ]
        },
    ]
};

export default admin_router;
