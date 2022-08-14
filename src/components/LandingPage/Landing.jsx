import React from "react"
import Model from "./model"
import styled from "styled-components"
import "./Landing.css"

function Landing() {
  return (
    <>
      <Model />;
      <Cont>
        <h1>Explore the Heritage</h1>
      </Cont>
    </>
  )
}

const Cont = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
  color: black;
  font-size: 2rem;
  transition: 0.6;
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`

export default Landing
