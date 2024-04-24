interface IRows {
  id: number
  score: string
  risk: string
  chance: string
  bgColor: string
  color?: string
}

interface IColumns {
  id: number
  title: string
}

type TTable = {
  rows: IRows[]
  columns: IColumns[]
}

export const TABLE: TTable = {
  rows: [
    {
      id: 1,
      score: 'Менее 7',
      risk: 'Низкий риск',
      chance: '1 из 100 или 1%',
      bgColor: '#DBDEF8',
    },
    {
      id: 2,
      score: '7-11',
      risk: 'Слегка повышен',
      chance: '1 из 25 или 4%',
      bgColor: '#C5CAEE',
    },
    {
      id: 3,
      score: '12–14',
      risk: 'Умеренный',
      chance: '1 из 6 или 17%',
      bgColor: '#9BA4E6',
      color: '#FFFFFF',
    },
    {
      id: 4,
      score: '15–20',
      risk: 'Высокий',
      chance: '1 из 3 или 33%',
      bgColor: '#7E88D2',
      color: '#FFFFFF',
    },
    {
      id: 5,
      score: 'Более 20',
      risk: 'Очень высокий',
      chance: '1 из 2 или 50%',
      bgColor: '#6C76BC',
      color: '#FFFFFF',
    },
  ],

  columns: [
    { id: 1, title: 'Общее количество баллов' },
    { id: 2, title: 'Уровень риска СД 2 типа' },
    { id: 3, title: 'Вероятность развития СД 2 типа' },
  ],
}
