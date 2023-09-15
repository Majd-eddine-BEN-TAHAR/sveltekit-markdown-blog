<script>
	import { fly } from 'svelte/transition';
	import { theme, toggleTheme } from '$lib/store.js';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<img src="/sun.svg" alt="sun icon" />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<img src="/moon.svg" alt="moon icon" />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}
	div {
		display: flex;
		align-items: center;
	}
	img {
		width: 30px;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
