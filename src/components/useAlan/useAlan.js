import { React, useCallback, useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import { useHistory } from "react-router-dom"

export default function useAlan() {
  let history = useHistory()
  const [alan, setAlan] = useState(null)
  const COMMANDS = { OPEN_CART: "open-cart", GO_BACK: "go-back" }

  useEffect(() => {
    if (!history) return
    console.log(history)
    const openCart = useCallback(() => {
      window.location.href = "/cart"
    }, [alan])

    const goBack = useCallback(() => {
      window.location.href = "/cart"
    }, [alan])

    useEffect(() => {
      if (history) {
        console.log(history)
      }
    }, [history])

    useEffect(() => {
      window.addEventListener(COMMANDS.OPEN_CART, openCart)
      window.addEventListener(COMMANDS.GO_BACK, goBack)
      return () => {
        window.removeEventListener(COMMANDS.OPEN_CART, openCart)
      }
    }, [openCart])

    useEffect(() => {
      if (alan != null) return

      setAlan(
        alanBtn({
          key:
            "76eb2cce8e7ff867f79a569330b940f02e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: ({ command }) => {
            window.dispatchEvent(new CustomEvent(command))
          },
        })
      )
    }, [])
  }, [history])
  return null
}
