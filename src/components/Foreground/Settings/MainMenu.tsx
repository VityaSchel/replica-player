import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackPlayerSpeed } from '/store/slices/playback'
import { selectSubtitlesName } from '/store/slices/subtitles'
import { selectPlaysourceVideoQuality } from '/store/slices/playsource'
import Menu from './Menu'
import MenuItem from './Menu/item'
import SpeedIcon from './icons/speed.svg'
import SubtitlesIcon from './icons/subtitles.svg'
import QualityIcon from './icons/quality.svg'
import { formatQuality } from './utils'
import { SettingsContext } from './index'

export default function MainMenu() {
  const { t } = useTranslation()
  const playbackSpeed = useAppSelector(selectPlaybackPlayerSpeed)
  const subtitlesName = useAppSelector(selectSubtitlesName)
  const quality = useAppSelector(selectPlaysourceVideoQuality)
  const settingsContext = React.useContext(SettingsContext)

  return (
    <Menu>
      <MenuItem
        icon={<SpeedIcon />}
        endAdornment={playbackSpeed === 1 ? t('player.settings.speed_menu.normal') : playbackSpeed}
        onClick={() => settingsContext.setTab('speed')}
      >
        {t('player.settings.speed_menu.title')}
      </MenuItem>
      <MenuItem
        icon={<SubtitlesIcon />}
        endAdornment={subtitlesName ?? t('player.settings.subtitles_menu.disabled')}
        onClick={() => settingsContext.setTab('subtitles')}
      >
        {t('player.settings.subtitles_menu.title')}
      </MenuItem>
      <MenuItem
        icon={<QualityIcon />}
        endAdornment={quality && formatQuality(quality)}
        onClick={() => settingsContext.setTab('quality')}
      >
        {t('player.settings.quality_menu.title')}
      </MenuItem>
    </Menu>
  )
}