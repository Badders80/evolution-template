'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

type GridItem = {
  title: string
  description: string
}

interface ResponsiveGridProps {
  items: GridItem[]
  heading?: string
  columns?: number
  direction?: 'horizontal' | 'vertical'
}

export function ResponsiveGrid({
  items,
  heading,
  columns = 4,
  direction = 'horizontal',
}: ResponsiveGridProps) {
  const gridClasses = clsx(
    'grid gap-6',
    direction === 'horizontal'
      ? `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`
      : `grid-rows-${columns}`
  )

  return (
    <section className="py-12">
      {heading && <h2 className="text-2xl font-bold mb-8 text-center">{heading}</h2>}
      <div className={gridClasses}>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg bg-white/5 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
