import { render, screen } from '@testing-library/react'
import Menu from './Menu'

const mockPropsList = [
  { name: '후라이드치킨', price: 15000, image: 'https://via.placeholder.com/100x100?text=Image1' },
  { name: '양념치킨', price: 17000, image: 'https://via.placeholder.com/100x100?text=Image2' },
  { name: '간장치킨', price: 16000, image: 'https://via.placeholder.com/100x100?text=Image3' },
]

describe('Menu 컴포넌트', () => {
  it('test', () => {})

  // it('메뉴 이름, 가격, 이미지를 렌더링한다', () => {
  //   render(<Menu {...mockPropsList[0]} />)
  //   expect(screen.getByText('후라이드치킨')).toBeInTheDocument()
  //   expect(screen.getByText('15000원')).toBeInTheDocument()
  //   const image = screen.getByAltText(`menu-image-후라이드치킨`) as HTMLImageElement
  //   expect(image).toBeInTheDocument()
  //   expect(image.src).toEqual(expect.stringContaining(encodeURIComponent(mockPropsList[0].image)))
  // })
  // it('메뉴 이름, 가격, 이미지를 여러 개 렌더링한다', () => {
  //   render(
  //     <div>
  //       {mockPropsList.map((props, index) => (
  //         <Menu key={index} {...props} />
  //       ))}
  //     </div>,
  //   )
  //   mockPropsList.forEach((props) => {
  //     expect(screen.getByText(props.name)).toBeInTheDocument()
  //     expect(screen.getByText(`${props.price}원`)).toBeInTheDocument()
  //     const image = screen.getByAltText(`menu-image-${props.name}`) as HTMLImageElement
  //     expect(image).toBeInTheDocument()
  //     expect(image.src).toEqual(expect.stringContaining(encodeURIComponent(props.image)))
  //   })
  // })
})
