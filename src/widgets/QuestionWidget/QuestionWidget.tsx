'use client'

import { ButtonBlock, Content } from '@/entities'
import { Question } from '@/features'
import { useQuestionsStore } from '@/shared'
import { useState } from 'react'
import { questions } from './lib/data/questions'

export const QuestionWidget = () => {
  const [value, setValue] = useState<{ [key: string]: number }>({})
  const page = useQuestionsStore((state) => state.page)
  const setAnswer = useQuestionsStore((state) => state.setAnswer)
  const incrementPage = useQuestionsStore((state) => state.incrementPage)
  const decrementPage = useQuestionsStore((state) => state.decrementPage)

  const inputHandler = (value: number) => {
    setValue((prev) => ({ ...prev, [page]: value }))
  }

  console.log('value QuestionWidget', value)

  return (
    <Content image={questions[page].image}>
      <div>
        <Question page={page} inputHandler={inputHandler} questions={questions} textValue={value} />

        <ButtonBlock
          page={page}
          theme='questionsPage'
          next={page === 7 ? () => setAnswer(value) : () => incrementPage()}
          prev={() => decrementPage()}
        />
      </div>
    </Content>
  )
}
