import { Button } from '@/components/ui/button'
import { Plus, Minus, Trash2 } from 'lucide-react'

interface ButtonProps {
  onClick: () => void // onClick의 타입을 함수로 정의
}

interface CartMinusButtonProps extends ButtonProps {
  menuStock: number
}

export const MinusButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
      aria-label="Increase quantity"
      onClick={onClick} // onClick 프로퍼티에 전달된 함수를 사용
    >
      <Minus size={11} color="black" />
    </Button>
  )
}

export const PlusButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
      aria-label="Increase quantity"
      onClick={onClick} // onClick 프로퍼티에 전달된 함수를 사용
    >
      <Plus size={11} color="black" />
    </Button>
  )
}

export const CartMinusButton: React.FC<CartMinusButtonProps> = ({ menuStock, onClick }) => {
  return (
    <Button
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
      aria-label="Increase quantity"
      onClick={onClick} // onClick 프로퍼티에 전달된 함수를 사용
    >
      {menuStock > 1 ? <Minus size={11} color="black" /> : <Trash2 size={11} color="black" />}
    </Button>
  )
}
