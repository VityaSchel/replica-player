import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectSubtitlesList, selectSelectedSubtitles, setSubtitlesFileID } from '/store/slices/subtitles'
import Menu from './Menu'
import MenuItem from './Menu/item'
import MenuTitle from './Menu/title'
import CheckIcon from './icons/check.svg'
import { SettingsContext } from './index'

export default function SubtitlesMenu() {
  const { t } = useTranslation()
  const subtitles = useAppSelector(selectSubtitlesList)
  const selectedSubtitles = useAppSelector(selectSelectedSubtitles)
  const dispatch = useAppDispatch()
  const settingsContext = React.useContext(SettingsContext)

  const setSubtitles = (fileID: string | null) => {
    dispatch(setSubtitlesFileID(fileID))
  }

  return (
    <Menu>
      <MenuTitle 
        title={t('player.settings.subtitles_menu.title')} 
        onClick={() => settingsContext.setTab('main')}
        // endAdornment={
        // TODO: subtitles options
        // }
      />
      <MenuItem
        icon={selectedSubtitles?.fileID === undefined && <CheckIcon width={18} />}
        onClick={() => setSubtitles(null)}
      >
        {t('player.settings.subtitles_menu.none')}
      </MenuItem>
      {subtitles.map(subtitlesFile => (
        <MenuItem
          icon={selectedSubtitles?.fileID === subtitlesFile.fileID && <CheckIcon width={18} />}
          key={subtitlesFile.fileID}
          onClick={() => setSubtitles(subtitlesFile.fileID)}
        >
          {subtitlesFile.name}
        </MenuItem>
      ))}
    </Menu>
  )
}