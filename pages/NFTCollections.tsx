import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

interface Props {
  collections: Collection[]
}

const NFTCollections = ({ collections }: Props) => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl flex-col py-20 px-10 2xl:px-0">
       <main className='bg-slate-100 p-10 shadow-xl shadow-rose-400/20'>
         <div className='gri space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
           {collections.map(collection => (
             <Link href={`/collections/${collection.slug.current}`}>
              <div className='flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105'>
                <img 
                  className='h-96 w-60 rounded-2xl object-cover'
                  src={urlFor(collection.mainImage).url()} 
                  alt="" 
                />

                <div className='p-5'>
                  <h2 className='text-3xl'>{collection.title}</h2>
                  <p className='mt-2 text-sm text-gray-400'>
                    {collection.description}
                  </p>
                </div>
              </div>
             </Link>
           ))}
         </div>
       </main>
      </div>
    </div>
  )
}

export default NFTCollections

export const getServerSideProps: GetServerSideProps = async () => {
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
}