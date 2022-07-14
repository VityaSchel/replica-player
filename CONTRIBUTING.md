# Contributing

## Building

Run `npm run build` which bundles /src folder with Rollup. You can edit src/rollup.confg.js to change Rollup's behaviour.

### How to compile ESM code?

1. Add `"module": "dist-esm/index.js"` to package.json
2. Change `"files"` to `"files": ["dist", "dist-esm"]` in package.json
3. Add to rollup.config.js in output
```js
{
  file: packageJson.module,
  format: 'esm'
},
```
4. Run `npm run build`
5. Now you should see dist and dist-esm directories in the project