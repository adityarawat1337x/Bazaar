import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/actions/cart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const c = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
                        dispatch(increment(item.id));
                      }}
                    >
                      +
                    </Button>
                    <h1> {item.quantity}</h1>
                    <Button
                      onClick={() => {
                        dispatch(decrement(item.id, item.quantity));
                      }}
                    >
                      -
                    </Button>
                  </Functions>
                  <Price>$ {item.quantity * item.price.raw}</Price>
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
                <h3>Applied discount</h3>
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
  );
};
const CartGrid = styled.div`
  margin: auto;
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const Span = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

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
`;

const Checkout = styled.div`
  width: auto;
  height: 90vh;
  min-width: 30vw;
  margin: auto;
  box-shadow: rgba(71, 71, 75, 0.25) 0px 30px 60px -20px,
    rgba(58, 58, 58, 0.3) 0px 30px 60px -30px;
  padding: 40px;
  @media only screen and (max-width: 600px) {
    position: fixed;
    bottom: 0;
  }
`;

const CartItems = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow-y: scroll;
`;
const CartItem = styled.div`
  margin: 20px;
  box-shadow: rgba(71, 71, 75, 0.25) 0px 30px 60px -20px,
    rgba(58, 58, 58, 0.3) 0px 30px 60px -30px;
  min-height: 400px;
  max-width: 50vw;
  display: flex;
  margin-bottom: 30px;
`;
const Functions = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  /* height: 500px; */
  align-items: center;
  justify-content: center;
`;
const Price = styled.h1`
  display: flex;
  width: 200px;
  /* height: 500px; */
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  font-size: 1.4em;
`;

const Card = styled.div`
  display: flex;
  padding: 30px;
  height: 300px;
  > h1 {
    font-size: 25px;
    border-bottom: 1px #fff solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-right: 30px;
  }
`;

export default CartPage;
