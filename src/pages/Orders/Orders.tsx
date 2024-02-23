import { menuItems } from "../../menuItem"
import SingleOrder from "./SingleOrder"




const Orders = () => {



return (
<div id="orders">
    This is the order page

    <div className="order-con">
        {menuItems.map((item, key)=>{
            return <SingleOrder item = {item} key={key}/>
        })}
    </div>
</div>
)
}

export default Orders
