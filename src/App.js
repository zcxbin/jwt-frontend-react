import './App.scss'
import Login from './components/Login/login'
import Nav from './components/Navigation/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App () {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Switch>
          <Route path='/about'>about</Route>
          <Route path='/news'>news</Route>
          <Route path='/contact'>contact</Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/' exact>
            Home
          </Route>
          <Route path='*'>404 Not Found</Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
