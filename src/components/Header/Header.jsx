import React from "react"
import styled from "styled-components"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { Link } from "react-router-dom"
import CartModal from "./CartModal"
import favicon from "../../favicon.svg"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import Badge from "@material-ui/core/Badge"
import IconButton from "@material-ui/core/IconButton"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

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
  const cartItems = useSelector((state) => state.cart)
  console.log(cartItems)

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
                style={{
                  color: "unset",
                  textDecoration: "none",
                }}
                to="/decor"
              >
                Decor
              </Link>
            </Category>
            <Category>
              <Link
                style={{
                  color: "unset",
                  textDecoration: "none",
                }}
                to="/cart"
              >
                <IconButton
                  style={{
                    marginTop: "-10px",
                    color: "unset",
                    textDecoration: "none",
                  }}
                  aria-label="cart"
                >
                  <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
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
  color: #fff;
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
  flex-direction: column;
  width: 100%;
  height: 150px;
  background-image: linear-gradient(#000000a6, transparent);
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    background-color: #1a1a1a;
    color: white;
    top: -10px;
    height: 120px;
  }
`

const List = styled.ul`
  padding: 0;
  display: flex;
  transition: 0.6;
  color: inherit;
`

const Title = styled.h1`
  margin-top: 40px;
  transition: 0.6;
`

const Category = styled.li`
  padding: 0;
  list-style: none;
  transition: 0.6;
  font-size: 1.2em;
  margin: 10px;
  margin-top: -20px;
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
