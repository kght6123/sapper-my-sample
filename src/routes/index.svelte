<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script context="module">
	export async function preload(page, { index_loaded }) {
		const res = await this.fetch(`index.json`, { method: 'POST'});	//  このfetchはindex.json.jsをパラメータ付きで呼ぶ
		// fetch以外にもerror, redirectが使える https://sapper.svelte.dev/docs#Context
		const data = await res.json();
		console.log('post fetch result.', data);
		if (res.status === 200) {
			return { index_loaded };
		}
		return { index_loaded };
	};
</script>

<script>
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';
	import { stores } from '@sapper/app';
	import { count, time, elapsed, count2, name, greeting } from '../stores.js';
	import Incrementer from '../components/Incrementer.svelte';
	import Decrementer from '../components/Decrementer.svelte';
	import Resetter from '../components/Resetter.svelte';

	const { preloading, page, session } = stores();

	// let count_value
	// const unsubscribe = count.subscribe(value => {
	// 	count_value = value
	// })

	onMount(async () => {
		console.log('my-non-ssr-component')
		// const { host, path, params, query } = page
		console.log('page', page, /*host, path, params, query,*/ preloading, session)
	});

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	})

	const gotoAbout = async () => {
		await goto('/about');
	}

	const gotoSettings = async () => {
		await goto('/settings/profile');
	}

	const indexLoaded = async () => {
		console.log('indexLoaded', fetch)
		// session.update(() => {
		// 	return { index_loaded: true }
		// });
		session.set({ index_loaded: true })
		const res = await fetch(`index.json`, { method: 'POST'});	//  このfetchはindex.json.jsを呼ぶ
		const data = await res.json();
		console.log('post fetch result.', data);
	}

	export let index_loaded;
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>The time is {formatter.format($time)}</h1>

<p>
	This page has been open for
	{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>

<h1>Great success! { $count }</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>

<h1>The count2 is {$count2}</h1>

<button on:click={count2.increment}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
<button on:click={count2.decrement } class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
<button on:click={count2.reset} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">reset</button>

<h1>{$greeting}</h1>
<input bind:value={$name}>
<button on:click="{() => $name += '!'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
	Add exclamation mark!
</button>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

<button on:click={gotoAbout} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About</button>

<button on:click={gotoSettings} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Settings</button>

<button on:click={indexLoaded} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Index Loaded!!!</button>

<p>Session test {index_loaded}</p>