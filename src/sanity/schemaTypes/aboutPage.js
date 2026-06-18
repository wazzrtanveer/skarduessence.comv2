import { defineType, defineField } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'quote',
      title: 'Intro Quote',
      type: 'text',
      initialValue: 'Skardu Essence was born from a deep respect for the traditions and natural bounty of Gilgit-Baltistan.',
    }),
    defineField({
      name: 'content',
      title: 'Story Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Value Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
  ],
});
