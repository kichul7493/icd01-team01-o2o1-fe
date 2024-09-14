import { create } from 'zustand'
import { OptionState } from '../types'

export const useOptionStore = create<OptionState>((set) => ({
  selectedOptions: {},
  selectOption: (optionGroupId, optionId) =>
    set((state) => {
      const updatedOptions = { ...state.selectedOptions }

      if (optionId === undefined) {
        delete updatedOptions[optionGroupId]
      } else {
        if (!updatedOptions[optionGroupId]) {
          updatedOptions[optionGroupId] = []
        }
        updatedOptions[optionGroupId] = [optionId]
      }

      return {
        selectedOptions: updatedOptions,
      }
    }),
  menuStock: 1,
  setMenuStock: (n) => {
    set((state) => {
      if (n === -1 && state.menuStock === 1) return state

      const newMenuStock = Math.max(1, state.menuStock + n)
      return {
        menuStock: newMenuStock,
        price: state.price + state.menuPrice * n,
      }
    })
  },
  price: 0,
  setPrice: (n: number) => {
    set((state) => ({
      price: Math.max(0, state.price + n),
    }))
  },
  menuPrice: 0,
  setMenuPrice: (n) => {
    set(() => ({
      menuPrice: n,
    }))
  },
  optionPrice: 0,
  setOptionPrice: (n) => {
    set((state) => ({
      optionPrice: Math.max(0, state.optionPrice + n),
    }))
  },
}))
