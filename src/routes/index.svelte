<script>
	import { onMount } from 'svelte';
	import { datas } from './getData';

	onMount(async () => {
		await datas;
	});
</script>

<div class="flex flex-wrap flex-column justify-center py-10" id="container">
	<div class="w-full">
		<h1 class="font-bold text-8xl text-white text-center">MOVIE INDEX</h1>
		<div class="flex flex-wrap justify-center items-center gap-5 py-10 px-10">
			<input class="w-1/2 h-14 px-10 rounded-full" type="text" placeholder="Search Movies..." />
			<button id="search" class="p-3 rounded-xl hover:text-white transition" type="submit"
				>Search</button
			>
		</div>
		<div class="grid grid-cols-8 gap-5 mx-10">
			{#each $datas as movies}
				<div>
					<div class="flex flex-col bg-white p-2 items-center justify-start rounded-xl text-center">
						<img class="rounded-xl" src={movies.image} alt="" />
						<h1 id="movieTitle" class="font-bold">{movies.title}</h1>
						<p id="movieYear" class="mb-5">({movies.year})</p>
						<p class="self-start text-xs">Rating {movies.imDbRating} ({movies.imDbRatingCount})</p>
						<p class="self-start text-xs">Rank {movies.rank}</p>
						<p class="self-start text-xs">Popularity {movies.rankUpDown}</p>
					</div>
				</div>
			{:else}
				<div class="h-screen">
					<h1 class="text-white font-bold text-3xl">LOADING...</h1>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#container {
		background: #06113c;
	}
	#search {
		background: #ff8c32;
	}
	#search:active {
		background: #9c510a;
	}
	#movieTitle {
		color: #06113c;
	}
	#movieYear {
		color: #06113c;
	}
</style>
