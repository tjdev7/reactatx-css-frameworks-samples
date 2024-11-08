// import './App.css';


// function App() {
//   return (
//     <div className="App">

//       <h1>ReactATX CSS Frameworks Sample</h1>
//       <p>
//         Choose from any of the options below to test out each Framework:
//       </p>
//       <p>
//         Home | Bulma | Tailwind.css | Bootstrap | Skeleton | Mui        
//       </p>

//     </div>
//   );
// }

// export default App;



import React from 'react'

import './App.css'

import Bootstrap from './frameworks/Bootstrap.js'
import Bulma from './frameworks/Bulma.js'
import Mui from './frameworks/Mui.js'
import Skeleton from './frameworks/Skeleton.js'
import Tailwind from './frameworks/Tailwind.js'


import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="headerStyle">
    <h1>ReactATX CSS Frameworks Sample</h1>
    <p>
      Choose from any of the options below to test out each Framework:
    </p>
                    <BrowserRouter>
                    <span className="headerBar"> | </span>
                    <Link to="/index">
                            <li className="menuItem">Home</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/Bootstrap">
                            <li className="menuItem">Bootstrap</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/Bulma">
                            <li className="menuItem">Bulma</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/Mui">
                            <li className="menuItem">Mui</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/Skeleton">
                            <li className="menuItem">Skeleton</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Link to="/Tailwind">
                            <li className="menuItem">Tailwind</li>
                        </Link>
                        <span className="headerBar"> | </span>
                        <Routes>
                            <Route path="/index" element={<index />} />
                        </Routes>
                        <Routes>
                            <Route path="/Bootstrap" element={<Bootstrap />} />
                        </Routes>

                        <Routes>
                            <Route path="/Bulma" element={<Bulma />} />
                        </Routes>

                        <Routes>
                            <Route path="/Mui" element={<Mui />} />
                        </Routes>

                        <Routes>
                            <Route path="/Skeleton" element={<Skeleton />} />
                        </Routes>

                        <Routes>
                            <Route path="/Tailwind" element={<Tailwind />} />
                        </Routes>

                    </BrowserRouter>
                </header>
                <hr />
            </div>
        )
    }
}

export default App

