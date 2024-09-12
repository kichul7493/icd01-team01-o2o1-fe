import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Menu {
  menuId: number
  menuName: string
  menuCount: number
  menuPrice: number
  optionGroups: OptionGroup[]
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

interface CartState {
  storeId: number | null
  setStoreId: (storeId: number) => void
  storeName: string | null
  setStoreName: (storeName: string) => void
  menus: Menu[]
  setMenus: (menus: Menu[]) => void
}

export const useManageCart = create<CartState>()(
  persist(
    (set) => ({
      storeId: null,
      setStoreId: (storeId: number) => set({ storeId }),
      storeName: null,
      setStoreName: (storeName: string) => set({ storeName }),
      menus: [],
      setMenus: (menus: any[]) => set({ menus }),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
