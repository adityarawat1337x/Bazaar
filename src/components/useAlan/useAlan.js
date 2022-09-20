import { useCallback, useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import { useDispatch } from "react-redux"
import { addToCart, emptyCart } from "../../redux/actions/cart"
import { useHistory } from "react-router-dom"

export default function useAlan() {
  const [alan, setAlan] = useState(null)
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  let history = useHistory()
  console.log(history)

  const COMMANDS = {
    OPEN_CART: "open-cart",
    GO_BACK: "go-back",
    ADD_ITEM: "add-item",
    EMPTY_CART: "empty-cart",
  }

  const addItem = useCallback(
    (detail) => {
      let id = detail.detail.id
      dispatch(addToCart(products[id - 1]))
      console.log("Added: ", products[id - 1])
    },
    [alan, products, dispatch]
  )

  const openCart = useCallback(() => {
    history.push("/cart")
  }, [alan])

  const EmptyCart = useCallback(() => {
    dispatch(emptyCart())
  }, [alan, dispatch])

  const goBack = useCallback(() => {
    history.goBack()
  }, [alan])

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart)
    window.addEventListener(COMMANDS.GO_BACK, goBack)
    window.addEventListener(COMMANDS.ADD_ITEM, addItem)
    window.addEventListener(COMMANDS.EMPTY_CART, EmptyCart)
    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart)
      window.removeEventListener(COMMANDS.GO_BACK, goBack)
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem)
      window.removeEventListener(COMMANDS.EMPTY_CART, EmptyCart)
    }
  }, [openCart, products, goBack, addItem, EmptyCart])

  useEffect(() => {
    if (alan != null) return

    setAlan(
      alanBtn({
        key:
          "76eb2cce8e7ff867f79a569330b940f02e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }))
        },
      })
    )
  }, [products])

  return [products, setProducts]
}
