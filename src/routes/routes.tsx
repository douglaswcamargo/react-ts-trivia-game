import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QuizHome from '../pages/QuizHome'
import QuizQuestions from '../pages/QuizQuestions'
import QuizResults from '../pages/QuizResults'
import NotFound from '../pages/NotFound'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={QuizHome} />
      <Route path='/quiz' component={QuizQuestions} />
      <Route path='/results' component={QuizResults} />
      <Route component={NotFound} />
    </Switch>
  )
}
