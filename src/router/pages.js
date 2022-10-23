export default [
    { path: '/404', component: () => import('@/views/404.vue' ),
        meta: {
            layout: 'blank',
        },

    },
    { path: '*', redirect: '/404' },

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
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About/About'),
        meta: {
            breadcrumb: [
                {
                    name: "Home",
                    link: "home"
                },
                {
                    name: "About"
                },
            ]
        }
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('@/views/ContactUs/ContactUs'),
        meta: {
            breadcrumb: [
                {
                    name: "Home",
                    link: "home"
                },
                {
                    name: "Contact Us"
                },
            ]
        }
    },

]