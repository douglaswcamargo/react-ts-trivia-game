import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title'

export default function QuizHome () {
  const { t } = useTranslation()

  return <Title>{t('general.notFound')}</Title>
}
