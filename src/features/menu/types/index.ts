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
