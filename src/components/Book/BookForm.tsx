import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import FormTitle from "../Common/FormTitle";
import InputField from "../Common/InputField";
import CreateButton from "../Common/CreateButton";
import {IBook} from "../../types/IBook";

interface BookFormProps {
    onFormClose: (form: boolean) => void,
    options: IBook[]
}

const BookForm: React.FC<BookFormProps> = ({onFormClose, options}) => {
    return (
        <Row className="px-0 my-4 my-md-4 mx-0">
            <Form>
                <Col xs={12} lg={9} className="px-0">
                    <FormTitle name={"Book"} onFormClose={onFormClose}/>
                    <InputField title={"Title of the Book"}/>
                    <InputField title={"ISBN"}/>
                    <CreateButton title={"Create"}/>
                </Col>
            </Form>
        </Row>
    );
}

export default BookForm;
