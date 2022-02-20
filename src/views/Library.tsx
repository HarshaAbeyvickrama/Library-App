import React, {useState} from "react";
import Welcome from "../components/Welcome/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import AuthorSection from "../components/Author/AuthorSection";
import BookSection from "../components/Book/BookSection";
import {IAuthor} from "../types/IAuthor";

const Library: React.FC = () => {
    const authorss: IAuthor[] = [
        {authorName: "Armando Lucas Correa"},
        {authorName: "Jess Kidd"},
        {authorName: "Martha John"},
        {authorName: "Martha McPhee"},
        {authorName: "Megan Miranda"},
    ];
    const [authors, setAuthors] = useState<IAuthor[] | null>(null);
    const handleSetAuthors = (newAuthors: IAuthor[]) => {
        setAuthors(newAuthors);
    }
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome/>
                </Col>
                <Col lg={{order: 1, span: 6}} md={{order: 2, span: 12}} xs={{order: 2, span: 12}}
                     className="px-md-5 p-3">
                    <BookSection/>
                </Col>
                <Col lg={{order: 2, span: 6}} md={{order: 1, span: 12}} xs={{order: 1, span: 12}}
                     className="px-md-5 p-3">
                    <AuthorSection authors={authors} handleSetAuthors={handleSetAuthors}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;
