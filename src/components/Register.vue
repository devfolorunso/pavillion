<template>
	<q-page
		class="home-page window-height window-width row justify-center items-center"
	>
		<q-card class="form-card row justify-center q-pa-md">
			<q-card-section class="text-center">
				<div class="text-h5 text-dark">Sign up to get started</div>
				<div class="text-subtitle2 text-muted text-grey">
					Please fill out the details below
				</div>
			</q-card-section>

			<div class="col-12 text-center self-center q-mt-lg">
				<q-form class="q-pa-md">
					<!--Company Name Field -->
					<div class="row">
						<div class="col-12 col-md-12 justify-start">
							<!--  -->
							<div class="text-red text-left mt-5">
								{{ backEndErr }}
							</div>
							<!--  -->
							<q-input
								filled
								v-model="formObject.company_name"
								input-class="text-left "
								label="Company's name"
								clearable
								hint="Company's name"
								lazy-rules
								:rules="[
									(val) =>
										(val && val.length > 0) ||
										'Please enter your companys name',
								]"
							>
								<template v-slot:prepend>
									<q-icon
										name="mdi-office-building"
										class="q-mr-xs"
										color="steel-blue"
										size="24px"
									/>
								</template>
							</q-input>
						</div>
					</div>
					<q-space />
					<!-- Email & Password Fields -->
					<div class="row">
						<div class="col-12 col-md-6">
							<q-input
								filled
								v-model="formObject.user.email"
								input-class="text-left "
								label="example@pavillion.com"
								clearable
								hint="Email address"
								lazy-rules
								:rules="[
									(val) =>
										(val && val.length > 0) ||
										'Please enter your email address',
								]"
							>
								<template v-slot:prepend>
									<q-icon
										class="q-mr-xs"
										color="steel-blue"
										size="24px"
										name="mail"
									/>
								</template>
							</q-input>
						</div>
						<div class="col-12 col-md-6">
							<q-input
								v-model="formObject.user.password"
								filled
								:type="isPwd ? 'password' : 'text'"
								hint="Password"
								lazy-rules
								label="******"
								:rules="[
									(val) =>
										(val && val.length > 0) || 'Please enter your password',
								]"
							>
								<template v-slot:append>
									<q-icon
										:name="isPwd ? 'visibility_off' : 'visibility'"
										class="cursor-pointer"
										@click="isPwd = !isPwd"
									/>
								</template>
							</q-input>
						</div>
					</div>
					<q-space />
					<!-- FirstName & LastName Fields -->
					<div class="row">
						<div class="col-12 col-md-6">
							<!-- First Name -->
							<q-input
								filled
								v-model="formObject.user.first_name"
								input-class="text-left "
								label="First name"
								clearable
								hint="Your first name"
								lazy-rules
								:rules="[
									(val) =>
										(val && val.length > 0) || 'Please enter your first name',
								]"
							>
							</q-input>
						</div>
						<div class="col-12 col-md-6">
							<q-input
								v-model="formObject.user.last_name"
								filled
								hint="Your last name"
								label="Last name"
								lazy-rules
								:rules="[
									(val) =>
										(val && val.length > 0) || 'Please enter your last name',
								]"
							>
							</q-input>
						</div>
					</div>

					<div class="mt-5">
						<q-btn
							unelevated
							rounded
							:loading="submitting"
							color="primary"
							label="Sign Up"
							@click.prevent="onSubmit()"
						/>
					</div>

					<div class="mt-5 text-center">
						Already have an account?
						<router-link to="/" class="text-blue">Sign in</router-link> to
						continue.
					</div>
				</q-form>
			</div>
		</q-card>
	</q-page>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useQuasar } from "quasar";
import { useAppState } from "../stores/appState";
export default defineComponent({
	name: "Register",
	setup() {
		//Get the Quasar Framework instance
		const appState = useAppState();
		appState.clearErrors();

		let isPwd = ref(true);
		const submitting = ref(false);
		const $q = useQuasar();
		let formObject = ref({
			company_name: null,
			user: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
			},
		});

		return {
			formObject,
			isPwd,
			submitting,
			backEndErr: appState.unHandledBackError,
			onSubmit() {
				submitting.value = true;
				appState.registerUser(formObject.value);
				if (Object.keys(appState.userData).length > 0) {
					submitting.value = false;
					$q.notify({
						message: "User registered successfully",
						color: "positive",
						position: "top",
						timeout: 2000,
					});
				} else {
					if (Object.keys(appState.backEndErrors).length > 0) {
						submitting.value = false;
						$q.notify({
							message: "Company with this name already exists.",
							color: "negative",
							position: "top",
							timeout: 2000,
						});
					} else {
						submitting.value = false;
						$q.notify({
							message: "Something went wrong! Please try again later",
							color: "negative",
							position: "top",
							timeout: 2000,
						});
						return;
					}
				}
			},
		};
	},
});
</script>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
.home-form {
	margin: 0px auto;
}
.mt-9 {
	margin-top: 5rem;
}
.center {
	/* Center vertically and horizontally */
	display: flex;
	justify-content: center;
	align-items: center;
}
.input-fields {
	width: 400px;
	height: auto;
}
.form-card {
	width: 100%;
	max-width: 600px;
	padding: 2.5rem;
}
.row {
	padding: 0.5rem;
}
.row + .row {
	margin-top: 1.2rem;
}
.mt-5 {
	margin-top: 1.5rem;
}
</style>

function unHandledError(unHandledError: any): any { throw new Error("Function
not implemented."); }
