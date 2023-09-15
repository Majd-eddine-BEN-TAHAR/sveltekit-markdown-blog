import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts = [];

	// this is using vite import, you can also use nodejs to do that, but this is more simple and also it works in multiple platforms, for more info search for it in vitejs
	// for the eager proprety is also from vitejs, and it will read the content of the file for you, check vitejs for more info
	const postsPaths = import.meta.glob('/src/posts/*.md', { eager: true });
	// console.log(postsPaths);
	for (const path in postsPaths) {
		const file = postsPaths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		const metadata = file.metadata;
		const post = { ...metadata, slug };

		// this is for checking to avoid errors in runtime
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			// i will return only the posts that has the published attribute set to true
			// this is a mechanism to let a post private until i want to publish it then i can set it to true
			if (post.published) {
				posts.push(post);
			}
		}
	}

	// i sorted them from the newer to the older, for that i made second - first
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
	return posts;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
