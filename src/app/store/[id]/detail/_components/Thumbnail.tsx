import Image from 'next/image'

interface ThumbnailProps {
  image: string
}

const Thumbnail = ({ image }: ThumbnailProps) => {
  return (
    <figure className="relative h-[220px] w-full bg-gray-200">
      <Image src={image} alt={`Thumbnail`} fill />
    </figure>
  )
}

export default Thumbnail
