type Image = {
  src: string
  alt: string
}

type TResult = {
  title: string
  description: string
  image: Image
}

export const RESULT: TResult[] = [
  {
    title: 'Низкий риск развития СД 2 типа, вероятность 1%.',
    description:
      'У Вашего пациента хорошее здоровье. Рекомендуется продолжать вести здоровый образ жизни!',
    image: {
      src: '/assets/img/home.jpg',
      alt: 'Низкий риск развития СД 2 типа',
    },
  },
  {
    title: 'Слегка повышен риск развития СД 2 типа, вероятность 4%.',
    description:
      'У Вашего пациента хорошее здоровье. Рекомендуется продолжать вести здоровый образ жизни!',
    image: {
      src: '/assets/img/q2.jpg',
      alt: 'Слегка повышен риск развития СД 2 типа',
    },
  },
  {
    title: 'Умеренный риск развития СД 2 типа, вероятность 17%.',
    description: 'Возможно у Вашего пациента предиабет. Рекомендуется изменить образ жизни.',
    image: {
      src: '/assets/img/home.jpg',
      alt: 'Умеренный риск развития СД 2 типа',
    },
  },
  {
    title: 'Высокий риск развития СД 2 типа, вероятность 33%.',
    description:
      'Возможно, у Вашего пациента предиабет или сахарный диабет 2 типа. Порекомендуйте ему проверить уровень глюкозы (сахара) в крови. Пациенту необходимо дать рекомендации по модификации образа жизни и при необходимости назначить лекарства для снижения уровня глюкозы (сахара) в крови.',
    image: {
      src: '/assets/img/q4.jpg',
      alt: 'Высокий риск развития СД 2 типа',
    },
  },
  {
    title: 'Высокий риск развития СД 2 типа, вероятность 50%.',
    description:
      'Возможно, у Вашего пациента сахарный диабет 2 типа. Порекомендуйте ему проверить уровень глюкозы (сахара) в крови. Пациенту необходимо дать рекомендации по модификации образа жизни и при необходимости назначить лекарства для снижения уровня глюкозы (сахара) в крови.',
    image: {
      src: '/assets/img/home.jpg',
      alt: 'Низкий риск развития СД 2 типа',
    },
  },
]