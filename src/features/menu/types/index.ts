export interface OptionState {
  selectedOptions: Record<number, number[]>
  selectOption: (optionGroupId: number, optionId?: number) => void
  menuStock: number
  setMenuStock: (n: number) => void
  price: number
  setPrice: (n: number) => void
  menuPrice: number
  setMenuPrice: (n: number) => void
  optionPrice: number
  setOptionPrice: (n: number) => void
}

export interface MenuSelectState {
  menuPrice: number | null
  setMenuPrice: (menuPrice: number) => void
  menuCount: number
  setMenuCount: (n: number, menuPrice: number) => void
  optionGroups: OptionGroup[]
  setOptionGroups: (optionGroups: OptionGroup[]) => void
}

export interface OptionGroup {
  optionGroupId: number
  optionGroupName: string
  options: Option[]
}

export interface Option {
  optionId: number
  optionName: string
  optionPrice: number
}
