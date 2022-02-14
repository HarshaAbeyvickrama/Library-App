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
import AuthorForm from "../components/Author/AuthorForm";
import AuthorSection from "../components/Author/AuthorSection";
import BookSection from "../components/Book/BookSection";

const Library: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome/>
                </Col>
                <Col lg={{order: 1, span: 6}} md={{order: 2, span: 12}} xs={{order: 2, span: 12}}
                     className="px-md-5 p-3">
                    <BookSection />
                </Col>
                <Col lg={{order: 2, span: 6}} md={{order: 1, span: 12}} xs={{order: 1, span: 12}}
                     className="px-md-5 p-3">
                    <AuthorSection />
                </Col>
            </Row>
        </Container>
    )
}

export default Library;
