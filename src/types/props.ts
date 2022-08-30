import { VideoQuality } from '/store/slices/playsource'

export interface PlayerProps {
  src: {
    uri: string
    quality: VideoQuality
  }[]
  width?: number
  height?: number
  resizeMode?: 'fit' | 'cover' | 'fill'
  segments?: Segment[]
  componentsProps?: {
    container?: { [key: string]: any }
    controls?: { [key: string]: any }
  }
}

export interface Segment {
  timeStart: number
  title: string
}