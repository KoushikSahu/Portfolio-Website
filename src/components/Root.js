import React from 'react'
import TopBar from './TopBar'
import Intro from './Intro.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Root() {
    return (
        <Router>
            <div>
                <TopBar />
                <Switch>
                    <Route path="/Portfolio-Website/home" exact component={Intro} />
                </Switch>
            </div>
        </Router>
    )
}

export default Root
