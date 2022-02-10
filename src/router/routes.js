
const routes =
    [ {
        path: '/',
        component: () => import('../layouts/FormLayout.vue'),
        children: [
            {
                name: 'Home',
                path: '',
                component: () => import('../views/SampleView.vue')
            }
        ]
    } ];

export default routes;