import React from 'react';
import {Plus} from "react-feather";
import {Col, Row} from "react-bootstrap";

interface SectionTitleProps {
    title: String,
    onAddItemClick: (author: boolean) => void
}

const AddItem: React.FC<SectionTitleProps> = ({title, onAddItemClick}) => {

    const onAddItemClicked = () => {
        onAddItemClick(true);
    }
    return (
        <Row className="mt-0 px-0">
            <Col className="d-inline-flex align-items-center add-item mb" onClick={onAddItemClicked}>
                <Plus className="add-icon d-inline-block pe-sm-1"/>
                <span className="add-item-text">Add {title}</span>
            </Col>
        </Row>
    );
}
export default AddItem;
