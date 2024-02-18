import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";



const Navbar = () => {
  return (
    <header>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <nav className="nav">
                <ul>
                    <li><NavLink to=''>Home</NavLink></li>
                    <li><a href='#order'>Orders</a></li>
                    <li><NavLink to=''>Menu</NavLink></li>
                    <li><NavLink to=''>About</NavLink></li>
                    <li><NavLink to=''>Contact</NavLink></li>
                    <li><a href='#reservation'>Reservation</a></li>
                </ul>
            </nav>

            <div className="icons">
                <FacebookLogo size={24}/>
                <TwitterLogo size={24} />
                <InstagramLogo size={24}/>
            </div>
        </div>
    </header>
  )
}

export default Navbar
