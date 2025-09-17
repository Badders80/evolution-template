'use client'

import ImageContainer from './ImageContainer'
import ContentContainer from './ContentContainer'
import Section from './Section'

type SectionBlock = {
  id: string
  type: 'image' | 'content'
  props: any
}

interface PageBuilderProps {
  sections: SectionBlock[]
}

export default function PageBuilder({ sections }: PageBuilderProps) {
  return (
    <main>
      {sections.map((section) => {
        switch (section.type) {
          case 'image':
            return (
              <Section key={section.id} variant="full">
                <ImageContainer {...section.props} />
              </Section>
            )
          case 'content':
            return (
              <Section key={section.id} variant="default">
                <ContentContainer>
                  {section.props.children}
                </ContentContainer>
              </Section>
            )
          default:
            return null
        }
      })}
    </main>
  )
}
