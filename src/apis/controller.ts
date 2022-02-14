import Api from './Api';

export default {
	/* --------------------- Create Company @param - form data --------------------- */
	async register(form: object) {
		return Api.post("/company/register/", form);
	},

	/* ----------------------------- Sign In ---------------------------- */
	async login(form: object) {
		return Api.post("/user/auth/", form);
	},

	/* --------------------- Create a blog --------------------- */
	async createBlog(form: object) {
		return Api.post("/blog/create/", form);
	},

	/* ----------------------------- Fetch All Posts ---------------------------- */
	async listBlogs() {
		// const token = localStorage.getItem("eep_intl")
		return Api.get("/blog/all/");
	},

	/* ----------------------------- Fetch All Infinte Posts Bids ---------------------------- */
	// async moreOnPostBidScroll (post_id)
	// {
	//     const token = localStorage.getItem("eep_intl")

	//     return Api.get(`/post/infinite/bids/ ${ post_id }`,{
	//         headers: {Authorization: `Bearer ${ token }`},
	//     });

	// },
};