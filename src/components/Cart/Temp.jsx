import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../../redux/actions/cart"
import { Link } from "react-router-dom"

const Temp = () => {
  // const c = useSelector((state) => state.cart)
  let c = [
    {
      name: "bandar",
      assets: [
        {
          url: "https://cdn.codechef.com/download/banner/1660219395.jpg",
        },
      ],
      price: {
        raw: 100,
      },
      quantity: 1,
    },
    {
      name: "dog",
      assets: [
        {
          url: "https://cdn.codechef.com/download/banner/1660219395.jpg",
        },
      ],
      price: {
        raw: 100,
      },
      quantity: 1,
    },
    {
      name: "cat",
      assets: [
        {
          url: "https://cdn.codechef.com/download/banner/1660219395.jpg",
        },
      ],
      price: {
        raw: 100,
      },
      quantity: 1,
    },
  ]
  const dispatch = useDispatch()
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
                  {c.reduce(
                    (item1, item2) =>
                      item1 &&
                      item1.price.raw * item1.quantity + item2 &&
                      item2.price.raw * item2.quantity,
                    0
                  )}
                </h3>
              </Span>
              <Span>
                <h3>Applied Discount </h3>
                <h3>20%</h3>
              </Span>
              <Span>
                <h3>Delivery Charges </h3>
                <h3>$ 5</h3>
              </Span>
              <Span>
                <h3>Final Price</h3>
                <h3>
                  ${" "}
                  {(c.reduce(
                    (item1, item2) =>
                      item1 &&
                      item1.price.raw * item1.quantity + item2 &&
                      item2.price.raw * item2.quantity,
                    0
                  ) /
                    100) *
                    80 +
                    5}
                </h3>
              </Span>
              <Span style={{ justifyContent: "center", marginTop: "100px" }}>
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
  min-width: 40vw;
  margin: auto;
  box-shadow: 25px 25px 62px #bebebe, -25px -25px 62px #dfdfdf;
  padding: 40px;
`

const CartItems = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow-y: scroll;
  height: 90vh;
`
const CartItem = styled.div`
  margin: 20px;
  box-shadow: 10px 10px 52px #bebebe, -10px -10px 52px #dfdfdf;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border: 2px solid black;
`
const Functions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
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
  border: 2px solid black;
  > h1 {
    font-size: 25px;
    border-bottom: 1px #fff solid;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 30px;
  }
`

export default Temp
