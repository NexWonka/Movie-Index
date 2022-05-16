<script context="module">
	import * as axi from 'axios';

	export async function load({ fetch }) {
		const movies = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_wu3sr107');
		const guides = await movies.json();
        console.log(guides);

		return {
			props: {
				guides
			}
		};
	}
</script>

<script>
	export let guides;
</script>

<div class="flex flex-wrap h-screen flex-column justify-center" id="container">
	<div class="w-full">
		<div class="py-10 px-10">
			<input class="w-full h-14 px-10 rounded-full" type="text" placeholder="Search Movies..." />
		</div>
		<div class="grid grid-cols-10 text-white gap-5 mx-10">
			<div>
				<div class="flex flex-wrap bg-red-100 p-5 items-center justify-center rounded-xl">
					{#each guides as movies}
						<h1>{movies.items.title}</h1>
						<p>{movies.items.year}</p>
						<p>{movies.items.rating}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#container {
		background: #06113c;
	}
</style>
