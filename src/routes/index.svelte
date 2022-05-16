<script>
	import { datas } from './getData';
</script>

<div class="flex flex-wrap flex-column justify-center" id="container">
	<div class="w-full">
		<div class="flex flex-wrap justify-center items-center gap-5 py-10 px-10">
			<input class="w-1/2 h-14 px-10 rounded-full" type="text" placeholder="Search Movies..." />
			<button id="search" class="p-3 rounded-xl hover:text-white transition" type="submit"
				>Search</button
			>
		</div>
		<div class="grid grid-cols-8 text-white gap-5 mx-10">
			{#each $datas as movies}
				<div>
					<div class="flex flex-wrap bg-red-500 p-5 items-center justify-center rounded-xl">
						<img class="rounded" src={movies.thumbnailUrl} alt="" />
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
	#search {
		background: #ff8c32;
	}
	#search:active {
		background: #9c510a;
	}
</style>
