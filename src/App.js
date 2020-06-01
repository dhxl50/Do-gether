import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavBar from "./NavBar.js";
import TodoCard from "./TodoCard.js";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container style={{ paddingTop: "4rem" }}>
        <Row xs="2" sm="2" md="4">
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
          <Col>
            <TodoCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;