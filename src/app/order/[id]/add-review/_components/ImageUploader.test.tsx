import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageUploader from './ImageUploader'

describe('ImageUploader', () => {
  // URL.createObjectURL을 모킹합니다.
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => 'http://via.placeholder.com/150')
  })

  it('사진 추가 버튼이 출력되야 한다.', () => {
    render(<ImageUploader />)

    expect(screen.getByLabelText('사진 추가')).toBeInTheDocument()
  })

  it('사진 추가 버튼을 클릭하고 이미지를 추가하면 추가된 이미지가 출력되어야 한다.', async () => {
    render(<ImageUploader />)

    const file = new File(['test image'], 'test.png', { type: 'image/png' })
    const input = screen.getByLabelText('사진 추가')

    await userEvent.upload(input, file)

    expect(screen.getByAltText('review')).toBeInTheDocument()
  })

  it('삭제 버튼을 누르면 handleDeleteImage 함수가 호출된다.', async () => {
    render(<ImageUploader />)

    const file = new File(['test image'], 'test.png', { type: 'image/png' })
    const input = screen.getByLabelText('사진 추가')

    await userEvent.upload(input, file)

    const deleteButton = screen.getByRole('button')

    await userEvent.click(deleteButton)

    expect(screen.queryByAltText('review')).not.toBeInTheDocument()
  })
})
