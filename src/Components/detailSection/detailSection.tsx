import AuthorSection from "../author/authorSection";
import BookSection from "../books/bookSection";
import { Col, Container, Row } from "react-bootstrap";
import './detailSection.scss';

function DetailSection() {
  return (
      <Container className="detail-section px-5" fluid={true} >
        <Row className="px-xxl-10">
          <Col className="pe-5" lg={6}><BookSection/></Col>
          <Col className="ps-5" lg={6}><AuthorSection/></Col>
        </Row>
      </Container>  
  );
}

export default DetailSection;
