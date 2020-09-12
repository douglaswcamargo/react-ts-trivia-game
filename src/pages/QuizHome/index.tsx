import React from 'react'
import { useTranslation } from 'react-i18next'
import QuizContainer from '../../containers/QuizContainer'
import * as S from './style'
import LinkButton from '../../components/LinkButton'
import Title from '../../components/Title'

export default function QuizHome () {
  const { t } = useTranslation()

  return (
    <QuizContainer>
      <S.Wrapper>
        <Title>{t('quiz.homeTitle')}</Title>
        <S.TextWithPadding>{t('quiz.homeDescription')}</S.TextWithPadding>
        <S.TextWithPadding>{t('quiz.homeChallenge')}</S.TextWithPadding>
      </S.Wrapper>
      <LinkButton to={`${process.env.PUBLIC_URL}/quiz`}>{t('quiz.homeButtonStart')}</LinkButton>
    </QuizContainer>
  )
}
