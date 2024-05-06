'use client'

import { Input, Text } from '@/shared'
import type { IQuestion } from '@/widgets/QuestionWidget/lib/types'
import cx from 'clsx'
import Link from 'next/link'
import { type FC } from 'react'
import styles from './Question.module.scss'

type TQuestionProps = {
  page: number
  inputHandler: (value: number) => void
  questions: IQuestion[]
  textValue: { [key: string]: number }
}

export const Question: FC<TQuestionProps> = ({ page, inputHandler, questions, textValue }) => {
  return (
    <div className={styles.content}>
      <Text tag='h2' size='m' weight='bold' className={styles['content-title']}>
        {`Вопрос ${page + 1}/${questions.length}`}
      </Text>
      <Text tag='h3' size='s' weight='regular' className={styles['content-subtitle']}>
        {questions[page].title}
      </Text>

      {questions[page].subtitle && (
        <Text tag='h3' size='s' weight='regular' className={styles['content-subtitle-info']}>
          {questions[page].subtitle}
          <Text tag='span' size='s' weight='regular'>
            {' '}
            <Link
              href='https://clinic-cvetkov.ru/company/kalkulyator-imt/'
              className={styles['content-link']}>
              <Text tag='span' size='s' weight='regular'>
                специальный калькулятор.
              </Text>
            </Link>
          </Text>
        </Text>
      )}

      {questions[page].input === 'text' && (
        <>
          <Input.Text onChange={inputHandler} maxLength={2} textValue={textValue} page={page} />
          <Text tag='p' size='xs' weight='regular' className={styles.description}>
            {questions[page].description}
          </Text>
        </>
      )}

      {questions[page]?.gender && (
        <div className={styles.gender}>
          {questions[page]?.gender?.map((item) => (
            <Text key={item} tag='p' size='s' weight='bold'>
              {item}
            </Text>
          ))}
        </div>
      )}

      {questions[page].input === 'radio' && (
        <div className={styles.radio}>
          <div>
            {questions[page]?.variants?.groupOne.map((item) => (
              <Input.Checkbox
                key={item.id}
                id={item.id}
                type='radio'
                name='group-1'
                value={item.score}
                labelText={item.title}
                onChange={inputHandler}
              />
            ))}
          </div>

          {questions[page]?.variants?.groupTwo && (
            <div>
              {questions[page]?.variants?.groupTwo?.map((item) => (
                <Input.Checkbox
                  key={item.id}
                  id={item.id}
                  type='radio'
                  name='group-1'
                  value={item.score}
                  labelText={item.title}
                  onChange={inputHandler}
                />
              ))}
            </div>
          )}

          <div
            className={cx(styles['points'], {
              [styles[`group-2`]]: questions[page]?.variants?.groupTwo,
            })}>
            {questions[page]?.variants?.points.map((item) => (
              <Text key={item.id} tag='p' size='s' weight='regular'>
                {item.title}
              </Text>
            ))}
          </div>
        </div>
      )}

      {questions[page].input === 'select' && (
        <div className={styles.select}>
          <Input.Select onChange={inputHandler} options={questions[page].selections} />
        </div>
      )}

      {questions[page].input === 'checkbox' && (
        <div className={styles.checkbox}>
          {questions[page]?.variants?.groupOne.map((item, i) => (
            <Input.Checkbox
              page={page}
              key={item.id}
              id={item.id}
              type='radio'
              name='group-2'
              value={item.score}
              labelText={item.title}
              onChange={inputHandler}
            />
          ))}
        </div>
      )}
    </div>
  )
}
