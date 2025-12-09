import { useEffect } from 'react'

interface MetaProps {
  title: string
  description?: string
  canonical?: string
  ogImage?: string
  jsonLd?: Record<string, any>
}

export const PageMeta: React.FC<MetaProps> = ({ title, description, canonical, ogImage, jsonLd }) => {
  useEffect(() => {
    document.title = title
    const setMeta = (attr: 'name' | 'property', key: string, content?: string) => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    if (description) setMeta('name', 'description', description)
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }
    if (ogImage) {
      setMeta('property', 'og:image', ogImage)
      setMeta('name', 'twitter:image', ogImage)
    }
    setMeta('property', 'og:title', title)
    if (description) setMeta('property', 'og:description', description)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    if (description) setMeta('name', 'twitter:description', description)

    const existingJsonLd = document.getElementById('page-jsonld')
    if (existingJsonLd) existingJsonLd.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-jsonld'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, canonical, ogImage, jsonLd])

  return null
}
