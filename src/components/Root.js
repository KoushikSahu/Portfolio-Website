import React from 'react'
import TopBar from './TopBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './Intro.js'

function Root() {
    return (
        <div>
            <TopBar />
            <Intro />
        </div>
    )
}

export default Root
