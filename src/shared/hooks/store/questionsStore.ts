import { create } from 'zustand'

type State = {
  page: number
  answer: number[]
}

type Actions = {
  incrementPage: () => void
  decrementPage: () => void
  setAnswer: (answer: number) => void
  deleteAnswer: () => void
  reset: () => void
}

export const useQuestionsStore = create<State & Actions>((set) => ({
  page: 0,
  answer: [],
  incrementPage: () => set((state) => ({ page: state.page + 1 })),
  decrementPage: () => set((state) => ({ page: state.page - 1 })),
  setAnswer: (answer: number) => set((state) => ({ answer: [...state.answer, answer] })),
  deleteAnswer: () => set((state) => ({ answer: state.answer.slice(0, -1) })),
  reset: () => set((state) => ({ page: 0, answer: [] })),
}))
