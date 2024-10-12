import { create } from 'zustand'
import { MenuSelectState, OptionGroup } from '../types'

export const useMenuSelectStore = create<MenuSelectState>((set) => ({
  menuPrice: null,
  setMenuPrice: (menuPrice: number) => set({ menuPrice }),
  menuCount: 1,
  setMenuCount: (n: number, menuPrice: number) =>
    set((state) => {
      if (n === -1 && state.menuCount === 1) return state

      const newMenuCount = Math.max(1, state.menuCount + n)
      const newMenuPrice = state.menuPrice !== null ? newMenuCount * menuPrice : null

      return {
        menuCount: newMenuCount,
        menuPrice: newMenuPrice,
      }
    }),
  optionGroups: [],
  setOptionGroups: (optionGroups: OptionGroup[]) => set({ optionGroups }),
}))
