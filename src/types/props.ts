export interface PlayerProps {
  src: string
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