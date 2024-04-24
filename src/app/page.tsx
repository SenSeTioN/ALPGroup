import { Content } from '@/entities'
import { Button, Text } from '@/shared'
import { Main } from '@/widgets'
import Link from 'next/link'
import styles from './Home.module.scss'
import { TEXT } from './constants'

export default function Home() {
  return (
    <Main>
      <Content image={{ src: '/assets/img/home.jpg', alt: 'homepage' }}>
        <div className={styles.content}>
          {TEXT.content.map((item, i) => (
            <Text key={i} tag='p' size='s' weight='regular'>
              {item}
            </Text>
          ))}

          <Link href='/questions'>
            <Button theme='primary' width='standard'>
              <Text tag='span' size='ml' weight='bold'>
                {TEXT.btn}
              </Text>
            </Button>
          </Link>
        </div>
      </Content>
    </Main>
  )
}
