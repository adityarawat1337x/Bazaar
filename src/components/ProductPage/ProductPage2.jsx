import { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Spinner from "../../lib/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { addToCart } from "../../redux/actions/cart";
import { useParams } from "react-router-dom";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import PersonIcon from "@material-ui/icons/Person";

export default function ProductPage2() {
  const { productId } = useParams();
  // alert(productId);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  // alert(products);
  var [product, setProduct] = useState({});

  useEffect(() => {
    let found = false;
    products.forEach((prod) => {
      if (productId === prod.id) {
        setProduct({ ...prod });
        found = true;
      }
    });
    if (!found) {
      window.location = "/";
    }
  }, [products]);

  var sizes = ["S", "M", "L", "XL"];
  const [currSize, setCurrSize] = useState("M");
  const [cartCount, setCartCount] = useState(0);
  // onst [imgURL,setImgUrl] = useState('');
  console.log("product", product);

  return (
    <>
      {!product.id ? (
        <Spinner />
      ) : (
        <div className="mainContainer" style={{ marginTop: "125px" }}>
          {/* <div className="header">BAZAAR | AT DEV</div> */}
          <div className="productContainer">
            <div className="pData pVariants">
              {product.assets.map((asset) => (
                <div
                  className="productVar"
                  style={{
                    backgroundImage: `url(${asset.url})`,
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    document.querySelector(
                      ".productImg"
                    ).style.backgroundImage = e.target.style.backgroundImage;
                  }}
                ></div>
              ))}
            </div>
            <div className="pData pDetails">
              <h2 className="ProductTitle">{product.name}</h2>
              <hr />
              <span
                className="productDesciption"
                dangerouslySetInnerHTML={{ __html: product.description }}
              >
                {}
              </span>
              <div className="pDataMain">
                <div className="pDataC price">
                  <b>Price :</b> <br /> {product.price.formatted_with_code}
                </div>
                <div className="pDataC color">
                  <b>Color :</b> <br />
                  <div className="colorChoose red"></div>
                  <div className="colorChoose blue"></div>
                  <div className="colorChoose green"></div>
                </div>
                <div className="pDataC size">
                  <b>Size :</b>
                  <br />
                  {sizes.map((size) => (
                    <>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setCurrSize(size);
                        }}
                        className={`${size === currSize ? "pActive" : ""}`}
                      >
                        {size}
                      </span>{" "}
                    </>
                  ))}
                </div>
              </div>

              <div className="pDataMain cart-options">
                <div className="counter-cart">
                  <div
                    className="counter pDataC-btn"
                    onClick={() => {
                      if (cartCount <= 0) return;
                      setCartCount(cartCount - 1);
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid #1f1f1f",
                      borderBottom: "1px solid #1f1f1f",
                    }}
                    className="counter counter-val"
                  >
                    {cartCount}
                  </div>
                  <div
                    className="counter pDataC-btn"
                    onClick={() => {
                      setCartCount(cartCount + 1);
                    }}
                  >
                    +
                  </div>
                </div>
                <button className="pDataC-btn">Add To Cart</button>
              </div>
              <br />
              <hr />
              <br />
              <h4>REVIEWS</h4>
              {/* <br /> */}
              <div className="pReviews pStars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
              <br />
              <PersonIcon />
              <b>John Doe</b>
              <p>&nbsp;&nbsp; Don't know why these are too OP.</p>

              <br />
              <span>
                <PersonIcon />
                <b>Vijay Malya</b>
              </span>
              <p>
                &nbsp;&nbsp; This site is best.. I bought a 1000 rs note just at
                2000 rs
              </p>
            </div>
            <div className="pData pPhoto">
              <div
                className="productImg"
                style={{ background: `url(${product.assets[0].url}` }}
              ></div>
            </div>
          </div>

          <div class="pShare" title="Share">
            ⊕
          </div>
        </div>
      )}
    </>
  );
}
