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
            ]
        },
    ]
};

export default admin_router;
