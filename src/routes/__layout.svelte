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
		<a class="hover:text-white transition" href="#">Home</a>
		<a class="hover:text-white transition" href="#">Categories</a>
		<a class="hover:text-white transition" href="#">Popular</a>
		<a class="hover:text-white transition" href="#">Coming Soon</a>
	</div>
</div>
<slot />

<style>
	#nav_container {
		background: #ff8c32;
	}
</style>
