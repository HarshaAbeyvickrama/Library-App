import React from 'react';
import {Col} from "react-bootstrap";

interface InputFieldProps {
    title: String,
    name: string
}

const InputField: React.FC<InputFieldProps> = ({title,name}) => {
    return (
        <Col className="input-field my-2 ms-lg-4">
            <span>{title}</span>
            <input className="form-control mt-1" type="text" required={true} name={name}/>
        </Col>
    );
}
export default InputField;
