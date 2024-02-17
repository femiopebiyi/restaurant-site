import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'

function App() {


  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
