import { create } from 'zustand'

const useGameStore = create((set) => ({
  selectedGames: 1,
  setSelectedGames: (games) => set({ selectedGames: games }),
}))

export default useGameStore
