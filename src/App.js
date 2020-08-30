import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import CV from './Pages/CV'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import history from './Utils/History.jsx'
import './style.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path={'/'}component={Home}/>
          <Route exact path={'/about-me'}component={AboutMe}/>
          <Route exact path={'/cv'}component={CV}/>
          <Route exact path={'/portfolio'}component={Portfolio}/>
          <Route exact path={'/contact'}component={Contact}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
