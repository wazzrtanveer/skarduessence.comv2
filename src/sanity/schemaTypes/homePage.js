import { defineType, defineField } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'Pure Skardu',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
      initialValue: "Nature's Finest Essence",
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featuredSectionTitle',
      title: 'Featured Section Title',
      type: 'string',
      initialValue: 'Featured Treasures',
    }),
    defineField({
      name: 'featuredSectionDesc',
      title: 'Featured Section Description',
      type: 'text',
      initialValue: 'Hand-picked premium essentials from the heart of Skardu, curated for your wellbeing.',
    }),
    defineField({
      name: 'storySectionHeading',
      title: 'Story Section Heading',
      type: 'string',
      initialValue: 'Crafted by the Mountains',
    }),
    defineField({
      name: 'storySectionQuote',
      title: 'Story Section Quote',
      type: 'text',
      initialValue: '"In the heart of the Karakoram, where the air is pure and the water runs from glaciers, we find the true essence of life. Our mission is to share these ancient treasures with the world, preserving the heritage of Skardu and the purity of nature."',
    }),
  ],
});
