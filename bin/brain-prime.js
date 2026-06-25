#!/usr/bin/env node
import gameFramework from '../src/index.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const makeOperation = () => {
  const randNum = Math.floor(Math.random() * 100) + 1
  return randNum
}

const validAnswerCondition = (answer) => {
  return (answer === 'yes' || answer === 'no')
}

const isPrime = (randNum) => {
  if (randNum < 2) {
    return false
  }
  else if (randNum === 2) {
    return true
  }
  else if (randNum % 2 === 0) {
    return false
  }
  else {
    for (let i = 3; i <= Math.floor(Math.sqrt(randNum)); i += 2) {
      if (randNum % i === 0) {
        return false
      }
    }
  }
  return true
}

const gameCondition = (randNum, answer) => {
  return ((isPrime(randNum) && answer === 'yes') || (!isPrime(randNum) && answer === 'no'))
}

const makeAnswerValid = (answer) => {
  answer = answer.toLowerCase()
  return answer
}

const makeCorrectAnswer = (randNum) => {
  let correctAnswer
  if (isPrime(randNum)) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }
  return correctAnswer
}

gameFramework(gameDescription, makeOperation, validAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer)
