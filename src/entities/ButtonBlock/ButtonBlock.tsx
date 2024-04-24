'use client'

import { Button, Text } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ButtonBlock.module.scss'

type TButtonBlockProps = {
  theme: 'questionsPage' | 'resultPage'
  page?: number
  next?: () => void
  prev?: () => void
  reset?: () => void
}

export const ButtonBlock: FC<TButtonBlockProps> = ({ page, theme, next, prev, reset }) => {
  return (
    <div className={styles['btn-container']}>
      {theme === 'questionsPage' && (
        <>
          {page === 0 ? (
            <Link href='/'>
              <Button theme='light' width='standard' className={styles.btn}>
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
            </Link>
          ) : (
            <Button theme='light' width='standard' onClick={prev} className={styles.btn}>
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
          )}

          {page === 7 ? (
            <Link href='/result'>
              <Button theme='primary' width='standard' className={styles.btn}>
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
            </Link>
          ) : (
            <Button theme='primary' width='standard' onClick={next} className={styles.btn}>
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
          )}
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
