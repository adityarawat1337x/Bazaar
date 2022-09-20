import Routes from "./Routes"
import React, { useEffect } from "react"
import { getProducts } from "./redux/actions/products"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, useHistory } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header/Header"
import useAlan from "./components/useAlan/useAlan"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useAlan()

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Header />
        <Routes />
      </Router>
    </AnimatePresence>
  )
}

export default App
