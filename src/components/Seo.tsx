type SeoProps = {
  title: string
  description?: string
  image?: string
}

export function Seo({ title, description, image }: SeoProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description || title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || title} />
      {image && <meta property="og:image" content={image} />}
    </>
  )
}
