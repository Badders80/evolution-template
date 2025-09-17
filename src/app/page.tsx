
import { ImageContainer } from '@/components/layout/ImageContainer'
import { ContentContainer } from '@/components/layout/ContentContainer'

export default function HomePage() {
  return (
    <section className="space-y-24">

      <ImageContainer
        src="/images/Horse-Double-Black.png"
        alt="Full width horse"
        ratio="square"
      />

      <ImageContainer
        src="/images/Horse-and-foal.jpg"
        alt="Horse and foal"
        ratio="square"
      />

      <ContentContainer ratio="ultraWide" center padding="lg">
        <h2 className="text-4xl font-bold">Banner Section</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Content container sits inside the max build width and respects spacing from edges.
        </p>
      </ContentContainer>

      <ImageContainer
        src="/images/Background-hooves-back-and-white.jpg"
        alt="Hooves in motion"
        ratio="tall"
      />

      <ImageContainer
        src="/images/Landscape-digitaloverlay.jpg"
        alt="Landscape digital overlay"
        ratio="ultraWide"
      />
    </section>
  )
}
