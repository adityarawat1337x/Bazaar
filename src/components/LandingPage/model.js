import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "./useWindowSize";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
};

// const lastName = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.6,
//       staggerChildren: 0.04,
//       staggerDirection: 1,
//     },
//   },
// };

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
// const imageDetails = {
//   width: 524,
//   height: 650,
// };

const Model = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  const windowSize = useWindowSize();

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
            >
              <div className="location">
                <span>Aditya Team</span>
              </div>
              <div className="mua">Devsnest</div>
            </motion.div>
            <motion.div className="model">
              <motion.span className="first" variants={firstName}>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>Z</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>R</motion.span>
              </motion.span>
              {/* <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}></motion.span>
                <motion.span variants={letter}></motion.span>
              </motion.span> */}
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <motion.div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: 524,
                  height: 650,
                }}
                animate={{
                  y: "10%",
                  width: windowSize.innerWidth,
                  height: windowSize.innerHeight,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <motion.div
                  className="frame-single"
                  whileHover="hover"
                  transition={transition}
                >
                  <motion.img
                    // src={require("./images/spidey.jpeg").default}
                    src={
                      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    }
                    alt="an image"
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      // y: window.innerWidth > 1440 ? -100 : -600,
                      y: 1,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              A fresh apporoach to <br /> Shopping.
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
