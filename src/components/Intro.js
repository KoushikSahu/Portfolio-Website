import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IntroLeftColumn from './IntroLeftColumn'
import IntroRightColumn from './IntroRightColumn'
import './intro-style.css'

function Intro() {
    return (
        <Container>
            <Row className="intro-row">
                <Col sm={12} md={4} className="align-self-center">
                    <IntroLeftColumn />
                </Col>
                <Col sm={12} md={8} className="align-self-center">
                    <IntroRightColumn />
                </Col>
            </Row>
        </Container>
    )
}

export default Intro
