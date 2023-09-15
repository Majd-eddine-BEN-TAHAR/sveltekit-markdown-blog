import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const currentTheme = browser && localStorage.getItem('color-scheme');

export const theme = writable(currentTheme ?? 'white');

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'white' : 'dark';
		document.documentElement.setAttribute('color-scheme', newTheme);
		localStorage.setItem('color-scheme', newTheme);
		return newTheme;
	});
}

export const count = writable(0);
