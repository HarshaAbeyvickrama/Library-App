import React from "react";
import Welcome from "../components/Welcome/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../components/Common/SectionTitle";
import Divider from "../components/Common/Divider";
import EmptyList from "../components/Common/EmptyList";
import AddItem from "../components/Common/AddItem";
import ListItem from "../components/Common/ListItem";
import List from "../components/Common/List";
import FormTitle from "../components/Common/FormTitle";
import InputField from "../components/Common/InputField";
import CreateButton from "../components/Common/CreateButton";
import Form from "../components/Common/Form";
import AuthorSection from "../components/Common/AuthorSection";

const Library: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome/>
                </Col>
                <Col lg={{order: 1, span: 6}} md={{order: 2, span: 12}} xs={{order: 2, span: 12}}
                     className="bor ps-md-5 p-3">
                    <div>Books</div>
                </Col>
                <Col lg={{order: 2, span: 6}} md={{order: 1, span: 12}} xs={{order: 1, span: 12}}
                     className="bor px-md-5 p-3">
                    <AuthorSection />
                </Col>
            </Row>
        </Container>
    )
}

export default Library;
