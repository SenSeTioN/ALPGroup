import { IQuestion } from '../types'

export const questions: IQuestion[] = [
  {
    title: 'Введите возраст Вашего пациента',
    input: 'text',
    image: {
      src: '/assets/img/q1.jpg',
      alt: 'Вопрос 1',
    },
    description:
      'До 45 лет (0 баллов), 45—54 года (2 балла), 55—64 года (3 балла), старше 65 лет (4 балла)',
  },
  {
    title: 'Рассчитайте индекс массы тела пациента',
    subtitle:
      'Индекс массы тела позволяет выявить наличие избыточного веса или ожирения (ИМТ = вес, кг / рост, м2). Если у Вас не получается произвести расчет самостоятельно, воспользуйтесь',
    image: {
      src: '/assets/img/q2.jpg',
      alt: 'Вопрос 2',
    },
    input: 'text',
    description: 'Менее 25 кг/м2 (0 баллов), 25—30 кг/м2 (1 балл), больше 30 кг/м2 (3 балла)',
  },
  {
    title: 'Окружность талии также указывает на наличие избыточного веса или ожирения.',
    image: {
      src: '/assets/img/home.jpg',
      alt: 'Вопрос 3',
    },
    input: 'radio',
    gender: ['Мужчины', 'Женщины'],
    variants: {
      groupOne: [
        {
          id: 'm1',
          title: '< 94 см',
          score: 0,
        },
        {
          id: 'm2',
          title: '94—102 см',
          score: 3,
        },
        {
          id: 'm3',
          title: '> 102 см',
          score: 4,
        },
      ],
      groupTwo: [
        {
          id: 'w1',
          title: '< 80 см',
          score: 0,
        },
        {
          id: 'w2',
          title: '80—88 см',
          score: 3,
        },
        {
          id: 'w3',
          title: '> 88 см',
          score: 4,
        },
      ],
      points: [
        {
          id: 's1',
          title: '(0 баллов)',
        },
        {
          id: 's2',
          title: '(3 балла)',
        },
        {
          id: 's3',
          title: '(4 балла)',
        },
      ],
    },
  },
  {
    title: 'Как часто Ваш пациент ест овощи, фрукты или ягоды?',
    image: {
      src: '/assets/img/q4.jpg',
      alt: 'Вопрос 4',
    },
    input: 'select',
    selections: [
      {
        label: 'Каждый день (0 баллов)',
        value: 0,
      },
      {
        label: 'Не каждый день (1 балл)',
        value: 1,
      },
    ],
  },
  {
    title:
      'Занимается ли Ваш пациент физическими упражнениями? Выполняет ли он физические упражнения по 30 минут каждый день или 3 часа в течение недели?',
    image: {
      src: '/assets/img/q1.jpg',
      alt: 'Вопрос 5',
    },
    input: 'radio',
    variants: {
      groupOne: [
        {
          id: '1',
          title: 'Да',
          score: 0,
        },
        {
          id: '2',
          title: 'Нет',
          score: 2,
        },
      ],
      points: [
        {
          id: 's1',
          title: '(0 баллов)',
        },
        {
          id: 's2',
          title: '(2 балла)',
        },
      ],
    },
  },
  {
    title:
      'Принимал ли Ваш пациент когда-либо регулярно лекарства для снижения артериального давления?',
    image: {
      src: '/assets/img/home.jpg',
      alt: 'Вопрос 6',
    },
    input: 'radio',
    variants: {
      groupOne: [
        {
          id: '1',
          title: 'Да',
          score: 2,
        },
        {
          id: '2',
          title: 'Нет',
          score: 0,
        },
      ],
      points: [
        {
          id: 's1',
          title: '(2 балла)',
        },
        {
          id: 's2',
          title: '(0 баллов)',
        },
      ],
    },
  },
  {
    title:
      'Обнаруживали ли у Вашего пациента повышение глюкозы (сахара) в крови выше нормы (во время диспансеризации, проф. осмотра, во время болезни или беременности)?',
    image: {
      src: '/assets/img/q2.jpg',
      alt: 'Вопрос 7',
    },
    input: 'radio',
    variants: {
      groupOne: [
        {
          id: '1',
          title: 'Нет',
          score: 0,
        },
        {
          id: '2',
          title: 'Да',
          score: 1,
        },
      ],
      points: [
        {
          id: 's1',
          title: '(0 баллов)',
        },
        {
          id: 's2',
          title: '(1 балл)',
        },
      ],
    },
  },
  {
    title:
      'Были ли у Вашего пациента родственники с сахарным диабетом 1 или 2 типа? (Выберите один или несколько вариантов ответов).',
    image: {
      src: '/assets/img/q1.jpg',
      alt: 'Вопрос 8',
    },
    input: 'checkbox',
    variants: {
      groupOne: [
        {
          id: '1',
          title: 'Нет',
          score: 0,
        },
        {
          id: '2',
          title: 'Да: дедушка/бабушка, тетя/дядя, двоюродные братья, сестры',
          score: 3,
        },
        {
          id: '3',
          title: 'Да: родители, брат/сестра или собственный ребенок',
          score: 5,
        },
      ],
      points: [
        {
          id: 's1',
          title: '(0 баллов)',
        },
        {
          id: 's2',
          title: '(3 балла)',
        },
        {
          id: 's3',
          title: '(5 баллов)',
        },
      ],
    },
  },
]
