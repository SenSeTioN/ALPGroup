'use client'

import cx from 'clsx'
import { useEffect, useState, type ChangeEvent, type FC } from 'react'
import styles from './InputText.module.scss'

interface IInputProps {
  className?: string
  maxLength?: number
  required?: boolean
  onChange?: (value: number) => void
  page: number
  textValue: { [key: string]: number }
}

export const InputText: FC<IInputProps> = ({
  page,
  className,
  maxLength,
  required,
  onChange,
  textValue,
}) => {
  const [value, setValue] = useState('')

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(+e.target.value)
  }

  useEffect(() => {
    setValue('')
  }, [page])

  console.log('value InputText', value)

  return (
    <div className={styles.container}>
      <input
        value={textValue[page] ? textValue[page] : value}
        type='text'
        className={cx(styles.input, className)}
        maxLength={maxLength}
        onChange={onChangeInput}
        placeholder='Введите данные'
        required={required}
        name={`text-${page}`}
      />
    </div>
  )
}
