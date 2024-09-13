import { create } from 'zustand'

interface MenuSelectState {
  storeId: number | null
  setStoreId: (storeId: number) => void
  storeName: string | null
  setStoreName: (storeName: string) => void
  menuId: number | null
  setMenuId: (menuId: number) => void
  menuName: string | null
  setMenuName: (menuName: string) => void
  menuCount: number
  setMenuCount: (n: number) => void
  optionGroups: OptionGroup[]
  setOptionGroups: (optionGroups: OptionGroup[]) => void
}

interface OptionGroup {
  optionGroupId: number
  optionGroupName: string
  options: Option[]
}

interface Option {
  optionId: number
  optionName: string
  optionPrice: number
}

export const useMenuSelectStore = create<MenuSelectState>((set) => ({
  storeId: null,
  setStoreId: (storeId: number) => set({ storeId }),
  storeName: null,
  setStoreName: (storeName: string) => set({ storeName }),
  menuId: null,
  setMenuId: (menuId: number) => set({ menuId }),
  menuName: null,
  setMenuName: (menuName: string) => set({ menuName }),
  menuCount: 1,
  setMenuCount: (n: number) =>
    set({
      menuCount: n,
    }),
  optionGroups: [],
  setOptionGroups: (optionGroups: OptionGroup[]) =>
    set({
      optionGroups,
    }),
}))
