import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import AuthorForm from "./authorForm";
import AuthorList from "./authorList";

function AuthorSection() {
    return(
        <React.Fragment>
            <h1>Authors</h1>
            <hr/>
            <Row>
                <Col><AuthorList/></Col>
            </Row>
        </React.Fragment>
    )
} 

export default AuthorSection;
