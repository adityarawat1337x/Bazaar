import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"
import * as seviceWorkerRegistration from "./serviceWorkerRegistration"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

seviceWorkerRegistration.register()
