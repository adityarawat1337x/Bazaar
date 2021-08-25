import * as React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                {/* <Link to={"/model/bazaar"}> */}
                  <ProgressiveImage
                    src={require('../images/spidy.jpeg').default}
                    placeholder={require('../images/spidy-compressed.jpg').default}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Bazaar'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                {/* </Link> */}
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Aditya Team</div>
              <div className='location'>
                <span>Devsnest</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;