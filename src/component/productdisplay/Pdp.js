import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Search from "../search/Search";

const Pdp = () => {

  const [data, setData] = useState([{}]);
  const [filter, setfilterData] = useState([{}]);

  const handleDataFromSearch = (searchData) =>{
    if(searchData === ''){
      setfilterData(data);
    }else{
      setfilterData(data.filter((item) => item.name.toLowerCase().includes(searchData)));
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data[0]);
        setfilterData(res.data.data[0]);
      })
      .catch((error) => {
        toast.error("No Data found !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  }, []);

  return (
    <div id="pdp-form-wrap">
      <div>
        <h1>PDP</h1>
      </div>
      <div>
    
              <Search sendDataToParent={handleDataFromSearch}/>
        
        
      </div>
     
      <Container className="p-4">
        <Row>
          {filter.map((product, index) => {
            return (
              <>
                <Col md={4}>
                  <Card>
                    <Link to={`/products/${product.id}`}>
                      <Card.Header>{product.name}</Card.Header>
                      <Card.Title>{product.description}</Card.Title>
                      <Card.Img src="https://media.istockphoto.com/photos/male-lion-resting-on-a-rock-picture-id1333977253?b=1&k=20&m=1333977253&s=170667a&w=0&h=q_EqYl_GqFCR1XmF_AK91YRFDapwAClOoc2fZbsnmr4="></Card.Img>
                      <Card.Body>
                        {product.price} / {product.discount}
                      </Card.Body>
                    </Link>
                    <Card.Footer>
                      <Button variant="info"  size="lg">Add to cart</Button>
                      <Button variant="warning"  size="lg" className="float-right">Buy Now</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Pdp;
