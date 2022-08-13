import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import CartPage from "./components/Cart/CartPage"
import Landing from "./components/LandingPage/Landing"
import ProductGrid from "./components/ProductGrid/ProductGrid"
import OrderHistory from "./components/OrderHistory/OrderHistory"
import "./asdw.css"
import { motion, AnimatePresence } from "framer-motion"
import ProductPage from "./components/ProductPage/ProductPage"
import Checkout from "./components/Payment/Checkout"
import Temp from "./components/Cart/Temp"

const Routes = () => {
  let location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <Landing />
          </motion.div>
        </Route>
        <Route exact path="/cart">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <CartPage />
          </motion.div>
        </Route>
        <Route exact path="/history">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <OrderHistory />
          </motion.div>
        </Route>
        <Route exact path="/new">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <ProductGrid filters={["Type", "Type", "0 - 1000"]} />
          </motion.div>
        </Route>
        <Route path="/product/:productId" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <ProductPage />
          </motion.div>
        </Route>
        <Route path="/men" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <ProductGrid filters={["Type", "Men", "0 - 1000"]} />
          </motion.div>
        </Route>
        <Route path="/women" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <ProductGrid filters={["Type", "Women", "0 - 1000"]} />
          </motion.div>
        </Route>
        <Route path="/decor" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <ProductGrid filters={["Type", "Home Decor", "0 - 1000"]} />
          </motion.div>
        </Route>
        <Route path="/history" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <OrderHistory />
          </motion.div>
        </Route>
        <Route path="/cart" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <CartPage />
          </motion.div>
        </Route>
        <Route path="/checkout" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.2 }}
          >
            <Checkout />
          </motion.div>
        </Route>
        <Route>
          <Temp />
          {/* <div>404 NOT Found</div> */}
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default Routes
