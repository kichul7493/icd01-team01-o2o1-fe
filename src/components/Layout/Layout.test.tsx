import { render, screen } from '@testing-library/react'
import Layout, { linkList } from './Layout'

describe('Layout', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div data-testid="child">Child Component</div>
      </Layout>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('하단 GNB가 LinkList 배열에 설정된 이름과 href 속성을 가진 Link 태그를 출력해야 한다.', () => {
    render(<Layout>children</Layout>)

    linkList.forEach((link) => {
      expect(screen.getByRole('link', { name: link.text })).toHaveAttribute('href', link.href)
    })
  })

  it('has correct max-width/min-width class ', () => {
    render(<Layout>children</Layout>)
    const mainElement = screen.getByRole('main')

    expect(mainElement).toHaveClass('max-w-[480px]')
    expect(mainElement).toHaveClass('min-w-[280px]')
  })
})
