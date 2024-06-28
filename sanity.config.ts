import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { pageStructure, singletonPlugin } from './plugins/setttings'
import home from './schemaTypes/documents/singletons/home'
import footer from './schemaTypes/documents/singletons/footer'
import navigation from './schemaTypes/documents/singletons/navigation'

export default defineConfig({
  name: 'default',
  title: 'Charleston Pride ',

  projectId: 'jgra26o6',
  dataset: 'production',

  plugins: [structureTool({
    structure: pageStructure([home, navigation, footer,]),
  }), visionTool(), singletonPlugin([home.name, navigation.name, footer.name,]),],

  schema: {
    types: schemaTypes,
  },
})
