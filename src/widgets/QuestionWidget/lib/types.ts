export interface IQuestion {
  title: string
  subtitle?: string
  image: {
    src: string
    alt: string
  }
  input: 'text' | 'radio' | 'checkbox' | 'select'
  variants?: {
    groupOne: {
      id: string
      title: string
      score: number
    }[]
    groupTwo?: {
      id: string
      title: string
      score: number
    }[]
    points: {
      id: string
      title: string
    }[]
  }
  description?: string
  gender?: string[]
  selections?: { label: string; value: number }[]
}
