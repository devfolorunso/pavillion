import
{
    createRouter,
    createWebHashHistory,
} from 'vue-router';
import NProgress from 'nprogress'

import routes from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});


router.beforeEach((to,from,next) =>
{
    if (to.name) {
        NProgress.start()
        next()

    }
})
router.afterEach((to) =>
{
    if (to.name) {
        /* ------------ Complete the animation of the route progress bar. ----------- */
        NProgress.done()
    }
})
export default router;