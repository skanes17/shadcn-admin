import { create } from 'zustand'

interface GamesFilterState {
  selectedGames: number
  setSelectedGames: (value: number) => void
}

export const useGamesFilterStore = create<GamesFilterState>((set) => ({
  selectedGames: 1, // Default to all games
  setSelectedGames: (value) => set({ selectedGames: value }),
}))
