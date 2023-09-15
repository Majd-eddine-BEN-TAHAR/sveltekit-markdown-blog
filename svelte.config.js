import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/lib/layouts/MdsvexLayout.svelte'
	},
	// this is the code highliter, and he ssaid that he got issue with the package so he searched for a solution and he found one in the github issues of the package, but if you don't want to highlihjt the code and just make it normal you can avoid that, he used a specific highliter which will make your code like in vscode themes
	// syntax highliter:go to 1:02:23
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'dark-plus'
			});
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\`}`;
		}
	},
	// to pass configurations to the plugin: you can encounter inside curly brackets and then add an object in it to pass the configurations you want, the remarkToc is an example
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
