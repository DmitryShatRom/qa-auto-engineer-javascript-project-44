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

const makeCorrectAnswer = (randNum) => {
  let correctAnswer
  if (randNum % 2 === 0) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }
  return correctAnswer
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

gameFramework(gameDescription, makeOperation, corrertAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer)
