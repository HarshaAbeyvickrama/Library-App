import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";

type AuthorProps = {
  name: String;
  index: String;
};

const handleDeleteOnClick = () => {
  return ["danger"].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      Successfully Deleted
    </Alert>
  ));
};

const Author: React.FC<AuthorProps> = (props) => {
  const handleClick = () => {
    setShow(true);
  };

  const [show, setShow] = React.useState(false);
  return (
    <span className="author">
      <Row>
        <Col xs={8} md={8} className="pt-3">
          {props.index} {props.name}
        </Col>
        <Col xs={4} md={4} className="pt-3 ">
          <Trash2
            className="bin mx-1 float-end"
            onClick={() => {
              alert("Successfully Deleted");
            }}
          />
          <Edit className="edit mx-1 float-end" />
        </Col>
      </Row>
    </span>
  );
};

export default Author;
