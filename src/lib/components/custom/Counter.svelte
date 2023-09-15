<script>
	export let count;
</script>

<p>{count}</p>
<div>
	<button on:click={() => (count += 1)}> + </button>
	<button on:click={() => (count -= 1)}> - </button>
</div>
