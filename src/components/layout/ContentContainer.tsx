import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { aspectRatios, paddingVariants } from './containerVariants'

interface ContentContainerProps {
  children: ReactNode
  ratio?: keyof typeof aspectRatios
  className?: string
  center?: boolean
  padding?: keyof typeof paddingVariants
}

export function ContentContainer({
  children,
  ratio = 'photo',
  className,
  center = false,
  padding = 'base',
}: ContentContainerProps) {
  return (
    <section
      className={clsx(
        'w-full mx-auto',
        'max-w-7xl',
        aspectRatios[ratio],
        paddingVariants[padding],
        center && 'text-center',
        className
      )}
    >
      {children}
    </section>
  )
}
