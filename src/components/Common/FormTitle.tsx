import React from 'react';
import {XCircle} from "react-feather";
import {Col, Row} from "react-bootstrap";

interface FormTitleProps {
    name: String,
    onFormClose: (form: boolean) => void
}

const FormTitle: React.FC<FormTitleProps> = ({name, onFormClose}) => {

    const onCloseClicked = () => {
        onFormClose(false);
    }
    return (
        <Row className="d-flex mx-0 mb-4 form-title">
            <Col className="align-items-center ps-0" xs={9}>
                <span className="">Create {name}</span>
            </Col>
            <Col className="d-flex justify-content-end align-items-center px-0" xs={3}>
                <XCircle className="px-0 close-icon mx-0" onClick={onCloseClicked}/>
            </Col>
        </Row>

    );
}
export default FormTitle;
