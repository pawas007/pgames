export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Auth/Register.vue'),
    },
    //
    // {
    //     path: '/forgot-password',
    //     name: 'forgot-password',
    //     component: () => import('@/views/Auth/ForgotPassword.vue'),
    //     meta: {
    //
    //         layout: 'full',
    //     },
    // },
    // {
    //     path: '/password/reset',
    //     name: 'reset-password',
    //     component: () => import('@/views/Auth/ResetPassword.vue'),
    //     meta: {
    //         layout: 'full',
    //     },
    // },
    //
    // {
    //     path: '/email/verify',
    //     name: 'email-verify',
    //     component: () => import('@/views/Auth/EmailVerify.vue'),
    //     meta: {
    //         layout: 'full',
    //     },
    // },
    //
    // {
    //     path: '/email/resend',
    //     name: 'email-resend',
    //     component: () => import('@/views/Auth/ResendEmailVerificarion.vue'),
    //     meta: {
    //         layout: 'full',
    //     },
    // },


]