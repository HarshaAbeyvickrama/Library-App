import React from "react";
import {Col, Row} from "react-bootstrap";
import FormTitle from "../Common/FormTitle";
import InputField from "../Common/InputField";
import CreateButton from "../Common/CreateButton";

const AuthorForm: React.FC<any> = () => {
    return (
        <Row className="px-0 my-4 mx-0">
            <Col xs={12} lg={9} className="px-0">
                <FormTitle name={"Author"}/>
                <InputField title={"Name of Author"}/>
                <CreateButton title={"Create"}/>
            </Col>
        </Row>
    );
}

export default AuthorForm;