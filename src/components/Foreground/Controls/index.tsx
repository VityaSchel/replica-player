import { PlayerProps } from '/components/player'
import PCControls from './PCControls'

export default function Controls(props: PlayerProps) {
  return (
    <>
      <PCControls {...props} />
    </>
  )
}