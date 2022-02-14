import React from 'react';
import {XCircle} from "react-feather";
import {Col, Row} from "react-bootstrap";

interface InputFieldProps {
    title: String
}

const InputField: React.FC<InputFieldProps> = ({title}) => {
    return (
        <Col className="input-field my-2 ms-4">
            <span>{title}</span>
            <input className="form-control mt-1"  type="text" required={true}/>
        </Col>
    );
}
export default InputField;