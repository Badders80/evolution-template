import { ImageContainer } from '@/components/layout/ImageContainer'
import { ContentContainer } from '@/components/layout/ContentContainer'

export default function HomePage() {
  return (
    <>
      <ImageContainer
        src="/images/Horse-Double-Black.png"
        alt="Two black horses"
        ratio="square"
      />

      <ContentContainer ratio="photo" padding="sm" className="bg-black">
        <h2 className="text-white text-3xl font-medium font-majorHeading">Own the Experience</h2>
      </ContentContainer>

      <ContentContainer ratio="wide" padding="sm" className="bg-black mt-8">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <h3 className="text-zinc-400 text-lg font-sans tracking-widest uppercase">OUR MISSION</h3>
          <h2 className="text-4xl font-majorHeading font-bold text-yellow-400">OWNERSHIP RE-IMAGINED</h2>
          <button className="mt-6 px-8 py-3 rounded-full bg-yellow-400 text-black font-bold text-lg shadow-lg hover:bg-yellow-300 transition-colors">
            JOIN THE EVOLUTION
          </button>
        </div>
      </ContentContainer>

      <ImageContainer
        src="/images/Background-hooves-back-and-white.jpg"
        alt="Horse hooves in motion, digital overlay"
        ratio="wide"
      />
    </>
  )
}
