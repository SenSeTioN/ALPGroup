'use client'

import { Table } from '@mantine/core'
import styles from './Table.module.scss'
import { TABLE } from './lib/constants'

const rows = TABLE.rows.map((item) => (
  <Table.Tr key={item.id}>
    <Table.Td>{item.score}</Table.Td>
    <Table.Td style={{ backgroundColor: item.bgColor, color: item.color ? item.color : '' }}>
      {item.risk}
    </Table.Td>
    <Table.Td>{item.chance}</Table.Td>
  </Table.Tr>
))

const columns = TABLE.columns.map((item) => <Table.Th key={item.id}>{item.title}</Table.Th>)

export const TableCustom = () => {
  return (
    <div className={styles['table-wrapper']}>
      <Table withRowBorders={true} className={styles['table']}>
        <Table.Thead className={styles['table-head']}>
          <Table.Tr>{columns}</Table.Tr>
        </Table.Thead>
        <Table.Tbody className={styles['table-body']}>{rows}</Table.Tbody>
      </Table>
    </div>
  )
}
