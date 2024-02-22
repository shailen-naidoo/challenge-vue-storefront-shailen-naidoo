import { useEffect, useState } from 'react'
import { ProductService } from '../services/ProductService'

// eslint-disable-next-line react/prop-types
function ProductCard({ image, title, category, description, price }) {
  return (
    <>
      <article className="card bg-white rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer">
        <img src={image} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-medium mt-4">{title}</h3>
        <h4 className="text-lg font-medium mt-4">{category}</h4>
        <p className="text-gray-500 text-sm mb-2">{description}</p>
        <span className="font-bold text-green-500">R{price}</span>
      </article>
    </>
  )
}

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ProductService.fetchListOfProducts().then(setProducts)
  }, [])

  return (
    <>
      <main className="container mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(ProductCard)}
        </section>
      </main>
    </>
  )
}

export default App
