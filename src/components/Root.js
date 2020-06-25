import React from 'react'
import TopBar from './TopBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './Intro.js'

function Root() {
    return (
        <Router>
            <div>
                <Switch>
                    <TopBar />
                    <Route path="/Portfolio-Website" exact component={Intro} />
                </Switch>
            </div>
        </Router>
    )
}

export default Root
