export const getResultQuestion = (answer: number, page: number) => {
  if (page === 0) {
    switch (true) {
      case answer < 45:
        return 0
      case answer >= 45 && answer < 55:
        return 2
      case answer >= 55 && answer <= 64:
        return 3
      case answer >= 65:
        return 4
      default:
        return 0
    }
  }

  if (page === 1) {
    switch (true) {
      case answer < 25:
        return 0
      case answer >= 25 && answer <= 30:
        return 2
      case answer > 30:
        return 3
      default:
        return 0
    }
  }

  return answer
}
