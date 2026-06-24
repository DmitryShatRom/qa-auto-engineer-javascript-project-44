#!/usr/bin/env node
import gameFramework from '../src/index.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const makeOperation = () => {
  const randNum1 = Math.floor(Math.random() * 101)
  const randNum2 = Math.floor(Math.random() * 101)
  const result = `${randNum1} ${randNum2}`
  return result
}

const validAnswerCondition = (answer) =>{
  return (!Number.isNaN(answer))
}

const makeAnswerValid = (answer) => {
  answer = Number(answer)
  return answer
}

const gameCondition = (randNums, answer) => {
  let [num1, num2] = randNums.split(' ').map(Number)
  let correctAnswer

  while (num2 !== 0) {
    let current = num1
    num1 = num2
    num2 = current % num2
  }
  correctAnswer = num1
  return (answer === correctAnswer)
}

const makeCorrectAnswer = (randNums) => {
  let [num1, num2] = randNums.split(' ').map(Number)
  let correctAnswer

  while (num2 !== 0) {
    let current = num1
    num1 = num2
    num2 = current % num2
  }
  correctAnswer = num1
  return correctAnswer
}

gameFramework(gameDescription, makeOperation, validAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer)
