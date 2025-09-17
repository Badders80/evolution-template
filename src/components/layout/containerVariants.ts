// Shared token file for all container components

export const aspectRatios = {
  ultraWide: 'aspect-[32/9]',   // Cinematic
  wide: 'aspect-video',         // 16:9
  photo: 'aspect-[4/3]',        // Default
  square: 'aspect-square',      // 1:1
  tall: 'aspect-[3/4]',         // Portrait-style
}

export const containerWidths = {
  min: 'min-w-[320px]',
  max: 'max-w-7xl', // <- max width of build (global)
}

export const paddingVariants = {
  sm: 'px-4 py-8',
  base: 'px-6 py-12',
  lg: 'px-8 py-20',
}
