'use client'

import type { FC } from 'react'
import Select, { SingleValue } from 'react-select'
import './SelectInput.scss'

type Options = {
  label: string
  value: number
}

type TSelectProps = {
  options?: Options[]
  onChange?: (value: number) => void
}

export const SelectInput: FC<TSelectProps> = ({ options, onChange }) => {
  const onChangeInput = (newValue: SingleValue<Options>) => {
    if (newValue) {
      onChange?.(newValue.value)
    }
  }

  return (
    <Select
      className='react-select-container'
      classNamePrefix='react-select'
      options={options}
      placeholder='Выберите вариант'
      onChange={onChangeInput}
    />
  )
}
