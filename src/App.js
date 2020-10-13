import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home'
import CVpage from './Pages/CV'
import 'bootstrap/dist/css/bootstrap.min.css'
import history from './Utils/History.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path={'/'}component={Home}/>
          <Route exact path={'/CV'}component={CVpage}/>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App