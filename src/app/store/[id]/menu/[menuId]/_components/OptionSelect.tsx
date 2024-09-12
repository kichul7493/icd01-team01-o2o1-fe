// OptionSelect.tsx
import { RadioGroup } from '@/components/ui/radio-group'
import OptionItem from './OptionItem'
import { OptionItemProps } from './OptionItem'

interface OptionSelectProps {
  optionGroups: {
    optionGroupId: number
    optionGroupName: string
    isRequired: boolean
    options: {
      optionId: number
      optionName: string
      optionPrice: number
    }[]
  }[]
}

const OptionSelect = ({ optionGroups }: OptionSelectProps) => {
  return (
    <>
      {optionGroups?.map((group) => (
        <div key={group.optionGroupId}>
          <div className="bg-[#F2F5F7] px-3 py-[18px] text-base font-semibold">
            <div>
              {group.optionGroupName} {group.isRequired ? '(필수)' : '(선택)'}
            </div>
          </div>
          <div className="flex flex-col gap-3 px-3 py-3">
            <RadioGroup>
              {group.options.map((option) => (
                <OptionItem
                  key={option.optionId}
                  optionId={option.optionId}
                  optionPrice={option.optionPrice}
                  optionName={option.optionName}
                  optionGroupId={group.optionGroupId}
                />
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
    </>
  )
}

export default OptionSelect
