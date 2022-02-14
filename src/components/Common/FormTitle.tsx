import React from 'react';
import {XCircle} from "react-feather";
import {Col, Row} from "react-bootstrap";

interface FormTitleProps {
    name: String
}

const FormTitle: React.FC<FormTitleProps> = ({name}) => {
    return (
        <Row className="d-flex mx-0 form-title" >
            <Col className="align-items-center ps-0" xs={6}>
                <span className="">Create {name}</span>
            </Col>
            <Col className="d-flex justify-content-end align-items-center" xs={3}>
                <XCircle className="pe-sm-1 close-icon me-2"/>
            </Col>
        </Row>

    );
}
export default FormTitle;
