<template>
	<v-container fluid>
		<v-layout row wrap class="pt-4" justify-center>
			<v-flex md4 xs12 class="ma-4 text-grey">
				<v-slider thumb-label color="yellow" thumb-color="yellow" tick-size=4 value="50" messages="La joie"></v-slider>
				<h3 class="mb-2">La joie</h3>
				<v-slider thumb-label color="#3db0d5" thumb-color="#3db0d5" tick-size=4  value="50" messages="La joie"></v-slider>
				<h3 class="mb-2">La Tristesse</h3>
				<v-slider thumb-label color="#cc385b" thumb-color="#cc385b" tick-size=4  value="50" messages="La joie"></v-slider>
				<h3 class="mb-2">La Peur</h3>
				<v-slider thumb-label color="#f07d0c" thumb-color="#f07d0c" tick-size=4  value="50" messages="La joie"></v-slider>
				<h3 class="mb-2">Le Stress</h3>
				<v-slider  thumb-label color="#3da84b" thumb-color="#3da84b" tick-size=4  value="50" messages="La joie"></v-slider>
				<h3 class="mb-2">L'Emerveillement</h3>
				<v-slider  thumb-label color="#884192" thumb-color="#884192" tick-size=4  value="50" messages="La joie"></v-slider>
				<h3 class="mb-2">La Surprise</h3>
				<router-link to="/displaySearch">
					<v-btn round  class="mt-5" >Rechercher</v-btn>
				</router-link>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Search',
	data () {
		return {
			slider: '',
		}
	}
}

</script>

<style>
.v-messages {
	display: none !important;
}
.v-input__slot {
	margin-bottom: 0px !important;
}

</style>
