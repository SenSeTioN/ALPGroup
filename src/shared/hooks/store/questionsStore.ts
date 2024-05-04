import { create } from 'zustand'

type State = {
  page: number
  answer: number[]
}

type Actions = {
  incrementPage: () => void
  decrementPage: () => void
  setAnswer: (answer: { [key: string]: number }) => void
  reset: () => void
}

export const useQuestionsStore = create<State & Actions>((set) => ({
  page: 0,
  answer: [],
  incrementPage: () => set((state) => ({ page: state.page + 1 })),
  decrementPage: () => set((state) => ({ page: state.page - 1 })),
  setAnswer: (answer: { [key: string]: number }) =>
    set((state) => ({ answer: Object.values(answer) })),
  reset: () => set((state) => ({ page: 0, answer: [] })),
}))
