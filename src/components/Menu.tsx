import { menuItems } from "../menuItem"
import LazyLoad from "react-lazy-load"

const Menu = () => {


  return (
    <div className="menu-con" id="order">
        <div className="menu">
            {menuItems.map((item)=>{
                return <div className="indiItem">
                    <div className="img">
                        <LazyLoad height={300}>
                        <img src={item.pictureUrl} alt="" className="menu-img" loading="lazy"/>
                        </LazyLoad>
                    </div>
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                </div>
            })}
        </div>

        <div className="button"><button className="order">Order Now</button></div>
    </div>
  )
}

export default Menu
