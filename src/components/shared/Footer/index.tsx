'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface FooterProps {
  text: string
  onClick: () => void
  footerClassName?: string
  buttonClassName?: string
}

const Footer = ({ text, onClick, ...props }: FooterProps) => {
  return (
    <footer className={cn(props.footerClassName)}>
      <button
        className={cn(
          'h-20 w-full bg-[#0FA5FA] py-2 text-xl text-white transition duration-300 hover:bg-[#0d98e8]',
          props.buttonClassName,
        )}
        onClick={onClick}
      >
        {text}
      </button>
    </footer>
  )
}

export default Footer
