import React from 'react';
import Author from './author';
import AuthorForm from './authorForm';
import { Col, Container, Row } from "react-bootstrap";
import './author.scss';
import { Plus } from "react-feather";

const AuthorList: React.FC = () => {
    return (
      <Container>
        <Row>
          <Col xs={10} className="py-0">
            <Author index={"1."} name={"Author 1 name"} />
            <Author index={"2."} name={"Author 2 name"} />
            <Author index={"3."} name={"Author 3 name"} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="px-1 pt-2">
            <Plus className="plus" />
            Add Author
          </Col>
        </Row>
        <Row>
          <Col xs={9} className="mt-lg-5 mt-xs-3">
            <AuthorForm />
          </Col>
        </Row>
      </Container>
    );
  };
  export default AuthorList;
