<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Movies Index</title>
</svelte:head>

<div class="container flex flex-wrap p-5 justify-between" id="nav_container">
	<div>
		<img src="" alt="Movies" />
	</div>
	<div class="flex flex-wrap gap-5" id="nav_page">
		<a href="#">Home</a>
		<a href="#">Categories</a>
		<a href="#">Popular</a>
		<a href="#">Trending</a>
	</div>
</div>
<slot />

<style>
	#nav_container {
		background: #FF8C32;
	}
	#nav_page{
		color: #06113C;
	}
</style>
