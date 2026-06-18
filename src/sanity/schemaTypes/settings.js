import { defineType, defineField } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Skardu Essence',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Used for SEO and social sharing',
      initialValue: 'Premium nature-inspired products from Skardu.',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Description',
      type: 'text',
      initialValue: 'Bringing the pure essence of the Karakoram range to your doorstep. Sustainable, wild-crafted, and authentic.',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Skardu Essence. All rights reserved.',
    }),
    defineField({
      name: 'location',
      title: 'Location Text',
      type: 'string',
      initialValue: 'Handcrafted in Skardu, Pakistan.',
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform (e.g. Instagram)' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),
  ],
});
