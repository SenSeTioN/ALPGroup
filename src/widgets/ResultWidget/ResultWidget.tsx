'use client'

import { ButtonBlock, Content } from '@/entities'
import { Text, useQuestionsStore } from '@/shared'
import { getResult } from './lib/utils/getResult'
import styles from './ResultWidget.module.scss'

export const ResultWidget = () => {
  const answer = useQuestionsStore((state) => state.answer)
  const reset = useQuestionsStore((state) => state.reset)
  const result = getResult(answer)

  return (
    <Content image={result.image}>
      <div className={styles.container}>
        <Text tag='h1' size='m' weight='bold' className={styles['container-title']}>
          Результат
        </Text>

        <Text tag='h2' weight='regular' size='s' className={styles['container-subtitle']}>
          {result.title}
        </Text>

        <Text tag='h2' weight='regular' size='s' className={styles['container-description']}>
          {result.description}
        </Text>

        <ButtonBlock theme='resultPage' reset={reset} />
      </div>
    </Content>
  )
}
