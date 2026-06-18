import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '8qohnu41',
  dataset: 'production',
  apiVersion: '2024-03-18', // use current date
  useCdn: false, // set to false for fresh data during builds
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
