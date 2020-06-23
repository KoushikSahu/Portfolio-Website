import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import './leftcol-style.css'

function IntroLeftColumn() {
    const img_src = require('./images/IMG_20191003_001951_045.jpg')

    return (
        <span>
            <Row>
                <Col>
                    <Image src={img_src} alt="404: Not Found" className="shadow-lg my-img mt-3 mt-md-0" />
                </Col>
            </Row>
            <Row>
                <Col className="text-md-right pt-3 pr-4 name">Koushik Sahu</Col>
            </Row>
            <Row>
                <Col className="text-md-right branch-name pt-1 pr-1">Computer Science Undergraduate</Col>
            </Row>
            <Row>
                <Col className="text-md-right pt-2 pr-1 college-name">National Institute of Technology<br/>Rourkela</Col>
            </Row>
        </span>
    )
}

export default IntroLeftColumn
