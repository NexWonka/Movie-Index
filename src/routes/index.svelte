<script context="module">
	import * as axi from 'axios';

	export async function load({ fetch }) {
		const movies = await fetch('https://jsonplaceholder.typicode.com/photos');
		const res = await movies.json();

		return {
			props: {
				res
			}
		};
	};
</script>

<script>
	export let res;
	let search;

	function searchMovies(){
	};
</script>

<div class="flex flex-wrap flex-column justify-center" id="container">
	<div class="w-full">
		<div class="flex flex-wrap justify-center items-center gap-5 py-10 px-10">
			<input class="w-1/2 h-14 px-10 rounded-full" type="text" placeholder="Search Movies..." bind:value={search}/>
			<button id="search" class="p-3 rounded-xl font-bold hover:text-white transition" type="submit" on:submit={searchMovies}>Search</button>
		</div>
		<div class="grid grid-cols-10 text-white gap-5 mx-10">
			{#each res as movies}
				<div>
					<div class="flex flex-wrap bg-red-500 p-5 items-center justify-center rounded-xl">
						<h1>{movies.title}</h1>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#container {
		background: #06113c;
	}
	#search{
		background: #FF8C32;
	}
	#search:active{
		background: #9c510a;
	}
</style>
