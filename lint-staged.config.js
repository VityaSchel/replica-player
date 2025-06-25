/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*.{js,ts,jsx,tsx,svelte,html,json}': 'prettier --write'
}
