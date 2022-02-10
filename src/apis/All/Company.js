import Api from '../Api'

export default {
    /* --------------------- Create Company @param - form data --------------------- */
    async create (form)
    {
        return Api.post('/company/register/',form,{
            headers: {Authorization: `Bearer ${ token }`},
        });
    },

    /* ----------------------------- Fetch All Posts ---------------------------- */
    async all (page)
    {
        const token = localStorage.getItem("eep_intl")

        return Api.get(`/post/postresource/?page=${ page }`,{
            headers: {Authorization: `Bearer ${ token }`},
        });

    },
    /* ----------------------------- Fetch All Posts ---------------------------- */
    async moreOnScroll ()
    {
        const token = localStorage.getItem("eep_intl")

        return Api.get('/post/infinite',{
            headers: {Authorization: `Bearer ${ token }`},
        });

    },
    /* ------------------------------- Fetch a Post  ----------------------------------- */
    async show (post_id)
    {
        const token = localStorage.getItem("eep_intl")

        return Api.get(`/post/postresource/ ${ post_id }`,{
            headers: {Authorization: `Bearer ${ token }`},
        });
    },


    /* ------------------------------- Update Post @Param FormData ----------------------------- */
    async update (post)
    {
        const token = localStorage.getItem("eep_intl")

        return Api.put(`/post/postresource/ ${ post }`,{
            headers: {
                Authorization: `Bearer ${ token }`
            },
        })
    },

    /* ------------------------------- DELETE Post @Param FormData ----------------------------- */
    async delete (post)
    {
        const token = localStorage.getItem("eep_intl")

        return Api.put(`/post/postresource/ ${ post }`,{
            headers: {
                Authorization: `Bearer ${ token }`
            },
        })
    },

    /* ------------------------------- User Posts ---------------------------------------------- */
    async userPosts (page)
    {
        const token = localStorage.getItem("eep_intl")

        return Api.get(`post/userposts?page=${ page }`,{
            headers: {Authorization: `Bearer ${ token }`},
        })
    },

    /* ----------------------------- Fetch All Posts ---------------------------- */
    async moreOnUserPostScroll ()
    {
        const token = localStorage.getItem("eep_intl")

        return Api.get('/post/infiniteuserposts',{
            headers: {Authorization: `Bearer ${ token }`},
        });

    },

    /* ----------------------------- Fetch All Posts Bids ---------------------------- */

    async getPostBid (post_id,page)
    {
        const token = localStorage.getItem("eep_intl")
        return Api.get(`/post/bids/ ${ post_id }?page=${ page }`,{
            headers: {
                Authorization: `Bearer ${ token }`
            },
        })
    },

    /* ----------------------------- Fetch All Infinte Posts Bids ---------------------------- */
    async moreOnPostBidScroll (post_id)
    {
        const token = localStorage.getItem("eep_intl")

        return Api.get(`/post/infinite/bids/ ${ post_id }`,{
            headers: {Authorization: `Bearer ${ token }`},
        });

    },
}