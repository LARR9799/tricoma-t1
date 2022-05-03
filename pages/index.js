import Main from '../components/Main'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home({ products }) {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <ProductFeed products={products} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { 
    props: {
      products,
    },
  };
}