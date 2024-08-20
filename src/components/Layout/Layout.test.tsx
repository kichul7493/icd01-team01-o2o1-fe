import { render, screen } from '@testing-library/react'
import Layout, { LinkList } from './Layout'

describe('Layout', () => {
  it('하단 GNB가 LinkList 배열에 설정된 이름과 href 속성을 가진 Link 태그를 출력해야 한다.', () => {
    render(<Layout>children</Layout>)

    LinkList.forEach((link) => {
      expect(screen.getByRole('link', { name: link.text })).toHaveAttribute('href', link.href)
    })
  })
})
