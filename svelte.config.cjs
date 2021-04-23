const sveltePreprocess = require("svelte-preprocess");
// eslint-disable-next-line no-unused-vars
const pkg = require('./package.json');
const vercel = require('@sveltejs/adapter-vercel');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
