import { menuItems } from "../menuItem"

const Menu = () => {


  return (
    <div className="menu-con" id="order">
        <h2 style={{
            textAlign: "center",
            marginBottom: ".7em"
        }}>Our Menu Include</h2>
        <div className="menu">
            {menuItems.map((item)=>{
                return <div className="indiItem">
                    <div className="img">
                        <img src={item.pictureUrl} alt="" className="menu-img"/>
                       
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
