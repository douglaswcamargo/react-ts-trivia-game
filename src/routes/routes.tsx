import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QuizHome from '../pages/QuizHome'
import QuizQuestions from '../pages/QuizQuestions'
import QuizResults from '../pages/QuizResults'
import NotFound from '../pages/NotFound'

export default function Routes () {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={QuizHome} />
      <Route path={`${process.env.PUBLIC_URL}/quiz`} component={QuizQuestions} />
      <Route path={`${process.env.PUBLIC_URL}/results`} component={QuizResults} />
      <Route component={NotFound} />
    </Switch>
  )
}
