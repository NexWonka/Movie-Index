<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { datas } from './getData';
	import axios from 'axios';

	let query = '';
	let click = 0;
	let resQuery = writable([]);

	onMount(async () => {
		await datas;
	});

	async function search() {
		const response = await axios.get(`https://imdb-api.com/en/API/SearchTitle/k_wu3sr107/${query}`);
		const data = response.data.results;
		click++;
		return resQuery.set(data);
	}

	function clear() {
		query = '';
		click = 0;
	}
</script>

<div class="w-full mx-10">
	<h1 class="font-bold text-8xl text-white text-center">MOVIE INDEX</h1>
	<div class="flex flex-wrap justify-center items-center gap-2 py-10 px-10">
		<input
			class="w-1/2 h-14 px-10 rounded-full"
			type="text"
			placeholder="Search Movies..."
			bind:value={query}
		/>
		{#if !click}
			<button
				id="search"
				class="p-3 rounded-full hover:text-white transition"
				type="submit"
				on:click={search}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg></button
			>
		{:else}
			<button
				id="search"
				class="p-3 rounded-full hover:text-white transition"
				type="submit"
				on:click={clear}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg></button
			>
		{/if}
	</div>
	<h1 class="font-bold text-3xl text-white">BOX OFFICE POPULAR</h1>
	<p class="mb-5 text-white">―――――――――――――</p>
	<div class="grid grid-rows-1 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-5">
		{#if !click}
			{#each $datas as movies}
				<div>
					<a
						href={`/description/${movies.id}`}
						class="flex flex-col bg-white w-full p-2 items-center justify-start rounded-xl text-center hover:bg-gray-300 transition"
					>
						<img class="rounded-xl w-full" src={movies.image} alt="" />
						<h1 id="movieTitle" class="font-bold">{movies.title}</h1>
						<p id="movieYear" class="mb-5">({movies.year})</p>
						<p class="self-start text-xs">
							Rating {movies.imDbRating} ({movies.imDbRatingCount})
						</p>
						<p class="self-start text-xs">Rank {movies.rank}</p>
						<p class="self-start text-xs">Popularity {movies.rankUpDown}</p>
					</a>
				</div>
			{:else}
				<div class="h-screen">
					<h1 class="text-white font-bold text-3xl">LOADING...</h1>
				</div>
			{/each}
		{:else}
			{#each $resQuery as movies}
				<div>
					<a
						href={`/description/${movies.id}`}
						class="flex flex-col h-full md:w-full bg-white p-2 items-center justify-center md:justify-start rounded-xl text-center"
					>
						<img class="rounded-xl" src={movies.image} alt="" />
						<h1 id="movieTitle" class="font-bold">{movies.title}</h1>
						<p id="movieYear" class="mb-5">{movies.description}</p>
					</a>
				</div>
			{:else}
				<div class="h-screen">
					<h1 class="text-white font-bold text-3xl">LOADING...</h1>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
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
