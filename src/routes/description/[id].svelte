<script context="module">
	export async function load({ params }) {
		let id = params.id;
		let url = `https://imdb-api.com/en/API/Title/k_wu3sr107/${id}`;
		let getDetail = await fetch(url);
		let detail = await getDetail.json();
		return { props: { detail } };
	}
</script>

<script>
	export let detail;
</script>

<div class="flex flex-wrap flex-col bg-white p-5 rounded-xl mx-5">
	<div class="flex flex-row justify-end">
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
	<div class="flex flex-row gap-5">
		<img class="w-1/3 rounded-xl" src={detail.image} alt="" />
		<div class="flex flex-col gap-2">
			<h1 class="text-5xl font-bold">{detail.title}</h1>
			<p class="text-3xl">{detail.year}</p>
			<p class="font-bold">―――――――――――――――――――――――――――――――――――――――――</p>
			<h1 class="text-xl">{detail.plot}</h1>
			<p class="font-bold">―――――――――――――――――――――――――――――――――――――――――</p>
			<h1 class="text-xl font-bold italic">Directors</h1>
			<h1 class="text-xl">{detail.directors}</h1>
			<h1 class="text-xl font-bold italic">Writers</h1>
			<h1 class="text-xl">{detail.writers}</h1>
			<h1 class="text-xl font-bold italic">Casts</h1>
			<h1 class="text-xl">{detail.stars}</h1>
			<h1 class="text-xl font-bold italic">Awards</h1>
			<h1 class="text-xl">{detail.awards !== "" ? detail.awards : 'None'}</h1>
		</div>
	</div>
</div>
