<template>
	<q-layout view="hhh lpR fff">
		<q-header reveal bordered class="bg-primary text-white">
			<q-toolbar>
				<q-toolbar-title class="page-title"> PAVILLION TEST </q-toolbar-title>

				<!-- <q-separator dark vertical inset />
				<q-btn stretch flat label="Link" /> -->

				<q-space />

				<q-btn-dropdown stretch flat label="Dropdown">
					<q-list>
						<q-item-label header>Folders</q-item-label>
						<q-item
							v-for="n in 3"
							:key="`x.${n}`"
							clickable
							v-close-popup
							tabindex="0"
						>
							<q-item-section avatar>
								<q-avatar icon="folder" color="secondary" text-color="white" />
							</q-item-section>
							<q-item-section>
								<q-item-label>Photos</q-item-label>
								<q-item-label caption>February 22, 2016</q-item-label>
							</q-item-section>
							<q-item-section side>
								<q-icon name="info" />
							</q-item-section>
						</q-item>
						<q-separator inset spaced />
						<q-item-label header>Files</q-item-label>
						<q-item
							v-for="n in 3"
							:key="`y.${n}`"
							clickable
							v-close-popup
							tabindex="0"
						>
							<q-item-section avatar>
								<q-avatar
									icon="assignment"
									color="primary"
									text-color="white"
								/>
							</q-item-section>
							<q-item-section>
								<q-item-label>Vacation</q-item-label>
								<q-item-label caption>February 22, 2016</q-item-label>
							</q-item-section>
							<q-item-section side>
								<q-icon name="info" />
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
				<q-separator dark vertical />
				<q-btn stretch flat label="Sign up" />
				<q-separator dark vertical />
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
import { ref, defineComponent } from "vue";

export default defineComponent({
	setup() {
		const leftDrawerOpen = ref(false);

		return {
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},
		};
	},
});
</script>

<style scoped>
.page-title {
	font-size: 1rem !important;
}
</style>
