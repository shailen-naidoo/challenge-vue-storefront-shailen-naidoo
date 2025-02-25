import { Fragment, useMemo } from "react"
import { useProductStore } from "../../stores/products"

function ProductCard({ product, index, removeProductFromCart }) {
  return (
    <Fragment key={index}>
      <article className="card bg-white rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer">
        <img src={product.image} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-medium mt-4">{product.title}</h3>
        <h4 className="text-lg font-medium mt-4">{product.category}</h4>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <span className="font-bold text-green-500">R{product.price}</span>
        <button type="button" className="inline-flex items-center px-2 py-2 ml-5 bg-red-500 text-white rounded-lg" onClick={() => removeProductFromCart(product)}>
          Remove
        </button>
        <select value={product.quantity} className="ml-4" name="Product Quantity" disabled>
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

function CartIndex() {
  const { products, setProducts }  = useProductStore()

  const totalProductsInCart = useMemo(() => products.filter((product) => product.quantity > 0), [products])

  const totalPriceOfCart = useMemo(() => (
    totalProductsInCart.reduce((previousValue, { price, quantity }) => (price * quantity) + previousValue, 0)
  ), [totalProductsInCart])

  function removeProductFromCart(product) {
    const productIndex = products.findIndex((p) => product === p)
    const cloneOfProducts = [...products]

    cloneOfProducts[productIndex].quantity = 0

    setProducts(cloneOfProducts)
  }

  return (
    <>
      <main className="container mx-auto">
        <p className="text-sm mb-2 ml-4 mt-4">Total price of cart: R{totalPriceOfCart}</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {totalProductsInCart.map((product, index) => <ProductCard key={index} {...{ product, index, removeProductFromCart}} />)}
        </section>
      </main>
    </>
  )
}

export default CartIndex