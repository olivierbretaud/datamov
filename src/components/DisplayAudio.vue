<template>
	<div>
		<v-container fluid>
			<v-layout row wrap>
				<div class="movies-container">
					<router-link to="/search">
						<h3 class="go-back"><v-icon large class="arrow">keyboard_arrow_left</v-icon>Retour à la recherche</h3>
					</router-link>
					<v-layout row wrap>
							<v-flex  v-for="data in movies" v-bind:key="data.title"  lg4 md6  xs12 >
								<img :src="`images/${data.images.chart}`" class="movie-block" />
								<h2 >{{  data.title }}</h2>
								<h4 class="movie-info mb-3">{{  data.info }}</h4>
							</v-flex>
					</v-layout>
				</div>
				<div class="aside">
					<div class="emotion-container">
					<h2 class="audio-title">Audio </h2>
					<div class="emotion-item">
							<h3 class="text-legend">Dialogues</h3>
							<div class="audio-legend" style="background: linear-gradient(0.25turn,  #b51abb, #ff7400);"></div>
					</div>
					<div class="emotion-item">
							<h3 class="text-legend">Musique</h3>
							<div class="audio-legend" style="background: linear-gradient(0.25turn,  #00afd4, #00a749);"></div>
					</div>
					<div class="emotion-item">
							<h3 class="text-legend">Sons diverses</h3>
							<div class="audio-legend" style="background: linear-gradient(0.25turn,  #ffaf31, #ff7400);"></div>
					</div>
					</div>
					<router-link to="/displaySearch">
						<h2 class="sub-title" >Émotions</h2>
					</router-link>
					<h2 class="sub-title">Rythmique de la narration</h2>
					<h2 class="sub-title">Cadrage</h2>
					<h2 class="sub-title">Temporalité </h2>
					<h2 class="sub-title">Vocabulaire</h2>
					<h2 class="sub-title">Screamers</h2>
					<h2 class="sub-title">Séquences sensuelles</h2>
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
	created:  function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}
</script>

<style>

.sub-title {
	color: #3b3b3b;
	padding-top: 5px;
	padding-bottom: 8px;
	border-top: 0.10em solid #3b3b3b;
}

.sub-title:hover  {
	color: #bdbaba;
}

.audio-title {
	color: white;
	padding-top: 5px;
	padding-bottom: 8px;
}

.text-grey {
	color: #3b3b3b;
}

.text-white {
	color: white;
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
	color: #bdbaba;
}

.text-legend {
	color: #bdbaba;
	font-size: 16px;
}

.audio-legend {
	margin-top: 2px;
	margin-left: 20px;
	width: 80px;
	border-radius: 10px;
	height: 6px;
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
