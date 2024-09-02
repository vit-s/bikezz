import { createClient } from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId:  'u2mdql76',
  dataset:    'production',
  apiVersion: '2024-01-08',
  useCdn:     true,
})

const imgBuilder = imageUrlBuilder(client)

export function urlFor(source) {
  return imgBuilder.image(source)
}