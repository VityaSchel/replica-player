import styles from './styles.module.scss'

export default function Fullscreen(props: { collapse: boolean }) {
  return (
    <svg height='100%' version='1.1' viewBox='0 0 36 36' width='100%' className={styles.fullscreen}>
      {!props.collapse 
        ? (<>
          <g className={styles.corner0}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-6'>
            </use>
            <path d='m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z' id='ytp-id-6'>
            </path>
          </g>
          <g className={styles.corner1}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-7'>
            </use>
            <path d='m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z' id='ytp-id-7'>
            </path>
          </g>
          <g className={styles.corner2}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-8'>
            </use>
            <path d='m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z' id='ytp-id-8'>
            </path>
          </g>
          <g className={styles.corner3}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-9'>
            </use>
            <path d='M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z' id='ytp-id-9'>
            </path>
          </g>
        </>) : (<>
          <g className={styles.corner2}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-132' />
            <path d='m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z' id='ytp-id-132' />
          </g>
          <g className={styles.corner3}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-133' />
            <path d='m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z' id='ytp-id-133' />
          </g>
          <g className={styles.corner0}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-134' />
            <path d='m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z' id='ytp-id-134' />
          </g>
          <g className={styles.corner1}>
            <use className='ytp-svg-shadow' xlinkHref='#ytp-id-135' />
            <path d='m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z' id='ytp-id-135' />
          </g>
        </>)
      }
    </svg>
  )
}