/**
 * lib/wordpress.ts
 * WordPress REST API integration for Mistras headless setup.
 * ALL WordPress data fetching happens here. Never fetch WP API directly in components.
 *
 * WordPress CMS URL: https://cms.mistras.lt
 * Required WP plugins: WPGraphQL, Advanced Custom Fields (ACF), WPGraphQL for ACF
 */

const WP_API = process.env.WP_API_URL ?? 'https://cms.mistras.lt/wp-json/wp/v2'
const WP_GRAPHQL = process.env.WP_GRAPHQL_URL ?? 'https://cms.mistras.lt/graphql'

// ─── TypeScript interfaces ────────────────────────────────────────────────────

export interface PortfolioItem {
  id: number
  slug: string
  title: string
  location: string        // e.g. "Žvėrynas"
  projectType: string     // e.g. "Ąžuolo parketas"
  service: string         // e.g. "Parketo šlifavimas + Lakavimas"
  year: string
  beforeImageUrl: string
  afterImageUrl: string
  beforeImageAlt: string
  afterImageAlt: string
  category: 'parquet' | 'terrace' | 'commercial' | 'stairs' | 'oiling'
}

export interface Testimonial {
  id: number
  reviewerName: string
  reviewerCity: string
  reviewText: string
  rating: 1 | 2 | 3 | 4 | 5
  date: string
}

export interface ServicePage {
  id: number
  slug: string
  title: string
  content: string
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSubheadline: string
  features: Array<{ icon: string; title: string; desc: string }>
}

export interface LeadFormPayload {
  name: string
  phone: string
  email?: string
  city?: string
  area?: number
  condition?: string
  service?: string
  photoUrl?: string
  source?: string  // which page the form was submitted from
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export async function getPortfolioItems(category?: string): Promise<PortfolioItem[]> {
  try {
    const params = new URLSearchParams({ per_page: '20', _embed: '1' })
    if (category && category !== 'all') params.set('portfolio_category', category)

    const res = await fetch(`${WP_API}/portfolio?${params}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error(`WP portfolio fetch failed: ${res.status}`)
    const raw = await res.json()

    return (raw as Record<string, unknown>[]).map((item): PortfolioItem => {
      const acf = (item.acf ?? {}) as Record<string, unknown>
      return {
        id: item.id as number,
        slug: item.slug as string,
        title: (item.title as { rendered: string }).rendered,
        location: (acf.project_location as string) ?? '',
        projectType: (acf.project_type as string) ?? '',
        service: (acf.service_performed as string) ?? '',
        year: (acf.project_year as string) ?? '',
        beforeImageUrl: (acf.before_image as { url: string })?.url ?? '/img/placeholder-before.jpg',
        afterImageUrl: (acf.after_image as { url: string })?.url ?? '/img/placeholder-after.jpg',
        beforeImageAlt: `Prieš – ${acf.project_location ?? ''}`,
        afterImageAlt: `Po – ${acf.project_location ?? ''}`,
        category: (acf.category as PortfolioItem['category']) ?? 'parquet',
      }
    })
  } catch (err) {
    console.error('[wordpress] getPortfolioItems error:', err)
    return []
  }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${WP_API}/testimonials?per_page=12&_embed=1`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error(`WP testimonials fetch failed: ${res.status}`)
    const raw = await res.json()

    return (raw as Record<string, unknown>[]).map((item): Testimonial => {
      const acf = (item.acf ?? {}) as Record<string, unknown>
      return {
        id: item.id as number,
        reviewerName: (acf.reviewer_name as string) ?? 'Klientas',
        reviewerCity: (acf.reviewer_city as string) ?? 'Vilnius',
        reviewText: (acf.review_text as string) ?? '',
        rating: ((acf.rating as number) ?? 5) as Testimonial['rating'],
        date: (acf.review_date as string) ?? '',
      }
    })
  } catch (err) {
    console.error('[wordpress] getTestimonials error:', err)
    return []
  }
}

// ─── Service pages ────────────────────────────────────────────────────────────

export async function getServicePage(slug: string): Promise<ServicePage | null> {
  try {
    const res = await fetch(`${WP_API}/pages?slug=${slug}&_embed=1`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) throw new Error(`WP page fetch failed: ${res.status}`)
    const raw = await res.json()
    if (!(raw as unknown[]).length) return null

    const page = (raw as Record<string, unknown>[])[0]
    const acf = (page.acf ?? {}) as Record<string, unknown>
    const yoast = (page.yoast_head_json ?? {}) as Record<string, unknown>

    return {
      id: page.id as number,
      slug: page.slug as string,
      title: (page.title as { rendered: string }).rendered,
      content: (page.content as { rendered: string }).rendered,
      metaTitle: (yoast.title as string) ?? '',
      metaDescription: (yoast.description as string) ?? '',
      heroHeadline: (acf.hero_headline as string) ?? '',
      heroSubheadline: (acf.hero_subheadline as string) ?? '',
      features: (acf.features as ServicePage['features']) ?? [],
    }
  } catch (err) {
    console.error(`[wordpress] getServicePage(${slug}) error:`, err)
    return null
  }
}

// ─── Lead form submission ─────────────────────────────────────────────────────

export async function submitLeadForm(data: LeadFormPayload): Promise<{ ok: boolean; message: string }> {
  try {
    // Using Contact Form 7 REST API
    // Install plugin: Contact Form 7 + CF7 to API (or custom endpoint below)
    const formData = new FormData()
    formData.append('your-name', data.name)
    formData.append('your-phone', data.phone)
    formData.append('your-email', data.email ?? '')
    formData.append('your-city', data.city ?? '')
    formData.append('floor-area', String(data.area ?? ''))
    formData.append('floor-condition', data.condition ?? '')
    formData.append('service-type', data.service ?? '')
    formData.append('page-source', data.source ?? '')
    formData.append('_wpcf7', process.env.CF7_FORM_ID ?? '1')

    const res = await fetch(
      `${WP_API.replace('/wp/v2', '')}/contact-form-7/v1/contact-forms/${process.env.CF7_FORM_ID ?? '1'}/feedback`,
      { method: 'POST', body: formData }
    )
    const json = await res.json() as { status: string; message: string }

    return {
      ok: json.status === 'mail_sent',
      message: json.status === 'mail_sent'
        ? 'Ačiū! Susisieksime per 24 val. 🎉'
        : 'Nepavyko išsiųsti. Bandykite skambinti: +370 604 10608',
    }
  } catch (err) {
    console.error('[wordpress] submitLeadForm error:', err)
    return { ok: false, message: 'Klaida. Skambinkite: +370 604 10608' }
  }
}

// ─── GraphQL (advanced queries) ───────────────────────────────────────────────

export async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T | null> {
  try {
    const res = await fetch(WP_GRAPHQL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    })
    const json = await res.json() as { data?: T; errors?: unknown[] }
    if (json.errors) {
      console.error('[wordpress] GraphQL errors:', json.errors)
      return null
    }
    return json.data ?? null
  } catch (err) {
    console.error('[wordpress] gql error:', err)
    return null
  }
}
