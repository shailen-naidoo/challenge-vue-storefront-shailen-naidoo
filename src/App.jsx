import { Link, Route, Routes } from "react-router-dom"
import Index from './pages/Index'
import CartIndex from './pages/cart/Index'
import { useProductStore } from "./stores/products"

function App() {
  const { products } = useProductStore()

  function totalNumberOfProductsInCart() {
    return products.filter((product) => product.quantity > 0).length
  }

  return (
    <>
      <nav className="bg-gray-800">
        <section className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="font-bold text-white text-2xl">DVT React Storefront</Link>
          <ul className="hidden md:flex space-x-4 text-white">
            <li>
              <Link to="/cart">View Cart ({totalNumberOfProductsInCart()})</Link>
            </li>
          </ul>
        </section>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<CartIndex />} />
      </Routes>
    </>
  )
}

export default App