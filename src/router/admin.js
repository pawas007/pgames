export default [
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/Admin/Admin'),
        meta: {
            auth: true,
            layout: 'admin',
        },
        children: [
            {
                name: 'admin-dashboard',
                path: 'dashboard',
                component: () => import('@/views/Admin/Dashboard'),
                meta: {
                    auth: true,
                    layout: 'admin',
                },
            }
        ],

    },
]