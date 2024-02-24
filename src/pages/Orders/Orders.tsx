import { menuItems } from "../../menuItem"
import SingleOrder from "./SingleOrder"




const Orders = () => {



return (
<div id="orders">
    <div className="order-con">
        {menuItems.map((item, key)=>{
            return <SingleOrder item = {item} key={key}/>
        })}
    </div>

    <button className="checkout">Checkout</button>
</div>
)
}

export default Orders
