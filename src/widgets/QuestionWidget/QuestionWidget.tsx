'use client'

import { ButtonBlock, Content } from '@/entities'
import { Question } from '@/features'
import { useQuestionsStore } from '@/shared'
import { useState } from 'react'
import { questions } from './lib/data/questions'
import { getResultQuestion } from './lib/utils/getResultQuestion'

export const QuestionWidget = () => {
  const [value, setValue] = useState<{ [key: string]: number }>({})

  const handleInputChange = (value: number) => {
    setValue((prev) => ({ ...prev, value }))
  }

  const page = useQuestionsStore((state) => state.page)
  const setAnswer = useQuestionsStore((state) => state.setAnswer)
  const incrementPage = useQuestionsStore((state) => state.incrementPage)
  const decrementPage = useQuestionsStore((state) => state.decrementPage)
  const deleteAnswer = useQuestionsStore((state) => state.deleteAnswer)

  const nextHandleClick = () => {
    setAnswer(getResultQuestion(value.value, page))
    incrementPage()
  }

  const prevHandleClick = () => {
    deleteAnswer()
    decrementPage()
  }

  return (
    <Content image={questions[page].image}>
      <div>
        <Question page={page} onChange={handleInputChange} questions={questions} />
        <ButtonBlock
          page={page}
          theme='questionsPage'
          next={nextHandleClick}
          prev={prevHandleClick}
        />
      </div>
    </Content>
  )
}
