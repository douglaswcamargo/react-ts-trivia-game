import React from 'react'
import * as S from './style'
import he from 'he'
import Text from '../../components/Text'
import { useTranslation } from 'react-i18next'
import { QuizQuestionProps } from './types'

export default function QuizQuestion (props: QuizQuestionProps) {
  const { question, currentQuestion } = props
  const { t } = useTranslation()
  return (
    <>
      <S.Question>
        {he.decode(question)}
      </S.Question>
      <Text>{`${currentQuestion + 1} ${t('quiz.quizCounterPreposition')} 10`} </Text>
    </>
  )
}
