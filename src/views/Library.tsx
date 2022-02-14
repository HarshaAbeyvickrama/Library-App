import React from "react";
import Welcome from "../components/Welcome/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../components/Common/SectionTitle";
import Divider from "../components/Common/Divider";
import EmptyList from "../components/Common/EmptyList";
import AddItem from "../components/Common/AddItem";

const Library :React.FC = () => {
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome />
                </Col>
                <Col md={{order:1 , span:6}} xs={{order:2 , span:12}} className="bor ps-md-5 ps-3">
                    <div>Books</div>
                </Col>
                <Col md={{order:2 , span:6}} xs={{order:1 , span:12}} className="bor ps-md-5 ps-3">
                    <SectionTitle title={"Authors"}/>
                    <Divider />
                    <EmptyList sectionTitle={"Author"} />
                    <AddItem title={"book"} />
                </Col>
            </Row>
        </Container>
    )
}

export default Library;
