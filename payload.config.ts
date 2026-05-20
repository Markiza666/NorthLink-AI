import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'

export default buildConfig({
    editor: lexicalEditor(),
    collections: [], // We will add our AI and Knowledge Base collections here later
    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({
        url: process.env.AZURE_COSMOSDB_CONNECTION_STRING || '', // Uses DATABASE_URI from your .env file
    }),
    sharp,
})
