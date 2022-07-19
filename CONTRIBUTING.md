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

## Directories

/src is where the project lives. It must be compiled into /dist and then distributed. All files and components must be in /src except for tools that used for building/linting and special files.

/src/components is where React components should be placed

/src/data is where metadata stored (such as translation strings)

/src/store is Player's storage (redux and reducers/slices)

/src/components/Foreground is where all components in Player's foreground must be stored, user interface

/src/components/Controls/icons is Controls icons, they mustn't have any context/redux logic and can only use props to change/render states

/src/components/Controls/icons/animations is directory for SVGs animations metadata, such as 'd' attribute keyframes

/src/components/VideoPlayer is HTML5 player's component and it's direct interactions, do not place any YouTube-related logic here