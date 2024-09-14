import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CartState } from '@/features/cart/types'

export const useManageCart = create<CartState>()(
  persist(
    (set, get) => ({
      storeId: null,
      setStoreId: (storeId: number | null) => set({ storeId }),
      storeName: null,
      setStoreName: (storeName: string | null) => set({ storeName }),
      menus: [],
      setMenus: (menus: any[]) => set({ menus }),

      // Add a flag to check if the store is hydrated
      isHydrated: false,
      setHydrated: (hydrated: boolean) => set({ isHydrated: hydrated }),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        // Set the `isHydrated` flag to true after rehydration
        state?.setHydrated(true)
      },
    },
  ),
)

export const useDeleteMenuFromCart = (menuId: number) => {
  const { setMenus, menus } = useManageCart.getState()

  const newMenus = menus.filter((menu) => menu.menuId !== menuId)
  setMenus(newMenus)

  // 마지막 메뉴일경우, sotreId와 storeName를 초기화
  if (newMenus.length === 0) {
    useManageCart.getState().setStoreId(null)
    useManageCart.getState().setStoreName(null)
  }
}

export const useGetMenuPriceWithTotalOption = (
  menuPrice: number | null,
  totalOptionPrice: number,
  menuCount: number,
) => {
  return ((Number(menuPrice) + totalOptionPrice) * menuCount).toLocaleString()
}

export const useChangeMenuStock = (menuId: number, n: number) => {
  const { setMenus, menus } = useManageCart.getState()

  // 메뉴 id에 해당하는 메뉴를 찾는다.
  const updatedMenus = menus.map((menu) => {
    if (menu.menuId === menuId) {
      // 메뉴의 재고를 수정한다.
      return {
        ...menu,
        menuCount: menu.menuCount + n, // n은 재고의 변경량
      }
    }
    return menu
  })

  // 수정된 메뉴 목록으로 상태를 업데이트한다.
  setMenus(updatedMenus)

  // 추가로 만약에 해당 메뉴의 재고가 0이 되면, 상태를 초기화한다.
  if (updatedMenus.some((menu) => menu.menuId === menuId && menu.menuCount <= 0)) {
    useManageCart.getState().setMenus(updatedMenus.filter((menu) => menu.menuId !== menuId))

    // 마지막 메뉴일 경우, storeId와 storeName를 초기화
    if (updatedMenus.every((menu) => menu.menuCount <= 0)) {
      useManageCart.getState().setStoreId(null)
      useManageCart.getState().setStoreName(null)
    }
  }
}

export const useGetTotalOrderPrice = () => {
  const { menus } = useManageCart.getState()

  // 메뉴의 가격과 옵션의 가격을 합산하여 총 금액을 계산한다.
  const totalOrderPrice = menus.reduce((total, menu) => {
    const totalOptionPrice = menu.optionGroups.reduce((optionTotal, group) => {
      return (
        optionTotal +
        group.options.reduce((groupTotal, option) => {
          return groupTotal + option.optionPrice
        }, 0)
      )
    }, 0)

    return total + (Number(menu.menuPrice) + totalOptionPrice) * menu.menuCount
  }, 0)

  return totalOrderPrice
}
