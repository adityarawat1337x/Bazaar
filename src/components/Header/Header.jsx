import React from "react"
import styled from "styled-components"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { Link } from "react-router-dom"
import CartModal from "./CartModal"
import favicon from "../../favicon.svg"
import { motion } from "framer-motion"

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Head appear={false} direction="down" in={!trigger}>
      {children}
    </Head>
  )
}

export default function Header(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <NavContainer
          as={motion.div}
          animate={{ marginTop: "-50px" }}
          whileHover={{
            backgroundColor: "#1a1a1a",
            color: "white",
            marginTop: "0px",
          }}
          transition={{ type: "tween", ease: "linear" }}
        >
          <Title>
            <Link style={{ color: "unset", textDecoration: "none" }} to="/">
              Bazaar
            </Link>
          </Title>
          <List>
            <Category>
              <Link style={{ color: "unset", textDecoration: "none" }} to="/">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={favicon}
                  alt=""
                />
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/men"
              >
                Men
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/women"
              >
                Women
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/decor"
              >
                Decor
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/cart"
              >
                Cart
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/history"
              >
                Order
              </Link>
            </Category>
          </List>
        </NavContainer>
      </HideOnScroll>
      <CategoryCart>
        <CartModal />
      </CategoryCart>
    </>
  )
}

const Head = styled(Slide)`
  position: absolute;
  color: #444444;
  top: 0;
  /* transition: 0.6;
  margin-top: -50px;

  :hover {
    background-color: #1a1a1a;
    color: white;
    margin-top: 0px;
  }
  */
`

const NavContainer = styled(motion.div)`
  z-index: 1000;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(#000000a6, transparent);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    background-color: #1a1a1a;
    color: white;
    height: 150px;
    top: -10px;
  }
`

const List = styled.ul`
  display: flex;
  transition: 0.6;
  flex-direction: row;
  color: inherit;
`

const Title = styled.h1`
  margin-top: 40px;
  transition: 0.6;
`

const Category = styled.li`
  list-style: none;
  transition: 0.6;
  font-size: 1.2em;
  margin: -20px 10px 30px 10px;
  text-decoration: none;
  color: inherit;
`

const CategoryCart = styled(Category)`
  position: fixed;
  transition: 0.6;
  bottom: -2em;
  right: 1em;
  z-index: 1000;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`
