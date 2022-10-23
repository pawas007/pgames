export default [
    {
        path: '/account',
        name: 'account',
        component: () => import('@/views/Account/Account'),
        meta: {
            auth: true,
            layout: 'account',
        },
        children: [
            {   path: 'dashboard',
                name: 'account-dashboard',
                component: () => import('@/views/Account/Dashboard'),
                meta: {
                    auth: true,
                    layout: 'account',
                },
            }
        ],

    },
]