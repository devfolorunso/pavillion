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
				<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
					<!-- Email -->
					<q-input
						filled
						v-model="email"
						input-class="text-right "
						label-slot
						clearable
						hint="Email Address"
						lazy-rules
						:rules="[
							(val) =>
								(val && val.length > 0) || 'Please enter your email address',
						]"
					>
						<template v-slot:label>
							<div class="row items-center all-pointer-events">
								<q-icon
									class="q-mr-xs"
									color="steel-blue"
									size="24px"
									name="mail"
								/>
								Email Address

								<q-tooltip
									class="bg-grey-8"
									anchor="top left"
									self="bottom left"
									:offset="[0, 8]"
									>Email address</q-tooltip
								>
							</div>
						</template>
					</q-input>
					<!-- Password -->
					<q-space />

					<q-input
						v-model="password"
						filled
						:type="isPwd ? 'password' : 'text'"
						hint="Password"
						lazy-rules
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
export default defineComponent({
	name: "Home",
	setup() {
		const email = ref(null);
		const password = ref("");
		let isPwd = ref(true);
		const submitting = ref(false);
		const $q = useQuasar();

		return {
			email,
			password,
			isPwd,
			submitting,

			onSubmit() {
				submitting.value = true;
				$q.notify({
					color: "red-5",
					textColor: "white",
					icon: "warning",
					message: "Form submitted",
				});
			},

			onReset() {
				email.value = null;
				password.value = "";
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
