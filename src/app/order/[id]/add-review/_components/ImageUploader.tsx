import { Cross1Icon } from '@radix-ui/react-icons'
import { CameraIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { convertImageToCompressedBlob, loadImage, readFileAsDataURL } from '@/util/convertImage'

const ImageUploader = () => {
  const [images, setImages] = React.useState<string[]>([])

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // const dataUrl = await readFileAsDataURL(file)
    // const image = await loadImage(dataUrl)
    // const blob = await convertImageToCompressedBlob(image)
    // const compressedFile = new File([blob], file.name, { type: blob.type })

    //TODO: 이미지를 S3 버킷에 업로드하고 URL을 받아온다.
    setImages((prev) => [...prev, URL.createObjectURL(file)])
  }

  const handleDeleteImage = (image: string) => {
    setImages((prev) => prev.filter((img) => image !== img))
  }

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="img"
        className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded border-2"
      >
        <CameraIcon width={20} height={20} />
        <p className="text-xs">사진 추가</p>
        <input
          onChange={handleUploadImage}
          name="img"
          id="img"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
      {images.map((image, i) => (
        <div key={image} className="relative">
          <button
            onClick={() => handleDeleteImage(image)}
            className="absolute right-1 top-1 rounded-full bg-white p-1 opacity-80 hover:opacity-100"
          >
            <Cross1Icon width={10} height={10} />
          </button>
          <Image src={image} alt="review" width={64} height={64} className="h-16 w-16" />
        </div>
      ))}
    </div>
  )
}

export default ImageUploader
