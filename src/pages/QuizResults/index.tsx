import React from 'react'
import he from 'he'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { FaCheckSquare, FaRegWindowClose } from 'react-icons/fa'
import QuizContainer from '../../containers/QuizContainer'
import Text from '../../components/Text'
import Hint from '../../components/Hint'
import { AppState } from '../../store/types'
import * as S from './style'

export default function QuizResults () {
  const { t } = useTranslation()
  const answers = useSelector((state: AppState) => state.answers.data)
  const correctAnswers = answers.filter((answer) => answer.correct)
  const history = useHistory()

  if (answers.length === 0) {
    return <Redirect push to={`${process.env.PUBLIC_URL}/`} />
  }

  const handleClick = () => history.push(`${process.env.PUBLIC_URL}/`)

  return (
    <QuizContainer
      onClickA={handleClick}
      onClickB={handleClick}
    >
      <S.Wrapper>
        <Text>{t('quiz.resultsTitle')}</Text>
        <S.Score>{correctAnswers.length}/{answers.length}</S.Score>
        <S.List>
          {answers.map((answer, key) => {
            return (
              <S.ListItem key={key} correct={answer.correct}>
                <S.Icon>{answer.correct ? <FaCheckSquare /> : <FaRegWindowClose />}</S.Icon>
                <S.QuestionText>{he.decode(answer.question)}</S.QuestionText>
              </S.ListItem>
            )
          })}
        </S.List>
        <Hint blink>{t('quiz.resultsHint')}</Hint>
      </S.Wrapper>
    </QuizContainer>
  )
}
