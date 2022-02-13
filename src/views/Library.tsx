import React from "react";
import Welcome from "../components/Welcome/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../components/Common/SectionTitle";
import Divider from "../components/Common/Divider";

const Library :React.FC = () => {
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome />
                </Col>
                <Col xs={6} className="bor ps-md-5">
                    <div>Books</div>
                </Col>
                <Col xs={6} className="bor ps-md-5">
                    <SectionTitle title={"Authors"}/>
                    <Divider />
                </Col>
            </Row>
        </Container>
    )
}

export default Library;
