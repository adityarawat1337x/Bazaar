import Routes from "./Routes"
import React, { useEffect } from "react"
import { getProducts } from "./redux/actions/products"
import { useDispatch } from "react-redux"
import Header from "./components/Header/Header"
import useAlan from "./components/useAlan/useAlan"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const [products, setProducts] = useAlan()

  return (
    <>
      <Header />
      <Routes products={products} setProducts={setProducts} />
    </>
  )
}

export default App
