<script>
	import { count } from '../stores.js';

	function reset() {
		// TODO reset the 
		count.set(0);
	}
</script>

<button on:click={reset} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
	reset
</button>