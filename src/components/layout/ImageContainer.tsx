'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { aspectRatios } from './containerVariants'

interface ImageContainerProps {
  src: string
  alt: string
  ratio?: keyof typeof aspectRatios
  className?: string
  priority?: boolean
}

export function ImageContainer({
  src,
  alt,
  ratio = 'wide',
  className,
  priority = false,
}: ImageContainerProps) {
  return (
    <motion.div
      className={clsx(
        'relative w-screen overflow-hidden',
        aspectRatios[ratio],
        className
      )}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw" // ✅ Image only loads at screen width, not higher
        priority={priority}
        className="object-cover object-center"
      />
    </motion.div>
  )
}
