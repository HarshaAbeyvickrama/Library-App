import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./bookList";
import BookForm from "./bookForm";

function BookSection() {
    return(
        <React.Fragment>
            
            <h1>Books</h1>
            <hr/>
            <Row>
                <Col><BookList/></Col>
            </Row>
            <Row>
                <Col><BookForm/></Col>
            </Row>

        </React.Fragment>
    )
} 

export default BookSection;
