'use client'

import cx from 'clsx'
import { type ChangeEvent, type FC } from 'react'
import { Text } from '../../Text'
import styles from './Checkbox.module.scss'

interface ICheckboxProps {
  id: string
  page?: number
  name?: string
  type?: string
  labelText?: string
  value?: string | number
  onChange?: (value: number) => void
}

export const Checkbox: FC<ICheckboxProps> = ({
  id,
  name,
  type,
  labelText,
  value,
  onChange,
  page,
}) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(+e.target.value)
  }

  return (
    <div className={styles.checkbox}>
      <input
        hidden
        id={id}
        type={type}
        name={name}
        value={value}
        className={styles['checkbox-input']}
        onChange={onChangeInput}
      />
      <label htmlFor={id} className={styles['checkbox-label']}>
        <Text
          tag='span'
          size='s'
          weight='regular'
          className={cx(styles['checkbox-label-text'], {
            [styles['checkbox-label-text-page']]: page === 7,
          })}>
          {labelText}
        </Text>
      </label>
    </div>
  )
}
