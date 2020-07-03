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

<script>
	import { count, time, elapsed, count2, name, greeting } from '../stores.js';
	import Incrementer from '../components/Incrementer.svelte';
	import Decrementer from '../components/Decrementer.svelte';
	import Resetter from '../components/Resetter.svelte';

	// let count_value
	// const unsubscribe = count.subscribe(value => {
	// 	count_value = value
	// })

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	})
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
