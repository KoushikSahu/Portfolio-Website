import React from 'react'
import TopBar from './TopBar'
import Intro from './Intro.js'
import Contact from './Contact.js'
import { HashRouter as Router, Route } from 'react-router-dom'

function Root() {
    return (
        <Router basename="/">
            <div>
                <TopBar />
                <Route path="/" exact component={Intro} />
                <Route path="/contact/" component={Contact} />
            </div>
        </Router>
    )
}

export default Root
