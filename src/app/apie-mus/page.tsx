/**
 * /apie-mus/ — About page.
 * Synchronized with WordPress for dynamic content.
 */
import AboutClient from '@/components/about/AboutClient'
import { getAboutPageData } from '@/lib/wp-graphql'
import { aboutPage } from '@/lib/content'

export const revalidate = 60 // Caches data for 60 seconds

export default async function ApieMusPage() {
  const wpData = await getAboutPageData()

  // Map WordPress data to component structure with fallbacks to static content
  const mappedData = {
    hero: {
      eyebrow: wpData?.aboutHeroEyebrow || aboutPage.hero.eyebrow,
      headline: wpData?.aboutHeroHeadline || aboutPage.hero.headline,
      headlineAccent: wpData?.aboutHeroHeadlineAccent || aboutPage.hero.headlineAccent,
      subheadline: wpData?.aboutHeroSubheadline || aboutPage.hero.subheadline,
    },
    intro: {
      title: wpData?.aboutIntroTitle || aboutPage.intro.title,
      text: wpData?.aboutIntroText || aboutPage.intro.text,
      image: wpData?.aboutIntroImage?.node?.sourceUrl || "/images/about/floor-masterpiece.png",
    },
    services: {
      title: wpData?.aboutServicesTitle || aboutPage.services.title,
      items: wpData?.aboutServicesList 
        ? wpData.aboutServicesList.split('\n').filter((item: string) => item.trim() !== '') 
        : aboutPage.services.items,
    },
    history: {
      sectionTag: wpData?.aboutHistoryTag || aboutPage.history.sectionTag,
      headline: wpData?.aboutHistoryHeadline || aboutPage.history.headline,
      image: wpData?.aboutHistoryImage?.node?.sourceUrl || "/images/about/founders.png",
      p1: wpData?.aboutHistoryP1 || aboutPage.history.p1,
      p2: wpData?.aboutHistoryP2 || aboutPage.history.p2,
      p3: wpData?.aboutHistoryP3 || aboutPage.history.p3,
    },
    timeline: {
      sectionTag: wpData?.aboutTimelineTag || aboutPage.timeline.sectionTag,
      headline: wpData?.aboutTimelineHeadline || aboutPage.timeline.headline,
      milestones: aboutPage.timeline.milestones, // Milestones are static for now as requested
    },
    works: {
      sectionTag: wpData?.aboutWorksTag || aboutPage.works.sectionTag,
      headline: wpData?.aboutWorksHeadline || aboutPage.works.headline,
      text: wpData?.aboutWorksText || aboutPage.works.text,
      closing: wpData?.aboutWorksClosing || aboutPage.works.closing,
    },
  }

  return <AboutClient data={mappedData} />
}
