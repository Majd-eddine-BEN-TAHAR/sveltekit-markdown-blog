<script>
	import { fade } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div class="my-transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.my-transition {
		height: 100%;
	}
</style>
