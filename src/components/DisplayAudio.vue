<template>
	<div>
		<v-container fluid>
			<v-layout row wrap>
				<div class="movies-container">
					<router-link to="/">
						<h3 class="go-back"><v-icon large class="arrow">keyboard_arrow_left</v-icon>Retour à la recherche</h3>
					</router-link>
					<v-layout row wrap>
							<v-flex  v-for="data in movies" v-bind:key="data.title"  lg4 md6  xs12 >
								<img :src="`images/${data.images.chart}`" class="movie-block" />
								<h2 class="mb-3">{{  data.title }}</h2>
								<!-- <h4>{{  data.title }}</h4> -->
							</v-flex>
					</v-layout>
				</div>
				<div class="aside">
					<div class="emotion-container">
						<h2>Émotions</h2>
						<div class="emotion-item">
							<h3>La joie</h3>
							<div class="circle" style="background-color:yellow;"></div>
						</div>
						<div class="emotion-item">
							<h3>La Tristesse</h3>
							<div class="circle" style="background-color:#3db0d5;"></div>
						</div>
						<div class="emotion-item">
							<h3>La Peur</h3>
							<div class="circle" style="background-color:#cc385b;"></div>
						</div>
						<div class="emotion-item">
							<h3>Le Stress</h3>
							<div class="circle" style="background-color:#f07d0c;"></div>
						</div>
						<div class="emotion-item">
							<h3>L'Emerveillement</h3>
							<div class="circle" style="background-color:#3da84b;"></div>
						</div>
						<div class="emotion-item">
							<h3>La Surprise</h3>
							<div class="circle" style="background-color:#884192;"></div>
						</div>
					</div>
					<h2 class="sub-title">Rythmique de la narration</h2>
					<h2 class="sub-title">Audio </h2>
					<h2 class="sub-title">Cadrage</h2>
					<h2 class="sub-title">Temporalité </h2>
					<h2 class="sub-title">Vocabulaire</h2>
				</div>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import data from './assets/movies.json'

export default {
	name: 'DisplayAudio',
	data() {
		return {
			movies: data.movies
		};
	},
}
</script>

<style>

.sub-title {
	color: #3b3b3b;
	padding-top: 5px;
	padding-bottom: 8px;
	border-top: 0.10em solid #3b3b3b;
}

.sub-title:hover {
	color: #bdbaba;
}

.emotion-container {
	margin-bottom: 20px;
}

.emotion-item {
	color: #3b3b3b;
	padding-top: 8px;
	padding-bottom: 8px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.emotion-item:hover {
	color: #bdbaba;;
}

.circle {
	margin-top: 2px;
	margin-left: 8px;
	width: 12px;
	border-radius: 10px;
	height: 12px;
}

.go-back {
	color: #606060;
	display: flex;
	align-items: center;
}

.arrow {
	color:  #606060 ! important;
}

.movies-container {
	width: 80%;
}

.movie-block {
	padding: 10px;
	margin-top: 15px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0px;
	width: 300px;
	height: 300px;
}

.container {
	padding: 0px !important;
}

.aside {
	position: fixed;
	right: 0px;
	text-align: right;
	padding: 30px;
	width: 20%;
	min-height: 100vh;
	background-color:#0D0D11;
  /* box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 10px 10px 10px 10px rgba(0,0,0,.12); */
}

@media screen and (max-width: 1150px) {
	.aside {
		width: 30%;
	}
	.movies-container {
		width: 70%
	}
}

@media screen and (max-width: 800px) {
	.aside {
		width: 40%;
	}
	.movies-container {
		width: 60%
	}
	.go-back {
		margin-top: 10px;
	}
}

@media screen and (max-width: 600px) {
	.aside {
		position: relative;
		width: 100%;
		margin-top: 40px;
		min-height:  70%;
	}
	.movies-container {
		width: 100%
	}
}

</style>
