<template>
<div>
<div class="background"></div>
	<v-container fluid >
		<img src="./assets/logo-datamov.svg" class="logo-home"/>
		<v-layout row wrap class="pt-4" justify-center>
			<v-flex md4 xs12 class="ma-2">
				<h2 class="baseline mb-5">Osez un nouveau regard sur le 7<sup>ème </sup>art</h2>
				<router-link to="/search">
					<v-btn round  class="mt-5" >trouver mon film</v-btn>
				</router-link>
			</v-flex>
		</v-layout>
	</v-container>
</div>

</template>

<script>
export default {
	name: 'home',
	data () {
		return {
			slider: '',
		}
	}
}

</script>

<style>

.background {
	position: fixed;
	background-image: url("./assets/home-page.svg" );
	background-position: right bottom, left top;
	background-repeat: no-repeat, repeat;
	filter: blur(5px);
	-webkit-filter: blur(5px);
	width: 100vw;
	height: 100%;
}
.logo-home {
	margin-top:  25vh;
	max-height: 50px;
	margin-left: 30px;
	margin-right: 30px;
}

.baseline {
	font-weight: 500;
	opacity: 0.3;
}

@media screen and (max-width: 959px) {
	.background {
		display: none;
	}
	.baseline {
		font-size: 15px;
	}
}

</style>
