import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './rightcol-style.css'
import { CSSTransitionGroup } from 'react-transition-group'

function IntroRightColumn() {
    return (
        <Container className="mt-3 mt-md-0">
            <CSSTransitionGroup transitionName="slide-left-fadein" transitionAppear={true} transitionAppearTimeout={3000}>
                <Row className="ml-md-2">
                    <blockquote className="blockquote quote">
                        <p>When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if   the solution is not beautiful, I know it is wrong.</p>
                        <footer className="blockquote-footer"><cite title="source name">Freeman Dyson</cite></footer>
                    </blockquote>
                </Row>
            </CSSTransitionGroup>
        </Container>
    )
}

export default IntroRightColumn
