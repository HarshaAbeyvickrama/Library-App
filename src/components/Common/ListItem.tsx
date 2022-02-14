import React from 'react';
import {Edit, Trash2} from "react-feather";
import {Col, Row} from "react-bootstrap";

interface ListItemProps {
    name: String,
    number: number,
    onDeleteIconClicked : (deleteItem : boolean) => void
}

const ListItem: React.FC<ListItemProps> = ({name, number,onDeleteIconClicked}) => {

    return (
        <Row className="list-item d-flex mx-0">
            <Col className="align-items-center ps-0" xs={9}>
                <span className="">{number}. {name}</span>
            </Col>
            <Col className="d-flex justify-content-end align-items-center" xs={3}>
                <Edit className="d-inline-block pe-sm-1 edit-icon me-2"/>
                <Trash2 className="d-inline-block pe-sm-1 delete-icon" onClick={() => {
                    onDeleteIconClicked(true);
                }}/>
            </Col>
        </Row>

    );
}
export default ListItem;
