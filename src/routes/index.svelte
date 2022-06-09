<script>
	// @ts-nocheck

	import News from '../components/News.svelte';
	import { store } from '../stores/worldstate.js';
	function fetchdata(plat) {
 		let world1 = fetch('https://api.tenno.dev/' + plat).then((res) => res.json());
		world1.then((data) => {
			$store.worldstate = data;
		});
	}
	setInterval(() => {
 		fetchdata($store.platform.value);
	}, 60000);
	fetchdata($store.platform.value);
 	$: fetchdata($platform.value);
	$: world = $store.worldstate;
</script>

<div class="h-screen">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		<div class="..."><News news={world.news} /></div>
		<div class="...">{JSON.stringify(world.invasions[0])}</div>

		<div class="...">
			--- tagify ---<br />
			<text-red> red text </text-red>
			<flex> flexbox </flex>
			I'm feeling <i-line-md-emoji-grin /> today!
		</div>
		<div class="...">
			--- icons --- <br />
			<!-- A basic anchor icon from Phosphor icons -->
			<div class="i-ph-anchor-simple-thin" />
			<!-- An orange alarm from Material Design Icons -->
			<div class="i-mdi-alarm text-orange-400" />
			<!-- A large Vue logo -->
			<div class="i-logos-vue text-3xl" />
			<!-- Sun in light mode, Moon in dark mode, from Carbon -->
			<button class="i-carbon-sun dark:i-carbon-moon" />
			<!-- Twemoji of laugh, turns to tear on hovering -->
			<div
				class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
			/>
		</div>
	</div>

	<br />
</div>
