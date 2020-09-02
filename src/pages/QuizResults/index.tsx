import React from 'react'
import he from 'he'
import { useTranslation } from 'react-i18next'
import QuizContainer from '../../containers/QuizContainer'
import * as S from './style'
import LinkButton from '../../components/LinkButton'
import Title from '../../components/Title'
import Text from '../../components/Text'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/types'

export default function QuizResults () {
  const { t } = useTranslation()
  const answers = useSelector((state: AppState) => state.answers.data)
  const correctAnswers = answers.filter((answer) => answer.correct)

  return (
    <QuizContainer>
      <S.Wrapper>
        <Title>{t('quiz.resultsTitle')}</Title>
        <Text as="h1">{correctAnswers.length} / {answers.length}</Text>
        <S.List>
          {answers.map((answer, key) => {
            return (
              <S.ListItem key={key} correct={answer.correct}>
                {answer.correct ? ' + ' : ' - '}
                {he.decode(answer.question)}
              </S.ListItem>
            )
          })}
        </S.List>
      </S.Wrapper>
      <LinkButton to="/quiz">{t('quiz.resultsButtonRetry')}</LinkButton>
    </QuizContainer>
  )
}
