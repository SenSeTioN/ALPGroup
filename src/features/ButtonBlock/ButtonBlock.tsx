'use client'

import { Button, Text, useQuestionsStore } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import styles from './ButtonBlock.module.scss'

type TButtonBlockProps = {
  theme: 'questionsPage' | 'resultPage'
  disabled?: boolean
  page?: number
  value?: { [key: string]: number }
}

export const ButtonBlock: FC<TButtonBlockProps> = ({ page, theme, value, disabled }) => {
  const { push } = useRouter()
  const setAnswer = useQuestionsStore((state) => state.setAnswer)
  const incrementPage = useQuestionsStore((state) => state.incrementPage)
  const decrementPage = useQuestionsStore((state) => state.decrementPage)
  const reset = useQuestionsStore((state) => state.reset)

  const setResult = () => {
    if (value) {
      setAnswer(value)
    }
    push('/result')
  }

  return (
    <div className={styles['btn-container']}>
      {theme === 'questionsPage' && (
        <>
          <Button
            theme='light'
            width='standard'
            onClick={page === 0 ? () => push('/') : () => decrementPage()}
            className={styles.btn}>
            <Image
              src='/assets/icons/arrow-left.svg'
              alt='arrow'
              width={22}
              height={30}
              className={styles.icon}
            />

            <Text tag='span' size='ml' weight='bold'>
              Назад
            </Text>
          </Button>

          <Button
            theme='primary'
            width='standard'
            onClick={page === 7 ? setResult : () => incrementPage()}
            className={styles.btn}
            disabled={disabled}>
            <Text tag='span' size='ml' weight='bold'>
              Далее
            </Text>

            <Image
              src='/assets/icons/arrow-right.svg'
              alt='arrow'
              width={22}
              height={30}
              className={styles.icon}
            />
          </Button>
        </>
      )}

      {theme === 'resultPage' && (
        <>
          <Link href='/calculating-the-result'>
            <Button theme='light' width='large' className={styles.btn}>
              <Image
                src='/assets/icons/bookmark.svg'
                alt='bookmark'
                width={22}
                height={30}
                className={styles.icon}
              />

              <Text tag='span' weight='bold' className={styles['btn-title']}>
                Методология подсчета результата
              </Text>
            </Button>
          </Link>

          <Link href='/questions' onClick={reset}>
            <Button theme='primary' width='medium' className={styles.btn}>
              <Image
                src='/assets/icons/reset.svg'
                alt='reset'
                width={22}
                height={30}
                className={styles.icon}
              />
              <Text tag='span' weight='bold' className={styles['btn-title']}>
                Пройти тест заново
              </Text>
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
