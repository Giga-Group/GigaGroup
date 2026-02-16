import React from "react";
import { Link } from "react-router-dom";


const Shop = ({ products, addToCartProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-shop-section">
        <div className="container">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="shop-grids clearfix">
                    {products.length > 0 &&
                        products.slice(0,12).map((product, pitem) => (
                          <div className="grid" key={pitem}>
                              <div className="img-holder">
                                  <img src={product.proImg} alt=""/>
                              </div>
                              <div className="details">
                                  <h3><Link onClick={ClickHandler} to={`/product-single/${product.id}`}>{product.title}</Link></h3>
                                    <span>${product.price}</span>
                                  <div className="add-to-cart">
                                       <button
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Add to Cart"
                                          onClick={() => addToCartProduct(product)}
                                        >
                                          Add to cart
                                        </button>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                    <div className="pagination-wrapper pagination-wrapper-center">
                        <ul className="pg-pagination">
                            <li>
                                <button type="button" aria-label="Previous" className="pg-pagination-link">
                                    <i className="ti-angle-left"></i>
                                </button>
                            </li>
                            <li className="active"><button type="button" className="pg-pagination-link">1</button></li>
                            <li><button type="button" className="pg-pagination-link">2</button></li>
                            <li><button type="button" className="pg-pagination-link">3</button></li>
                            <li>
                                <button type="button" aria-label="Next" className="pg-pagination-link">
                                    <i className="ti-angle-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  );
};

export default Shop;
