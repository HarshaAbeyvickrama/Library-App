import React from 'react';
import {Edit, Plus, Trash2} from "react-feather";
import {Col, Row} from "react-bootstrap";

interface ListItemProps {
    name: String,
    number: number
}
const AddItem :React.FC<ListItemProps> = ({name , number} ) => {
    return(
        <Row className="list-item d-flex">
            <Col className="align-items-center ">
                <span className="">{number}. {name}</span>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
                <Edit className="d-inline-block pe-sm-1 edit-icon me-2"/>
                <Trash2 className="d-inline-block pe-sm-1 delete-icon"/>
            </Col>
        </Row>
    );
}
export default AddItem;
