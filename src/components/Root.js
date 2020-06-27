import React from 'react'
import TopBar from './TopBar'
import Intro from './Intro.js'
import Contact from './Contact.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Root() {
    return (
        <Router>
            <div>
                <TopBar />
                <Switch>
                    <Route path="/Portfolio-Website/" exact component={Intro} />
                    <Route path="/Portfolio-Website/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    )
}

export default Root
