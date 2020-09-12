import React from 'react'
import { useTranslation } from 'react-i18next'
import QuizContainer from '../../containers/QuizContainer'
import Title from '../../components/Title'
// import * as S from './style'
import { useHistory } from 'react-router-dom'
import Hint from '../../components/Hint'
import Text from '../../components/Text'

export default function QuizHome () {
  const { t } = useTranslation()
  const history = useHistory()
  const handleClickA = () => {
    history.push(`${process.env.PUBLIC_URL}/quiz`)
  }

  const handleClickB = () => {
    history.push(`${process.env.PUBLIC_URL}/quiz`)
  }

  return (
    <QuizContainer
      onClickA={handleClickA}
      onClickB={handleClickB}
    >
      <Title>{t('quiz.homeTitle')}</Title>
      <Text>{t('quiz.homeSubTitle')}</Text>
      <Text>{t('quiz.homeDescription')}</Text>
      <Text>{t('quiz.homeChallenge')}</Text>
      <Hint blink>{t('quiz.homeButtonStart')}</Hint>
    </QuizContainer>
  )
}
