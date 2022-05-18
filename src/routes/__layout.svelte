<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Movies Index</title>
</svelte:head>

<div class="flex p-5 justify-between" id="nav_container">
	<div>
		<img src="" alt="Movies" />
	</div>
	<div class="flex gap-5 transition" id="nav_page">
		<a class="hover:text-white transition" href="/">Home</a>
		<a class="hover:text-white transition" href="/popular">Popular</a>
		<a class="hover:text-white transition" href="/soon">Coming Soon</a>
	</div>
</div>

<div class="flex flex-wrap flex-column justify-center py-10" id="container">
	<slot />
</div>

<div class="flex p-3 justify-end" id="nav_container">
	<div class="flex gap-5 text-sm" id="nav_page">
		<p class="italic">
			Made by <a href="https://github.com/NexWonka" class="not-italic font-bold">NexWonka</a>
		</p>
		<p class="italic">
			Using <a href="https://imdb-api.com/" class="not-italic font-bold">IMDb API</a>
		</p>
	</div>
</div>

<style>
	#nav_container {
		background: #ff8c32;
	}
	#container {
		background: #06113c;
	}
</style>
