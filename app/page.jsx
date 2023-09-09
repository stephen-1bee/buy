import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-200 flex-col text-black">
      {/* Rendering Navbar */}
      <Navbar/>
      {/* Rendering our Products */}
      <ProductList/>
    </main>
  )
}
