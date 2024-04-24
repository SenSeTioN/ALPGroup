import { RESULT } from '../constants'

export const getResult = (answer: number[]) => {
  const result = answer.reduce((acc, item) => acc + item, 0)
  switch (true) {
    case result < 7:
      return RESULT[0]
    case result >= 7 && result <= 11:
      return RESULT[1]
    case result >= 12 && result <= 14:
      return RESULT[2]
    case result >= 15 && result <= 20:
      return RESULT[3]
    case result > 20:
      return RESULT[4]

    default:
      return RESULT[0]
  }
}
