import { Link, Route, Routes } from "react-router-dom"
import Index from './pages/Index'

function App() {
  return (
    <>
      <nav className="bg-gray-800">
        <section className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="font-bold text-white text-2xl">DVT Vue Storefront</Link>
          <ul className="hidden md:flex space-x-4 text-white">
            <li>
              <Link to="/cart">View Cart</Link>
            </li>
          </ul>
        </section>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  )
}

export default App