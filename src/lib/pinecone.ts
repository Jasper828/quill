import { PineconeClient } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: 'asia-southeast1-gcp-free',
  })

  return client
}
// import { Pinecone } from '@pinecone-database/pinecone';

// export const getPineconeClient = async () => {
//   const pinecone = new Pinecone({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: 'gcp-starter', //check on app.pinecone.io
//   })
//   return pinecone;
// };
