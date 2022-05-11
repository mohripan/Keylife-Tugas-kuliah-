import React, { useEffect } from "react";
import { Navbar } from "../../components";
import { Footer } from "../../containers";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./cartScreen.scss";
import { addToCart } from "../../redux/actions/CartActions";

const CartScreen = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {/* Cart */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-go-back mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>

            {
              cartItems.map((item) => (
                <div className="cart-iterm row">
              <div
                style={{ color: "white" }}
                className="remove-button d-flex justify-content-center align-items-center"
              >
                <i className="fas fa-times"></i>
              </div>
              <div className="keylife__cart-image col-md-4">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="cart-text col-md-5 d-flex align-items-center">
                <Link to={`/products/${item.product}`}>
                  <h4 style={{ color: "white" }}>
                    {item.name}
                  </h4>
                </Link>
              </div>
              <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start d-flex flex-column justify-content-center col-sm-7">
                <h6 style={{ color: "white" }}>SUBTOTAL</h6>
                <h4 style={{ color: "white" }}>RP. 456</h4>
              </div>
            </div>
              ))
            }

            <div style={{ color: "white" }} className="total">
              <span style={{ color: "white" }} className="sub">
                total:
              </span>
              <span style={{ color: "white" }} className="total-price">
                $567
              </span>
            </div>
            <hr />
            <div
              style={{ padding: "2rem 3rem 5rem 3rem" }}
              className="keylife__navbar-sign d-flex align-items-center row"
            >
              <Link to="/" className="col-md-6 ">
                <button>Continue To Shopping</button>
              </Link>
              <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <button>
                  <Link to="/shipping" className="text-white">
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartScreen;
