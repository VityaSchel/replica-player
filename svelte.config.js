import adapter from 'svelte-adapter-bun-next'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$m: 'src/lib/i18n/messages.js'
		}
	}
}

export default config
