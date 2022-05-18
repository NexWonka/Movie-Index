<script>
	import { datas } from './getSoon';
</script>

<div class="w-full h-screen mx-10">
	<h1 class="font-bold text-3xl text-white">COMING SOON</h1>
	<p class="mb-5 text-white">―――――――――――――</p>
	<div class="grid grid-rows-1 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-5">
		{#each $datas as movies}
			<div>
				<a
					href={`/description/${movies.id}`}
					class="flex flex-col bg-white w-full p-2 items-center justify-start rounded-xl text-center hover:bg-gray-300 transition"
				>
					<img class="rounded-xl w-full" src={movies.image} alt="" />
					<h1 id="movieTitle" class="font-bold">{movies.title}</h1>
					<p id="movieYear" class="mb-5">({movies.year})</p>
				</a>
			</div>
		{:else}
			<div class="h-screen">
				<h1 class="text-white font-bold text-3xl">LOADING...</h1>
			</div>
		{/each}
	</div>
</div>
