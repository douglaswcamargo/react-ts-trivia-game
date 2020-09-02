import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { fetchQuestions } from '../../store/ducks/questions/actions'
import { answerQuestion } from '../../store/ducks/answers/actions'
import { AppState } from '../../store/types'
import QuizContainer from '../../containers/QuizContainer'
import * as S from './style'
import Button from '../../components/Button'
import ButtonGroup from '../../components/ButtonGroup'
import QuizQuestion from '../../components/QuizQuestion'
import Spinner from '../../components/Spinner'
import { Answer } from '../../store/ducks/answers/types'

export default function Quiz () {
  const questions = useSelector((state: AppState) => state.questions)
  const answers = useSelector((state: AppState) => state.answers.data)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleAnswer = (answer: string) => {
    const answerObj: Answer = {
      question: questions.data[currentQuestion].question,
      correct: answer === questions.data[currentQuestion].correct_answer
    }

    dispatch(answerQuestion(answerObj))
    if (currentQuestion + 1 < questions.data.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      console.log(answers)
    }
  }

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  return (
    <QuizContainer>
      {questions.loading
        ? <Spinner />
        : <>
          <S.Title>{questions.data[currentQuestion].category}</S.Title>
          <QuizQuestion
            totalQuestions={questions.data.length}
            currentQuestion={currentQuestion + 1}
            question={questions.data[currentQuestion].question}
          />
        </>
      }
      <ButtonGroup>
        <Button title={t('quiz.quizButtonFalse')} onClick={() => handleAnswer('True')} />
        <Button title={t('quiz.quizButtonTrue')} onClick={() => handleAnswer('False')} />
      </ButtonGroup>
    </QuizContainer>
  )
}
