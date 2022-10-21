export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/HomeView'),

    },
    {
        path: '/privacy-policy/',
        name: 'privacy-policy',
        component: () => import('@/views/Policy/Policy'),
        meta: {

            breadcrumb: [
                {
                    name: "Home",
                    link: "home"
                },

                {
                    name: "Privacy policy"
                },

            ]
        }
    },
]