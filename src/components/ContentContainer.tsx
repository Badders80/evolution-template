import { ReactNode } from 'react'
import clsx from 'clsx'

interface ContentContainerProps {
  children: ReactNode
  className?: string
}

export default function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={clsx('w-full px-6 py-12 md:px-12 md:py-20 max-w-7xl mx-auto', className)}>
      {children}
    </div>
  )
}
