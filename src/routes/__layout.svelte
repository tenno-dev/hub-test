<script>
	import 'virtual:uno.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { darkMode } from '../stores/theme.js';

	//import '$lib/global.css'
</script>

<svelte:head>
    {#if $darkMode}
    <link rel="stylesheet" href="/smui-dark.css" />
  {:else}
    <link rel="stylesheet" href="/smui.css" />
  {/if}
	<title>Warframe Info Hub  (WIP)</title>
</svelte:head>

<div class="bg-box flex flex-col h-screen overflow-hidden">
	<Navbar />

	<slot  class="h-screen"/>
	<Footer />
</div>

<style>
:global(body){
    display: block;
    margin: 0;
}
</style>
