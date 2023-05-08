import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas/schemas';

const config = defineConfig({
    projectId: '2lqovbd1',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-05-01',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;