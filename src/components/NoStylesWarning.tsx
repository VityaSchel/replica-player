import React from 'react'
import styles from '../styles.module.scss'
import '/data/localization/config'
import { useTranslation } from 'react-i18next'

export default function NoStylesWarning() {
  const { t } = useTranslation()

  return (
    <p className={styles.stylesAreNotLoadedWarning}>{t('warnings.styles_are_not_loaded')}</p>
  )
}