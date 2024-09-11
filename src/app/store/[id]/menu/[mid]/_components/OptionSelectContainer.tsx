import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const OptionSelectContainer = () => {
  return (
    <>
      <div className="bg-[#F2F5F7] px-3 py-[18px] text-base font-semibold">
        <div>옵션1 (필수 - 단일)</div>
      </div>
      <div className="flex flex-col gap-3 px-3 py-3">
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="1"
              id="option_1"
              className="h-7 w-7 rounded-full border border-[#DAE3EA] text-[#D9D9D9]"
            />
            <Label htmlFor="option_1" className="text-base font-normal">
              뼈
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="bg-[#F2F5F7] px-3 py-[18px] text-base font-semibold">
        <div>옵션2 (선택 - 다중)</div>
      </div>
      <div className="flex flex-col gap-3 px-3 py-3">
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="1"
              id="option_1"
              className="h-7 w-7 rounded-full border border-[#DAE3EA] text-[#D9D9D9]"
            />
            <Label htmlFor="option_1" className="text-base font-normal">
              뼈
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2"
              id="option_2"
              className="h-7 w-7 rounded-full border border-[#000000] text-[#000000]"
            />
            <Label htmlFor="option_2" className="text-base font-normal">
              순살 (+1000)
            </Label>
          </div>
        </RadioGroup>
      </div>
    </>
  )
}

export default OptionSelectContainer
