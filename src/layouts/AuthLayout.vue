<template>
	<q-layout view="hhh lpR fff">
		<q-header reveal bordered class="bg-primary text-white">
			<q-toolbar>
				<q-toolbar-title class="page-title"> PAVILLION TEST </q-toolbar-title>

				<!-- <q-separator dark vertical inset />
				<q-btn stretch flat label="Link" /> -->

				<q-space />
				<router-link :to="routeName === 'Home' ? '/register' : '/'">
					<q-separator dark vertical />
					<q-btn
						stretch
						flat
						:label="routeName === 'Home' ? 'Sign Up' : 'Login'"
					/>
					<q-separator dark vertical />
				</router-link>
			</q-toolbar>
		</q-header>

		<!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
		</q-drawer> -->

		<q-page-container>
			<router-view />
		</q-page-container>

		<q-footer elevated class="bg-grey-8 text-white" style="font-size: 11px">
		</q-footer>
	</q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
	setup() {
		const route = useRoute();
		let routeName = route.name;
		return {
			routeName,
		};
	},
});
</script>

<style scoped>
.page-title {
	font-size: 1rem !important;
}
</style>
