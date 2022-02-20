import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import FormTitle from "../Common/FormTitle";
import InputField from "../Common/InputField";
import CreateButton from "../Common/CreateButton";

interface AuthorFormProps {
    onFormClose: (form: boolean) => void
}

const AuthorForm: React.FC<AuthorFormProps> = ({onFormClose}) => {
    return (
        <Row className="px-0 mt-4 mb-2 mx-0">
            <Form className="ps-0">
                <Col xs={12} lg={9} className="px-0">
                    <FormTitle name={"Author"} onFormClose={onFormClose}/>
                    <InputField title={"Name of Author"}/>
                    <CreateButton title={"Create"}/>
                </Col>
            </Form>
        </Row>
    );
}

export default AuthorForm;
