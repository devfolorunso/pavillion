<template>
	<q-page
		class="home-page window-height window-width row justify-center items-center"
	>
		<q-card class="form-card row justify-center q-pa-md">
			<q-card-section class="text-center">
				<div class="text-h5 text-dark">Sign in to continue</div>
				<div class="text-subtitle2 text-muted text-grey">
					To sign in, please type in your company's <br />
					email address and password.
				</div>
			</q-card-section>

			<div class="col-12 text-center self-center q-mt-lg">
				<q-form @submit="onSubmit" class="q-gutter-md">
					<!-- Email -->
					<q-input
						filled
						v-model="formObject.email"
						input-class="text-left "
						label="example@pavillion.com"
						clearable
						hint="Email Address"
						lazy-rules
						:rules="[
							(val) =>
								(val && val.length > 0) || 'Please enter your email address',
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
					<!-- Password -->
					<q-space />

					<q-input
						v-model="formObject.password"
						filled
						:type="isPwd ? 'password' : 'text'"
						hint="Password"
						lazy-rules
						label="******"
						:rules="[
							(val) => (val && val.length > 0) || 'Please enter your password',
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

					<div>
						<q-btn
							size="15px"
							type="submit"
							unelevated
							padding="10px 20px"
							rounded
							:loading="submitting"
							color="primary"
							label="Sign in"
						/>
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
	name: "Login",
	setup() {
		//Get the Quasar Framework instance
		const appState = useAppState();
		appState.clearErrors();

		//Create form Object
		let formObject = ref({
			email: "",
			password: "",
		});

		let isPwd = ref(true);
		const submitting = ref(false);
		const $q = useQuasar();

		return {
			formObject,
			isPwd,
			submitting,

			onSubmit() {
				submitting.value = true;
				appState.login(formObject.value);
				if (Object.keys(appState.userData).length > 0) {
					submitting.value = false;
					$q.notify({
						message: "Success",
						color: "positive",
						position: "top",
						timeout: 2000,
					});
				} else {
					if (Object.keys(appState.backEndErrors).length > 0) {
						submitting.value = false;
						$q.notify({
							message: "Invalid email or password",
							color: "warn",
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
</style>
