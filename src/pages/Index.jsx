import { useEffect, useState } from 'react'
import { ProductService } from '../services/ProductService'
import { Fragment } from 'react'

// eslint-disable-next-line react/prop-types
function ProductCard(product, index, { updateProducts }) {
  return (
    <Fragment key={index}>
      <article className="card bg-white rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer">
        <img src={product.image} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-medium mt-4">{product.title}</h3>
        <h4 className="text-lg font-medium mt-4">{product.category}</h4>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <span className="font-bold text-green-500">R{product.price}</span>
        <select value={product.quantity} className="ml-4" name="Product Quantity" onChange={(e) => updateProducts(e, index)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </article>
    </Fragment>
  )
}

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ProductService.fetchListOfProducts()
      .then(setProducts)
      .catch((err) => window.alert(err))
  }, [])

  function updateProducts(e, index) {
    const cloneOfProducts = [...products]

    cloneOfProducts[index].quantity = parseInt(e.target.value)

    setProducts(cloneOfProducts)
  }

  return (
    <>
      <main className="container mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((products, index) => ProductCard(products, index, { updateProducts }))}
        </section>
      </main>
    </>
  )
}

export default App
