# Replica Player

![Minzipped size](https://badgen.net/bundlephobia/minzip/replica-player) ![License](https://badgen.net/npm/license/replica-player?color=orange)

Video-player for React that is identical to YouTube's in-app player. YouTube video-player clone.

[Todo: add comparison of original player and Replica Player]

# Work in progress

## Motivation

YouTube player is probably the best universal video-player ever created, I have never met a player in the web with such a good UX. However, YouTube made it's impossible to play custom videos in YouTube native player. There was some attempts to recreate this player, but in most they're just examples and prototypes. There was no full-features, mobile-first, production-ready YouTube's player clone.

## Features

- Works on native HTML5 video element, so any format, that your browser can play, can also be played in Replica Player
- On mobile it's identical to YouTube's in-app player, on PC it's identical to YouTube's web player
- Features supported ([roadmap](https://github.com/users/VityaSchel/projects/4/views/1)):
  - ❌ Fast-forwarding
  - ✅ Speed change
  - ✅ Quality versions
  - ❌ Subtitles
  - ❌ Hotkeys
  - ❌ Episodes
  - ❌ Playlists
  - ✅ Aspect-ratio view modes: fit, cover, resize
  - ❌ Localization
  - ❌ Chrome cast (using [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API))
- React v18 supported. Vue, Angular and Vanilla JS support may be added in future.
- TypeScript supported
- MIT licensed, not patented by Google LLC

Missing feature? Use [patch-package](https://npmjs.com/package/patch-package) to customize this player as you want and then kindly open an issue or PR :)

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

## Use with React

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
      src={[
        {
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
          quality: '720p'
        },
        {
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
          quality: {
            width: 1280,
            height: 720,
            fps: 30
          }
        }
      ]}
      ref={ref}
    />
  )
}
```

## API Reference

### Props

Props with types ending with `?` are optional.

| Prop                      | Type                       | Default   | Description                                                         |
| ------------------------- | -------------------------- | :-------- | ------------------------------------------------------------------- |
| src                       | array of objects           | undefined | Media source. Array of either presets or custom quality. See below. |
| width                     | number?                    | 640       | Width of player's container. Can be overriden with css styles       |
| height                    | number?                    | 360       | Height of player's container. Can be overriden with css styles      |
| resizeMode                | string?                    | 'fit'     | One of 'fit', 'cover' and 'fill'                                    |
| segments                  | [Segment](#segment)?[]     | []        | Array of video segments                                             |
| componentsProps           | object?                    | undefined | Rest props for any components inside player                         |
| componentsProps.container | object?                    | undefined | Props for player's container div                                    |
| componentsProps.controls  | object?                    | undefined | Props for player's controls                                         |
| subtitles                 | [Subtitles](#subtitles)?[] | []        | Subtitles. Array of objects. See below.                             |

#### `src` props

Sources are source files of the same video with different quality.

src prop is always array of objects with `uri` and `quality` properties, where URI is a link to video file (may be anything that browser understands) and quality is either preset or object with custom quality.

- Presets for qualities: `'144p' | '240p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '4320p'`
- Custom quality: `{ width: number, height: number, fps: number }` (will be displayed as `{width}x{height}p{fps}`)

### Interfaces

#### Segment

Video segment

| Prop      | Type   | Default   | Description                                         |
| --------- | ------ | :-------- | --------------------------------------------------- |
| timeStart | number | undefined | Seconds from start of the video when segment starts |
| title     | string | ""        | Title of segment                                    |

#### Subtitles

Currently not supported.

| Prop    | Type   | Default | Description                      |
| ------- | ------ | :------ | -------------------------------- |
| fileURI | string | ''      | URI of file with subtitles       |
| name    | string | ''      | Human-friendly name of subtitles |

### Ref API reference

[Todo]

## Legal notice

YouTube player's code is minified and copyrighted to YouTube, but the player itself is not patented/copyrighted. You can patent a technology feature (such as splitting videos in chunks, optimisation, which this player doesn't do), brand's logos, but you can't patent/copyright the web component, it's impossible :) Otherwise, everything in the web would be much more complicated. 

Source code of this player is written by me, Viktor Shcheclochkov @hloth \<legal@hloth.dev\>, as seen from commits history, and, as stated in LICENSE.md and below, I give anyone with copy of this component a permission to use it in any context as you wish: you can embed ads in it and sell products using this component without need to credit me (but I would appreciate you credit me tho).

## License

> MIT License
> 
> Copyright (c) 2022 Viktor Shchelochkov
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## Funding

Donate: [hloth.dev/donate](https://hloth.dev/donate)