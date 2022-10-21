export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Auth/Login.vue'),
        meta: {
            layout: 'blank',
        }

    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Auth/Register.vue'),
        meta: {
            layout: 'blank',
        }
    },

    {
        path: '/password/forgot-password',
        name: 'forgot-password',
        component: () => import('@/views/Auth/ForgotPassword.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/email/resend-verify',
        name: 'email-resend',
        component: () => import('@/views/Auth/EmailVerifyResend.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/email/verify',
        name: 'email-verify',
        component: () => import('@/views/Auth/EmailVerify.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/password-reset',
        name: 'reset-password',
        component: () => import('@/views/Auth/ResetPassword.vue'),
        meta: {
            layout: 'blank',
        },
    },
]