import { Text, Wrapper } from '@/shared'
import Image from 'next/image'
import type { FC, ReactNode } from 'react'
import styles from './Main.module.scss'

type TMainProps = {
  children: ReactNode
}

export const Main: FC<TMainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Wrapper size='m'>
        <Text tag='h1' weight='bold' className={styles['main__title']}>
          Тест для оценки риска развития сахарного диабета 2 типа (шкала FINDRISC)
        </Text>
        <Image src='/assets/img/banner.png' alt='logo' width={1274} height={340} priority={true} />
        {children}
      </Wrapper>
    </main>
  )
}
