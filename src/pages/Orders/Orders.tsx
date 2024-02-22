import { menuItems } from "../../menuItem"
import SingleOrder from "./SingleOrder"




const Orders = () => {



return (
<div id="orders">
    This is the order page

    <div className="order-con" style={{border: "1px solid red"}}>
        {menuItems.map((item, key)=>{
            return <SingleOrder item = {item} key={key}/>
        })}
    </div>
</div>
)
}

export default Orders
