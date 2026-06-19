#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from './brain-games.js'

const isEven = (num) => {
  return num % 2 === 0
}

const isCorrect = (answer) => {
  return (answer === 'yes' || answer === 'no')
}

const doAnotherAnswer = (answer) => {
  let correctAnswer = ''
  if (answer === 'yes') {
    correctAnswer = 'no'
  }
  else if (answer === 'no') {
    correctAnswer = 'yes'
  }
  return correctAnswer
}

console.log('Answer "yes" if the number is even, otherwise answer "no".')

let count = 0
while (count < 3) {
  const randNum = Math.floor(Math.random() * 100) + 1
  console.log(`Question: ${randNum}`)
  let answer = readlineSync.question('Your answer: ')
  answer = answer.toLowerCase()

  if (!isCorrect(answer)) {
    break
  }

  if ((isEven(randNum) && answer === 'yes') || (!isEven(randNum) && answer === 'no')) {
    count++
    console.log('Correct!')
  }
  else {
    console.log(`'${answer}' is wrong answer :(. Correct answer was '${doAnotherAnswer(answer)}'`)
    break
  }
}

if (count === 3) {
  console.log(`Congratulations, ${userName}!`)
}
else {
  console.log(`Let's try again, ${userName}!`)
}
