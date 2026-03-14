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
    next: { revalidate: 3600 }, // Refreshes page automatically every 1 hour
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
