#!/usr/bin/env node
import gameFramework from '../src/index.js'

const getRandomProgressionLength = () => {
  const min = 5
  const max = 10
  const result = Math.floor(Math.random() * (max - min + 1)) + min
  return result
}

const makeOperation = () => {
  const progressionLength = getRandomProgressionLength()
  let progressionElem = Math.floor(Math.random() * 101) + 1
  const progression = []
  progression.push(progressionElem)
  const progressionStep = Math.floor(Math.random() * 10) + 1

  for (let i = 1; i < progressionLength; i++) {
    progressionElem += progressionStep
    progression.push(progressionElem)
  }

  const randomIndex = Math.floor(Math.random() * (progression.length))
  progression[randomIndex] = '..'

  const result = progression.join(' ')

  return result
}

const makeCorrectAnswer = (string) => {
  const arrProgression = string.split(' ')
  let missingElemIndex = 0
  let missingElem
  let progressonStep

  for (let i = 0; i < arrProgression.length; i++) {
    if (arrProgression[i] === '..') {
      missingElemIndex = i
      break
    }
  }

  if (missingElemIndex === (arrProgression.length - 1)) {
    progressonStep = Number(arrProgression[1]) - Number(arrProgression[0])
    missingElem = Number(arrProgression[arrProgression.length - 2]) + progressonStep
  }
  else if (missingElemIndex === 0) {
    progressonStep = Number(arrProgression[arrProgression.length - 1]) - Number(arrProgression[arrProgression.length - 2])
    missingElem = Number(arrProgression[1]) - progressonStep
  }
  else {
    progressonStep = (Number(arrProgression[missingElemIndex + 1]) - Number(arrProgression[missingElemIndex - 1])) / 2
    missingElem = Number(arrProgression[missingElemIndex - 1]) + progressonStep
  }

  return missingElem
}

const validAnswerCondition = (answer) => {
  return (!Number.isNaN(answer))
}

const gameCondition = (string, answer) => {
  return (answer === makeCorrectAnswer(string))
}

const makeAnswerValid = (answer) => {
  answer = Number(answer)
  return answer
}

const gameDescription = 'What number is missing in the progression?'

gameFramework(gameDescription, makeOperation, validAnswerCondition, gameCondition, makeAnswerValid, makeCorrectAnswer)
