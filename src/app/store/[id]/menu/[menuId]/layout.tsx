import { Toaster } from '@/components/ui/toaster'

export default function OrderStatusLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
