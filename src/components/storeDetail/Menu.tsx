import Image from 'next/image'

interface MenuProps {
  name: string
  price: number
  image: string
}

const Menu: React.FC<MenuProps> = ({ name, price, image }) => {
  return (
    <section aria-labelledby="menu-section">
      <article className="flex justify-between border-b border-[#EEEEEE] py-3.5">
        <div>
          <h3 className="text-base/[18px] font-semibold">{name}</h3>
          <p className="pt-2 text-base/[18px] font-normal">{price}원</p>
        </div>
        <figure className="relative h-[100px] w-[100px] bg-gray-200">
          <Image src={image} alt="menu-image" fill objectFit="cover" />
        </figure>
      </article>
    </section>
  )
}

export default Menu
