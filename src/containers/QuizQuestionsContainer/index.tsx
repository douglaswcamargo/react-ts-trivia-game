import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { fetchQuestions } from '../../store/ducks/questions/actions'
import { answerQuestion, resetResults } from '../../store/ducks/answers/actions'
import { AppState } from '../../store/types'
import Button from '../../components/Button'
import QuizQuestion from '../../components/QuizQuestion'
import Spinner from '../../components/Spinner'
import { Answer } from '../../store/ducks/answers/types'
import Title from '../../components/Title'
import Group from '../../components/Group'

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

  if (questions.loading) {
    return <Spinner />
  }

  return (
    <>
      <Title as="h2">{questions.data[currentQuestion].category}</Title>
      <QuizQuestion
        totalQuestions={questions.data.length}
        currentQuestion={currentQuestion + 1}
        question={questions.data[currentQuestion].question}
      />
      <Group>
        <Button title={t('quiz.quizButtonFalse')} onClick={() => handleAnswer('False')} />
        <Button title={t('quiz.quizButtonTrue')} onClick={() => handleAnswer('True')} />
      </Group>
    </>
  )
}
