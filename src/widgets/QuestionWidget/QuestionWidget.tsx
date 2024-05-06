'use client'

import { Content } from '@/entities'
import { ButtonBlock, Question } from '@/features'
import { useQuestionsStore } from '@/shared'
import { useState } from 'react'
import styles from './QuestionWidget.module.scss'
import { questions } from './lib/data/questions'

export const QuestionWidget = () => {
  const [value, setValue] = useState<{ [key: string]: number }>({})
  const page = useQuestionsStore((state) => state.page)

  const inputHandler = (value: number) => {
    setValue((prev) => ({ ...prev, [page]: value }))
  }

  return (
    <Content image={questions[page].image}>
      <div className={styles.wrapper}>
        <Question page={page} inputHandler={inputHandler} questions={questions} textValue={value} />

        <ButtonBlock disabled={!value[page]} page={page} value={value} theme='questionsPage' />
      </div>
    </Content>
  )
}
