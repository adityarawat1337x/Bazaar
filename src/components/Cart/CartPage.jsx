import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../../redux/actions/cart"
import { Link } from "react-router-dom"

const CartPage = () => {
  const c = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  if (c.length !== 0) {
    console.log(
      c.reduce((total, item1) => {
        console.log(item1.price.raw, item1.quantity)
        return (total += item1.price.raw * item1.quantity)
      }, 0)
    )
  }
  return (
    <>
      <h1
        style={{
          margin: "auto",
          marginTop: "100px",
          marginBottom: "30px",
          width: "100vw",
          textAlign: "center",
        }}
      >
        Your Bag
      </h1>
      <CartGrid>
        {c.length !== 0 && (
          <>
            <CartItems>
              {c.map((item, index) => (
                <CartItem key={index}>
                  <Card>
                    <img src={item.assets[0].url} alt="" />
                    <h1>{item.name}</h1>
                  </Card>
                  <Functions>
                    <Button
                      onClick={() => {
                        dispatch(increment(item.id))
                      }}
                    >
                      +
                    </Button>
                    <h1> {item.quantity}</h1>
                    <Button
                      onClick={() => {
                        dispatch(decrement(item.id, item.quantity))
                      }}
                    >
                      -
                    </Button>
                    <Price>$ {item.quantity * item.price.raw}</Price>
                  </Functions>
                </CartItem>
              ))}
            </CartItems>
            <Checkout>
              <Span>
                <h3>Total Price </h3>
                <h3>
                  ${" "}
                  {c.reduce((total, item1) => {
                    return (total += item1.price.raw * item1.quantity)
                  }, 0)}
                </h3>
              </Span>
              <Span>
                <h3>Applied discount</h3> <h3>20%</h3>
              </Span>
              <Span>
                <h3>Delivery Charges </h3>
                <h3>$ 5</h3>
              </Span>
              <Span>
                <h3>Final Price</h3>
                <h3>
                  ${" "}
                  {Math.round(
                    (c.reduce((total, item1) => {
                      return (total += item1.price.raw * item1.quantity)
                    }, 0.0) /
                      100) *
                      80 +
                      5
                  )}
                </h3>
              </Span>
              <Span style={{ justifyContent: "center", marginTop: "50px" }}>
                <Link to="/checkout">
                  <Button2>Checkout</Button2>
                </Link>
              </Span>
            </Checkout>
          </>
        )}
      </CartGrid>
    </>
  )
}

const CartGrid = styled.div`
  margin: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: top;
  @media (max-width: 658px) {
    flex-direction: column;
  }
`

const Span = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Button2 = styled.button`
  min-width: 50px;
  height: fit-content;
  width: fit-content;
  padding: 10px;
  background-color: #1a1a1a;
  font-size: 1.1em;
  font-weight: 500;
  border-radius: 5px;
  bottom: 0;
  cursor: pointer;
  color: white;
  text-decoration: none;
`

const Checkout = styled.div`
  min-width: 350px;
  margin: auto;
  box-shadow: 25px 25px 62px #bebebe, -25px -25px 62px #dfdfdf;
  padding: 40px;
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow-y: scroll;
  height: 90vh;
`

const CartItem = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-top: 2px solid #9d9d9d;
`

const Functions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Price = styled.h1`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  font-size: 1.4em;
`

const Card = styled.div`
  display: flex;
  margin: 30px;
  > h1 {
    font-size: 20px;
  }
  > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 30px;
  }
`

export default CartPage
