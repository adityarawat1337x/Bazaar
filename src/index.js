import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"
import * as seviceWorkerRegistration from "./serviceWorkerRegistration"
import { BrowserRouter as Router } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

ReactDOM.render(
  <Provider store={store}>
    <AnimatePresence exitBeforeEnter>
      <Router>
        <App />
      </Router>
    </AnimatePresence>
  </Provider>,
  document.getElementById("root")
)

seviceWorkerRegistration.register()
