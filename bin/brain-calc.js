#!/usr/bin/env node
import gameFramework from '../src/index.js'

const makeOperation = () => {
  const operations = [' + ', ' - ', ' * ']
  const randOperationIndex = Math.floor(Math.random() * operations.length)
  const randNum1 = Math.floor(Math.random() * 100 + 1)
  const randNum2 = Math.floor(Math.random() * 100 + 1)
  let result = `${randNum1}${operations[randOperationIndex]}${randNum2}`

  return result
}

const gameCondition = (randomNums, answer) => {
  const correctAnswer = eval(randomNums)
  return (answer === correctAnswer)
}

const validAnswerCondition = (answer) => {
  return (!Number.isNaN(answer))
}

const makeAnswerValid = (answer) => {
  answer = Number(answer)
  return answer
}

const makeCorrectAnswer = (randomNums) => {
  const correctAnswer = eval(randomNums)
  return correctAnswer
}

const gameDescription = 'What is the result of the expression?'

gameFramework(gameDescription, makeOperation, validAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer)
