import Script from 'next/script'

export default function OrderStatusLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a11b87e83285335df02dea6d84bcbfad&libraries=services,clusterer&autoload=false"
      />
      {children}
    </>
  )
}
