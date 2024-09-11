'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface MenuProps {
  id: number
  name: string
  price: number
  image: string
}

const Menu: React.FC<MenuProps> = ({ id, name, price, image }) => {
  const params = useParams<{ id: string }>()

  return (
    <Link href={`/store/${params.id}/menu/${id}`}>
      <section className="cursor-pointer" aria-labelledby="menu-section">
        <article className="flex justify-between border-b border-[#EEEEEE] py-3.5">
          <div>
            <h3 className="text-base/[18px] font-semibold">{name}</h3>
            <p className="pt-2 text-base/[18px] font-normal">{price}원</p>
          </div>
          <figure className="relative h-[100px] w-[100px] bg-gray-200">
            <Image
              src={image}
              alt={`menu-image-${name}`}
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 50px, 33px"
            />
          </figure>
        </article>
      </section>
    </Link>
  )
}

export default Menu
