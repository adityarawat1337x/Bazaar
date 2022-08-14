import React from "react"
import Model from "./model"
import styled from "styled-components"
import "./Landing.css"

function Landing() {
  return (
    <>
      <Model />
      <Cont>
        <h1>Explore new trends</h1>
        <Flex>
          <Wrap>
            <Card>
              <img src="https://picsum.photos/200/300" />
              <h3>bangles</h3>
            </Card>
          </Wrap>
          <Wrap2>
            <Card2>
              <img src="https://picsum.photos/200/300" />
              <h3>Crafts</h3>
            </Card2>
          </Wrap2>
          <Wrap>
            <Card>
              <img src="https://picsum.photos/200/300" />
              <h3>Pots</h3>
            </Card>
          </Wrap>
        </Flex>
      </Cont>
    </>
  )
}

const Cont = styled.div`
  margin-top: -20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 2rem;
  transition: 0.6;
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
  img {
    width: 200px;
    height: 200px;
  }
`
const Flex = styled.div`
  display: flex;
  width: 90vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2rem;
  transition: 0.6;
  padding: 2px;
  @media only screen and (max-width: 600px) {
    font-size: 1em;
    flex-direction: column;
  }
`
const Wrap = styled.div`
  width: 80vw;
  display: flex;
  margin: 2px;
  justify-content: center;
  align-items: start;
  @media only screen and (max-width: 600px) {
    justify-content: start;
    align-items: center;
  }
`
const Wrap2 = styled(Wrap)`
  min-width: 300px;
  min-height: 300px;
  justify-content: center;
  align-items: end;
  @media only screen and (max-width: 600px) {
    justify-content: end;
    align-items: center;
  }
`
const Card = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    writing-mode: vertical-rl;
    flex-direction: column-reverse;
    text-orientation: upright;
    font-size: 1.3em;
    width: 350px;
  }
`
const Card2 = styled(Card)`
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export default Landing
