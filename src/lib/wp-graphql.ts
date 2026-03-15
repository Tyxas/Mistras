/**
 * Utility for fetching data from the WordPress GraphQL API
 */

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchAPI(query: string, { variables }: { variables?: Record<string, unknown> } = {}) {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL environment variable is missing.');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Refreshes page automatically every 1 minute
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch from WordPress API');
  }
  return json.data;
}

export async function getHomepageData() {
  const data = await fetchAPI(`
    query HomepageQuery($id: ID!) {
      page(id: $id, idType: URI) {
        heroSection {
          heroEyebrow
          heroHeadline
          heroHeadlineAccent
          heroSubheadline
          heroCtaPrimary
          heroCtaSecondary
        }
      }
    }
  `, { variables: { id: "home" } });

  return data?.page?.heroSection;
}

export async function getPortfolioItems() {
  const data = await fetchAPI(`
    query PortfolioQuery {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          content
          categories {
            nodes {
              name
            }
          }
          portfolioDetails {
            location
            area
            duration
            projectType
            beforeImage {
              node {
                sourceUrl
              }
            }
            afterImage {
              node {
                sourceUrl
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return data?.posts?.nodes?.map((post: {
    id: string;
    title: string;
    content?: string;
    categories?: { nodes: { name: string }[] };
    portfolioDetails?: {
      projectType?: string;
      area?: string;
      duration?: string;
      location?: string;
      beforeImage?: { node: { sourceUrl: string } };
      afterImage?: { node: { sourceUrl: string } };
    };
    featuredImage?: { node: { sourceUrl: string } };
  }) => ({
    id: post.id,
    title: post.title,
    description: post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 160) + (post.content.length > 160 ? '...' : '') : '',
    categories: post.categories?.nodes?.map(c => c.name) || ['Projektai'],
    type: post.portfolioDetails?.projectType || 'Grindų šlifavimas',
    area: post.portfolioDetails?.area || '',
    duration: post.portfolioDetails?.duration || '',
    location: post.portfolioDetails?.location || '',
    image: post.featuredImage?.node?.sourceUrl || post.portfolioDetails?.afterImage?.node?.sourceUrl || '/images/portfolio/portfolio-zverynas.png',
    beforeImage: post.portfolioDetails?.beforeImage?.node?.sourceUrl || '',
    afterImage: post.portfolioDetails?.afterImage?.node?.sourceUrl || '',
  }));
}

export async function getAboutPageData() {
  const data = await fetchAPI(`
    query AboutPageQuery {
      page(id: "apie-mus", idType: URI) {
        aboutPageData {
          aboutHeroEyebrow
          aboutHeroHeadline
          aboutHeroHeadlineAccent
          aboutHeroSubheadline
          aboutIntroTitle
          aboutIntroText
          aboutIntroImage {
            node {
              sourceUrl
            }
          }
          aboutServicesTitle
          aboutServicesList
          aboutHistoryTag
          aboutHistoryHeadline
          aboutHistoryImage {
            node {
              sourceUrl
            }
          }
          aboutHistoryP1
          aboutHistoryP2
          aboutHistoryP3
          aboutWorksTag
          aboutWorksHeadline
          aboutWorksText
          aboutWorksClosing
        }
      }
    }
  `);

  return data?.page?.aboutPageData;
}
