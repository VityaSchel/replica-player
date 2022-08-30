import { VideoQuality } from '/store/slices/playsource'

export const formatQuality = (quality: VideoQuality) => {
  if(typeof quality === 'string') {
    return quality
  } else {
    return `${quality.width}x${quality.height}p${quality.fps}`
  }
}