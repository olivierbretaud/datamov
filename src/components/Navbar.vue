<template>
	<v-toolbar fixed>
		<img src="./assets/logo-datamov.svg" class="logo"/>
		<v-spacer></v-spacer>
		<v-toolbar-side-icon></v-toolbar-side-icon>
	</v-toolbar>
</template>

<script>
export default {
	name: 'Navbar',
	props: {
		msg: String
	}
}
</script>

<style scoped>
.logo {
	max-height: 25px
}
</style>
