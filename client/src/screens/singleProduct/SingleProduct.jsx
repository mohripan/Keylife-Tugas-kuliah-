import React, {useState, useEffect} from "react";
import Axios from "axios";
import Header from "../../components/navbar/Navbar";
import Rating from "../../components/rating/Rating";
import {Footer} from "../../containers";
import { Link, useParams } from "react-router-dom";
import Message from "../../components/LoadingError/Error";
import "./singleProduct.scss";

const SingleProduct = ({ match }) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
      const fetchProduct = async() => {
        const {data} = await Axios.get(`/api/products/${id}`);
        setProduct(data);
      };
      fetchProduct();
    }, [match]);

  return (
    <>
      <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-4">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p style={{color: 'white'}}>{product.description}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6 style={{color: 'white'}}>Price</h6>
                  <span style={{color: 'white'}}>${product.price}</span>
                </div>
                
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6 style={{color: 'white'}}>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`Rp. {product.numReviews} reviews`}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* RATING */}
        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3" style={{color: 'white'}}>REVIEWS</h6>
            <Message variant={"alert-info mt-3"}>No Reviews</Message>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin Doe</strong>
              <Rating />
              <span>Jan 12 2021</span>
              <div className="alert alert-info mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
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
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;