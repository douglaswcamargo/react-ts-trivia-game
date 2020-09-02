import axios from 'axios'

const questions = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
})

export default questions
