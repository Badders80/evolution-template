import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'full' | 'centered'
  className?: string
}

export default function Section({ children, variant = 'default', className }: SectionProps) {
  const base = 'w-full'
  const variants = {
    default: 'bg-white',
    full: 'bg-gray-100',
    centered: 'flex justify-center',
  }

  return (
    <section className={clsx(base, variants[variant], className)}>
      {children}
    </section>
  )
}
