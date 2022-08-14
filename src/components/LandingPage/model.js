import React, { useEffect, useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import useWindowSize from "./useWindowSize"

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
}

const Model = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1])

  const [canScroll, setCanScroll] = useState(true)

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [canScroll])

  const windowSize = useWindowSize()

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="details"
            ></motion.div>
            <motion.div className="model">
              <motion.span variants={firstName}>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>Z</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>R</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Model
