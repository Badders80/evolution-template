import { ReactNode } from 'react'
import clsx from 'clsx'

interface GridProps {
  children: ReactNode
  cols?: number
  gap?: string
  className?: string
}

export default function Grid({ children, cols = 2, gap = 'gap-8', className }: GridProps) {
  return (
    <div className={clsx(`grid grid-cols-1 md:grid-cols-${cols} ${gap}`, className)}>
      {children}
    </div>
  )
}
