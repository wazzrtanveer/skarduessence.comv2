import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes/index.js';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['settings', 'homePage', 'aboutPage']);

export default defineConfig({
  name: 'default',
  title: 'Skardu Essence',

  projectId: '8qohnu41',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings')
              .id('settings')
              .child(S.document().schemaType('settings').documentId('settings')),
            
            S.divider(),

            // Singleton: Home Page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),

            // Singleton: About Page
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

            S.divider(),

            // Regular document: Products
            S.documentTypeListItem('product').title('Products'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
