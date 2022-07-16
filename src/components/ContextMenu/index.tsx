import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'
import List, { ListItem } from './List'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'

import RepeatIcon from './icons/repeat.svg'
import LinkIcon from './icons/link.svg'
import CodeIcon from './icons/code.svg'
import BugIcon from './icons/bug.svg'
import InfoIcon from './icons/info.svg'
import QuestionIcon from './icons/question.svg'
import { usePopper } from 'react-popper'

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
    toJSON: () => {}
  })
}

const virtualReference = {
  getBoundingClientRect: generateGetBoundingClientRect(),
}

const ContextMenu = React.forwardRef((props, ref) => {
  const [visible, setVisible] = React.useState(false)
  const [menuPosition, setMenuPosition] = React.useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const { t } = useTranslation()
  const menuRef = React.useRef(null)
  const popper = usePopper(virtualReference, menuRef.current, {
    // modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: 'right-start',
  })

  console.log(popper)

  const methods: ContextMenuRefMethods = {
    open(event) {
      event.preventDefault()
      console.log(1, generateGetBoundingClientRect(event.clientX, event.clientY)())
      virtualReference.getBoundingClientRect = generateGetBoundingClientRect(event.clientX, event.clientY)
      popper.update?.()
      // todo: open native cotext menu on video itself
      // setMenuPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
      return false
    }
  }
  React.useImperativeHandle(ref, () => methods)

  const handleSelectItem = itemID => () => {
    setVisible(false)
  }

  return ReactDOM.createPortal(
    <div 
      // style={{ left: menuPosition.x, top: menuPosition.y }}
      className={cx(styles.menuContainer, { [styles.visible]: visible })}
      ref={menuRef}
      style={popper.styles.popper}
      {...popper.attributes}
    >
      <List>
        <ListItem 
          icon={<RepeatIcon />} 
          title={t('player.context_menu.repeat')} 
          onClick={handleSelectItem('repeat')}
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