
const routes =
    [ {
        path: '/',
        component: () => import('../layouts/AuthLayout.vue'),
        children: [
            {
                name: 'Home',
                path: '',
                component: () => import('../views/Login.vue')
            }
        ]
    },
    {
        path: '/register',
        component: () => import('../layouts/AuthLayout.vue'),
        children: [
            {
                name: 'Register',
                path: '',
                component: () => import('../views/Register.vue')
            }
        ]
    },

    {
        path: '/blog/create',
        component: () => import('../layouts/BlogLayout.vue'),
        children: [
            {
                name: 'create',
                path: '',
                component: () => import('../views/CreateBlog.vue')
            }
        ]
    },
    {
        path: '/blog/list-all',
        component: () => import('../layouts/BlogLayout.vue'),
        children: [
            {
                name: 'listAll',
                path: '',
                component: () => import('../views/ListBlogs.vue')
            }
        ]
    },
        // {
        //     path: '/blog/list-all/:id',
        //     component: () => import('../layouts/BlogLayout.vue'),
        //     children: [
        //         {
        //             name: 'viewBlogPost',
        //             path: '',
        //             component: () => import('../views/ViewBlogPost.vue')
        //         }
        //     ]
        // }
    ];

export default routes;