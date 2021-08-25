import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrement, increment } from "../../redux/actions/cart";

const CartItems = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  > h1 {
    align-self: center;
    margin-bottom: 30px;
  }
`;
const CartItem = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Item = styled.div`
  width: 400px;
  padding: 1px;
  > img {
    height: auto;
    width: 100%;
    object-fit: cover;
    margin-bottom: 1px;
  }
  > div {
    font-size: 24px;
    font-weight: 700;
  }
`;
const Functions = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  align-items: center;
  justify-content: center;
`;
const Price = styled.h1`
  display: flex;
  width: 200px;
  height: 500px;
  align-items: center;
  justify-content: center;
`;
const Increase = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 0 1px;
  cursor: pointer;
`;
const Decrease = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 1px;
  cursor: pointer;
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
            <div key={index} className="card">
              <Item>
                <img src={item.assets[0].url} alt="image" />
              </Item>
              <div className="card-back">
                <h1>{item.name}</h1>
              </div>
            </div>
            <Functions>
              <Increase
                onClick={() => {
                  dispatch(increment(item.id));
                }}
              >
                +
              </Increase>
              <h1>{item.quantity}</h1>
              <Decrease
                onClick={() => {
                  dispatch(decrement(item.id, item.quantity));
                }}
              >
                -
              </Decrease>
            </Functions>
            <Price>₹ {item.quantity * item.price.raw}</Price>
          </CartItem>
        ))}
      </CartItems>
    </>
  );
};

export default CartComp;
