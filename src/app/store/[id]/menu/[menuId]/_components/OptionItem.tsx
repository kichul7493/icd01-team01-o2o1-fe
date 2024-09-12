'use client'

import { RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useOptionStore } from '@/features/menu/hooks/useSelectMenuHook'
import { useEffect } from 'react'

export interface OptionItemProps {
  optionId: number
  optionName: string
  optionPrice: number
  optionGroupId: number
}

const OptionItem = ({ optionId, optionName, optionPrice, optionGroupId }: OptionItemProps) => {
  const { selectOption, selectedOptions, setPrice, setOptionPrice } = useOptionStore()

  const isSelected = selectedOptions[optionGroupId]?.includes(optionId) ?? false

  const handleOptionSelect = () => {
    if (isSelected) {
      selectOption(optionGroupId, undefined)
    } else {
      selectOption(optionGroupId, optionId)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value={String(optionId)}
        id={String(optionId)}
        checked={isSelected}
        onClick={handleOptionSelect}
        className={`h-7 w-7 rounded-full border ${isSelected ? 'border-[#000000]' : 'border-[#CCCCCC]'} text-[#000000]`}
      />
      <Label htmlFor={String(optionId)} className="text-base font-normal">
        {optionName} {optionPrice > 0 ? `(+${optionPrice}원)` : ''}
      </Label>
    </div>
  )
}

export default OptionItem
