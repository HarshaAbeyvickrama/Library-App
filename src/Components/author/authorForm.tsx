import React from 'react';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import './author.scss';
import { XCircle } from "react-feather";

function AuthorForm() {
    return(
        <React.Fragment>
            <u className='line'><h4 className ='create-author'>Create Author</h4></u>
            <Form className="author-form">
            <Form.Group className="mb-3" controlId="authorName">
              <Form.Label className="author-label ms-5 mt-4">Name of Author</Form.Label>
              <div className="col-md-11 col-sm-10 col-10">
                <Form.Control type="text" className="rounded-0 ms-md-5 ms-sm-0 ms-xs-0" />
              </div>
            </Form.Group>
            <Button className="btn-create float-end" variant="primary" type="submit">
              Create
            </Button>
            </Form>
        </React.Fragment>
    )
} 

export default AuthorForm;
