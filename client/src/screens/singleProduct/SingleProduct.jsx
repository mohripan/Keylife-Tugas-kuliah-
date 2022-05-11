import React, {useEffect} from "react";
import { Rating, Navbar, Loading} from "../../components";
import {Footer} from "../../containers";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/LoadingError/Error";
import "./singleProduct.scss";
import { listProductDetails } from "../../redux/actions/ProductActions.js";

const SingleProduct = ({ match }) => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
      dispatch(listProductDetails(id));
    }, [dispatch, id]);

    const AddToCartHandle = (e) => {
      e.preventDefault();
      navigate(`/cart/${id}`);
    }

  return (
    <>
      <Navbar />
      <div className="container single-product">
        {
          loading ? (
            <Loading />
          ) : error ? (
            <Message variant ="alert-danger">{error}</Message>
          ) :
          (
            <>
              <div className="row">
          <div className="col-md-4">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="product-dtl">
              <div className="product-info">
                <div style={{lineHeight: '1.5'}} className="product-name">{product.name}</div>
              </div>
              <p style={{color: 'white'}}>{product.description}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6 style={{color: 'white'}}>Price</h6>
                  <span style={{color: 'white'}}>RP. {product.price}</span>
                </div>
                
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6 style={{color: 'white'}}>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                <button onClick={AddToCartHandle} className="round-black-btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3" style={{color: 'white'}}>REVIEWS</h6>
            <Message variant={"alert-info mt-3"}>No Reviews</Message>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin Doe</strong>
              <Rating />
              <span>Jan 12 2021</span>
              <div className="alert alert-info mt-3">

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6 style={{color: 'white'}}>WRITE A CUSTOMER REVIEW</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong style={{color: 'white'}}>Rating</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="my-4">
                <strong style={{color: 'white'}}>Comment</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="my-3">
              <Message variant={"alert-warning"}>
                Please{" "}
                <Link to="/login">
                  " <strong>Login</strong> "
                </Link>{" "}
                to write a review{" "}
              </Message>
            </div>
          </div>
        </div>
            </>
          )
        }
        
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;