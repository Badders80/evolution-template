// components/ImageContainer.tsx
'use client'

import Image from 'next/image'
import clsx from 'clsx'

type ImageSize = 'small' | 'medium' | 'large' | 'xlarge'

interface ImageContainerProps {
  src: string
  alt?: string
  size?: ImageSize
  className?: string
  priority?: boolean
}

const aspectRatios: Record<ImageSize, string> = {
  small: 'aspect-[32/9]',
  medium: 'aspect-[16/9]',
  large: 'aspect-[4/3]',
  xlarge: 'aspect-[1/1]',
}

export default function ImageContainer({
  src,
  alt = '',
  size = 'medium',
  className,
  priority = false,
}: ImageContainerProps) {
  return (
    <div className={clsx('w-full overflow-hidden relative', aspectRatios[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  )
}
