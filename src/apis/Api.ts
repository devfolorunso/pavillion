import axios from 'axios'
import NProgress from 'nprogress'
let Api = axios.create({baseURL:"https://pavilioncms-dev.herokuapp.com/api/v1"})

/* -----------------------  Add a request interceptor ---------------------- */
Api.interceptors.request.use(
    function(config)
    {
        NProgress.start()
        // console.log(config)
        return config
    },
    function(error)
    {
        // console.error(error)
        NProgress.done()
        return Promise.reject(error)
    },
)

/* ----------------------- Add a response interceptor ----------------------- */
Api.interceptors.response.use(
    function(response)
    {
        // console.log(response)
        NProgress.done()
        return response
    },
    function(error)
    {
        NProgress.done()
        return Promise.reject(error)
    },
)

export default Api
