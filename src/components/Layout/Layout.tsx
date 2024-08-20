import Link from 'next/link'
import React from 'react'
import { House, Search, FileCheck, Heart, CircleUserRound } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export const LinkList = [
  {
    href: '/',
    icon: <House size={24} />,
    text: '홈',
  },
  {
    href: '/search',
    icon: <Search size={24} />,
    text: '검색',
  },
  {
    href: '/order',
    icon: <FileCheck size={24} />,
    text: '주문',
  },
  {
    href: '/heart',
    icon: <Heart size={24} />,
    text: '찜',
  },
  {
    href: '/user',
    icon: <CircleUserRound size={24} />,
    text: 'My',
  },
]

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="h-screen">{children}</main>
      <nav className="fixed bottom-0 z-50 h-14 w-full border-t-2 bg-white">
        <ul className="flex h-full items-center justify-between px-8">
          {LinkList.map((link) => (
            <li key={link.href}>
              <Link className="flex flex-col items-center" href={link.href}>
                {link.icon}
                <p className="text-center text-xs">{link.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Layout
