#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '../bin/brain-games.js'

const gameFramework = (gameDescription, makeOperation, validAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer) => {
  console.log(gameDescription)

  let count = 0
  while (count < 3) {
    const randNums = makeOperation()
    console.log(`Question: ${randNums}`)
    let answer = readlineSync.question('Your answer: ')
    answer = makeAnswerValid(answer)

    if (!validAnswerCondition(answer)) {
      break
    }

    if (gameCondition(randNums, answer)) {
      count++
      console.log('Correct!')
    }
    else {
      const correctAnswer = makeCorrectAnswer(randNums)
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'`)
      break
    }
  }

  if (count === 3) {
    const win = `Congratulations, ${userName}!`
    console.log(win)
  }
  else {
    const lose = `Let's try again, ${userName}!`
    console.log(lose)
  }
}

export default gameFramework
