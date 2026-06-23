#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from './brain-games.js'

const makeOperation = () => {
  const operations = [' + ', ' - ', ' * ']
  const randOperationIndex = Math.floor(Math.random() * operations.length)
  const randNum1 = Math.floor(Math.random() * 100 + 1)
  const randNum2 = Math.floor(Math.random() * 100 + 1)
  let result = `${randNum1}${operations[randOperationIndex]}${randNum2}`

  return result
}

console.log('What is the result of the expression?')

let count = 0
while (count < 3) {
  const randOperation = makeOperation()
  console.log(`Question: ${randOperation}`)
  const correctAnswer = eval(randOperation)
  let answer = readlineSync.question('Your answer: ')
  answer = Number(answer)

  if (!Number.isFinite(answer)) {
    break
  }

  if (answer === correctAnswer) {
    count++
    console.log('Correct!')
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    break
  }
}

if (count === 3) {
  console.log(`Congratulations, ${userName}!`)
}
else {
  console.log(`Let's try again, ${userName}!`)
}
