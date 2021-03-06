import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../component/Product";
import Message from "../component/Message";
import Loader from "../component/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  //Fragen : { loading, error, products }
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  

  if (products) {
    return <>
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </>
  } else
    return (
      <div></div>
    );
};

export default HomeScreen;
