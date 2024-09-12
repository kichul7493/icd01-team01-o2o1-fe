import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface MenuType {
  menuId: number
  menuName: string
  menuCount: number
  menuPrice: number | null
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
  menus: MenuType[]
  setMenus: (menus: MenuType[]) => void
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
      // 세션 저장소에 저장
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
