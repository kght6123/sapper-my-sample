<script>
	import { count } from '../stores.js';

	function increment() {
		// TODO increment the count
		count.update(n => n + 1);
	}
</script>

<button on:click={increment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
	+
</button>