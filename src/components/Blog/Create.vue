<template>
	<q-page
		class="home-page window-height window-width row justify-center items-center"
	>
		<q-card class="form-card row justify-center q-pa-md">
			<q-card-section class="text-center">
				<div class="text-h5 text-dark">Create Blog</div>
				<div class="text-subtitle2 text-muted text-grey">
					Post something nice 😉
				</div>
			</q-card-section>

			<div class="col-12 text-center self-center q-mt-lg">
				<q-form @submit="onSubmit" class="q-gutter-md">
					<!-- Email -->
					<q-input
						filled
						v-model="formObject.title"
						input-class="text-left "
						label="lorem ipsum dolor sit amet"
						clearable
						hint="Blog Title"
						lazy-rules
						:rules="[
							(val) => (val && val.length > 0) || 'Please enter blog title',
						]"
					>
					</q-input>
					<!-- Password -->
					<q-space />
					<q-input
						v-model="formObject.body"
						lazy-rules
						filled
						label="Blog body"
						autogrow
						:rules="[
							(val) => (val && val.length > 0) || 'Please enter blog content',
						]"
					>
						<template v-slot:prepend>
							<q-icon name="edit" />
						</template>
					</q-input>

					<div>
						<q-btn
							size="15px"
							unelevated
							type="submit"
							padding="10px 20px"
							rounded
							:loading="submitting"
							color="primary"
							label="Create"
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
	name: "Create",
	setup() {
		//Create form Object
		let formObject = ref({
			title: "",
			body: "",
		});

		const submitting = ref(false);
		const $q = useQuasar();

		return {
			formObject,
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
