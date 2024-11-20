import React from 'react'

import './App.css'

import Bulma from './frameworks/Bulma.js'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="headerStyle">
              <h1 className="is-size-1">ReactATX CSS Frameworks Sample</h1>

                    <BrowserRouter>
                    <span className="headerBar"> | </span>
                    <Link to="/index">
                            <li className="menuItem">Home</li>
                        </Link>
                        <span className="headerBar"> | </span>

                        <Link to="/Bulma">
                            <li className="menuItem">Bulma</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        
                        <Routes>
                            <Route path="/index" element={<index />} />
                        </Routes>

                        <Routes>
                            <Route path="/Bulma" element={<Bulma />} />
                        </Routes>

                    </BrowserRouter>
                </header>
                <hr />
            </div>
        )
    }
}

export default App

