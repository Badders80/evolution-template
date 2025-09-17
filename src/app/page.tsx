
import { ResponsiveGrid } from '@/components/ui/ResponsiveGrid'
import { Seo } from '@/components/Seo'

export default function HomePage() {
  return (
    <>
      <Seo title="Evolution Template" />
      <main className="p-8">
        <ResponsiveGrid
          heading="Features"
          items={[
            { title: 'Motion Ready', description: 'Framer Motion baked in' },
            { title: 'Responsive Grid', description: 'Auto layout shifting' },
            { title: 'Tailwind Optimized', description: 'With design tokens' },
            { title: 'Future-Proof', description: 'Zustand, SEO, etc. optional' },
          ]}
        />
      </main>
    </>
  )
}
