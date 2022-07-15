# Replica Player

Video-player for React that is identical to YouTube's in-app player. YouTube video-player clone.

[Todo: add comparison of original player and Replica Player]

# Work in progress

## Motivation

YouTube player is probably the best universal video-player ever created, I have never met a player in the web with such a good UX. However, YouTube made it's impossible to play custom videos in YouTube native player. There was some attempts to recreate this player, but in most they're just examples and prototypes. There was no full-features, mobile-first, production-ready YouTube's player clone.

## Features

- Works on native HTML5 video element, so any format, that your browser can play, can also be played in Replica Player
- On mobile it's identical to YouTube's in-app player, on PC it's identical to YouTube's web player
- Features supported:
  - [ ] Fast-forwarding
  - [ ] Speed change
  - [ ] Quality versions
  - [ ] Subtitles
  - [ ] Hotkeys
  - [ ] Episodes
  - [ ] Aspect-ratio view modes: fit, cover, resize (mobile only)
  - [ ] Localization
- React v18 supported. Vue, Angular and Vanilla JS support may be added in future.
- TypeScript supported
- MIT licensed, not patented by Google LLC

## Install

```
npm i replica-player
```

```
yarn add replica-player
```

Compiled with TypeScript, bundled with Rollup. Building is done for CJS. If you need ESM code, you can follow instructions in [CONTRIBUTING.md](./CONTRIBUTING.md) file.

Tested with
- create-react-app@5.0.1
- Next.js@12.2.2

### Use with React

Developed with React 18.2.0

You must import `replica-player/dist/index.css` along with the component itself. For SSR and Next.js, import css globally in pages/_app.js file.

```jsx
import React from 'react'
import ReplicaPlayer from 'replica-player'
import 'replica-player/dist/index.css'

export default function YourApp() {
  // Component can hold a ref
  const ref = React.useRef()

  return (
    <ReplicaPlayer 
      src={'https://www.w3schools.com/html/mov_bbb.mp4'}
      ref={ref}
    />
  )
}
```

### API Reference

#### Props

Props with types ending with `?` are optional.

| Prop                      | Type    | Default   | Description                                                    |
| ------------------------- | ------- | :-------- | -------------------------------------------------------------- |
| src                       | string  | undefined | Media source                                                   |
| width                     | number? | 640       | Width of player's container. Can be overriden with css styles  |
| height                    | number? | 360       | Height of player's container. Can be overriden with css styles |
| componentsProps           | object? | undefined | Rest props for any components inside player                    |
| componentsProps.container | object? | undefined | Props for player's container div                               |
| componentsProps.controls  | object? | undefined | Props for player's controls                                    |

#### Ref API reference

[Todo]
