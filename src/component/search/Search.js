import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ sendDataToParent }) => {
    
  const handleSearch = (event) => {
    sendDataToParent(event.target.value);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            {/* <input type="text" name="search" onChange={handleSearch}/> */}
             <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
                onChange={handleSearch}
              />
              <Button className="rounded-pill" variant="outline-primary">
                Search
              </Button>
            </Form> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
