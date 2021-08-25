import styled, { keyframes } from "styled-components";
import React from "react";

const rotation = keyframes`
from{
        transform:rotate(0deg)
    }
    to{
        transform: rotate(360deg);
    }

`;

const Wheel = styled.div`
  height: 40px;
  width: 40px;
  border: 3px solid #1d1d1d;
  border-radius: 100%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

const Cont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <Cont>
      <Wheel />
    </Cont>
  );
};

export default Spinner;
