import { defineStore } from "pinia";
import controller from "../apis/controller.js";
export const useAppState = defineStore("appState", {
	
	
	state: () => ({
		blogs: [] as Array<Object>,
		user: {} as Object,
		blogPosts: [] as Array<Object>,
		blog: {} as Object,
		//Errors
		unHandledBackError: "" as String,
		backEndErrors: [] as Array<Object>,
	}),

	actions: {
		/**
		 * @description - Registers a user
		 * @param {Object} formObject - The form data
		 * @returns {void} - Returns nothing
		 */
		async registerUser(formObject: Object) {
			await controller
				.register(formObject)
				.then((res) => {
					this.$state.user = res.data.user;
					console.log(this.$state.user);
				})
				.catch((err) => {
					if (err.response.status === 400) {
						console.log(err.response);
						this.$state.backEndErrors = err.response.data;
					} else {
						console.error(err);
						const errMessage = "Oops! An error occured, please try again!";
						this.$state.unHandledBackError = errMessage;
					}
				});
		},

		/**
		 * @description - Login
		 * @param {Object} formObject - The form data
		 * @returns {void} - Returns nothing
		 */
		async login(formObject: Object) {
			await controller
				.login(formObject)
				.then((res) => {
					this.$state.user = res.data.user;
					console.log(this.$state.user);
				})
				.catch((err) => {
					if (err.response.status === 400) {
						console.log(err.response);
						this.$state.backEndErrors = err.response.data;
					} else {
						console.error(err);
						const errMessage = "Oops! An error occured, please try again!";
						this.$state.unHandledBackError = errMessage;
					}
				});
		},

		/**
		 * @description -Clears state errors
		 * @returns {void} - Returns nothing
		 */
		clearErrors() {
			this.$state.backEndErrors = [];
			this.$state.unHandledBackError = "";
		},
	},


	getters: {
		allBlogs: (state) => state.blogs,
		aBlogPosts: (state) => state.blogPosts,
		userData: (state) => state.user,
		blogData: (state) => state.blog,
	},
});
