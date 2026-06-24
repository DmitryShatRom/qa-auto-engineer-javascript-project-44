#!/usr/bin/env node
import gameFramework from '../src/index.js'

const makeOperation = () => {
  return Math.floor(Math.random() * 100) + 1
}

const gameCondition = (randomNum, answer) => {
  return ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no'))
}

const makeAnswerValid = (answer) => {
  const correctAnswer = answer.toLowerCase()
  return correctAnswer
}

const corrertAnswerCondition = (answer) => {
  return (answer === 'yes' || answer === 'no')
}

const makeCorrectAnswer = (answer) => {
  let correctAnswer = ''
  if (answer === 'yes') {
    correctAnswer = 'no'
  }
  else if (answer === 'no') {
    correctAnswer = 'yes'
  }
  return correctAnswer
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

gameFramework(gameDescription, makeOperation, corrertAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer)
