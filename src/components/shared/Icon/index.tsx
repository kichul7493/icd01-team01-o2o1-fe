import React, { FunctionComponent, SVGProps, Suspense, lazy } from 'react'

type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>

export type IconName = 'arrow-left' | 'arrow-right' | 'plus' | 'minus'
// Add all other icon names here

export interface IconProps {
  className?: string
  name: IconName
  size: 24 | 16 | 40 | number
}

const iconCache: Partial<Record<IconName, SVGComponent>> = {}

const IconSkeleton = ({ size }: { size: IconProps['size'] }) => {
  const style = { width: `${size}px`, height: `${size}px` }
  return <div className="inline-block rounded-full" style={style}></div>
}

const loadDynamicIcon = (name: IconName) => {
  if (!iconCache[name]) {
    iconCache[name] = React.lazy(() => import(`./public/${name}.svg`))
  }
  console.log(iconCache[name])
  return iconCache[name]
}

export default function Icon({ className, name, size = 16 }: IconProps) {
  const DynamicIcon = loadDynamicIcon(name)
  return (
    <Suspense fallback={<IconSkeleton size={size} />}>
      <DynamicIcon width={size} height={size} className={className} />
    </Suspense>
  )
}
