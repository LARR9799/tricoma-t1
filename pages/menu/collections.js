import React from 'react'
import { sanityClient, urlFOR } from 'next-sanity'

const collections = () => {
  return (
    <div>
      <h1 className='mb-10 text-4xl font-extralight'>
          The{' '}
          <span className='font-extrabold underline decoration-pink-600/75'>
            TRI-coma
          </span>{' '}
         NFT Market Place
       </h1>
    </div>
  )
}

export default collections

/* export async function getServerSideProps(context) {
  const query = `*[_type == "collection"]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
      asset
    },
    previewImage {
      asset
    },
    slug {
      current
    },
    creator-> {
      _id,
      name,
      address,
      slug {
        current
      },
    },
  }`

  const collections = await sanityClient.fetch(query)
  console.log(collections)

  return {
    props: {
      collections
    }
  }
} */