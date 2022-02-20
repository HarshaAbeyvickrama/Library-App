import './welcome.scss';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";


function Welcome() {
    return ( 
        <React.Fragment>
            
            <Container className="hero px-0" fluid={true} >
                <Row>
                    <Col className="heading" > <p>My Library</p> </Col>
                </Row>
                
                <Row>
                    <Col>
                        <img className="img-hero" src='library.webp' alt='library wallpapper'/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="photo-credit">
                        <span> Photo by
                        <a target="_blank" rel="noreferrer"
                            href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Anna Hunko </a>
                        on
                        <a target="_blank" rel="noreferrer"
                            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash </a>
                        </span>
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </React.Fragment>
    );
  }
  
  export default Welcome;