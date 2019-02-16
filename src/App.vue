<template>
	<v-app dark>
		<Navbar/>
		<transition name="slide-fade">
			<router-view/>
		</transition>
	</v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default  {
	name: 'app',
	components: {
		Navbar,
	}
}
</script>

<style>
#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	padding-top: 64px;
	text-align: center;
	color: white;
}

.theme--dark.application {
	background: #0F0F16 !important;
}

a {
	color: transparent !important;
}

.text-grey {
	color: #606060;
}

.slide-fade-enter-active {
	transition: all 0.8s ease;
}
.slide-fade-leave-active {
	transition: all 0s ease
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(200px);
	opacity: 0;
}

@media screen and (max-width: 959px) {
	#app {
		padding-top: 48px;
		background-color: #0F0F16 !important;
	}
}
</style>
