'use client'

import { Metrics } from '@/entities'
import { Button, TableCustom, Text } from '@/shared'
import { Main } from '@/widgets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './CalculatingResultPage.module.scss'

export default function CalculatingResultPage() {
  const { push } = useRouter()

  return (
    <Main>
      <TableCustom />
      <Metrics />

      <Button theme='light' width='standard' onClick={() => push('/result')} className={styles.btn}>
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
    </Main>
  )
}
