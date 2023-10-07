import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'appleredesign',

  projectId: 'd91xl94g',
  dataset: 'appleredesign',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
