import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/i18n/',
			strategy: ['preferredLanguage', 'baseLocale'],
			// https://github.com/opral/inlang-paraglide-js/issues/533
			isServer: 'typeof window === "undefined"'
		}),
		tailwindcss(),
		sveltekit()
	]
})
