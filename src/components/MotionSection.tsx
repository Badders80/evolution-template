'use client'

import { motion } from 'framer-motion'

export default function MotionSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full py-16"
    >
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </motion.section>
  )
}
