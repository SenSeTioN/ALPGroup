'use client'

import cx from 'clsx'
import { FC, useState, type ChangeEvent } from 'react'
import styles from './InputText.module.scss'

interface IInputProps {
  className?: string
  maxLength?: number
  required?: boolean
  onChange?: (value: number) => void
}

export const InputText: FC<IInputProps> = ({ className, maxLength, required, onChange }) => {
  const [value, setValue] = useState('')

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(+e.target.value)
  }

  return (
    <div className={styles.container}>
      <input
        value={value}
        type='text'
        className={cx(styles.input, className)}
        maxLength={maxLength}
        onChange={onChangeInput}
        placeholder='Введите данные'
        required={required}
      />
    </div>
  )
}

InputText.displayName = 'InputText'
