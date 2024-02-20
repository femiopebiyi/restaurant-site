import { NavLink } from "react-router-dom";
import logo from "../assets/images/femilogosmall.png";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { MenuIcon, XIcon } from "lucide-react";
import { useContext} from "react";
import { UIContext } from "../context/UI-context";



const Navbar = () => {

    const {hamState, handleClick} = useContext(UIContext)

  return (
    <header className="big-header">
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <nav className="nav big">
                <ul>
                    <li><NavLink to=''>Home</NavLink></li>
                    <li><a href='#order'>Orders</a></li>
                    <li><NavLink to=''>Menu</NavLink></li>
                    <li><NavLink to=''>About</NavLink></li>
                    <li><NavLink to='contact'>Contact</NavLink></li>
                    <li><a href='#reservation'>Reservation</a></li>
                </ul>
            </nav>

            <div className="icons big-icons">
                <FacebookLogo size={24}/>
                <TwitterLogo size={24} />
                <InstagramLogo size={24}/>
            </div>
        </div>
        <MenuIcon className="ham-menu"onClick={handleClick}/>
        <SmallNav hamState={hamState} handleClick = {handleClick}/>
    </header>
  )
}

export default Navbar

type HamProps ={
    hamState: boolean;
    handleClick: ()=> void
}

function SmallNav({hamState, handleClick}: HamProps){


return <header id="ham-con" style={{
    transform: hamState ? "translateY(0px)" : "translateY(-900px)"
}}>
        <div className="navbar ham-nav">

            <nav className="nav ham">
                <ul>
                    <li className="hov"><NavLink to=''  onClick={handleClick}>Home</NavLink></li>
                    <li className="hov"><a href='#order'  onClick={handleClick}>Orders</a></li>
                    <li className="hov"><NavLink to=''  onClick={handleClick}>Menu</NavLink></li>
                    <li className="hov"><NavLink to=''  onClick={handleClick}>About</NavLink></li>
                    <li className="hov"><NavLink to='contact'  onClick={handleClick}>Contact</NavLink></li>
                    <li className="hov"><a href='#reservation'  onClick={handleClick}>Reservation</a></li>
                </ul>
            </nav>

            <div className="icons ham-icon">
                <FacebookLogo size={24}/>
                <TwitterLogo size={24} />
                <InstagramLogo size={24}/>
            </div>
        </div>
         <XIcon className="cancel" onClick={handleClick}/>
    </header>
}