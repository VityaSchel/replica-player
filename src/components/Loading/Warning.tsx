import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export default function Warning() {
  const { t } = useTranslation()
  
  return (
    <div className={styles.warning}>
      {t('warnings.loading_issues')}
    </div>
  )
}