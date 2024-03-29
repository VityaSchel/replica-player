import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'
import List, { ListItem } from './List'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { usePopper } from 'react-popper'
import { useHotkeys } from 'react-hotkeys-hook'
import { PlayerContext } from '../player'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectPlayback, setIsLooped } from '/store/slices/playback'
import copy from 'copy-to-clipboard'

import RepeatIcon from './icons/repeat.svg'
import LinkIcon from './icons/link.svg'
import CodeIcon from './icons/code.svg'
import BugIcon from './icons/bug.svg'
import InfoIcon from './icons/info.svg'
import QuestionIcon from './icons/question.svg'
import CheckmarkIcon from './icons/checkmark.svg'

export interface ContextMenuRefMethods {
  open: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function generateGetBoundingClientRect(x = 0, y = 0) {
  return () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    x, y,
    bottom: y,
    left: x,
    toJSON: () => {/**/}
  })
}

const virtualReference = {
  getBoundingClientRect: generateGetBoundingClientRect(),
}

type MenuItemID = 'loop'
  | 'copy_video_url'
  | 'copy_video_html_code'
  | 'copy_debug_data'
  | 'playback_support'
  | 'sysadmin_statistics'

const ContextMenu = React.forwardRef((props, ref) => {
  const [visible, setVisible] = React.useState(false)
  const [blurring, setBlurring] = React.useState(false)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const menuRef = React.useRef<HTMLDivElement>(null)
  const popper = usePopper(virtualReference, menuRef.current, {
    placement: 'right-start',
  })
  const playerContext = React.useContext(PlayerContext)
  const playbackState = useAppSelector(selectPlayback)
  useHotkeys('esc', () => visible && setVisible(false), {}, [visible, setVisible])

  const methods: ContextMenuRefMethods = {
    open(event) {
      if (!visible && !blurring) {
        event.preventDefault()
        virtualReference.getBoundingClientRect = generateGetBoundingClientRect(event.clientX, event.clientY)
        popper.update?.()
        setVisible(true)
        menuRef.current?.focus()
        updateMenu()
        return false
      } else {
        setVisible(false)
      }
    }
  }

  React.useImperativeHandle(ref, () => methods)

  const updateMenu = () => {
    if (!playerContext) return

    dispatch(setIsLooped(playerContext.loop))
  }

  const handleSelectItem = (itemID: MenuItemID) => () => {
    if(!playerContext) return
    setVisible(false)
    menuRef.current?.blur()
    switch(itemID) {
      case 'loop':
        playerContext.loop = !playbackState.loop
        break

      case 'copy_video_url':
        copy(window.location.href)
        break

      case 'copy_debug_data':
        copy('Nothing here ¯\\_(ツ)_/¯')
        break

      case 'playback_support':
        window.open('https://support.google.com/youtube/?p=report_playback', '_blank')
        break

      default:
        break
    }
  }

  React.useEffect(() => {
    if(visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [visible])

  const handleBlur = () => {
    setVisible(false)

    setBlurring(true)
    setTimeout(() => setBlurring(false), 1)
  }

  return ReactDOM.createPortal(
    <div 
      // style={{ left: menuPosition.x, top: menuPosition.y }}
      className={cx(styles.menuContainer, { [styles.visible]: visible })}
      ref={menuRef}
      style={popper.styles.popper}
      // {...popper.attributes}
      tabIndex={-1}
      onBlur={handleBlur}
    >
      <List>
        <ListItem 
          icon={<RepeatIcon />} 
          title={t('player.context_menu.repeat')} 
          onClick={handleSelectItem('loop')}
          endIcon={playbackState.loop && <CheckmarkIcon />}
        />
        <ListItem 
          icon={<LinkIcon />} 
          title={t('player.context_menu.copy_video_url')} 
          onClick={handleSelectItem('copy_video_url')}
        />
        <ListItem 
          icon={<CodeIcon />} 
          title={t('player.context_menu.copy_video_html_code')} 
          onClick={handleSelectItem('copy_video_html_code')}
        />
        <ListItem 
          icon={<BugIcon />} 
          title={t('player.context_menu.copy_debug_data')} 
          onClick={handleSelectItem('copy_debug_data')}
        />
        <ListItem 
          icon={<QuestionIcon />} 
          title={t('player.context_menu.playback_support')}
          // href='https://support.google.com/youtube/?p=report_playback'
          onClick={handleSelectItem('playback_support')}
        />
        <ListItem 
          icon={<InfoIcon />} 
          title={t('player.context_menu.sysadmin_statistics')} 
          onClick={handleSelectItem('sysadmin_statistics')}
        />
      </List>
    </div>, 
    document.body
  )
})
ContextMenu.displayName = 'ContextMenu'
export default ContextMenu