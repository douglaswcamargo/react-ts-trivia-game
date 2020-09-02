import React from 'react'
import { useTranslation } from 'react-i18next'
import QuizContainer from '../../containers/QuizContainer'
import * as S from './style'
import LinkButton from '../../components/LinkButton'

export default function Home () {
  const { t } = useTranslation()

  return (
    <QuizContainer>
      <S.Title>{t('quiz.homeTitle')}</S.Title>
      <S.Description>{t('quiz.homeDescription')}</S.Description>
      <S.Challenge>{t('quiz.homeChallenge')}</S.Challenge>
      <LinkButton to="/quiz">{t('quiz.homeButtonStart')}</LinkButton>
    </QuizContainer>
  )
}
