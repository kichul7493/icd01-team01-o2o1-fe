export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      const dataUrl = fileReader.result

      if (!dataUrl || typeof dataUrl !== 'string') {
        reject(new Error('Invalid data URL'))
        return
      }

      resolve(dataUrl)
    }
    fileReader.onerror = reject
    fileReader.readAsDataURL(file)
  })
}

export const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()

    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = url
  })
}

export const convertImageToCompressedBlob = (image: HTMLImageElement): Promise<Blob> => {
  const MAX_WIDTH = 1024
  const MAX_HEIGHT = 1024
  const BLOB_TYPE = 'image/webp'
  const BLOB_QUALITY = 0.7

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')

    const ratio = Math.min(MAX_WIDTH / image.width, MAX_HEIGHT / image.height, 1)

    const newWidth = image.width * ratio
    const newHeight = image.height * ratio
    canvas.width = newWidth
    canvas.height = newHeight

    const canvasContext = canvas.getContext('2d')
    if (!canvasContext) {
      throw new Error('Cannot get canvas context')
    }

    canvasContext.drawImage(image, 0, 0, newWidth, newHeight)
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Cannot convert canvas to Blob'))
          return
        }

        resolve(blob)
      },
      BLOB_TYPE,
      BLOB_QUALITY,
    )
  })
}
