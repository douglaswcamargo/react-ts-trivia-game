import React from 'react'
import * as S from './style'
import he from 'he'
import Text from '../Text'
import { useTranslation } from 'react-i18next'
import { QuizQuestionProps } from './types'

const QuizQuestion: React.FC<QuizQuestionProps> = (props: QuizQuestionProps) => {
  const { question, currentQuestion, totalQuestions } = props
  const { t } = useTranslation()

  return (
    <>
      <S.Question>
        {he.decode(question)}
      </S.Question>
      <S.Counter>
        <Text>{`${currentQuestion} ${t('quiz.quizCounterPreposition')} ${totalQuestions}`} </Text>
      </S.Counter>
    </>
  )
}

export default QuizQuestion
