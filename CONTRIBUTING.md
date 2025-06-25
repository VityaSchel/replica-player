# Contributing to Replica Player

Thanks for your interest in contributing to Replica Player. Please read [LICENSE](./LICENSE) first as all your commits must be licensed under it unless you're not planning to merge your contributions to this repository.

Clone the repository and get yourself familiar with .editorconfig file. I also recommend using the provided settings.json file and installing the following extensions if you use Visual Studio Code:

```json
{
	"editor.tabCompletion": "on",
	"files.associations": {
		"tailwind.css": "tailwindcss"
	},
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	},
	"editor.quickSuggestions": {
		"strings": "on"
	},
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[svelte]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"editor.formatOnSave": true,
	"eslint.validate": ["javascript", "typescript", "svelte"],
	"editor.indentSize": "tabSize",
	"editor.tabSize": 2,
	"explorer.fileNesting.enabled": true,
	"explorer.fileNesting.expand": false,
	"explorer.fileNesting.patterns": {
		"+layout.svelte": "+layout.ts,+layout.ts,+layout.js,+layout.server.ts,+layout.server.js",
		"+page.svelte": "+page.server.ts,+page.server.js,+page.ts,+page.js",
		"package.json": ".eslint*, .github*, .huskyrc*, .lintstagedrc*, .vscode*, bun.lock, bun.lockb, bunfig.toml, eslint*, lint-staged*, package-lock.json, prettier*, .prettier*, workspace.json, .editorconfig",
		"README*": "AUTHORS, BACKERS*, CHANGELOG*, CITATION*, CODEOWNERS, CODE_OF_CONDUCT*, CONTRIBUTING*, CONTRIBUTORS, COPYING*, CREDITS, GOVERNANCE.MD, HISTORY.MD, LICENSE*, MAINTAINERS, README-*, README_*, RELEASE_NOTES*, ROADMAP.MD, SECURITY.MD, SPONSORS*",
		"svelte.config.*": "tsconfig.*, vite.config.*"
	},
	"explorer.compactFolders": false,
	"explorer.excludeGitIgnore": true
}
```

All code must be formatted with Prettier using rules defined in .prettierrc and linted with ESLint using config defined in eslint.config.js. The code must be valid and contain no TypeScript errors or warnings. Using eslint, prettier and TypeScript ignore comments is prohibited. Commenting out code is generally discouraged.

Please try your best to keep bundle size low by choosing small dependencies, prefer libraries with TypeScript definitions and always prefer code with no dependency rather than an extra dependency in simple cases. All libraries added via PRs must go through security audit and at the very least should be popular enough and monitored by automatic security audit tools to reduce risk of malicious code ending up in Replica Player code. It's a good idea to run `bun audit` after installing a new library.
