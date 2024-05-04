import { RESULT } from '../constants'

const getResultQuestion = (number: number, i: number) => {
  if (i === 0) {
    switch (true) {
      case number < 45:
        return 0
      case number >= 45 && number < 55:
        return 2
      case number >= 55 && number <= 64:
        return 3
      case number >= 65:
        return 4
      default:
        return 0
    }
  }

  if (i === 1) {
    switch (true) {
      case number < 25:
        return 0
      case number >= 25 && number <= 30:
        return 2
      case number > 30:
        return 3
      default:
        return 0
    }
  }

  return number
}

export const getResult = (answer: number[]) => {
  const result = answer.reduce((acc, item, i) => {
    if (i === 0 || i === 1) {
      return acc + getResultQuestion(item, i)
    }
    return acc + item
  }, 0)
  switch (true) {
    case result < 7:
      return RESULT[0]
    case result >= 7 && result <= 11:
      return RESULT[1]
    case result >= 12 && result <= 14:
      return RESULT[2]
    case result >= 15 && result <= 20:
      return RESULT[3]
    case result >= 21:
      return RESULT[4]

    default:
      return RESULT[0]
  }
}
