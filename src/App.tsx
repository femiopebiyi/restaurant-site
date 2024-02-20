import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import { UIContextProvider } from './context/UI-context'
import Contact from './pages/Contact/Contact'

function App() {


  return (
    <div className='App'>
      <UIContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:contact' element={<Contact/>}/>
        </Routes>
      </Router>
      </UIContextProvider>
    </div>
  )
}

export default App
