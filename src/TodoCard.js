import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
function TodoCard(props) {
  return (
    <>
        <Card body style={{ marginBottom: "1rem" }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional helod.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
    </>
  );
}

export default TodoCard;
