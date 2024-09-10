import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const LoadingSpinner = ({ className, size = 'sm' }: LoadingSpinnerProps) => {
  const sizeMap = {
    sm: '24',
    md: '48',
    lg: '96',
  }

  return (
    <svg
      className={cn('animate-spin', className)}
      fill="none"
      height={sizeMap[size]}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      style={{
        animationDuration: '1.5s',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        stroke: '#22222',
      }}
      viewBox="0 0 24 24"
      width={sizeMap[size]}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
