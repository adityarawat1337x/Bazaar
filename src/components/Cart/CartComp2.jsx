import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/actions/cart";

const CartItems = styled.div`
  width: 100%;
  max-width: 400px;
  /* height: auto; */
  display: flex;
  flex-direction: column;
  /* margin: auto; */
  > h1 {
    align-self: center;
    margin-bottom: 30px;
  }
`;
const CartItem = styled.div`
  margin: 20px;
  /* border: 1px solid black; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  height: 400px;
  display: flex;
  margin-bottom: 30px;
  @media (min-width: 500px) {
    flex-direction: column;
    height: 100%;
  }
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
  @media (min-width: 500px) {
    flex-direction: column;
    h1 {
      align-self: center;
    }
  }
`;
const Functions = styled.div`
  display: flex;
  width: 400px;
  /* height: 500px; */
  align-items: center;
  justify-content: center;
  @media (min-width: 500px) {
    margin-top: 100px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
`;
const Price = styled.h1`
  display: flex;
  width: 200px;
  /* height: 500px; */
  align-items: center;
  justify-content: center;
  @media (min-width: 500px) {
    align-self: center;
  }
`;

const CartComp = () => {
  const c = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("c");
  return (
    <>
      <CartItems>
        <h1>Your Cart</h1>
        {c.length === 0 && <div> No Items are added</div>}
        {c.map((item, index) => (
          <CartItem key={index}>
            <Card>
              <img src={item.assets[0].url} alt="" />
              <h1>{item.name}</h1>
            </Card>
            <Functions>
              <Button
                onClick={() => {
                  dispatch(decrement(item.id, item.quantity));
                }}
              >
                -
              </Button>

              <h1> {item.quantity}</h1>

              <Button
                onClick={() => {
                  dispatch(increment(item.id));
                }}
              >
                +
              </Button>
            </Functions>
            <Price>₹ {item.quantity * item.price.raw}</Price>
          </CartItem>
        ))}
      </CartItems>
    </>
  );
};

export default CartComp;
