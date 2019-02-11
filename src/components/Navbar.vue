<template>
	<v-toolbar fixed>
		<img src="./assets/logo-datamov.svg" class="logo"/>
		<v-spacer></v-spacer>
		<router-link to="/">
			<v-btn icon>
				<v-icon>search</v-icon>
			</v-btn>
		</router-link>
		<v-toolbar-side-icon></v-toolbar-side-icon>
	</v-toolbar>
</template>

<script>
export default {
	name: 'Navbar',
	props: {
		msg: String
	},
}
</script>

<style scoped>
.theme--dark.v-toolbar {
	background-color: #09090C !important;
}

.logo {
	max-height: 25px
}
</style>
