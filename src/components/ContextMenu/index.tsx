import React from 'react'
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

export interface ContextMenuRefMethods {
  open: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ContextMenu = React.forwardRef((props, ref) => {
  const [visible, setVisible] = React.useState(false)
  const { t } = useTranslation()

  const methods: ContextMenuRefMethods = {
    open(event) {
      console.log(event)
      event.preventDefault()
      // todo: open native cotext menu on video itself
      setVisible(true)
      return false
    }
  }
  React.useImperativeHandle(ref, () => methods)

  const handleSelectItem = itemID => () => {
    setVisible(false)
  }

  return (
    <div className={cx(styles.menuContainer, { [styles.visible]: visible })}>
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
    </div>
  )
})
ContextMenu.displayName = 'ContextMenu'
export default ContextMenu