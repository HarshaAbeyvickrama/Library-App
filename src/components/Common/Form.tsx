import React from "react";
import {Col, Row} from "react-bootstrap";
import FormTitle from "./FormTitle";
import InputField from "./InputField";
import CreateButton from "./CreateButton";

const Form: React.FC<any> = () => {
    return (
        <Row className="px-0 my-lg-4 my-md-4 mx-0">
            <Col xs={9} className="px-0">
                <FormTitle name={"Author"}/>
                <InputField title={"Name of Author"}/>
                <CreateButton title={"Create"}/>
            </Col>
        </Row>
    );
}

export default Form;
