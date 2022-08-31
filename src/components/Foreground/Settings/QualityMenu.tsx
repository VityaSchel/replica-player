import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectSources, selectSelectedSource, setSourceURI } from '/store/slices/playsource'
import Menu from './Menu'
import MenuItem from './Menu/item'
import MenuTitle from './Menu/title'
import CheckIcon from './icons/check.svg'
import { SettingsContext } from './index'
import { formatQuality } from '/components/Foreground/Settings/utils'

export default function QualityMenu() {
  const { t } = useTranslation()
  const sources = useAppSelector(selectSources)
  const selectedSource = useAppSelector(selectSelectedSource)
  const dispatch = useAppDispatch()
  const settingsContext = React.useContext(SettingsContext)

  const setQuality = (sourceURI: string) => {
    dispatch(setSourceURI(sourceURI))
  }

  return (
    <Menu>
      <MenuTitle 
        title={t('player.settings.quality_menu.title')} 
        onClick={() => settingsContext.setTab('main')}
      />
      {sources.map(source => (
        <MenuItem
          icon={selectedSource?.sourceURI === source.sourceURI && <CheckIcon width={18} />}
          key={source.sourceURI}
          onClick={() => setQuality(source.sourceURI)}
        >
          {formatQuality(source.quality)}
        </MenuItem>
      ))}
    </Menu>
  )
}