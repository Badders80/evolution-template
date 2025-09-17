import { ContentContainer } from '@/components/layout/ContentContainer'
import { ImageContainer } from '@/components/layout/ImageContainer'

export default function DebugPage() {
  return (
    <div className="flex flex-col gap-12 p-8">
      {/* 1:1 ImageContainer */}
      <ImageContainer
        src="/images/Horse-Double-Black.png"
        alt="Horse Double Black"
        ratio="square"
        className="border border-white/20"
        priority
      />

      {/* Wide Banner ContentContainer */}
      <ContentContainer ratio="wide" className="bg-white/5 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Wide Banner ContentContainer</h2>
        <p>This is a wide banner using the ContentContainer component with the 'wide' aspect ratio.</p>
      </ContentContainer>

      {/* Portrait/Photo ImageContainer */}
      <ImageContainer
        src="/images/Background-hooves-back-and-white.jpg"
        alt="Background Hooves Black and White"
        ratio="tall"
        className="border border-white/20"
        priority
      />
    </div>
  )
}
