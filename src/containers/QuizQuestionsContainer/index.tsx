import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { fetchQuestions } from '../../store/ducks/questions/actions'
import { answerQuestion, resetResults } from '../../store/ducks/answers/actions'
import { AppState } from '../../store/types'
import QuizQuestion from '../../components/QuizQuestion'
import Spinner from '../../components/Spinner'
import { Answer } from '../../store/ducks/answers/types'
import Title from '../../components/Title'
import QuizContainer from '../QuizContainer'
import Hint from '../../components/Hint'

export default function QuizQuestionContainer () {
  const questions = useSelector((state: AppState) => state.questions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleAnswer = (answer: string) => {
    const answerObj: Answer = {
      question: questions.data[currentQuestion].question,
      correct: answer === questions.data[currentQuestion].correct_answer
    }

    dispatch(answerQuestion(answerObj))
    if (currentQuestion + 1 < questions.data.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      history.push(`${process.env.PUBLIC_URL}/results`)
    }
  }

  useEffect(() => {
    dispatch(fetchQuestions())
    dispatch(resetResults())
  }, [dispatch])

  const handleClickA = () => {
    if (!questions.loading) {
      handleAnswer('True')
    }
  }

  const handleClickB = () => {
    if (!questions.loading) {
      handleAnswer('False')
    }
  }

  return (
    <QuizContainer
      onClickA={handleClickA}
      onClickB={handleClickB}
    >
      {questions.loading
        ? <Spinner/>
        : (
          <>
            <Title as="h2">{questions.data[currentQuestion].category}</Title>
            <QuizQuestion
              totalQuestions={questions.data.length}
              currentQuestion={currentQuestion + 1}
              question={questions.data[currentQuestion].question}
            />
            <Hint>{t('quiz.quizHintA')}</Hint>
            <Hint>{t('quiz.quizHintB')}</Hint>
          </>
        )
      }
    </QuizContainer>
  )
}
