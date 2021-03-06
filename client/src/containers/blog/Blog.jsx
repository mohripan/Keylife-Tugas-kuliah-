import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import { Pagination, Rating, Loading, Message } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../redux/actions/ProductActions";

const Blog = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className="keylife__blog section__padding" id="blog">
      <h1
        className="gradient__text"
        style={{ paddingBottom: "2rem", margin: "auto", textAlign: "center" }}
      >
        Most popular courses in Keylife.
      </h1>
      <div className="keylife__blog-container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5"><Loading /></div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>RP. {product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="keylife__blog-heading">
        <h1 className="gradient__text">
          Most popular courses in Keylife.
        </h1>
      </div>
      <div className="keylife__blog-container">
        <div className="keylife__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="229.000"
          />
        </div>
        <div className="keylife__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="109.000"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="98.000"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="203.000"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="172.000"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Blog;
