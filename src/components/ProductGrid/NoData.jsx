import React from "react";
import styled from "styled-components";
import Spinner from "../../lib/Spinner";

const NoData = () => {
  return (
    <>
      <Cont>Out of Stock</Cont>
      <Spinner />
    </>
  );
};

const Cont = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 500;
`;
export default NoData;
