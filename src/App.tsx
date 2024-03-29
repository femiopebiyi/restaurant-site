import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import { UIContextProvider } from './context/UI-context'
import Contact from './pages/Contact/Contact'
import Orders from './pages/Orders/Orders'
import { OrderContextProvider } from './context/order-context'
import OrderCheckout from './pages/Orders/OrderCheckout'
import About from './pages/About/About'
import StripeContainer from './components/StripeContainer'

function App() {


  return (
    <div className='App'>
      <OrderContextProvider>
      <UIContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='payment' element = {<StripeContainer/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='orders'>
            <Route index element={<Orders/>}/>
            <Route path='ordercheckout' element={<OrderCheckout/>}/>
          </Route>
          <Route path='about' element = {<About/>}/>
        </Routes>
      </Router>
      </UIContextProvider>
      </OrderContextProvider>
    </div>
  )
}

export default App
